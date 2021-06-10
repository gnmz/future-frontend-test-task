import React, { Component } from "react";
import FormInput from "./FormInput";

export class AddRow extends Component {
  state = {
    isOpen: false,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tipId: false,
    tipFirstname: false,
    tipLastname: false,
    tipEmail: false,
    tipPhone: false,
  };

  idHandler = (e) => {
    const value = e.target.value;
    if (typeof value !== "number") {
      this.setState({ id: value, tipId: true });
    }

    if (+value) {
      this.setState({ id: value, tipId: false });
    }
  };

  firstNameHandler = (e) => {
    const value = e.target.value;
    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    let match = value.match(regexp);
    if (match) {
      this.setState({ firstName: value, tipFirstname: false });
    }
    if (!match) {
      this.setState({ firstName: value, tipFirstname: true });
    }
  };

  lastNameHandler = (e) => {
    const value = e.target.value;
    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    let match = value.match(regexp);
    if (match) {
      this.setState({ lastName: value, tipLastname: false });
    }

    if (!match) {
      this.setState({ lastName: value, tipLastname: true });
    }
  };

  emailHandler = (e) => {
    const value = e.target.value;
    const regexp = new RegExp(/\S+@\S+\.\S+/);
    let match = value.match(regexp);
    if (match) {
      this.setState({ email: value, tipEmail: false });
    }
    if (!match) {
      this.setState({ email: value, tipEmail: true });
    }
  };

  phoneHandler = (e) => {
    const value = e.target.value;
    this.setState({ phone: value });
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  addNewRow = () => {
    const { id, firstName, lastName, email, phone } = this.state;
    const newRow = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    console.log(newRow);
  };

  render() {
    const {
      isOpen,
      id,
      firstName,
      lastName,
      email,
      phone,
      tipId,
      tipFirstname,
      tipLastname,
      tipEmail,
      tipPhone,
    } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: isOpen ? "space-between" : "flex-end",
        }}
      >
        {!isOpen ? null : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormInput
              inputType="text"
              placeholder="id"
              value={id}
              onChange={this.idHandler}
              tipTitle="Id должно быть числом"
              isTipped={tipId}
            />
            <FormInput
              inputType="text"
              placeholder="First name"
              value={firstName}
              onChange={this.firstNameHandler}
              tipTitle="Имя должно состоять из букв"
              isTipped={tipFirstname}
            />
            <FormInput
              inputType="text"
              placeholder="Last name"
              value={lastName}
              onChange={this.lastNameHandler}
              tipTitle="Фамилия должна состоять из букв"
              isTipped={tipLastname}
            />
            <FormInput
              inputType="email"
              placeholder="Email"
              value={email}
              onChange={this.emailHandler}
              tipTitle="index@site.com"
              isTipped={tipEmail}
            />
            <FormInput
              inputType="tel"
              placeholder="Phone"
              value={phone}
              onChange={this.phoneHandler}
              tipTitle="(000)000-0000"
              isTipped={tipPhone}
            />
          </div>
        )}
        {!isOpen ? (
          <button
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={this.openForm}
          >
            Добавить
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={this.addNewRow}
            disabled={
              this.state.tipId ||
              this.state.tipFirstname ||
              this.state.tipLastname
            }
          >
            Записать
          </button>
        )}
      </div>
    );
  }
}

export default AddRow;
