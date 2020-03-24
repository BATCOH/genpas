import BaseGenerator from "./BaseGenerator";

class DummyGenerator extends BaseGenerator {
  title = "Dummy Generator";
  description = "Not a generator, just hardcoded string for testing";
  generate() {
    return "DummyPassword";
  }
}

export default DummyGenerator;
