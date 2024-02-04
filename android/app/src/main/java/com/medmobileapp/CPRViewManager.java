// replace with your package
package com.medmobileapp;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import android.graphics.Color;
import android.media.AudioAttributes;
import android.media.SoundPool;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import com.facebook.react.uimanager.annotations.ReactPropGroup;

public class CPRViewManager extends ViewGroupManager<FrameLayout> {

    public static final String REACT_CLASS = "CPRViewManager";
    public final int COMMAND_CREATE = 1;

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
    private int elapsedTime = 0;
    private int cycle = 25;
    private int progress = 0;
    private int propWidth;
    private int propHeight;
    private int color;

    private final ScheduledThreadPoolExecutor scheduledExecutorSound = new ScheduledThreadPoolExecutor(1);
    private ScheduledFuture scheduledFutureSound;
    private CPRFragment cprFragment;

    ReactApplicationContext mCallerContext;

    private final Runnable soundTok = new Runnable() {
        @Override
        public void run() {
            if(elapsedTime % cycle >= cycle - 10){
                soundPoolLast.play(1, 1, 1, 1, 0, 1.0f);
            }else{
                soundPool.play(1, 1, 1, 1, 0, 1.0f);
            }
        }
    };

    private void runThread() {
        new Thread() {
            public void run() {
                while (currentState == CPRState.PLAYING) {
                    try {
                        runOnUiThread(new Runnable() {

                            @Override
                            public void run() {

                                long elapsed = System.currentTimeMillis() - startTime;
                                elapsedTime = (int)elapsed/1000;

                                if(elapsedTime >= cycle && elapsedTime % cycle == 0){
                                    soundPoolFinal.play(1, 1, 1, 1, 0, 1.0f);
                                }

                                int progressPer = (++progress * 100) / cycle;

                                cprFragment.setProgress(progressPer);
                                cprFragment.setText(getFormattedTime(elapsedTime));

                                if(progress == cycle){
                                    progress = 0;
                                }
                            }
                        });
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }.start();
    }

    public CPRViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
        this.cprFragment = new CPRFragment();
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

    @Override
    public void receiveCommand(@NonNull FrameLayout view, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(view, commandId, args);

        switch (commandId) {
            case "" + COMMAND_CREATE:
                createFragment(view, args.getInt(0));
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
            this.startTime = System.currentTimeMillis();
            this.currentState = CPRViewManager.CPRState.PLAYING;
            this.startSound();
            this.runThread();
        }
    }

    private void stop(){
        if(this.currentState == CPRViewManager.CPRState.PLAYING){
            this.stopSound();
            this.progress = 0;
            this.cprFragment.setProgress(0);
            this.cprFragment.setText("00:00");
            this.currentState = CPRViewManager.CPRState.STOPPED;
        }
    }

    private void startSound(){
        this.scheduledExecutorSound.setRemoveOnCancelPolicy(true);
        this.scheduledFutureSound = scheduledExecutorSound.scheduleAtFixedRate(this.soundTok, 0, this.getInternalMS(), TimeUnit.MILLISECONDS);
    }

    private void stopSound(){
        this.scheduledFutureSound.cancel(false);
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

        if(this.currentState == CPRState.PLAYING){
            this.stopSound();
            this.startSound();
        }
    }
    @ReactProp(name="cycle")
    public void setCycle(FrameLayout view, @Nullable int cycle) {
        this.cycle = cycle;
    }
    @ReactProp(name="textColor")
    public void setTextColor(FrameLayout view, @Nullable String color){
        this.color = Color.parseColor(color);
    }
    @ReactPropGroup(names = {"width", "height", "color"}, customType = "Style")
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

        FragmentActivity activity = (FragmentActivity) mCallerContext.getCurrentActivity();
        activity.getSupportFragmentManager()
                .beginTransaction()
                .replace(reactNativeViewId, this.cprFragment, String.valueOf(reactNativeViewId))
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

        this.cprFragment.setTextColor(this.color);
        this.cprFragment.setBpmText(this.bpm);

    }

}