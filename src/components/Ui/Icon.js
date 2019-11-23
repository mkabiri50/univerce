import React from "react";

const Like = props => {

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer", margin: 10, color:props.color}}
      className={props.classes}
      aria-hidden="true"
   
    />
  );
};

export default Like;