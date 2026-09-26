---
title: Install ClipCat
description: Install ClipCat on Windows or Linux and understand the capture requirements.
---

Download the installer for your system, then choose what ClipCat should capture.

## Windows

1. Open the [latest stable ClipCat release](https://github.com/catninth/clipcat/releases/latest).
2. Download the `_x64-setup.exe` asset and run it.
3. Launch ClipCat and open **Settings**.
4. Confirm the **Save folder**, capture quality, and microphone mode before turning on replay.

The Windows installer includes the OBS capture components. You do not need to configure a separate OBS Studio scene. The app uses the Microsoft WebView2 runtime for its interface.

If you see **Capture engine missing**, reinstall the official ClipCat package so its capture components are restored.

## Linux

Choose the x86_64 `.deb`, `.rpm`, or `.AppImage` asset. Install `.deb` / `.rpm` with your distribution's package manager so dependencies are resolved. Mark an AppImage executable before running it.

Linux uses **system OBS Studio** (`obs-studio`) and **ffmpeg**, rather than the Windows capture bundle. Install these through your distribution's package manager when needed; an AppImage does not remove this requirement. A compatible WebKitGTK 4.1 environment is also required.

- **X11:** screen capture uses OBS's X11 source.
- **Wayland:** screen capture uses the PipeWire portal. Select and permit the screen when the desktop asks.
- **Game capture:** Windows-style game hooks are unavailable on Linux. Keep desktop capture enabled for screen recording.
- **Hotkeys and game detection:** behavior depends on the desktop session. Some functionality relies on X11 / XWayland and can be limited for native Wayland applications.

No macOS package is published.

## Start with a quick test

Use H.264, 1080p, and 60 FPS as an initial test, then reduce quality if your hardware struggles. The selected encoder is shown in the sidebar. ClipCat can fall back to CPU encoding when hardware encoding cannot start.

**Next:** [Save your first clip](first-clip.md).
