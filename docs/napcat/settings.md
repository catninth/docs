---
title: Settings & notifications
description: Set NapCat's startup, appearance, battery warnings, refresh rate, and update behavior.
---

Right-click a NapCat tray icon and select **Settings…**, or click the gear in the flyout. Changes apply immediately. Close the window when you are done.

## Startup and appearance

| Setting | How to use it |
| --- | --- |
| **Start with Windows** | Start NapCat quietly in the tray when you sign in. The installer and tray menu control the same setting. |
| **Tray mode** and **Icon style** | Choose one icon or an icon for each device, then choose how it shows the level. The defaults are **Per device** and **Ring**. See [Tray icons & flyout](tray-and-flyout.md). |
| **Theme** | **System** matches NapCat's windows to the taskbar. Choose **Dark** or **Light** to set the window theme yourself. Tray icons always follow the taskbar. |
| **Language** | English is the default. Choose **Magyar** for Hungarian or **System** to use Hungarian on a Hungarian Windows installation and English on other display languages. |
| **Accent color** | Follow the Windows accent color, select a **Custom color** from the palette, or switch off **Use accent color** for neutral controls. **Accent color for healthy levels** also applies your accent to rings at 50% or higher. |

Under **Devices in the tray**, turn off a device's switch to keep it in the flyout while hiding its individual tray icon. Drag its six-dot handle to change the order. **Manage devices** opens the page for adding and removing devices or changing their symbols. See [Devices](devices.md).

<details>
<summary>View the Settings window</summary>

![NapCat Settings showing the tray controls, per-device switches, battery warning slider, refresh rate, and an example update offer.](/img/napcat/settings/general-dark.png)

The gallery uses sample devices and a simulated update offer.

</details>

## Battery notifications

- **Low battery warning** is on by default. Move **Threshold** from 5% to 30% in steps of five. NapCat warns when a connected, discharging device reaches or falls below your threshold (15% by default). If the level continues to drop, it can warn again at 5%.
- On a low-battery notification, choose **Remind me in 30 minutes** to get another warning if that device is still connected, discharging, and at or below the threshold. **Dismiss** closes the notification. Clicking its body opens the flyout.
- **Fully charged notification** is on by default. After NapCat has seen the device discharging, it can notify you when the device reports full or reaches 100% while charging. An already full device at startup stays quiet.
- **Quiet in full screen** is on by default. NapCat holds device notifications while Windows reports a full-screen game, film, or presentation, then delivers them afterward.

## Refresh rate

Under **Performance > Refresh rate**, choose **30 seconds**, **1 minute** (default), or **5 minutes**. This scales the time between automatic checks for each kind of device. Some devices update on connection events, and others need periodic checks.

NapCat doubles the polling intervals when the PC runs on battery and pauses timed reads while the screen is off or the session is locked. Unlocking the PC or turning the screen back on triggers a fresh check. To request a reading while using a device, hover over or click a tray icon. NapCat accepts these requests at most once every 15 seconds.

## Updates

Under **Performance > Updates**, choose **Notify** (default) to decide when to install a release, **Automatic** to install it as soon as NapCat finds it, or **Off** to skip scheduled checks. **About** at the bottom of the window shows the running version and lets you check manually in any mode. See [Install NapCat](install.md#updates) for the update schedule and what happens during installation.

NapCat saves your preferences in `%APPDATA%\NapCat\config.toml`. Device readings for [battery history](battery-history.md) are stored separately.
