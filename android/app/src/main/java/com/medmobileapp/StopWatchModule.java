package com.medmobileapp;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.concurrent.ScheduledThreadPoolExecutor;

public class StopWatchModule extends ReactContextBaseJavaModule {

    /** === Private members ================================================== */
    private enum stopWatchState {
        PLAYING,
        PAUSED,
        STOPPED
    }
    private stopWatchState currentState = stopWatchState.STOPPED;
    private long startTime = 0;

    /** === Public constructor =============================================== */
    StopWatchModule(ReactApplicationContext context) {
        super(context);
    }

    /** === React Methods ==================================================== */
    @ReactMethod
    public void startStopWatch(){
        if(this.currentState != stopWatchState.PLAYING){
            this.startTime = System.currentTimeMillis();
            this.currentState = stopWatchState.PLAYING;
        }
    }

    @ReactMethod
    public void stopStopWatch(){
        if(this.currentState == stopWatchState.PLAYING){
            this.currentState = stopWatchState.STOPPED;
        }
    }

    @ReactMethod
    public void getElapsedTime(Promise promise){
        promise.resolve((int)(System.currentTimeMillis() - this.startTime));
    }

    @ReactMethod
    public void testModule(Promise promise){
        promise.resolve("this is a good module");
    }

    /** === Public methods =================================================== */
    @Override
    public String getName() {
        return "StopWatch";
    }
}