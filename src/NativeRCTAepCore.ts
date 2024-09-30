import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  extensionVersion(): Promise<string>;  // Updated to include extensionVersion

}

export default TurboModuleRegistry.getEnforcing<Spec>('RCTAepCore');
