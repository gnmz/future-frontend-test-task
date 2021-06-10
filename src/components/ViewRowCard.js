import React, { Component } from "react";

export class ViewRowCard extends Component {
  state = {
    text: this.props.selectedRow.description,
  };
  shouldComponentUpdate(nextProps) {
    if (!nextProps.selectedRow.description) {
      this.setState({
        text: "",
      });
    }
    if (nextProps.selectedRow.description !== this.state.text) {
      this.setState({ text: nextProps.selectedRow.description });
      return true;
    }
    return false;
  }

  updateText = () => {
    this.setState({ text: this.props.selectedRow.description });
  };

  render() {
    const { firstName, lastName } = this.props.selectedRow;

    if (this.props.selectedRow.address === undefined) {
      return(<div>Some text</div>)
    } else {
      const { streetAddress, city, state, zip } =
        this.props.selectedRow.address;
      return (
        <div className="card p-3">
          <p>
            Выбран пользователь{" "}
            <b>
              {firstName} {lastName}
            </b>
          </p>
          <p>
            Описание: <br />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.text}
              onChange={this.updateText}
            />
          </p>
          <p>
            Адрес проживания: <b>{streetAddress ? streetAddress : null}</b>
          </p>
          <p>
            Город: <b>{city ? city : null}</b>
          </p>
          <p>
            Провинция/штат: <b>{state ? state : null}</b>
          </p>
          <p>
            Индекс: <b>{zip ? zip : null}</b>
          </p>
        </div>
      );
    }
  }
}

export default ViewRowCard;
