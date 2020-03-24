import "./PasswordGroup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Password from "../password";
import React from "react";

class PasswordGroup extends React.Component {
  constructor(props) {
    super(props);
    this.generator = this.props.generator;
  }
  render() {
    const inputs = [...Array(5).keys()].map(idx => {
      return <Password pass={this.generator.generate()} key={idx} />;
    });
    return (
      <div className="PasswordGroup">
        <h2 className="PasswordGroup-title">
          {this.generator.title}

          <button
            className="PasswordGroup-refresh"
            title="Refresh all"
            onClick={() => {
              this.forceUpdate();
            }}
          >
            <FontAwesomeIcon icon="sync" />
          </button>
        </h2>
        {this.generator.description && (
          <div className="PasswordGroup-description">
            {this.generator.description}
          </div>
        )}
        {this.props.children}
        <div className="PasswordGroup-items">{inputs}</div>
      </div>
    );
  }
}

export default PasswordGroup;
