
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRCTAepCoreSpec.h"

@interface RCTAepCore : NSObject <NativeRCTAepCoreSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RCTAepCore : NSObject <RCTBridgeModule>
#endif

@end
