---
title: Changes & commits
description: Review working changes, stage files, and create a clear commit in GitCat.
---

A commit saves a selected set of changes to your local history. Pushing shares those commits with a remote.

## Make a commit

1. Edit files in your usual editor, then return to GitCat. Changes refresh automatically; **F5** forces a refresh.
2. Select **WIP** in the graph, or press **Ctrl+Shift+W**.
3. Select an unstaged file to review its diff.
4. Stage the files you want in this commit. **Stage all** includes every current change; **Unstage** takes a file back out without deleting your edits.
5. Enter a short **Summary**, with an optional **Description** for context.
6. Select the commit button, or press **Ctrl+Enter** from the working-tree panel.

![GitCat working tree showing separate staged and unstaged file lists and the commit form.](/img/gitcat/working-tree.png)

After success, the new commit appears in the graph. Unstaged edits remain in your working tree. The summary counter helps you aim for a readable 72-character subject.

## File actions

Right-click a changed file to stage or unstage it, copy its path, save a patch, stash that file, or add an ignore rule for the file, extension, or folder. **Path** and **Tree** switch the file-list layout.

:::warning Discard removes uncommitted work
Discarding a file or all changes removes the affected uncommitted content. Review the confirmation carefully. If you may need the edits later, commit them, save a patch, or stash them first.
:::

## Amend and sign off

**Amend** updates the most recent commit instead of creating another one. This rewrites its identity, so use it carefully if that commit is already shared. **Sign off** adds a `Signed-off-by` trailer; it is different from a cryptographic Git signature.

## Set changes aside

Use **Stash** to store tracked and untracked work temporarily. **Pop** restores the latest stash and removes it if successful. Restoring can produce conflicts; [resolve them](conflicts.md) before continuing.

**Next:** [Work with branches and remotes](branches-and-remotes.md).
