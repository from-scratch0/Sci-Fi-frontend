import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="form-control my-3"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      // 传入输入的字符
    />
  );
};

export default SearchBox;
