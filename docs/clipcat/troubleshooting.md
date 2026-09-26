---
title: Troubleshooting ClipCat
description: Fix common replay, capture, hotkey, audio, storage, and update problems.
---

The sidebar tells you whether replay is running, disabled, or stopped by an error.

## Save now is disabled or no clip is saved

Turn on the replay switch and wait for **Replay buffer running**. A clean installation has replay disabled. Give the buffer time to collect footage before saving. If another save is in progress, wait for its result.

After a restart or capture-setting change, the buffer starts empty. A short clip immediately afterward is expected.

## Capture engine missing

On **Windows**, reinstall the official ClipCat installer to restore bundled capture components. On **Linux**, install your distribution's `obs-studio` package. Disk buffering also needs `ffmpeg`. Restart ClipCat after fixing the missing component.

## Capture did not start or the picture is wrong

Check the error message, graphics driver, and encoder shown in the sidebar. Try H.264 with a lower resolution and FPS. If hardware encoding fails, the CPU fallback may be slower.

On Windows, check **Capture desktop** if you want the primary screen outside a full-screen game. On Wayland, accept the screen-sharing portal request and select the intended screen. Linux does not use Windows game-capture hooks.

## Hotkeys do not respond

Try the same action using **Save now** or **Record** to distinguish a shortcut issue from a capture issue. Check for conflicts with game overlays or another recorder, then assign a different shortcut and save. Windows includes fallback handling for games that suppress normal global shortcut events; this does not guarantee every game will accept every key combination.

On Linux, global shortcuts and key-state detection can be limited by the desktop session, particularly for native Wayland apps.

## Microphone is silent

New settings default to **Off**. Select a microphone mode and device, save, and make a short test recording. With **Push-to-talk**, hold its key while speaking. Check OS microphone permissions and mute controls. See [Audio](audio.md).

## Low memory, disk full, or save errors

Shorten the replay or lower bitrate for memory pressure; consider disk buffering for longer replays. Make space on both save and buffer drives and verify folder permissions. Capture stops when less than 1 GB remains. If finalization reports a partial recording, keep that file while investigating.

Logs and runtime state are in `%LOCALAPPDATA%\ClipCat` on Windows, or `$XDG_STATE_HOME/clipcat` (normally `~/.local/state/clipcat`) on Linux. Remove private information before sharing logs.

## Update cannot proceed

Stop manual recording and wait for clip saving to finish. Updates cannot install during those operations. Save any wanted replay content, then retry from **Settings > Info**. See [Info and updates](settings-and-shortcuts.md#info-and-updates).

If the problem continues, [report it with your capture settings and platform details](../help.md#report-a-problem).
