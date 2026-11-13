---
title: Check your first device
description: Find NapCat in the Windows tray, connect a device, and read its first battery level.
---

NapCat starts in the Windows notification area. You can read a battery level without opening a separate app window.

## Find the tray icon

1. Launch NapCat. If you see only the clock and familiar icons, select the **^** arrow beside the clock to show hidden icons.
2. Look for a device icon with a battery ring. If NapCat has no device icon to show yet, look for its cat icon.
3. To keep a particular icon beside the clock, drag it out of the hidden area onto the taskbar. On Windows 11 you can also choose visible icons in **Windows Settings > Personalization > Taskbar > Other system tray icons**.

## Connect and check a device

1. Wake a [supported device](devices.md) and connect it in a mode that reports its battery. For example, connect a DualShock 4 over USB. For Bluetooth, click the NapCat icon, select **Pair a device**, then **Pair** under **Bluetooth** to open Windows Bluetooth settings.
2. Once connected, hover over a NapCat icon to see the device names and levels. By default, each detected device gets its own tray icon.
3. Click an icon to open the full list. Find the device name and read its percentage and charging state. A value such as `~60%` is approximate. A dash means no current percentage is available. The status beside it tells you whether the device is connected.

![NapCat's tray tooltip shows the VGN Dragonfly F1 at 50%, the RK R75 Pro at 9%, and a dash for the Logitech G435.](/img/napcat/tooltip/light.png)

The screenshot uses simulated devices. On your PC, the tooltip lists the devices NapCat has detected or you have added.

If the device never appears, open **Pair a device** again. Under **Detected devices**, an entry marked **connection only** can be added to track whether it is connected. A battery percentage requires support for that device and connection mode. See [device support](devices.md) or [troubleshooting](troubleshooting.md).

To change the default English interface, right-click a tray icon and open **Settings… > General > Language**. Choose **Magyar** for Hungarian, or **System** to use Hungarian on Hungarian Windows and English elsewhere.
