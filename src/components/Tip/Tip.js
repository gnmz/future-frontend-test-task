import React, { Component } from "react";

import './Tip.css'

export class Tip extends Component {
  render() {
    const { tipTitle } = this.props;
    return (
      <div className="tip">
        <p>{tipTitle}</p>
      </div>
    );
  }
}

export default Tip;
