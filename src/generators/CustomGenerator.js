import BaseGenerator from "./BaseGenerator";
import PasswordGroup from "../components/passwordGroup";
import PasswordOptions from "../components/passwordOptions";
import React from "react";

class CustomGenerator extends BaseGenerator {
  title = "Custom password";
  description = "Make your own!";

  constructor(props) {
    super(props);
    const charSet =
      localStorage.getItem("CustomGeneratorCharSet") ||
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    const length = localStorage.getItem("CustomGeneratorLength") || 8;
    this.state = {
      charSet: charSet,
      length: parseInt(length, 10)
    };
    this.onCharSetChange = this.onCharSetChange.bind(this);
    this.onLengthChange = this.onLengthChange.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }
  saveToLocalStorage() {
    localStorage.setItem("CustomGeneratorCharSet", this.state.charSet);
    localStorage.setItem("CustomGeneratorLength", this.state.length);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.saveToLocalStorage);
    window.addEventListener("pagehide", this.saveToLocalStorage);
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
    window.removeEventListener("beforeunload", this.saveToLocalStorage);
    window.removeEventListener("pagehide", this.saveToLocalStorage);
  }

  onCharSetChange(charSet) {
    this.setState({ charSet: charSet });
  }
  onLengthChange(length) {
    this.setState({ length: length || 0 });
  }
  generate() {
    const { charSet, length } = this.state;
    return length
      ? new Array(length)
          .fill()
          .map(() => charSet[Math.floor(Math.random() * charSet.length)])
          .join("")
      : "";
  }
  render() {
    return (
      <PasswordGroup generator={this}>
        <PasswordOptions
          length={this.state.length}
          charSet={this.state.charSet}
          onCharSetChange={this.onCharSetChange}
          onLengthChange={this.onLengthChange}
        />
      </PasswordGroup>
    );
  }
}

export default CustomGenerator;
