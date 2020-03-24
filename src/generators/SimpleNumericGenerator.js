import BaseGenerator from "./BaseGenerator";

class SimpleNumericGenerator extends BaseGenerator {
  title = "Simple numbers";
  description =
    "Easy-to-remember 6-digit numeric password for non-critical systems";
  generate() {
    return Math.random()
      .toString()
      .slice(2, 8);
  }
}

export default SimpleNumericGenerator;
