import React, { Component } from "react";
import Tip from "./Tip";

export class FormInput extends Component {
  render() {
    const {
      inputType,
      placeholder,
      value,
      onChange,
      errorTitle,
      isDirty,
      name,
      onBlurHandler,
    } = this.props;
    return (
      <div className="form-input">
        <input
          type={inputType}
          placeholder={placeholder}
          className={
            isDirty && errorTitle
              ? "form-control border-danger"
              : "form-control"
          }
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlurHandler}
        />
        {(errorTitle && isDirty) && <Tip tipTitle={errorTitle} /> }
      </div>
    );
  }
}

export default FormInput;
