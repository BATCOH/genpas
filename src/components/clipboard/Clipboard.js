import "./Clipboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.resetIcon = this.resetIcon.bind(this);
    this.state = { icon: "clipboard" };
  }
  onClick() {
    navigator.clipboard.writeText(this.props.value);
    this.setState({ icon: "clipboard-check" });
    setTimeout(this.resetIcon, 3000);
  }
  resetIcon() {
    this.setState({ icon: "clipboard" });
  }
  render() {
    if ("clipboard" in navigator) {
      return (
        <button
          className="Clipboard"
          onClick={this.onClick}
          title="Copy to clipboard"
        >
          <FontAwesomeIcon icon={this.state.icon} />
        </button>
      );
    }
    return null;
  }
}

export default Clipboard;
