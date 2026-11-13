---
title: Devices & battery support
description: Connect a peripheral, manage which devices appear in NapCat, and check which battery readings your model can provide.
---

Connect your receiver or USB cable and wake the device. For Bluetooth, click a NapCat tray icon, choose **Pair a device**, then click **Pair** in the **Bluetooth** section to open Windows Bluetooth settings. NapCat checks for supported devices automatically when they connect.

## Manage the device list

Open **Settings > Devices in the tray > Manage devices**. The **In NapCat** section lists the devices already shown in the flyout.

![NapCat Devices page with device type and Remove controls above the Detected devices section.](/img/napcat/settings/devices-dark.png)

- **Add a device.** Under **Detected devices**, select **Add** beside its name. A USB device or receiver labeled **connection only** can show when the hardware is present, but has no battery percentage. A receiver can remain plugged in while its peripheral is off.
- **Change the icon.** Click the type beside **Remove** to cycle through **Keyboard**, **Mouse**, **Headset**, **Controller**, **Other**, then back to automatic detection. Use this if Windows identifies a mouse receiver as a keyboard.
- **Hide a tray icon or change the order.** Return to **Settings > Devices in the tray**. Turn off the device's switch to keep it in the flyout without a tray icon. Drag the six-dot handle beside a device to move it in the list.
- **Remove or restore a device.** Choose **Remove** to take it out of the flyout and tray. Under **Detected devices**, choose **Add** beside **Removed earlier** to restore an automatically recognized device. A manually added device can be added again while Windows detects it. Removing a device from NapCat keeps its Windows pairing.

## Battery readings by device

Check the connection as well as the model. For example, a Logitech G435 uses different paths over its receiver and over Bluetooth.

| Device | Connection and reading |
| --- | --- |
| Bluetooth mice, keyboards, headsets and other peripherals | NapCat reads the battery percentage exposed by Windows. This source provides no charging status. When Windows reports that a paired device has disconnected, NapCat hides its old reading. |
| Sony DualShock 4, DualSense and DualSense Edge | USB or Bluetooth. The controller reports charge state and battery bands in steps of about 10%. For example, the middle of a band can appear as 55%. The DualShock 4 USB wireless adapter is also recognized. |
| Wireless Xbox-compatible controllers | XInput supports up to four player slots. Empty, low, medium and full appear as **~5%**, **~25%**, **~60%** and **~100%**. Wired XInput controllers do not report a battery here. |
| Logitech HID++ 2.0 mice and keyboards | Direct USB or a compatible Unifying, Bolt or Lightspeed receiver. Depending on the device, NapCat gets a percentage, converts battery bands or estimates charge from voltage. Estimates carry a **~**. |
| Logitech G435 headset | The Lightspeed receiver shows connection only. To see a percentage, connect over Bluetooth and check whether Windows reports the level. |
| VGN, ATK and VXE mice using the Compx protocol | Compatible receivers and cable connections can report a percentage and charging state. NapCat groups the VGN Dragonfly's 4K receiver and its cable connection under one name, even if Windows labels the wired mouse “VGN F1 MOBA”. |
| MCHOSE A7 V2 Pro, Pro+, Ultra and Ultra+ | Cable or compatible receiver. NapCat reads the mouse's percentage and charging state. Over cable it shows **Fully charged** from 95% upward. |
| SteelSeries wireless headsets and mice | See the model list below. The reading can be a percentage, an approximate level or a level without charging status, depending on the model and firmware. |
| Royal Kludge R75 Pro | With stock firmware, cable shows **Charging** and the 2.4 GHz receiver shows connection only. Neither provides a percentage. The project's modified firmware exposes level and charging state over both connections on the US tri-mode R75 Pro (`342D:E487`). |

**SteelSeries headsets** include Arctis Nova 7 (including Gen 2, 7X and 7P), Nova 5 and 5X, Nova 3P and 3X Wireless, and Nova Pro Wireless and Wireless X. The original Arctis range includes 1 Wireless, 7, 7P, 7X, 7+, 7P+, 7X+, 9 and Pro Wireless. Arctis GameBuds show the lower charge of the buds outside the case. With both buds in the case, the device shows as disconnected.

**SteelSeries mice** include Aerox 3, 5 and 9 Wireless, Prime Wireless, Prime Mini Wireless, Rival 3 Wireless (including Gen 2) and Rival 650 Wireless.

The project records hardware checks for DualShock 4 over USB, VGN Dragonfly, MCHOSE A7 V2 Ultra+ on its 8K receiver, and the modified US tri-mode R75 Pro over cable and receiver. The project lists XInput, Logitech HID++ 2.0, Windows Bluetooth battery reporting and the SteelSeries models as implemented without hardware verification. Razer-specific support and direct Bluetooth Low Energy GATT battery queries are planned. If your device appears without a reading, follow [Troubleshooting](troubleshooting.md).
