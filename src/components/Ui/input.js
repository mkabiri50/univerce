import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} placeholder={`enter ${label}`} />
      {error && <div style={{color:'red', textAlign:'left'}}>{error}</div>}
    </div>
  );
};

export default Input;
