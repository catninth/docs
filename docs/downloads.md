---
title: Downloads & updates
description: Choose an official Cat Ninth installer and keep your desktop tools up to date.
---

Get installers from the project's official GitHub Releases page.

| Application | Stable download | Release notes |
| --- | --- | --- |
| GitCat | [Latest stable release](https://github.com/catninth/gitcat/releases/latest) | [All GitCat releases](https://github.com/catninth/gitcat/releases) |
| ClipCat | [Latest stable release](https://github.com/catninth/clipcat/releases/latest) | [All ClipCat releases](https://github.com/catninth/clipcat/releases) |

## Pick the right file

Expand **Assets** on the release page.

| System | Package |
| --- | --- |
| Windows x64 | The file ending in `_x64-setup.exe` |
| Debian / Ubuntu x86_64 | The `.deb` file |
| Fedora / RPM-based Linux x86_64 | The `.rpm` file |
| Other compatible Linux x86_64 | The `.AppImage` file |

The `.sig` files and `latest.json` support the automatic updater. **Source code** archives are for development, not installers. Check [GitCat requirements](gitcat/install.md) or [ClipCat requirements](clipcat/install.md) before installing Linux packages.

## Update an installed app

Both applications check GitHub for stable releases automatically and repeat checks every six hours. You choose when to install. The updater shows release notes, downloads a signed package, verifies it, and handles installation or restart.

- **GitCat:** use the update control in the application when an update is available. Finish any active repository operation first.
- **ClipCat:** open **Settings**, scroll to **Info**, and select **Check for updates**. Choose **Install and restart** when ready.

:::caution Save a replay before updating ClipCat
Updating restarts ClipCat and clears its unsaved replay buffer. Save anything you want to keep first. Installation is blocked while a recording or clip save is active.
:::

On Linux, `.deb` and `.rpm` updates may prompt for system authorization through `pkexec`. AppImage updates replace the AppImage. Keep using the package format you installed.

## Stable or nightly?

Use the stable release for everyday work. A release named **nightly** is a development prerelease and can change between builds. The in-app updater ignores nightly releases.
