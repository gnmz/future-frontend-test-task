import React, { Component } from "react";
import Tip from "./Tip";

export class FormInput extends Component {
  render() {
    const {
      inputType,
      placeholder,
      value,
      onChange,
      tipTitle,
      isTipped,
    } = this.props;
    return (
      <div className="form-input">
        <input
          type={inputType}
          placeholder={placeholder}
          className={
            isTipped && value.length !== 0
              ? "form-control border-danger"
              : "form-control"
          }
          value={value}
          onChange={onChange}
        />
        {isTipped && value.length !== 0 ? <Tip tipTitle={tipTitle} /> : null}
      </div>
    );
  }
}

export default FormInput;
