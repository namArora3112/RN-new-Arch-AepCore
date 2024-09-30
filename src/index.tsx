const RCTAepCore = require('./NativeRCTAepCore').default;

export function multiply(a: number, b: number): number {
  return RCTAepCore.multiply(a, b);
}

// Add this function to call the extensionVersion API
export function extensionVersion(): Promise<string> {
  return RCTAepCore.extensionVersion();
}