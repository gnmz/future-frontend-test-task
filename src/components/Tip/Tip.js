import React, { Component } from "react";

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
