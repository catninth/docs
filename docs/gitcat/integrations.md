---
title: Hosting integrations
description: Connect GitHub to GitCat and understand which hosting services support native integration.
---

Connect GitHub for repository browsing and hosting details inside GitCat.

## Connect GitHub.com

1. Open **Preferences** with **Ctrl+,**, then choose **Integrations**.
2. Select **GitHub.com** and start sign-in.
3. Open the verification page shown by GitCat and enter its code.
4. Review GitHub's authorization request and approve it if it matches your intent.
5. Return to GitCat and wait for the connected account to appear.

Sign-in requires the desktop application; it is unavailable in the browser-only demo. Once connected, you can browse accessible repositories when cloning, create a remote repository, and see supported pull-request and author information. Pull-request links open the hosting site.

## GitHub Enterprise Server

Choose the Enterprise integration, enter the host name such as `git.example.com`, and provide a personal access token in Preferences. Enter the host only, without a scheme, port, or path. Your account and token must have access to the repositories you use.

Never put a token in a repository URL, screenshot, or issue report. Use the application's token field.

## Other hosts

GitLab, Bitbucket, Azure DevOps, and Gitea / Forgejo are currently **links-only integrations**. GitCat recognizes their remote links, but does not provide their native account sign-in, repository picker, or remote creation flow.

You can still clone and work with ordinary Git remotes on those services using system Git credentials. With SSH URLs, keep your SSH key and agent configured. GitCat does not provide an interactive terminal credential prompt.

## Connection trouble

A revoked or expired sign-in may need reconnecting in **Integrations**. For permission errors, confirm that the account can access the repository on the hosting website. For SSH failures, verify the same remote works in a terminal. See [Troubleshooting](troubleshooting.md).
