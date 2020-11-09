import CustomGenerator from "./CustomGenerator";
import SimpleNumericGenerator from "./SimpleNumericGenerator";
import TraditionalGenerator from "./TraditionalGenerator";
import XKCDPasswordGenerator from "./XKCDPasswordGenerator";

export const generators = [
  SimpleNumericGenerator,
  TraditionalGenerator,
  XKCDPasswordGenerator,
  CustomGenerator,
];

export default generators;
