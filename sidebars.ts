import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  communitySidebar: ['welcome', 'downloads', 'help', 'licenses'],
  gitcatSidebar: [
    'gitcat/index',
    {type: 'category', label: 'Start here', collapsed: false, items: ['gitcat/install', 'gitcat/first-repository']},
    {type: 'category', label: 'Everyday Git', collapsed: false, items: ['gitcat/changes-and-commits', 'gitcat/branches-and-remotes', 'gitcat/history-and-diffs', 'gitcat/conflicts']},
    {type: 'category', label: 'Make it yours', collapsed: false, items: ['gitcat/integrations', 'gitcat/preferences', 'gitcat/shortcuts', 'gitcat/troubleshooting']},
    {type: 'link', label: 'GitCat on GitHub ↗', href: 'https://github.com/catninth/gitcat'},
  ],
  clipcatSidebar: [
    'clipcat/index',
    {type: 'category', label: 'Start here', collapsed: false, items: ['clipcat/install', 'clipcat/first-clip']},
    {type: 'category', label: 'Capture & save', collapsed: false, items: ['clipcat/replay-and-recording', 'clipcat/quality-and-storage', 'clipcat/audio', 'clipcat/gallery']},
    {type: 'category', label: 'Make it yours', collapsed: false, items: ['clipcat/settings-and-shortcuts', 'clipcat/troubleshooting']},
    {type: 'link', label: 'ClipCat on GitHub ↗', href: 'https://github.com/catninth/clipcat'},
  ],
};
export default sidebars;
