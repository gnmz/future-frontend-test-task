import React, { Component } from "react";
import MaskInput from "react-maskinput/lib";
import Tip from "../Tip/Tip";

export class PhoneInputForm extends Component {
  render() {
    const {
      mask,
      placeholder,
      size,
      value,
      onChange,
      errorTitle,
      name,
      onBlurHandler,
      isDirty,
    } = this.props;
    return (
      <div className="form-input">
        <MaskInput
          name={name}
          className={
            errorTitle && isDirty
              ? "form-control border-danger"
              : "form-control"
          }
          mask={mask}
          placeholder={placeholder}
          size={size}
          value={value}
          onChange={onChange}
          onBlur={onBlurHandler}
        />
        {errorTitle && isDirty ? <Tip tipTitle={errorTitle} /> : null}
      </div>
    );
  }
}

export default PhoneInputForm;
