import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    options: [],
    errors: {},
  };

  // 对整个表单的验证
  validate = () => {
    const options = { abortEarly: false }; // 不要一有错误就提前终止
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 取消按钮本来的行为

    const errors = this.validate(); // 没有错误时会返回null
    this.setState({ errors: errors || {} }); // 避免被赋值为null
    if (errors) return;

    this.doSubmit(); // 表单提交行为
  };

  // Validation on Change 动态验证输入域
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => { // e.currentTarget
    
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; // e.currentTarget

    this.setState({ data, errors });
  };

  // 输入框
  renderInput(name, label, type = "text") { // type
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        type={type}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // 下拉菜单
  renderSelect(name, label, options) { 
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        options={options}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}> 
      {/* 验证失败时禁用 */}
        {label}
      </button>
    );
  }
}

export default Form;
