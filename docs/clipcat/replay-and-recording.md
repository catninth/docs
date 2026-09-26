---
title: Replay & recording
description: Understand ClipCat's rolling replay buffer, manual recording, and tray controls.
---

Use replay for something that just happened. Use Record for something about to happen.

## Save the recent past

With replay enabled, ClipCat continually replaces old buffered footage with new footage. **Save now** or **Alt+F10** writes the available recent footage to a video file. The configured replay length is the maximum, not a guarantee that a newly started buffer is already full.

Turning off replay stops buffering. Closing or restarting the app loses unsaved replay content. A rolling buffer is not an archive: save a moment before it ages out.

## Record from now until you stop

Press **Alt+F9** or click **Record**. The control changes to **Stop** with an elapsed timer. Press the shortcut again or click **Stop** to finish and save.

Manual recording is independent of the replay buffer, so you can record with replay off. Recordings use fragmented MP4 to improve recovery after interruption. If finalization fails, ClipCat reports the problem and preserves a partial file; that does not guarantee that every player can open it.

Wait for saving to finish before exiting or opening an installer.

## Work from the tray

Closing the main window leaves ClipCat available in the system tray. Its menu can open Gallery or Settings, save a clip, start/stop recording, pause/resume replay, or open the latest clip folder.

Choose **Exit (stop recording)** in the tray menu to stop the application. Save replay content you want to keep first.

## Changes that reset the buffer

Changing save/buffer folders, replay length, storage mode, resolution, frame rate, bitrate, or codec rebuilds capture and clears the current replay. Microphone and desktop-capture changes apply without rebuilding it.

Capture-setting changes and update installation are protected while recording or saving. Finish the active operation before changing the pipeline. **Capture recovery** in Settings can restart capture after an error; it cannot recover unsaved footage from before that interruption.
