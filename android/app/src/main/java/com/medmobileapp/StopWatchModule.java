package com.medmobileapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class StopWatchModule extends ReactContextBaseJavaModule {
   StopWatchModule(ReactApplicationContext context) {
       super(context);
   }
 
    @Override
    public String getName() {
        return "StopWatch";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> contansts = new HashMap<>();
        // contansts.put("env", BuildConfig.RN_CONFIG_ENV);
        return contansts;
    }
}
