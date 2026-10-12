---
title: Submodules
description: Add nested Git repositories, inspect their revisions, and pull or push them together.
---

A submodule is a separate Git repository inside another repository. The parent records a specific commit, so updating the child and recording that update in the parent are separate steps.

## Find and inspect submodules

The **SUBMODULES** section sits below **TAGS** in the left sidebar. Each row shows its path, current commit, commit age, and status. The sidebar filter also searches submodules. Select a row to inspect the remote URL, full commit date, commit message, and the revision recorded in the parent index.

**In sync** means the checked-out commit matches the parent's index. It does not mean the remote has no newer commits. Local changes, changed revisions, conflicts, and uninitialized submodules have distinct indicators.

## Add a submodule

1. Select **+** beside **SUBMODULES**.
2. Enter the remote URL and a repository-relative folder, such as `libraries/shared`.
3. Select **Add submodule**.

Git clones the repository and stages its registration in `.gitmodules` and the parent index. Review and commit these changes in the parent. Existing unstaged changes to `.gitmodules` must be reviewed and staged, committed, or stashed before adding or deleting a submodule. Already staged additions do not prevent adding another submodule.

## Update, edit, open, or delete

Right-click a submodule, use its menu button, or press **Shift+F10** while its row is focused.

- **Update:** fetch and fast-forward to the remote branch where possible. Diverged local commits and local file changes must be resolved first. For an uninitialized submodule, **Initialize** checks out the parent's recorded commit.
- **Edit:** change the remote URL and inspect the current revision. The path stays fixed. Review and commit the `.gitmodules` change afterward.
- **Open this submodule:** open the repository in a separate tab. If it is already open, activate that tab. The parent stays open.
- **Delete:** confirm removal of the working folder and registration from the parent. Local changes and ignored files block deletion. Cached Git history remains available; GitCat does not delete `.git/modules`.

Updating does not automatically stage or commit the parent's changed submodule pointer. Review it in the working-tree panel, then stage and commit when ready.

Initialization requires an empty or missing checkout folder. If files remain after a previous deinitialization, move them to a safe location before initializing again. Deleting an uninitialized submodule also refuses to remove a folder containing local files.

## Pull or push several repositories

Select **Manage repositories** in the submodule section. **Pull all** and **Push all** act on this parent's direct submodules. Enable **Include parent repository** to include the parent too. Nested submodules can be managed by opening their parent in another tab.

Each repository has its own progress and result. Failures and skipped repositories include a reason; other child repositories continue.

- Pull uses fast-forward updates without automatically stashing files. A detached submodule can advance only when its existing commit is an ancestor of the remote target.
- Push requires a checked-out branch and an upstream. A detached HEAD is skipped; open the submodule, check out the intended branch, and retry. Push never forces remote history.
- When included, the parent pulls first. Its updated submodule list is read before continuing. If the parent cannot pull, the children are skipped.
- The parent pushes last, only after every child succeeds. It also requires a clean working tree: commit changed submodule pointers before publishing the parent.

The scope is shown in the dialog. These actions do not include unrelated repository tabs.
