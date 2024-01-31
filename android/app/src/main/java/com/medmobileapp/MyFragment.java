package com.medmobileapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;

// replace with your view's import
import com.medmobileapp.databinding.CircularProgressBinding;


public class MyFragment extends Fragment {
    private CircularProgressBinding binding;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {
        super.onCreateView(inflater, parent, savedInstanceState);
        binding = CircularProgressBinding.inflate(inflater, parent, false);
        View view = binding.getRoot();
        return view; // this CustomView could be any view that you want to render
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        // do any logic that should happen in an `onCreate` method, e.g:
        // customView.onCreate(savedInstanceState);
    }

    @Override
    public void onPause() {
        super.onPause();
        // do any logic that should happen in an `onPause` method
        // e.g.: customView.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
        // do any logic that should happen in an `onResume` method
        // e.g.: customView.onResume();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        binding = null;
        // do any logic that should happen in an `onDestroy` method
        // e.g.: customView.onDestroy();
    }

    public void setText(String text){
        binding.progressText.setText(text);
    }

    public void setProgress(int progress){
        binding.progressBar.setProgress(progress);
    }

}