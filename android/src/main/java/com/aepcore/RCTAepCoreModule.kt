package com.aepcore

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.adobe.marketing.mobile.MobileCore

@ReactModule(name = RCTAepCoreModule.NAME)
class RCTAepCoreModule(reactContext: ReactApplicationContext) :
    NativeRCTAepCoreSpec(reactContext) {

    override fun getName(): String {
        return NAME
    }

    // Example method for multiplication
    override fun multiply(a: Double, b: Double): Double {
        return a * b
    }

    // Updated extensionVersion method for new arch
    override fun extensionVersion(promise: Promise) {
        promise.resolve(MobileCore.extensionVersion())
    }

    companion object {
        const val NAME = "RCTAepCore"
    }
}
