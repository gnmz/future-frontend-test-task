import React, { Component } from "react";

export class AddRow extends Component {
  state = {
    isOpen: false,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  idHandler = (e) => {
    const value = e.target.value;
    this.setState({ id: value });
  };

  firstNameHandler = (e) => {
    const value = e.target.value;
    this.setState({ firstName: value });
  };

  lastNameHandler = (e) => {
    const value = e.target.value;
    this.setState({ lastName: value });
  };

  emailHandler = (e) => {
    const value = e.target.value;
    this.setState({ email: value });
  };

  phoneHandler = (e) => {
    const value = e.target.value;
    this.setState({ phone: value });
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  addNewRow = () => {
      const {id, firstName, lastName, email, phone} = this.state;
      const newRow = {id: id, firstName: firstName, lastName: lastName, email: email, phone: phone}
      console.log(newRow)
  }

  render() {
    const { isOpen, id, firstName, lastName, email, phone } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: isOpen ? "space-between" : "flex-end",
          
        }}
      >
        {!isOpen ? null : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="text" placeholder="id" className="form-control" value={id} onChange={this.idHandler} />
            <input
              type="text"
              placeholder="First name"
              className="form-control"
              value={firstName}
              onChange={this.firstNameHandler}
            />
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
              value={lastName}
              onChange={this.lastNameHandler}
            />
            <input type="text" placeholder="Email" className="form-control" value={email} onChange={this.emailHandler} />
            <input type="text" placeholder="Phone" className="form-control" value={phone} onChange={this.phoneHandler} />
          </div>
        )}
        {!isOpen? 
        <button
          className="btn btn-primary"
          style={{ float: "right" }}
          onClick={this.openForm}
        >
          Добавить
        </button>
        :<button
        className="btn btn-primary"
        onClick={this.addNewRow}
      >
        Записать
      </button>}
      </div>
    );
  }
}

export default AddRow;
