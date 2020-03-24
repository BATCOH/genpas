import BaseGenerator from "./BaseGenerator";

class TraditionalGenerator extends BaseGenerator {
  title = "Classic password";
  description =
    "Boring old-school random passwords: numbers, letters, 8 symbols.";
  generate() {
    const charSet =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return new Array(8)
      .fill()
      .map(() => charSet[Math.floor(Math.random() * charSet.length)])
      .join("");
  }
}

export default TraditionalGenerator;
