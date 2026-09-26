---
title: Install GitCat
description: Install the visual Git client on Windows or Linux.
---

Install GitCat and Git, then open a local repository.

## Windows

1. Install [Git for Windows](https://git-scm.com/downloads/win) if you do not already have it. GitCat requires **Git 2.31 or newer**.
2. Download the `_x64-setup.exe` installer from [GitCat Releases](https://github.com/catninth/gitcat/releases/latest).
3. Run the installer. Optionally enable **Open with GitCat** in the Explorer context menu.
4. Launch GitCat. Choose **Open**, **Clone**, or **Create**.

Windows 10/11 x64 is the primary target. The desktop interface uses the Microsoft WebView2 runtime. If the installer requests that runtime, allow it to complete its setup.

The Explorer integration opens a folder in the existing GitCat window as a new tab. Updating respects your previous context-menu choice.

## Linux

Download the x86_64 `.deb`, `.rpm`, or `.AppImage` package from the same release page. Prefer your distribution's package installer for `.deb` or `.rpm` so dependencies are resolved. GitCat needs Git and a compatible WebKitGTK 4.1 environment.

For an AppImage, mark the downloaded file executable in your file manager, then run it. The release build uses Ubuntu 24.04; older distributions may not meet its library requirements. Linux receives less manual interface testing than Windows.

No macOS installer is published or verified.

## Set your commit identity

GitCat uses Git's existing author configuration. If this is your first Git installation, set your name and email in a terminal before committing:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

These commands set the default for all repositories. To set an identity for only one repository, run them inside that repository without `--global`.

For private repositories, either [connect a supported hosting service](integrations.md) or configure Git Credential Manager / your SSH agent. Rust and Node.js are only needed when building GitCat from source.

## Updates

GitCat checks for stable releases automatically every six hours and ignores nightly releases. Use the update control when an update is available to review the release notes and install the signed package. Finish any active repository operation first.

On Linux, `.deb` and `.rpm` updates may prompt for system authorization through `pkexec`. AppImage updates replace the AppImage. Keep using the package format you installed.

**Next:** [Open your first repository](first-repository.md).
