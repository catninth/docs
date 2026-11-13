---
title: Tray icons & flyout
description: Read NapCat's battery indicators, switch between list and grid, and check how long a device has left.
---

Hover over any NapCat tray icon to see the names and levels of your devices, including ones whose individual icons you have hidden. Click to open the flyout for charging status and time estimates. If Windows has put the icons under the **^** near the clock, drag the ones you want onto the taskbar.

## Read a device icon

By default each device has its own icon. The symbol identifies the device type, and the ring fills as the battery level rises. A blue ring with a lightning bolt means the device is charging. For a device running on battery, the default colors are green at 50% or more, amber at 20–49%, and red below 20%.

| What you see in the flyout | What it means |
| --- | --- |
| A percentage such as **72%** | The device reported a level. A **~** prefix marks an approximate reading. |
| **Connected, level unknown** and a dash | NapCat sees the device but has no usable battery reading. |
| **Not connected**, a dashed ring, and a dash | The device is not connected now. If NapCat saw it connected earlier in this session, the list can also show when it was last seen. |

Under **Settings > General > Icon style**, choose **Ring**, **Percent** (a number inside the ring), **Badge** (a small charge indicator on the device symbol), or **Bar** (a strip below the symbol). Percent shows the device symbol at 100% or when the level is unknown. If no device icon is visible, the NapCat cat icon still opens the flyout.

![The four tray icon styles on dark and light taskbars, using sample battery and connection states.](/img/napcat/tray/icon-styles.png)

## Choose one icon or one per device

Set **Tray mode** to **One icon** to show the device that needs attention first. Among the devices allowed in the tray, NapCat gives priority to a discharging device below 20% (or below your warning threshold if you set it higher). Next come charging devices, then other connected devices with a known level, lowest first. Connected devices with no reading and disconnected devices come last. The flyout still shows the full list.

To hide just one icon, right-click it and choose **Hide** followed by the device name. Restore it from **Show hidden devices** in the same menu. To put a frequently checked device first, open **Settings > Devices in the tray** and drag its six-dot handle. The saved order applies to the tray icons and the flyout.

## Read the flyout

**List** shows each device's name, status, level, and any available time estimate. The grid button next to the settings gear switches to tiles with larger rings, names, and levels. Click the list button to return. NapCat remembers your view.

![NapCat's list with sample devices, including a charging mouse, a low keyboard, and a disconnected controller.](/img/napcat/flyout/list-dark.png)

The sample shows an earlier flyout. The current header also has a chart button that opens [Statistics](battery-history.md). The gear opens [Settings](settings.md). At the bottom, **Updated** shows when NapCat last checked, and **Pair a device** opens the [Devices page](devices.md). Press **Esc**, click the tray icon again, or click outside to close the flyout.

The banner names the first connected, discharging device below 20%. A mouse at 18% can therefore appear in the banner before Windows sends the default 15% notification.

The cat logo in the flyout turns green when all connected devices with a known level are full and none is still charging below 100% or at an unknown level. A disconnected device does not prevent the green logo.

## Read a time estimate

While a device discharges, the estimate shows roughly how long it can keep running. While it charges, the estimate shows time to full. For example, if a mouse drops from 60% to 50% in an hour at a steady rate, NapCat can show **about 5 hours**.

NapCat needs a change of at least five percentage points over at least five minutes in the same charging or discharging phase. Switching between charging and discharging starts a new estimate. Devices that report coarse levels can take longer to show one.
