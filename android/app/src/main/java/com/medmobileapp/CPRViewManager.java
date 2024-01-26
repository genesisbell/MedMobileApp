// replace with your package
package com.medmobileapp;

import android.graphics.Color;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class CPRViewManager extends SimpleViewManager<LinearLayout> {

    public static final String REACT_CLASS = "CPRViewManager";

    /** === Private members ================================================== */
    private enum CPRState {
        PLAYING,
        PAUSED,
        STOPPED
    }
    private CPRViewManager.CPRState currentState = CPRViewManager.CPRState.STOPPED;
    private long startTime = 0;


    private final ScheduledThreadPoolExecutor scheduledExecutor = new ScheduledThreadPoolExecutor(1);
    private ScheduledFuture scheduledFuture;
    private TextView textView;
    private LinearLayout linearLayout;
    ReactApplicationContext mCallerContext;

    private final Runnable tok = new Runnable() {
        @Override
        public void run() {
            long elapsed = System.currentTimeMillis() - startTime;
            int elapsedTime = (int)elapsed/1000;
            textView.setText(getFormattedTime(elapsedTime));
        }
    };

    public CPRViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected LinearLayout createViewInstance(ThemedReactContext context) {
        linearLayout = new LinearLayout(context);
        linearLayout.setBackgroundColor(Color.BLUE);

        textView = new TextView(context);
        textView.setTextColor(Color.WHITE);
        textView.setText("This is a good android ui component");

        Button button = new Button(context);
        button.setText("Start");
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                start();
            }
        });

        Button buttonFinished = new Button(context);
        buttonFinished.setText("Stop");
        buttonFinished.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                stop();
            }
        });
        linearLayout.addView(textView);
        linearLayout.addView(button);
        linearLayout.addView(buttonFinished);
        return linearLayout;
    }


    private void start(){
        if(this.currentState != CPRViewManager.CPRState.PLAYING){
            this.scheduledExecutor.setRemoveOnCancelPolicy(true);
            this.startTime = System.currentTimeMillis();
            this.scheduledFuture = scheduledExecutor.scheduleAtFixedRate(this.tok, 0, 1000, TimeUnit.MILLISECONDS);
            this.currentState = CPRViewManager.CPRState.PLAYING;
        }
    }

    private void stop(){
        if(this.currentState == CPRViewManager.CPRState.PLAYING){
            this.scheduledFuture.cancel(false);
            textView.setText("00:00");
            this.currentState = CPRViewManager.CPRState.STOPPED;
        }
    }

    private String getFormattedTime(int time){
        int minutes = (int) Math.floor(time/60);
        int seconds = time - (minutes * 60);
        String minutesString = Integer.toString(minutes);
        String secondsString = Integer.toString(seconds);
        if(minutes < 10){
            minutesString = "0" + minutes;
        }

        if(seconds < 10){
            secondsString = "0" + seconds;
        }

        return minutesString + ":" + secondsString;
    }

    @ReactMethod
    public void getCPRState(Promise promise){
        promise.resolve(this.currentState);
    }

    @ReactMethod
    public void getElapsedTime(Promise promise){
        promise.resolve((int)(System.currentTimeMillis() - this.startTime));
    }


}