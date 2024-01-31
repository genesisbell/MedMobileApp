// replace with your package
package com.medmobileapp;

import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.media.AudioAttributes;
import android.media.SoundPool;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.res.ResourcesCompat;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.medmobileapp.CustomView;

public class CPRViewManager extends ViewGroupManager<FrameLayout> {

    public static final String REACT_CLASS = "CPRViewManager";
    public final int COMMAND_CREATE = 1;
    CustomView customView;

    /** === Private members ================================================== */
    private enum CPRState {
        PLAYING,
        STOPPED
    }
    private CPRViewManager.CPRState currentState = CPRViewManager.CPRState.STOPPED;

    private SoundPool soundPool;
    private SoundPool soundPoolLast;
    private SoundPool soundPoolFinal;

    private int bpm = 100;
    private long startTime = 0;
    private int cycle = 25;
    private int propWidth;
    private int propHeight;

    private final ScheduledThreadPoolExecutor scheduledExecutor = new ScheduledThreadPoolExecutor(1);
    private final ScheduledThreadPoolExecutor scheduledExecutorSound = new ScheduledThreadPoolExecutor(1);
    private ScheduledFuture scheduledFuture;
    private ScheduledFuture scheduledFutureSound;

    private TextView textView;
    private LinearLayout linearLayout;
    private RelativeLayout relativeLayout;
    private ProgressBar progressBar;
    private TextView progressText;

    ReactApplicationContext mCallerContext;

    private final Runnable tok = new Runnable() {
        @Override
        public void run() {
            long elapsed = System.currentTimeMillis() - startTime;
            int elapsedTime = (int)elapsed/1000;

            if(elapsedTime >= cycle && elapsedTime % cycle == 0){
                soundPoolFinal.play(1, 1, 1, 1, 0, 1.0f);
            }

            textView.setText(getFormattedTime(elapsedTime));
        }
    };

    private final Runnable soundTok = new Runnable() {
        @Override
        public void run() {
            long elapsed = System.currentTimeMillis() - startTime;
            int elapsedTime = (int)elapsed/1000;

            if(elapsedTime % cycle >= cycle - 10){
                soundPoolLast.play(1, 1, 1, 1, 0, 1.0f);
            }else{
                soundPool.play(1, 1, 1, 1, 0, 1.0f);
            }
        }
    };

    public CPRViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
        initializeSoundPool();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public FrameLayout createViewInstance(ThemedReactContext reactContext) {
        return new FrameLayout(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("create", COMMAND_CREATE);
    }

//    @Override
//    protected LinearLayout createViewInstance(ThemedReactContext context) {
//        linearLayout = new LinearLayout(context);
//        relativeLayout = new RelativeLayout(context);
//
//        // set the id for the progressbar and progress text
////        relativeLayout = (RelativeLayout) LayoutInflater.from(context).inflate(R.layout., null, false);
////        progressBar = LayoutInflater.from(context).inflate(R.id.progress_bar, null, false);
////        progressText = LayoutInflater.from(context).inflate(R.id.progress_text, null, false);
//
//
//        linearLayout.addView(textView);
//        linearLayout.addView(customView);
////        linearLayout.addView(relativeLayout);
//        return linearLayout;
//    }

    @Override
    public void receiveCommand(@NonNull FrameLayout view, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(view, commandId, args);

        int reactNativeViewId = args.getInt(0);
        final String commandCreateString = "" + COMMAND_CREATE;
        switch (commandId) {
            case commandCreateString:
                createFragment(view, reactNativeViewId);
                break;
            case "start":
                start();
                break;
            case "stop":
                stop();
                break;
        }
    }

    private int getInternalMS(){
        return 60000 / bpm;
    }

    private void initializeSoundPool() {
        // Use the new SoundPool builder on newer version of android
        this.soundPool = new SoundPool.Builder()
                .setMaxStreams(1)
                .setAudioAttributes(new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .build())
                .build();
        this.soundPoolLast = new SoundPool.Builder()
                .setMaxStreams(1)
                .setAudioAttributes(new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .build())
                .build();
        this.soundPoolFinal = new SoundPool.Builder()
                .setMaxStreams(1)
                .setAudioAttributes(new AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                        .build())
                .build();

        int soundResourceId = this.mCallerContext.getResources().getIdentifier("metronome", "raw", this.mCallerContext.getPackageName());
        int soundResourceLastId = this.mCallerContext.getResources().getIdentifier("last", "raw", this.mCallerContext.getPackageName());
        int soundResourceFinalId = this.mCallerContext.getResources().getIdentifier("longnotif", "raw", this.mCallerContext.getPackageName());
        this.soundPool.load(this.mCallerContext, soundResourceId, 1);
        this.soundPoolLast.load(this.mCallerContext, soundResourceLastId, 1);
        this.soundPoolFinal.load(this.mCallerContext, soundResourceFinalId, 1);
    }

    private void start(){
        if(this.currentState != CPRViewManager.CPRState.PLAYING){
            this.scheduledExecutor.setRemoveOnCancelPolicy(true);
            this.scheduledExecutorSound.setRemoveOnCancelPolicy(true);
            this.startTime = System.currentTimeMillis();
            this.scheduledFuture = scheduledExecutor.scheduleAtFixedRate(this.tok, 0, 1000, TimeUnit.MILLISECONDS);
            this.scheduledFutureSound = scheduledExecutorSound.scheduleAtFixedRate(this.soundTok, 0, this.getInternalMS(), TimeUnit.MILLISECONDS);
            this.currentState = CPRViewManager.CPRState.PLAYING;
        }
    }

    private void stop(){
        if(this.currentState == CPRViewManager.CPRState.PLAYING){
            this.scheduledFuture.cancel(false);
            this.scheduledFutureSound.cancel(false);
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

    /** === React props ================================================== */
    @ReactProp(name="bpm")
    public void setBpm(FrameLayout view, @Nullable int bpm) {
        this.bpm = bpm;
    }

    @ReactProp(name="cycle")
    public void setCycle(FrameLayout view, @Nullable int cycle) {
        this.cycle = cycle;
    }
    @ReactPropGroup(names = {"width", "height"}, customType = "Style")
    public void setStyle(FrameLayout view, int index, Integer value) {
        if (index == 0) {
            propWidth = value;
        }

        if (index == 1) {
            propHeight = value;
        }
    }

    public void createFragment(FrameLayout root, int reactNativeViewId) {
        ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId);
        setupLayout(parentView);

        final MyFragment myFragment = new MyFragment();
        FragmentActivity activity = (FragmentActivity) mCallerContext.getCurrentActivity();
        activity.getSupportFragmentManager()
                .beginTransaction()
                .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))
                .commit();
    }

    public void setupLayout(View view) {
        Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
            @Override
            public void doFrame(long frameTimeNanos) {
                manuallyLayoutChildren(view);
                view.getViewTreeObserver().dispatchOnGlobalLayout();
                Choreographer.getInstance().postFrameCallback(this);
            }
        });
    }

    public void manuallyLayoutChildren(View view) {
        // propWidth and propHeight coming from react-native props
        int width = propWidth;
        int height = propHeight;

        view.measure(
                View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));

        view.layout(0, 0, width, height);
    }

}