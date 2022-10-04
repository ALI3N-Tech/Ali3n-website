import React from "react";

function Label(props) {
  const { htmlFor, required, text } = props;
  return (
    <div className="LabelLabel">
      <label htmlFor={htmlFor}>
        <span className="label-text">{text}</span>
        {required && <span className="label-text activated">*</span>}
      </label>
    </div>
  );
}

export default Label;
