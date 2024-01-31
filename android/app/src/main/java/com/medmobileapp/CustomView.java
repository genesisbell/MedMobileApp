// replace with your package
package com.medmobileapp;

import android.content.Context;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import android.os.Handler;

public class CustomView extends FrameLayout {

    private ProgressBar progressBar;
    private TextView progressText;

//    @Bind(R.id.progress_bar)
    ProgressBar pb;

    int i = 0;

    public CustomView(@NonNull Context context) {
        super(context);
        initView("22");
    }

    private void initView(String text) {
        inflate(getContext(), R.layout.circular_progress, this);
        // set the id for the progressbar and progress text
        progressBar = findViewById(R.id.progress_bar);
        progressText = findViewById(R.id.progress_text);
//        progressText.setText(text);

        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                // set the limitations for the numeric
                // text under the progress bar
                progressText.setText(text);
                handler.removeCallbacks(this);
//                if (i <= 100) {
////                    progressText.setText("" + i);
////                    progressBar.setProgress(i);
//                    i++;
//                    handler.postDelayed(this, 200);
//                } else {
//                    handler.removeCallbacks(this);
//                }
            }
        }, 200);
    }

    public void setText(String text){
        initView(text);
//        progressText.setText(text);
    }

    public void setProgress(int progress){
        progressBar.setProgress(progress);
    }
}