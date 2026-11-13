---
title: Battery history & statistics
description: Explore a device's battery level, daily drain, time per charge, and estimated battery health.
---

Right-click a tray icon and select **Statistics…**, or click the chart button in the flyout. Choose a device at the top, then **7 days** or **30 days**. Both ranges include today. A device appears once NapCat has seen it in this session and has a recorded battery level for it. Devices that only report a connection have no battery history.

## Read the charts

- **Battery level** plots the reported percentages over time. Hover to see a time and level. The line connects observations, including readings on either side of a disconnection or sleep, so a level between two readings is an estimate. By default, discharging sections are red and time on the charger is green. Enabling **Accent color for healthy levels** uses a single accent color for the line.
- **Daily drain** shows how many percentage points the device used on each local calendar day. Hover over a day to see its total or **no data**. The average uses days with readings. Charging during the day can allow more than 100 percentage points of use.

## Interpret the four figures

| Statistic | What it measures |
| --- | --- |
| **Average drain** | Percentage points used per hour during observed discharge periods in the selected range. |
| **On one charge** | Estimated continuous runtime from 100% at that drain rate. If there is enough daily usage data, the smaller text estimates how many calendar days a charge lasts at your usual pace. |
| **Full charge** | Estimated time to charge from 15% to 100%, calculated from charging periods in the past 90 days. |
| **Cycles** | Total recorded discharge divided by 100 across the device's history. Using 40 percentage points, recharging, and using another 60 counts as one equivalent cycle. |

For a drain or charge rate, NapCat needs at least half an hour and a total change of at least three percentage points in the relevant direction. Until then, the corresponding figure shows a dash. Powering off, disconnecting, or putting the PC to sleep breaks the periods used for these calculations.

<details>
<summary>View a week of sample battery history</summary>

![A sample Statistics page with a week's battery levels, daily drain, runtime estimates, and a monthly health chart.](/img/napcat/stats/dark.png)

The gallery uses simulated history. This earlier capture labels the **Cycles** card “Charge cycles.”

</details>

## Understand battery health

**Battery health** compares how quickly the device drains with the first month that supplied enough readings. That first month sets the 100% baseline. Changing keyboard lighting, a mouse's polling rate, or how intensively you use the device can change this estimate as well as actual battery wear.

NapCat needs **two qualifying calendar months** before it shows estimated capacity. Each needs at least **four hours of discharge** and **20 percentage points used**. Until then, **Collecting data** shows how many months qualify. Use **Table** to read the monthly values or **Chart** to see the trend.

After three qualifying months, NapCat estimates a monthly rate. If it finds a decline, it projects when the estimate might reach 80%. This uses the device's history since NapCat first recorded it, including months outside the selected 7- or 30-day chart.

NapCat keeps the readings locally in `%APPDATA%\NapCat\history.log`. It records battery level and state changes while it runs, so keeping **Start with Windows** enabled helps collect a longer history. On startup, if the log exceeds 4 MiB, NapCat drops entries older than two years.
