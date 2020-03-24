import BaseGenerator from "./BaseGenerator";
import React from "react";
import dictionary from "../data/dictionary.txt";

class XKCDPasswordGenerator extends BaseGenerator {
  ready = false;
  title = (<a href="https://xkcd.com/936/">XKCD Password</a>);
  description = "Cool and memorable passphrase.";
  constructor(props) {
    super(props);
    this.loadDictionary = this.loadDictionary.bind(this);
    this.state = { loaded: false };
  }
  loadDictionary = async () => {
    const response = await fetch(dictionary);
    const text = await response.text();
    this.dictionary = text.split("\n");
    this.setState({ loaded: true });
  };
  generate() {
    if (!this.state.loaded) return "";
    return new Array(4)
      .fill()
      .map(
        () =>
          this.dictionary[Math.floor(Math.random() * this.dictionary.length)]
      )
      .join("-");
  }
  componentDidMount() {
    this.loadDictionary();
  }
}

export default XKCDPasswordGenerator;
