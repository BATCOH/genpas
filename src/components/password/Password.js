import "./Password.css";

import AutoHeightTextArea from "../autoHeightTextArea";
import Clipboard from "../clipboard";
import React from "react";

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
    this.onFocus = this.onFocus.bind(this);
  }
  onFocus() {
    this.domRef.current.select();
  }

  render() {
    const pass = this.props.pass;
    if (!pass) return null;
    const className =
      "Password" + ("clipboard" in navigator && " Password__hasClipboard");
    return (
      <div className={className}>
        <AutoHeightTextArea
          className="Password-input"
          value={pass}
          readOnly={true}
          ref={this.domRef}
          onFocus={this.onFocus}
          style={{ width: pass.length + ".1ch" }}
        />
        <Clipboard value={pass} />
      </div>
    );
  }
}

export default Password;
