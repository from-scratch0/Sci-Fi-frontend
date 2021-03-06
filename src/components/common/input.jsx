import React from "react";

//将input转化为受控组件 渲染内容来源于props（父级组件的state） 发起事件获得用户输入
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}   
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
