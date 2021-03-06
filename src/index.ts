import { ono } from "./singleton";

export { Ono } from "./constructor";
export * from "./types";
export { ono };

// tslint:disable-next-line: no-default-export
export default ono;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
