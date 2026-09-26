import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const locales = ['en'];

const config: Config = {
  title: 'Cat Ninth',
  tagline: 'Focused tools. Clear guides.',
  favicon: 'img/favicon.png',
  // GitHub Pages defaults; override both values for a custom domain or preview.
  url: process.env.SITE_URL || 'https://catninth.github.io',
  baseUrl: process.env.BASE_URL || '/docs/',
  organizationName: 'catninth',
  projectName: 'docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},
  i18n: {
    defaultLocale: 'en',
    locales,
    localeConfigs: {en: {label: 'English', htmlLang: 'en', direction: 'ltr'}},
  },
  presets: [['classic', {
    docs: {
      routeBasePath: 'guides',
      sidebarPath: './sidebars.ts',
      editUrl: 'https://github.com/catninth/docs/edit/main/',
      showLastUpdateTime: false,
    },
    blog: false,
    theme: {customCss: './src/css/custom.css'},
  } satisfies Preset.Options]],
  themes: [['@easyops-cn/docusaurus-search-local', {
    hashed: true,
    language: ['en'],
    docsRouteBasePath: '/guides',
    indexBlog: false,
    indexPages: true,
    highlightSearchTermsOnTargetPage: true,
    searchBarShortcutHint: true,
    searchResultLimits: 8,
  }]],
  themeConfig: {
    image: 'img/cat-ninth.png',
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
    navbar: {
      title: 'Cat Ninth',
      logo: {alt: '', src: 'img/cat-ninth-nav.webp', width: 32, height: 32},
      items: [
        {to: '/guides/welcome', label: 'Documentation', position: 'left'},
        {type: 'docSidebar', sidebarId: 'gitcatSidebar', label: 'GitCat', position: 'left'},
        {type: 'docSidebar', sidebarId: 'clipcatSidebar', label: 'ClipCat', position: 'left'},
        {href: 'https://github.com/catninth', label: 'GitHub', position: 'right'},
        {type: 'search', position: 'right'},
        ...(locales.length > 1 ? [{type: 'localeDropdown' as const, position: 'right' as const}] : []),
      ],
    },
    footer: {
      links: [
        {title: 'Cat Ninth', items: [
          {label: 'Home', to: '/'},
          {label: 'Cat Ninth on GitHub', href: 'https://github.com/catninth'},
        ]},
        {title: 'Explore', items: [
          {label: 'Documentation', to: '/guides/welcome'},
          {label: 'Downloads & updates', to: '/guides/downloads'},
        ]},
        {title: 'Community', items: [
          {label: 'Get help & contribute', to: '/guides/help'},
          {label: 'Documentation source', href: 'https://github.com/catninth/docs'},
        ]},
      ],
      copyright: 'Cat Ninth · Lightweight desktop tools. Local-first where possible, with development out in the open. Built with Docusaurus.',
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.vsDark, additionalLanguages: ['bash', 'powershell']},
  } satisfies Preset.ThemeConfig,
};
export default config;
