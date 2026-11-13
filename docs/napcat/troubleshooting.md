---
title: Troubleshooting NapCat
description: Find a missing tray icon, diagnose an unknown or stale battery level, and collect a device report for NapCat.
---

## NapCat starts, but no window or device icon appears

NapCat starts in the Windows notification area. Open the **^** menu beside the clock and click a NapCat icon to open its flyout. On Windows 11, drag the icon from this menu onto the taskbar to keep it visible. Launching NapCat again leaves the existing instance running.

If you see only one icon for several devices, open **Settings > Tray mode** and select **Per device**. Under **Devices in the tray**, turn on the devices you want to see. To restore a device you removed, open **Manage devices** and select **Add** beside its name.

## A device is missing or shows “Connected, level unknown”

1. Check the exact model and connection in [Devices & battery support](devices.md#battery-readings-by-device). A plugged-in receiver may be visible even when the peripheral is asleep. Wake the mouse, controller or headset, then hover over a NapCat tray icon to request a reading.
2. For Bluetooth, open Windows Bluetooth settings, confirm the device is connected, and check the level shown there. NapCat's generic Bluetooth reading depends on Windows exposing that percentage. If Windows reports the device as disconnected, reconnect it first.
3. Open **Settings > Manage devices** and look under **Detected devices**. An entry marked **connection only** can be added for presence checks. Changing its type changes the icon and cannot supply a battery reading.

For a G435 connected through Lightspeed, try Bluetooth. For a stock Royal Kludge R75 Pro, use the keyboard's own number-row battery display. For an MCHOSE or Compx mouse that has fallen asleep, move it before checking again.

## The percentage stays the same or jumps

**Updated** in the flyout records the last scan, even if an individual device returned the same reading. A sleeping mouse can retain its last known level. Move the mouse and hover over the tray icon again. Hover requests are limited to one every 15 seconds.

The **Refresh rate** under **Settings > Performance** scales each device family's interval. At the default **1 minute**, a connected PlayStation controller is normally checked every minute, while Windows Bluetooth battery readings are checked every five minutes. Timed checks pause while the screen is off or the session is locked, then resume with a fresh scan. On laptop battery power, timed intervals double.

A tilde (`~`) marks an approximate reading. An Xbox controller jumping from **~60%** to **~25%** has moved from the medium band to the low band. PlayStation controllers also report in bands, even though their displayed percentages have no tilde.

On an R75 Pro with battery reporting enabled, the firmware can briefly report 100% when the keyboard wakes. NapCat waits for a second reading before showing an unexpected 100% while discharging. Until then, you may see the previous level or a dash.

## There is no time estimate or battery alert

Leave NapCat running while the device charges or discharges. Its time estimate needs readings at least five minutes apart and a change of at least five percentage points in the expected direction. Switching between charging and discharging starts a new estimate. Devices that only expose a percentage through Windows Bluetooth cannot provide the charging state needed for a time estimate or a low-battery notification.

Open **Settings > Notifications** and check **Low battery warning**, **Threshold** and **Fully charged notification**. A low warning needs a connected, discharging device with a reported level at or below the threshold. With **Quiet in full screen** enabled, the notification waits until you leave the full-screen game or film.

## An update fails

If **Settings > About** shows **Couldn't check for updates**, check your connection to GitHub and try **Check for updates** again. If a version is available but **The update failed** appears, NapCat could not finish the download, verification or installer launch. Retry **Install** under **About**, or follow the [installation instructions](install.md) to download a fresh installer or standalone copy.

## Report a device problem

Include your NapCat version, Windows version, device model, connection (Bluetooth, USB cable or exact receiver), the reading in NapCat, and the reading in Windows or the vendor's app if available. Under **Detected devices**, a USB entry can also show the vendor and product IDs as a pair such as `342D:E487`. [Report a problem](../help.md#report-a-problem).

If a maintainer needs a hardware report, download the separate **NapCat-Diag.exe** tool from [NapCat releases](https://github.com/catninth/napcat/releases). For a Logitech or MCHOSE report, double-click the tool and move the mouse while it runs. It saves `napcat-diag.txt` beside the executable, or on your Desktop if it cannot write there. From PowerShell in the download folder, run `.\NapCat-Diag.exe` with no arguments to print Windows Bluetooth battery properties and HID interfaces. Check for device identifiers you want to remove before sharing an excerpt.

To capture how NapCat itself reads a device, right-click its tray icon and choose **Exit**. For a standard installation, run these commands in PowerShell to start NapCat with logging enabled.

```powershell
$env:NAPCAT_LOG = '1'
& "$env:LOCALAPPDATA\Programs\NapCat\napcat.exe"
```

Reproduce the problem and open `%TEMP%\napcat.log`. If you use the standalone executable, substitute its path in the command. Exit NapCat and start it normally from the Start menu or File Explorer to stop logging.
