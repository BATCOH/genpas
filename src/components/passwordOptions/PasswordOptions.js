import "./PasswordOptions.css";

import AutoHeightTextArea from "../autoHeightTextArea";
import IndeterminateCheckbox from "../indeterminateCheckbox";
import React from "react";

class Preset {
  constructor(name, regex, symbols) {
    this.name = name;
    this.regex = regex;
    this.symbols = symbols;
    this.checkboxRef = React.createRef();
  }

  hasSymbols(str) {
    return str.search(this.regex) !== -1;
  }
  hasAllSymbols(str) {
    return str.indexOf(this.symbols) !== -1;
  }
}

class PasswordOptions extends React.Component {
  constructor(props) {
    super(props);
    this.presets = [
      new Preset("lower", /[a-z]/g, "abcdefghijklmnopqrstuvwxyz"),
      new Preset("upper", /[A-Z]/g, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      new Preset("numbers", /[0-9]/g, "0123456789"),
      new Preset(
        "symbols",
        /[!?@#$%^&*()\-_=+{[\]}\\|;:'",.<>/]/g,
        "!?@#$%^&*()-_=+{[]}\\|;:'\",.<>/"
      )
    ];
    const state = {};
    this.presets.forEach(preset => {
      state[preset.name + "Checked"] = preset.hasAllSymbols(props.charSet);
      state[preset.name + "Indeterminate"] =
        !preset.hasAllSymbols(props.charSet) &&
        preset.hasSymbols(props.charSet);
    });

    this.state = state;
    this.onCheckboxStateChange = this.onCheckboxStateChange.bind(this);
    this.onCharSetChange = this.onCharSetChange.bind(this);
  }

  onCheckboxStateChange(event) {
    const value = event.target.checked;
    let charSet = this.props.charSet;
    this.presets
      .filter(preset => preset.name === event.target.name)
      .forEach(preset => {
        charSet = charSet.replace(preset.regex, "");
        if (value) charSet += preset.symbols;
      });

    this.onCharSetChange(charSet);
  }
  onCharSetChange(charSet) {
    const newState = {};
    this.presets.forEach(preset => {
      const checked = preset.hasAllSymbols(charSet);
      const indeterminate =
        !preset.hasAllSymbols(charSet) && preset.hasSymbols(charSet);
      if (this.state[preset.name + "Checked"] !== checked) {
        newState[preset.name + "Checked"] = checked;
      }
      if (this.state[preset.name + "Indeterminate"] !== indeterminate) {
        newState[preset.name + "Indeterminate"] = indeterminate;
      }
    });
    this.setState(newState);
    this.props.onCharSetChange(charSet);
  }

  render() {
    const presets = this.presets.map(preset => {
      const checked = this.state[preset.name + "Checked"];
      const indeterminate = this.state[preset.name + "Indeterminate"];
      return (
        <label key={preset.name}>
          <IndeterminateCheckbox
            type="checkbox"
            name={preset.name}
            checked={checked}
            indeterminate={indeterminate}
            onChange={this.onCheckboxStateChange}
          />{" "}
          {preset.symbols}
        </label>
      );
    });
    return (
      <div className="PasswordOptions">
        <AutoHeightTextArea
          className="OptionsCharSet"
          value={this.props.charSet}
          onChange={event => this.onCharSetChange(event.target.value)}
        />
        <label>
          <input
            type="range"
            min="0"
            max="50"
            value={this.props.length}
            onChange={event =>
              this.props.onLengthChange(parseInt(event.target.value, 10))
            }
          />
          <input
            className="PasswordOptions-lengthInput"
            type="number"
            value={this.props.length}
            onChange={event =>
              this.props.onLengthChange(parseInt(event.target.value, 10))
            }
          />
        </label>
        {presets}
      </div>
    );
  }
}

export default PasswordOptions;
