import React, { Component } from "react";
import MaskInput from "react-maskinput/lib";
import Tip from "./Tip";

export class PhoneInputForm extends Component {
  state = {
    isCheked: false
  }

  checkingLeaveInput = (e) => {
    if(e && this.props.value.length !== 13) {
      this.setState({isCheked: true})
    }else {
      this.setState({isCheked: false})
    }
  }

  render() {
    const { mask, placeholder, size, value, onChange, tipTitle } = this.props;
    return (
      <div className="form-input">
        <MaskInput className={this.state.isCheked
              ? "form-control border-danger"
              : "form-control"}  mask={mask} placeholder={placeholder} size={size} value={value} onChange={onChange} onBlur={this.checkingLeaveInput} />
        {this.state.isCheked && value.length !== 13 ? <Tip tipTitle={tipTitle} /> : null}
      </div>
    );
  }
}

export default PhoneInputForm;
