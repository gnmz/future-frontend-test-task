import React, { Component } from "react";

import './ActionModeSelector.css'

export class ActionModeSelector extends Component {
  render() {
    const { fetchSmallData, fetchBigData } = this.props;
    return (
      <div className="action-mode-selector">
        <button className="btn btn-primary" onClick={fetchSmallData}>Small data</button>
        <button className="btn btn-primary" onClick={fetchBigData}>Big data</button>
      </div>
    );
  }
}

export default ActionModeSelector;
