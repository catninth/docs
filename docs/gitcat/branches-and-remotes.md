---
title: Branches & remotes
description: Create branches, fetch updates, pull changes, and push commits safely.
---

Branches separate lines of work. Remotes are other copies of your repository, often hosted on GitHub.

## Create or switch a branch

Choose **Branch** in the toolbar, or press **Ctrl+B**, to create a branch at the current commit. Use a descriptive name such as `fix/login-message` and choose whether to check it out.

Double-click a local branch to switch to it. Double-click a remote branch to create or check out its local tracking branch. Save or stash work before switching if it might conflict with the target branch.

To merge another branch into your current branch, right-click its branch reference in the graph and choose **Merge … into …**. Check the destination name before proceeding.

## Fetch, pull, and push

| Action | What it changes | Default shortcut |
| --- | --- | --- |
| Fetch | Downloads remote information without merging it into your files | **Ctrl+L** |
| Pull | Fetches and integrates changes into your current branch | **Ctrl+Alt+P** |
| Push | Sends local commits to the branch's remote destination | **Ctrl+Shift+P** |

Ahead/behind counts show commits to send or receive. Auto-fetch runs on opening a repository and periodically for the active repository; its default interval is one minute.

### Choose a pull strategy

- **Merge:** integrate the remote branch, creating a merge commit if needed.
- **Fast-forward only:** move forward only when local and remote history have not diverged.
- **Rebase:** replay local commits on top of the remote branch, rewriting those local commits.

Select the pull mode from the toolbar menu or set a default in **Preferences > General**. Pull can temporarily stash a dirty working tree; conflicts may still need attention when changes are restored.

## Publish a new branch or repository

If a branch lacks a tracking destination, use **Set upstream** from its context menu or the offered recovery action. Pushing a repository without remotes opens **Add remote**: supply an existing URL or create an empty repository on a connected GitHub service, then push.

:::warning Force push rewrites remote history
Use normal Push unless you deliberately need to replace published history. GitCat's force push uses lease checks and asks for confirmation, but it still changes what collaborators see. If the lease is refused, fetch and review the remote changes before deciding what to do.
:::

For merge or rebase stops, follow [Resolve conflicts](conflicts.md).
