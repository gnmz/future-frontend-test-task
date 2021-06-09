import React, { Component } from "react";

export class TableSearch extends Component {
  state = {
    value: "",
  };

  //получаем значение из инпута

  inputHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  //отправка значения при нажатии на Enter

  onKeyDownHandler = (e) => {
    const onSearch = this.props.onSearch;
    const value = this.state.value;
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  render() {
    const { value } = this.state;
    const { onSearch } = this.props;
    return (
      <div className="input-group mb-2 mt-2">
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={this.inputHandler}
          onKeyDown={this.onKeyDownHandler}
        />
        <button
        className="btn btn-primary"
          onClick={() => {
            onSearch(value);
          }}
        >
          Найти
        </button>
      </div>
    );
  }
}

export default TableSearch;