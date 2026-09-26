# Cat Ninth documentation

A Docusaurus 3 site for [Cat Ninth](https://github.com/catninth), with task-based English guides for GitCat and ClipCat. Includes local search, responsive navigation, dark/light themes, authentic interface captures, and Docusaurus i18n catalogs.

## Local development

Use Node.js 22 or newer and npm. On Windows, use `npm.cmd` if your PowerShell execution policy blocks `npm.ps1`.

```sh
npm ci
npm start
```

The default site path is `http://localhost:3000/`. Local search is generated for production builds, so verify search with:

```sh
npm run typecheck
npm run build
npm run serve
```

Builds fail on broken internal links, Markdown images, and anchors. CI checks TypeScript, translation catalogs, and the production build.

## Content map

- `docs/`: English documentation, divided into organization, GitCat, and ClipCat guides.
- `src/pages/index.tsx`: organization home page; all custom UI copy uses `Translate` / `translate`.
- `src/css/custom.css`: shared Docusaurus / Infima theme tokens and documentation styling.
- `src/pages/index.module.css`: home page layout.
- `src/theme/SearchBar/index.tsx`: small accessibility adapter for the local-search plugin's generated autocomplete markup. Recheck results, empty results, clearing, and keyboard selection when upgrading the plugin.
- `static/img/`: supplied organization logo and application captures.
- `sidebars.ts`: separate organization and product navigation.
- `i18n/en/`: generated source translation catalogs.
- `CONTENT_SOURCES.md`: reviewed revisions, evidence, screenshot provenance, and maintenance checklist.

The design carries over the apps' system typography, graphite surfaces, small controls, and restrained mint accent. It uses Docusaurus's existing navigation and accessibility semantics. Buttons respond on press; no decorative motion. Reduced motion, reduced transparency, high contrast, and both color schemes are handled in CSS.

## Translation workflow

English is the only enabled locale. Do not duplicate English articles into `i18n/en`; `docs/` is the English Markdown source. Docusaurus translates Markdown documents as complete files and React/navigation labels through JSON catalogs.

After changing UI labels or sidebar categories:

```sh
npm run write-translations -- --locale en --override
```

To add Hungarian later:

The `--override` flag above refreshes English source messages after copy changes. Do not use it on an existing translated locale unless you intend to replace its translations.

1. Add `'hu'` to the `locales` array near the top of `docusaurus.config.ts`, plus `hu: {label: 'Magyar', htmlLang: 'hu', direction: 'ltr'}` to `i18n.localeConfigs`.
2. Run `npm run write-translations -- --locale hu` to extract the current translation IDs.
3. Translate `i18n/hu/code.json`, `i18n/hu/docusaurus-theme-classic/*.json`, and `i18n/hu/docusaurus-plugin-content-docs/current.json`.
4. Copy the contents of `docs/` to `i18n/hu/docusaurus-plugin-content-docs/current/` and translate the documents. Keep IDs, relative file paths, explicit heading IDs, and slugs stable. Translate custom links inside MDX too.
5. If using localized screenshots, place equivalents under `i18n/hu/docusaurus-plugin-content-docs/current/` and reference them with relative Markdown paths. Shared application screenshots can stay in `static/img/`.
6. Add `'hu'` to the local-search `language` option. The installed `lunr-languages` package includes `lunr.hu.js`; verify representative Hungarian queries after building.
7. Run `npm start -- --locale hu` to review it, then `npm run build` to build every enabled locale. Docusaurus shows the locale dropdown once more than one language is enabled.

See the [official Docusaurus i18n guide](https://docusaurus.io/docs/i18n/introduction). React translation IDs are intentionally stable; avoid renaming IDs just to revise copy.

## Hosting

Production is hosted on Vercel at `https://catninth.com/`. The default Docusaurus configuration uses `url: 'https://catninth.com'` and `baseUrl: '/'`, so assets, navigation, search indexes, and canonical URLs resolve from the domain root.

Use `npm run build` as the Vercel build command and `build` as the output directory. Rebuild and redeploy after changing the site URL or base path; these values are embedded in the generated files. Remove outdated `SITE_URL` / `BASE_URL` environment overrides in Vercel, or set them to `https://catninth.com` and `/` respectively.

`SITE_URL` and `BASE_URL` remain available for alternate hosting locations. For a GitHub Pages project preview, use `SITE_URL=https://catninth.github.io` and `BASE_URL=/docs/`. All internal app links and images honor Docusaurus's base URL.

The optional **Publish GitHub Pages** workflow is manually triggered and builds `main`. To use it, configure **Settings > Pages > Source: GitHub Actions** and set the build environment to the intended Pages URL and base path. This workflow does not deploy to Vercel.

## Maintaining accuracy

Review source and release notes together. The GitCat README contains old limitations that no longer match the current UI. Do not copy it verbatim. Current guides are checked against GitCat 1.8.0 and ClipCat 0.6.0; see `CONTENT_SOURCES.md` for the pinned commits and known differences.

Use real application screenshots, include descriptive alt text, and identify preview/sample data. Do not turn simulated capture status into a claim of native recording verification.

After replacing the supplied logo or a home page screenshot, run `npm run optimize:images` and commit the generated serving derivatives. The originals remain available for full-size documentation images and future captures.

The included `static/robots.txt` is published at the domain root. If using an alternate deployment under a subpath, its domain-root site must provide `robots.txt` instead.

Overrides select patched `serialize-javascript` and SockJS's `uuid` dependencies. SockJS uses the compatible CommonJS `v4()` API. Recheck these overrides during Docusaurus upgrades. Never use `npm audit fix --force` without reviewing its proposed framework downgrade or major dependency changes.
