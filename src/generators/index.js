import CustomGenerator from "./CustomGenerator";
import DummyGenerator from "./DummyGenerator";
import SimpleNumericGenerator from "./SimpleNumericGenerator";
import TraditionalGenerator from "./TraditionalGenerator";
import XKCDPasswordGenerator from "./XKCDPasswordGenerator";

export const generators = [
  SimpleNumericGenerator,
  TraditionalGenerator,
  XKCDPasswordGenerator,
  CustomGenerator
];

export default {
  DummyGenerator,
  SimpleNumericGenerator,
  TraditionalGenerator,
  XKCDPasswordGenerator,
  CustomGenerator
};
