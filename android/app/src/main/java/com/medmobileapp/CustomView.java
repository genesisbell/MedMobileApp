// replace with your package
package com.medmobileapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.core.content.res.ResourcesCompat;
import android.os.Handler;

public class CustomView extends FrameLayout {

    private RelativeLayout relativeLayout;
    private ProgressBar progressBar;
    private TextView progressText;

    int i = 0;

    public CustomView(@NonNull Context context) {
        super(context);
        initView();

//        relativeLayout = findViewById(R.id.progress_layout);
//        progressBar = findViewById(R.id.progress_bar);
//        progressText = findViewById(R.id.progress_text);
//        RelativeLayout rr = new RelativeLayout(context);
//        RelativeLayout.LayoutParams lp = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
//        lp.setMargins(100, 100, 100, 100);
//        lp.height = 200;
//        lp.width = 200;
//        rr.setLayoutParams(lp);
//
//        Drawable dd = ResourcesCompat.getDrawable(context.getResources(), R.drawable.circular_progress_bar, null);
//        Drawable cc = ResourcesCompat.getDrawable(context.getResources(), R.drawable.circular_shape, null);
//        ProgressBar pb = new ProgressBar(context);
//        pb.setProgressDrawable(dd);
//        pb.setBackground(cc);
//        pb.setIndeterminate(false);
//        pb.setProgress(10);
//        pb.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
//
//        RelativeLayout.LayoutParams plp = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
//        plp.width = RelativeLayout.LayoutParams.MATCH_PARENT;
//        plp.height = RelativeLayout.LayoutParams.MATCH_PARENT;
//        pb.setLayoutParams(plp);
////        pb.getLayoutParams().width = LayoutParams.MATCH_PARENT;
////        pb.getLayoutParams().height = LayoutParams.MATCH_PARENT;
//
////        relativeLayout.addView(progressBar);
////        relativeLayout.addView(progressText);
//
//        // set padding and background color
////        this.setPadding(16,16,16,16);
//        this.setBackgroundColor(Color.parseColor("#5FD3F3"));
//
//        // add default text view
//        TextView text = new TextView(context);
//        text.setText("00:00");
//        rr.addView(text);
//        rr.addView(pb);
//        this.addView(rr);
//        this.addView(text);
//        relativeLayout.addView(text);
//        this.addView(relativeLayout);
//        this.addView(relativeLayout);
//        this.addView(progressText);
    }

    private void initView() {
        inflate(getContext(), R.layout.circular_progress_layout, this);
        // set the id for the progressbar and progress text
        progressBar = findViewById(R.id.progress_bar);
        progressText = findViewById(R.id.progress_text);

        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                // set the limitations for the numeric
                // text under the progress bar
                if (i <= 100) {
                    progressText.setText("" + i);
                    progressBar.setProgress(i);
                    i++;
                    handler.postDelayed(this, 200);
                } else {
                    handler.removeCallbacks(this);
                }
            }
        }, 200);
    }
}