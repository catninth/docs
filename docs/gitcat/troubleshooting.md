---
title: Troubleshooting GitCat
description: Resolve common GitCat installation, authentication, repository, and commit problems.
---

Read the error first. GitCat often offers a relevant recovery action beside it.

## Git is missing or a commit has no author

Run `git --version` in a terminal. Install Git 2.31+ if needed, then restart GitCat. For a missing author, set your Git name and email as shown in [Installation](install.md#set-your-commit-identity).

## A repository is unavailable

If its folder moved or stopped being a Git repository, use **Locate** on the unavailable-repository page. Use **Retry** after reconnecting a drive. Closing the tab does not delete the folder.

## Authentication fails

For a connected GitHub account, reconnect in **Preferences > Integrations**. Confirm you can access the repository in a browser. For system Git authentication, test the same remote in a terminal and finish Git Credential Manager or SSH-agent setup there.

GitCat cannot answer an interactive credential prompt in a terminal window. See [Hosting integrations](integrations.md) for the supported in-app sign-in paths.

## Push is rejected

Fetch and inspect the graph. If someone else pushed first, pull with the appropriate strategy and resolve any conflicts before pushing again. If there is no upstream or remote, use the offered **Set upstream** or **Add remote** action. Do not force push simply to silence an error.

## Changes or remote branches look stale

Press **F5** to refresh local state and **Ctrl+L** to fetch remote information. Check the auto-fetch interval in **Preferences > General**. Disk watching and background fetch focus on the active repository.

## A file is in use or Git reports a lock

Close the process holding the affected file and retry. For a Git lock error, check whether another Git operation is still running. GitCat intentionally does not delete `.git/index.lock` or change the global `safe.directory` configuration for you.

## An operation is stuck at a conflict

Use the operation banner to identify what stopped. Resolve and stage each conflicted file, then **Continue**, or choose **Abort** if you intend to cancel. Follow [Resolve conflicts](conflicts.md).

Still stuck? [Report a problem](../help.md#report-a-problem) with your version, platform, exact error, and reproduction steps.
