---
title: Install NapCat
description: Install NapCat on Windows, run the standalone app, and choose how to receive updates.
---

NapCat runs on x64-compatible Windows 10 and 11 PCs. Choose the installer for a Start menu shortcut and in-place updates, or run the standalone executable directly from a folder.

## Install for your Windows account

1. Open [NapCat Releases](https://github.com/catninth/napcat/releases/latest) and expand **Assets**.
2. Download and run `NapCat-Setup-<version>.exe`. Setup installs NapCat in `%LOCALAPPDATA%\Programs\NapCat` for your account without requiring administrator privileges.
3. Select **Start NapCat with Windows** if you want battery monitoring to start whenever you sign in. You can change this later by right-clicking a NapCat tray icon and selecting **Start with Windows**.
4. Launch NapCat from the installer's final page or the Start menu. Look in the notification area beside the Windows clock.

## Run without installing

Download `NapCat.exe` from the same release, place it in a folder you plan to keep, and double-click it. If you enable **Start with Windows**, Windows uses that file's location. The separate `NapCat-Diag.exe` is a diagnostic tool.

Both forms keep preferences in `%APPDATA%\NapCat\config.toml` and battery history in `%APPDATA%\NapCat\history.log`. To keep using the standalone copy, leave updates on **Notify** or **Off**. When you want to update, choose **Exit** from the tray menu and replace the executable manually. The built-in **Install** action and **Automatic** mode both run the installer.

## Updates

Right-click a tray icon, open **Settings…**, and scroll to **Performance > Updates**. NapCat checks GitHub for a newer stable release about a minute after startup and then every 24 hours while active.

| Mode | When a newer version is found |
| --- | --- |
| **Notify** (default) | NapCat alerts you. Choose **Install** under **Settings > About**, or **Install update** in the tray menu, when you are ready. |
| **Automatic** | NapCat downloads the installer and starts the update immediately. |
| **Off** | NapCat skips scheduled checks. You can still select **Check for updates** under **Settings > About**. |

**About** shows the running version and lets you check manually in any mode. Before running the installer, NapCat verifies its SHA-256 checksum against the matching `.sha256` file from the same release. NapCat closes for installation and then restarts with your settings and history.

## Uninstall

If you used the installer, find **NapCat** in the Windows list of installed apps and choose **Uninstall**. Your settings and battery history stay in `%APPDATA%\NapCat`. For a standalone copy, turn off **Start with Windows** if enabled, choose **Exit** from the tray menu, then remove the executable.

Next, [check your first device](first-run.md).
