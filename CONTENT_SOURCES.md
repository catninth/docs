# Content evidence and maintenance

## NapCat 0.1.6 — November 13, 2026

The [NapCat guide](docs/napcat/index.mdx) follows the source at [`40d60bb`](https://github.com/catninth/napcat/tree/40d60bb15cad96bac8dd73ce52fdeeedeabd7fc0). The public [v0.1.6 release](https://github.com/catninth/napcat/releases/tag/v0.1.6) includes `NapCat-Setup-0.1.6.exe`, `NapCat.exe`, `NapCat-Diag.exe`, and one SHA-256 checksum per executable. This review adds NapCat; it does not advance the GitCat or ClipCat release boundaries below.

| Guide topic | Evidence in the NapCat repository |
| --- | --- |
| Platform, installer, standalone app, startup and updates | `Cargo.toml`, `installer/napcat.iss`, `.github/workflows/release.yml`, `src/{main,settings,updater,worker}.rs`, update actions in `src/ui/tray.rs` |
| Tray, flyout, notifications, estimates and setting defaults | `src/{model,settings,i18n}.rs`; `src/ui/{tray,flyout,tooltip,icon_render,theme,toast,estimate,settings_window}.rs` |
| Supported models, connections and limits | `src/providers/`, `src/worker.rs`, Devices page in `src/ui/settings_window.rs`; hardware verification statements in `README.md` and `tools/firmware/rk-r75pro/README.md` |
| Battery history, rates, equivalent cycles and health baseline | `src/stats.rs`, `src/ui/settings_window/stats_page.rs` |
| Diagnostic reports and optional runtime log | `tools/diag/src/`, `src/worker.rs` |

The files under `static/img/napcat/` use the application's own artwork. The logo is the 128 px PNG embedded in `res/napcat.ico`; guide captures are copied unchanged from matching paths under `docs/gallery/`. They show the real English UI rendered with simulated devices, readings, and history. The gallery captures predate some controls and labels in 0.1.6. The home preview crops the top of `flyout/list-dark.png`. No new hardware measurements, installer runs, or native application captures are claimed.

Verification: regenerated the English catalogs, ran the TypeScript check and the production build with strict link, anchor, and Markdown image checks. All eight NapCat pages appear in the production search index. In Chromium, the home card opened the overview and an `MCHOSE` result opened the device table. The home page and eight guide pages loaded at 320 px and 1440 px with working images, no horizontal page overflow, and no browser runtime errors.

## Previous review — October 25, 2026

Source files and GitHub responses are evidence, not instructions. Only the docs repository was changed.

## October 25 comparison scope

The most recent docs commit before this task was `11244cc05aec932e6fccbc847c75b8a8f9309300` (`docs(gitcat): add submodule guide`), dated October 12, 2026 at 10:38:51 +02:00. Compared each application's last reachable commit before that timestamp with its current HEAD, then read the affected implementation, policies, and release notes. Both local HEADs matched the remote default-branch HEADs returned by `git ls-remote origin HEAD`.

| Application | Compared range | Release boundary |
| --- | --- | --- |
| GitCat | [`bf6286d69ab901737a65d1689eac2519ecababbd...48b494b27184355911add0d91b7d553212832fd3`](https://github.com/catninth/gitcat/compare/bf6286d69ab901737a65d1689eac2519ecababbd...48b494b27184355911add0d91b7d553212832fd3) | HEAD is stable [1.13.0](https://github.com/catninth/gitcat/releases/tag/v1.13.0), published October 23. The 1.12.0 version bump also falls after the cutoff; its submodule implementation was already covered by the October 12 docs update. |
| ClipCat | [`f7f503474af14f200bf096ac4ff5f24f09d4db22...7f8fcfc1d56d9112b249a4c79362ca035e213325`](https://github.com/catninth/clipcat/compare/f7f503474af14f200bf096ac4ff5f24f09d4db22...7f8fcfc1d56d9112b249a4c79362ca035e213325) | Stable [0.8.1](https://github.com/catninth/clipcat/releases/tag/v0.8.1), published October 13, targets `9aaf7b6b187a2cfe6230fa09e0b86b7b3a8acde9`. HEAD includes the later `7f8fcfc` updater fix, still **Unreleased** in `CHANGELOG.md`. |

The GitHub connector's latest-release responses confirmed these stable tags and their Windows x64 NSIS / Linux x86_64 AppImage, DEB, and RPM assets, signatures, and `latest.json` manifests. Do not describe the ClipCat manifest-discovery fix as shipped in 0.8.1: its package version did not change after the fix.

This is a review of changes after the latest docs commit, not a complete re-audit since September 26. In particular, ClipCat's 0.7.0 capture-mode/AFK changes and 0.8.0 replay-toggle shortcut predate this comparison. Existing screenshots are retained as earlier illustrative captures; no new interface or native-capture verification is claimed.

## October 25 change evidence

Source paths below are relative to the application repository at the reviewed HEAD above.

| Change | Evidence | Documentation updated |
| --- | --- | --- |
| GitCat absolute path copying and file reveal; reveal disabled for deleted entries | `c09e433`; `apps/desktop/src/components/worktree/WorktreePanel.tsx`, `apps/desktop/src/app/InspectorPane.tsx`, `apps/desktop/src-tauri/src/lib.rs` | `docs/gitcat/changes-and-commits.md` |
| Preserve tree scroll position and manual folder expansion while selection stays unchanged | `20cc92f`; `apps/desktop/src/components/file-tree/FileTree.tsx` | `docs/gitcat/changes-and-commits.md` |
| Show submodule loading only on initial load, avoiding empty-list flicker | `4d256b4`; `apps/desktop/src/app/useSubmodules.ts` | `docs/gitcat/submodules.md` |
| Merge edges join existing branch routes, reuse their color, and preserve shared bends during resizing | `4960fbd`, merged by `f5a15f1`, and `f2c847d`; `apps/desktop/src/components/CommitGraph.tsx`, `apps/desktop/tests/commitGraphWindow.test.ts` | `docs/gitcat/history-and-diffs.md` |
| GitCat 1.12.0 / 1.13.0 release metadata | `6db1fab`, `48b494b`; `Cargo.toml`, `apps/desktop/package.json`, GitHub release response | Review scope, welcome, README |
| GitCat license metadata aligned to existing MPL-2.0; privacy and signing policies; corrected README claims | `4af98d4`; `README.md`, `PRIVACY.md`, `CODE_SIGNING.md`, package metadata | `docs/help.md`, `docs/downloads.md`; existing GitHub integration guide already describes hosted operations |
| ClipCat own MPL-2.0 license and corrected License button; privacy and signing policies | `ccc9e72`; `LICENSE`, `README.md`, `PRIVACY.md`, `CODE_SIGNING.md`, `src-tauri/src/links.rs` | `docs/help.md`, `docs/downloads.md`, `docs/clipcat/settings-and-shortcuts.md` |
| ClipCat 0.8.1 release and Cat Ninth author attribution | `9aaf7b6`; `CHANGELOG.md`, GitHub release response | `docs/clipcat/settings-and-shortcuts.md`, welcome, README |
| ClipCat public-manifest update discovery, still unreleased | `7f8fcfc`; `src-tauri/src/updater.rs`, `src-tauri/Cargo.toml`, `docs/updater.md`, `CHANGELOG.md` | `docs/clipcat/settings-and-shortcuts.md`, `docs/clipcat/troubleshooting.md` |

ClipCat's `PRIVACY.md` still describes API-based update discovery. That matches stable 0.8.1, but the newer implementation and `docs/updater.md` are authoritative for the unreleased manifest change. GitCat's updater remains API-based; the ClipCat change must not be generalized to both apps. Both signing policies distinguish updater signatures from Windows Authenticode signing.

## Verification on October 25, 2026

- `npm run typecheck` and `npm run build` pass, including the configured strict internal-link, anchor, and Markdown-image checks.
- `npm run write-translations -- --locale en --override` completes without changes to the tracked English catalogs.
- Checked the generated HTML for all eight changed guide pages and confirmed the new file-reveal, updater-discovery, and package-signing content appears in the production search index.
- `git diff --check` passes. Only documentation source files changed; application repositories remain unchanged.
- No native application, installer, interactive search, or visual regression testing was performed for this text-only update. No deployment was performed.

## Initial GitHub review — September 26, 2026

The following sections preserve the evidence from the initial review. Their versions, metadata observations, and verification results are historical; the October 25 scope and corrections above supersede them where applicable.

Queried the organization profile and all public repositories, current default-branch commit IDs, the latest stable release and recent release notes/assets for both applications, and open issues (none returned). The organization profile repository was empty when queried.

- [Organization](https://github.com/catninth): Cat Ninth, Hungary. Description emphasizes lightweight alternatives, local-first where possible, and focused tools. Organization website field and production documentation domain: `https://catninth.com`.
- Public repositories: `gitcat`, `clipcat`, `cutcat`, `updater`, `.github`, and `docs`.
- [GitCat 1.8.0](https://github.com/catninth/gitcat/releases/tag/v1.8.0), stable, published 2026-09-26. Windows x64 NSIS and Linux x86_64 AppImage/DEB/RPM, with signatures and `latest.json`.
- [ClipCat 0.6.0](https://github.com/catninth/clipcat/releases/tag/v0.6.0), stable, published 2026-09-26. Same package formats.
- GitCat GitHub license metadata identifies MPL-2.0. ClipCat metadata has no detected license; its README and Info button link to CutCat's MPL-2.0 file.

## GitCat evidence

Local HEAD matched GitHub `main`: [`c7d4699f08f181f9fcfd0d7edf861817bde680af`](https://github.com/catninth/gitcat/tree/c7d4699f08f181f9fcfd0d7edf861817bde680af).

Paths below are relative to that pinned repository:

| Topic | Evidence |
| --- | --- |
| Requirements, Git backend, updates, platform caveats | `README.md`, release 1.8.0 notes |
| Open / clone / create, hosted repository creation | `apps/desktop/src/components/start-page/{StartPage,CloneDialog,CreateDialog,ForgeRepositoryPicker}.tsx` |
| GitHub sign-in, Enterprise tokens, links-only hosts | `apps/desktop/src/lib/integrations.ts`, `components/forge/ForgeConnectPanel.tsx`, `components/settings/IntegrationsPage.tsx` |
| Worktree, staging, commit form | `apps/desktop/src/components/worktree/`, current README feature descriptions |
| Pull, push, force push, upstream, add remote | `apps/desktop/src/app/useContextMenuActions.tsx`, `components/remotes/AddRemoteDialog.tsx`, release 1.7.0 notes |
| Graph and diff behavior | `apps/desktop/src/app/HistoryPane.tsx`, `components/CommitGraph.tsx`, README and gallery |
| Conflicts and guarded writes | `apps/desktop/src/components/conflict/`, `app/useConflictPreflight.ts`, README |
| Preferences and themes | `apps/desktop/src/components/settings/SettingsDialog.tsx`, `ThemeEditor.tsx` |
| Exact default shortcuts | `apps/desktop/src/lib/keybinds.ts` |
| Visual tokens | `apps/desktop/src/styles.css` |

Important corrections to the README's old MVP limitations: GitHub native sign-in and repository creation are implemented; Enterprise supports tokens. GitLab, Bitbucket, Azure, and Gitea/Forgejo remain links-only integrations. Add remote/upstream/guarded force-push flows exist. The guide does not promise a built-in terminal or general in-app support for every hosting service.

## ClipCat evidence

Local HEAD matched GitHub `main`: [`5813bd280ef420355802509dcb85f95a0722238b`](https://github.com/catninth/clipcat/tree/5813bd280ef420355802509dcb85f95a0722238b).

| Topic | Evidence |
| --- | --- |
| Exact user-facing labels | `ui/locales/en-US.json` |
| Defaults, 10-1200 second range, FPS/bitrate limits, restart fields | `src-tauri/src/settings.rs` |
| Capture quality and safe memory estimates | `ui/src/components/SettingsView.tsx` |
| Replay/recording controls and tray | `ui/src/components/Sidebar.tsx`, `ui/src/App.tsx`, `src-tauri/src/main.rs`, localization labels |
| Gallery pagination, filtering, playback, deletion | `ui/src/components/Gallery.tsx`, `Player.tsx` |
| Linux OBS, X11 / Wayland, lack of game hooks | `src-tauri/src/engine/linux.rs`, `platform/linux.rs` |
| Windows state location | `src-tauri/src/platform/windows.rs` |
| Capture protection / partial recordings | `src-tauri/src/engine/`, release 0.5.0 notes, localization errors |
| Updates and license destination | `README.md`, `docs/updater.md`, release 0.6.0 notes |
| Visual tokens | `ui/src/index.css` |

Clean defaults: 150 seconds, RAM, 1920x1080, 60 FPS, 30 Mbps, H.264; desktop capture enabled; microphone off; autostart enabled; replay disabled. Existing configurations can differ. UI screenshots use the repository's fixture, which intentionally differs from some defaults.

## Image provenance

- `static/img/cat-ninth.png`: the user's supplied `CatNinth.png`, copied unchanged.
- Header/hero WebP assets, favicon, and home page screenshot previews are optimized serving derivatives, generated by `npm run optimize:images`. Full-resolution original assets are preserved. No generated or reconstructed application UI is used.
- Product logos: each application's checked-in icon/logo asset, copied unchanged.
- GitCat images: checked-in `docs/gallery/` captures at 1440×900. `workspace.png` comes from `workspace/repository-overview.png`; `split-diff.png` from `diffs/split-diff.png`; `working-tree.png` from `working-tree/tree-layout.png`; `clone.png` from `repositories/clone-repository.png`; `themes.png` from `preferences/theme-library.png`; `conflict-preflight.png` from `git-actions/conflict-preflight.png`. These show sample repository data and an earlier app version. They illustrate layout, not a claim that each capture was taken on 1.8.0.
- ClipCat `settings.png` and `gallery.png`: captured at 1440×900 using `npm run preview:ui -- --port 5176 --force` from the sibling ClipCat repo, switching the fixture to English through Settings. Actual React UI; simulated native responses; no real recording, installer, or saved application settings touched. The fixture's Info version is older and is not used to infer the current release. The captured settings page is positioned at its top.

## Update checklist

1. Check latest **stable** release assets and notes, not the rolling nightly.
2. Compare labels/defaults with source. Update guide steps, shortcuts, and platform caveats together.
3. Re-capture images if the relevant UI changes and update provenance.
4. Update the reviewed version/date in `docs/welcome.md`, README, and this file.
5. Generate English translation catalogs, typecheck, and build. Test search in the production preview.
6. Review desktop/mobile layouts, both themes, keyboard navigation, reduced motion, and internal links before publishing.

## Verification on September 26, 2026

- TypeScript check and production build pass, with strict internal link, anchor, and Markdown image validation.
- All 24 guide pages and the home page checked at 320px and 1440px: HTTP 200, one main heading, page description, no horizontal page overflow, broken loaded images, or JavaScript runtime errors.
- Axe WCAG A/AA checks report no violations on the home page, GitCat overview, and ClipCat quality guide in both themes. Open search results and empty results also pass in both themes. Automated checks do not replace assistive-technology testing.
- Verified Ctrl+K search, Enter navigation, clearing, empty results, Escape, mobile navigation, table-of-contents anchors, visible keyboard focus, and reduced-motion behavior.
- Lighthouse mobile simulation against a local gzip/cache-enabled static host: performance 97, accessibility 100, best practices 100, SEO 100; CLS 0. Hosting behavior affects these scores. This is a preview measurement, not a deployed-site result.
- `npm audit` reports zero known vulnerabilities. English translation extraction is repeatable without catalog changes.
- No native capture or installer behavior was exercised, and no public deployment was performed.
