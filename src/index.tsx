const RCTAepCore = require('./NativeRCTAepCore').default;

export function multiply(a: number, b: number): number {
  return RCTAepCore.multiply(a, b);
}
