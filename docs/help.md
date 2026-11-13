---
title: Get help & contribute
description: Troubleshoot Cat Ninth applications, report useful bugs, and improve the guides.
---

Start with the project's usage and troubleshooting guides. Check its README and release notes for requirements, known limitations, and recent fixes. You can find each project in the [Cat Ninth organization on GitHub](https://github.com/catninth).

## Report a problem

Open the project's GitHub repository and select **Issues**. Search for an existing report before creating a new one. For mistakes in these guides, use [Documentation issues](https://github.com/catninth/docs/issues).

Include your app version, operating system, installation format, the steps that trigger the problem, what you expected, and the exact error. A screenshot is useful when the problem is visual.

Add relevant settings, logs, or hardware details requested by the project's troubleshooting guide. Keep the steps short enough for someone else to repeat.

For a missing NapCat reading, check [device support](napcat/devices.md) and [NapCat troubleshooting](napcat/troubleshooting.md) first. In a [NapCat issue](https://github.com/catninth/napcat/issues), include the exact model, whether it uses a cable, USB receiver, or Bluetooth, and whether the device is missing altogether or shows a dash.

:::tip Keep private information private
Remove access tokens, passwords, private files, and personal information from screenshots or logs before sharing them.
:::

## Privacy and licenses

GitCat and ClipCat publish privacy notices and code-signing policies alongside their source. Their own source code is licensed under MPL-2.0; third-party components retain their own licenses and notices.

| Application | Privacy notice | License |
| --- | --- | --- |
| GitCat | [Local data, credentials, network requests, and controls](https://github.com/catninth/gitcat/blob/main/PRIVACY.md) | [GitCat license](https://github.com/catninth/gitcat/blob/main/LICENSE) |
| ClipCat | [Recording data, storage, network requests, and controls](https://github.com/catninth/clipcat/blob/main/PRIVACY.md) | [ClipCat license](https://github.com/catninth/clipcat/blob/main/LICENSE) |

Local processing does not mean no network activity. GitCat contacts configured Git hosts and services used by enabled features. NapCat stores [battery history](napcat/battery-history.md) in your Windows profile and checks GitHub Releases for updates unless automatic checks are turned off. See [package verification](downloads.md#package-signatures-and-windows-publisher-labels) for the differences between the apps.

## Improve a guide

Use **Edit this page** below any article to propose a correction on GitHub. Small fixes, clearer examples, and updated screenshots are welcome. The [documentation README](https://github.com/catninth/docs#readme) explains local development and the Docusaurus translation workflow.

## Work on the applications

Choose a repository from [Cat Ninth on GitHub](https://github.com/catninth), then read its README and any contribution instructions. Follow that project's setup and validation steps before opening a pull request. For a larger change, discuss the idea in an issue first.
