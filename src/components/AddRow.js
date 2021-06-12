import React, { Component } from "react";
import FormInput from "./FormInput";
import PhoneInputForm from "./PhoneInputForm";

export class AddRow extends Component {
  state = {
    isOpen: false,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idDirty: false,
    firstNameDirty: false,
    lastNameDirty: false,
    emailDirty: false,
    phoneDirty: false,
    idError: "Поле не может быть пустым",
    firstNameError: "Поле не может быть пустым",
    lastNameError: "Поле не может быть пустым",
    emailError: "Поле не может быть пустым",
    phoneError: "Поле не может быть пустым",
    formValid: false,
  };

  idHandler = (e) => {
    const value = e.target.value;

    this.setState({ id: value });
    if (!value) {
      this.setState({ id: value, idError: "Поле не может быть пустым" });
    } else {
      if (typeof value !== "number") {
        this.setState({ id: value, idError: "Некорректный формат" });
      }
      if (+value) {
        this.setState({ id: +value, idError: "" });
      }
    }
  };

  firstNameHandler = (e) => {
    const value = e.target.value;

    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    const match = value.match(regexp);

    this.setState({ firstName: value });
    if (!value) {
      this.setState({ firstNameError: "Поле не может быть пустым" });
    } else {
      if (match) {
        this.setState({ firstName: value, firstNameError: "" });
      }
      if (!match) {
        this.setState({
          firstName: value,
          firstNameError: "Некорректный формат",
        });
      }
    }
  };

  lastNameHandler = (e) => {
    const value = e.target.value;

    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    const match = value.match(regexp);

    this.setState({ lastName: value });
    if (!value) {
      this.setState({ lastNameError: "Поле не может быть пустым" });
    } else {
      if (match) {
        this.setState({ lastName: value, lastNameError: "" });
      }

      if (!match) {
        this.setState({
          lastName: value,
          lastNameError: "Некорректный формат",
        });
      }
    }
  };

  emailHandler = (e) => {
    const value = e.target.value;

    const regexp = new RegExp(/\S+@\S+\.\S+/);
    const match = value.match(regexp);

    this.setState({ email: value });

    if (!value) {
      this.setState({ emailError: "Поле не может быть пустым" });
    } else {
      if (match) {
        this.setState({ email: value, emailError: "" });
      }
      if (!match) {
        this.setState({ email: value, emailError: "Некорректный формат" });
      }
    }
  };

  phoneHandler = (e) => {
    const value = e.target.value;
    this.setState({ phone: value });

    if (!value) {
      this.setState({ phone: value, phoneError: "Поле не может быть пустым" });
    } else {
      if (value.length !== 13) {
        this.setState({ phone: value, phoneError: "Введено не полностью" });
      } else {
        this.setState({ phone: value, phoneError: "" });
      }
    }
  };

  onBlurHandler = (e) => {
    switch (e.target.name) {
      case "id":
        this.setState({ idDirty: true });
        break;
      case "firstName":
        this.setState({ firstNameDirty: true });
        break;
      case "lastName":
        this.setState({ lastNameDirty: true });
        break;
      case "email":
        this.setState({ emailDirty: true });
        break;
      case "phone":
        this.setState({ phoneDirty: true });
        break;
      default:
        return null;
    }
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
    const addNewRow = this.props.addNewRow;
    addNewRow(newRow);
    this.resetInputs();
    
  };

  resetInputs = () => {
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  render() {
    const {
      isOpen,
      id,
      firstName,
      lastName,
      email,
      phone,
      idDirty,
      firstNameDirty,
      lastNameDirty,
      emailDirty,
      phoneDirty,
      idError,
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
    } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: isOpen ? "space-between" : "flex-end",
          height: "80px",
        }}
      >
        {!isOpen ? null : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormInput
              name="id"
              inputType="text"
              placeholder="id"
              value={id}
              onChange={this.idHandler}
              errorTitle={idError}
              isDirty={idDirty}
              onBlurHandler={this.onBlurHandler}
            />
            <FormInput
              name="firstName"
              inputType="text"
              placeholder="First name"
              value={firstName}
              onChange={this.firstNameHandler}
              errorTitle={firstNameError}
              isDirty={firstNameDirty}
              onBlurHandler={this.onBlurHandler}
            />
            <FormInput
              name="lastName"
              inputType="text"
              placeholder="Last name"
              value={lastName}
              onChange={this.lastNameHandler}
              errorTitle={lastNameError}
              isDirty={lastNameDirty}
              onBlurHandler={this.onBlurHandler}
            />
            <FormInput
              name="email"
              inputType="email"
              placeholder="Email"
              value={email}
              onChange={this.emailHandler}
              errorTitle={emailError}
              isDirty={emailDirty}
              onBlurHandler={this.onBlurHandler}
            />
            <PhoneInputForm
              mask="(000)000-0000"
              placeholder="Phone"
              name="phone"
              size={13}
              value={phone}
              onChange={this.phoneHandler}
              onBlurHandler={this.onBlurHandler}
              errorTitle={phoneError}
              isDirty={phoneDirty}
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
              idError ||
              firstNameError ||
              lastNameError ||
              emailError ||
              phoneError
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
