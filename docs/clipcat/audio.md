---
title: Audio & microphone
description: Record system audio and choose off, push-to-talk, or always-on microphone capture.
---

ClipCat captures desktop audio. Your microphone is a separate choice and starts off on a clean installation.

## Choose a microphone mode

Open **Settings > Audio**.

| Mode | What happens |
| --- | --- |
| Off | Your microphone is not captured |
| Push-to-talk | The microphone is captured while you hold the configured key |
| Always on | The selected microphone is captured continuously |

When enabling voice capture, choose **System default** or a specific microphone device. A disconnected device may appear as **Unavailable device**; select a working device before testing.

## Configure push-to-talk

Choose **Push-to-talk**, then set its key. Use a supported keyboard key or middle/side mouse button. Left and right mouse buttons are not offered for this purpose. Press **Esc** to cancel key capture.

Check the actual key shown in Settings instead of assuming the default fits your keyboard layout. Save your changes, make a short recording, speak while holding the key, then play it back.

## If sound is missing

Check the operating system's playback and recording devices, microphone permissions, and mute controls. Confirm that the selected microphone is still connected and that push-to-talk is held while speaking.

On Linux, desktop and microphone capture use PulseAudio-compatible sources, including PipeWire's compatibility layer. Desktop-session limitations can also affect push-to-talk detection.

Audio settings apply without clearing the replay buffer. A short test after a device change is the quickest way to verify the result.
