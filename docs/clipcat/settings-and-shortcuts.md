---
title: Settings & shortcuts
description: Customize ClipCat's hotkeys, language, notifications, startup, and capture recovery.
---

Keep the controls you need within reach, even while another app has focus.

## Default shortcuts

| Shortcut | Action |
| --- | --- |
| Alt+F10 | Save the available replay buffer |
| Alt+F9 | Start or stop manual recording |
| Alt+F11 | Open the latest clip folder |
| Alt+Z | Open Gallery |

Open **Settings > Keyboard shortcuts**, click an existing shortcut, then press the new combination. Use **Ctrl**, **Alt**, or **Shift** with a key. Press **Esc** to cancel. Save the settings when finished.

Shortcuts must be distinct and available to ClipCat. If another application already owns a combination, choose a different one. The save shortcut only works while replay is running; manual recording works independently.

## Language

Under **Notifications and system**, choose **English US** or **Magyar**, then **Save**. The interface, tray menu, and notifications update without restarting. On first launch, Hungarian Windows selects Hungarian; other Windows display languages fall back to English US. A manually saved choice is retained.

## Notifications and startup

- **Notify when saving:** show a notification over the game in the top-right corner.
- **Play a sound when saving:** add an audible save notification.
- **Start at sign-in:** launch ClipCat when you sign into your computer.
- **Capture recovery:** restart capture if it stops because of an error.

Autostart is enabled in clean default settings, but replay itself starts off until you enable it. Review both choices to get the startup behavior you want.

## Info and updates

The **Info** section at the bottom of **Settings** includes the version, update check, license link, and GitHub repository link. Select **Check for updates** to check manually, then choose **Install and restart** when ready.

ClipCat also checks for stable releases automatically every six hours. Its updater ignores nightly releases, shows release notes, and verifies the signed package before installation.

:::caution Save a replay before updating ClipCat
Updating restarts ClipCat and clears its unsaved replay buffer. Save anything you want to keep first. Installation is blocked while a recording or clip save is active.
:::

On Linux, `.deb` and `.rpm` updates may prompt for system authorization through `pkexec`. AppImage updates replace the AppImage. Keep using the package format you installed.
