import React from "react";

function Input({ value, handleInput, label, placeholder }) {
  return (
    <div className="form-group" style={{ marginTop: 30 }}>
      <label style={{ float: "left" }} htmlFor={label}>
        {label}
      </label>
      <input
        name={label}
        id={label}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default Input;
