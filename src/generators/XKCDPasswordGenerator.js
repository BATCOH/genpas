import BaseGenerator from "./BaseGenerator";
import React from "react";
import { generateMnemonic } from "bip39";

class XKCDPasswordGenerator extends BaseGenerator {
  ready = false;
  title = (<a href="https://xkcd.com/936/">XKCD Password</a>);
  description = "Cool and memorable passphrase.";

  generate() {
    const mnemonic = generateMnemonic();
    return mnemonic
      .trim()
      .split(/\s+/g)
      .slice(0, 4)
      .join("-");
  }
}

export default XKCDPasswordGenerator;
