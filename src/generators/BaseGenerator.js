import PasswordGroup from "../components/passwordGroup";
import React from "react";

class BaseGenerator extends React.Component {
  get title() {
    if (this._title) {
      return this._title;
    }
    throw new Error("You must provide generator title");
  }
  set title(value) {
    this._title = value;
  }
  description = null;
  generate() {
    throw new Error("Method 'generate()' must be implemented.");
  }
  render() {
    return <PasswordGroup generator={this} />;
  }
}

export default BaseGenerator;
