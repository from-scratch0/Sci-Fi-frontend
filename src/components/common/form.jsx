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

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // console.log(result);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    // console.log(errors);
    return errors;

    /*
        const { data } = this.state;
        if (data.username.trim() === "")
          errors.username = "Username is required.";
        if (data.password.trim() === "")
          errors.password = "Password is required.";
    
        return Object.keys(errors).length === 0 ? null : errors;
        */
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); // null
    if (errors) return;

    this.doSubmit();
  };

  // Validation on Change
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    /*
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
      // ...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
      // ...
    }
    */
  };

  handleChange = ({ currentTarget: input }) => {
    // e
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; // e.currentTarget

    this.setState({ data, errors });
  };

  renderInput(name, label, type = "text") {
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
        {label}
      </button>
    );
  }
}

export default Form;
