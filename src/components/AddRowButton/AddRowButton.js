import React, { Component } from "react";

import './AddRowButton.css'

export class AddRowButton extends Component {
  render() {
    const { title, onClick, isFormOpen, disabled } = this.props;
    return (
      <button
        onClick={onClick}
        className="btn btn-primary add-row-btn"
        style={isFormOpen ? { float: "right" } : null}
        disabled={disabled}
      >
        {title}
      </button>
    );
  }
}

export default AddRowButton;
