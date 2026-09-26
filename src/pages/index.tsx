import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {IconArrowRight, IconArrowUpRight, IconBook2, IconBrandGithub, IconDownload, IconKeyboard, IconLifebuoy} from '@tabler/icons-react';
import styles from './index.module.css';

function Arrow() { return <IconArrowRight size={18} stroke={1.7} aria-hidden="true" />; }

export default function Home(): ReactNode {
  return (
    <Layout title={translate({id: 'home.meta.title', message: 'Desktop tools, documented'})}
      description={translate({id: 'home.meta.description', message: 'Get to know Cat Ninth. Practical guides for GitCat, the visual Git client, and ClipCat, the replay and recording tool.'})}>
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-heading">
          <div>
            <p className={styles.eyebrow}><span className={styles.eyebrowLine} /><Translate id="home.eyebrow">CAT NINTH DOCUMENTATION</Translate></p>
            <h1 id="home-heading"><Translate id="home.title.first">Less friction.</Translate><br /><span><Translate id="home.title.second">More flow.</Translate></span></h1>
            <p className={styles.intro}><Translate id="home.intro">Meet Cat Ninth. Lightweight desktop tools for your code, your clips, and your workflow.</Translate></p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} to="#projects"><Translate id="home.explore">Explore the guides</Translate><Arrow /></Link>
              <Link className={styles.textButton} href="https://github.com/catninth"><IconBrandGithub size={19} stroke={1.7} aria-hidden="true" /><Translate id="home.github">Find us on GitHub</Translate></Link>
            </div>
          </div>
          <div className={styles.heroArt}>
            <img src={useBaseUrl('/img/cat-ninth-hero.webp')} alt={translate({id: 'home.logo.alt', message: 'The Cat Ninth cat, with a teal tail, blue body, and orange chest'})} width="320" height="320" fetchPriority="high" />
          </div>
        </section>

        <section className={styles.projects} aria-labelledby="projects">
          <div className={styles.sectionHeading}>
            <Heading as="h2" id="projects"><Translate id="home.projects.title">Pick your companion.</Translate></Heading>
            <p><Translate id="home.projects.description">From the first launch to the shortcuts you use every day.</Translate></p>
          </div>
          <div className={styles.projectGrid}>
            <article className={styles.project}>
              <div className={styles.projectBody}>
                <div className={styles.projectTitle}>
                  <img src={useBaseUrl('/img/gitcat/logo.png')} alt="" width="44" height="44" />
                  <div><h3>GitCat</h3><span><Translate id="home.gitcat.category">Your repository, in perspective</Translate></span></div>
                </div>
                <p><Translate id="home.gitcat.description">See your history. Review your changes. Commit, branch, and sync with a visual Git client built around your workflow.</Translate></p>
                <div className={styles.projectActions}>
                  <Link className={styles.guideLink} to="/guides/gitcat"><Translate id="home.gitcat.guide">Get to know GitCat</Translate><Arrow /></Link>
                  <Link className={styles.repoLink} href="https://github.com/catninth/gitcat" aria-label={translate({id: 'home.gitcat.repository', message: 'GitCat GitHub repository'})}><IconBrandGithub size={20} stroke={1.7} aria-hidden="true" /></Link>
                </div>
              </div>
              <Link to="/guides/gitcat/history-and-diffs" className={styles.screenshotLink}>
                <img src={useBaseUrl('/img/gitcat/workspace-preview.webp')} width="720" height="450" loading="lazy" alt={translate({id: 'home.gitcat.screenshot', message: 'Explore GitCat: branch sidebar, commit graph, and staged changes in the desktop interface'})} />
              </Link>
              <div className={styles.projectFoot}><span><Translate id="home.platforms">Windows & Linux</Translate></span><Link href="https://github.com/catninth/gitcat/releases/latest"><Translate id="home.download">Download</Translate><IconArrowUpRight size={15} aria-hidden="true" /></Link></div>
            </article>
            <article className={styles.project}>
              <div className={styles.projectBody}>
                <div className={styles.projectTitle}>
                  <img src={useBaseUrl('/img/clipcat/logo.png')} alt="" width="44" height="44" />
                  <div><h3>ClipCat</h3><span><Translate id="home.clipcat.category">That moment? Keep it.</Translate></span></div>
                </div>
                <p><Translate id="home.clipcat.description">Save what just happened, or record what comes next. Capture your screen, tune your audio, and keep clips on your computer.</Translate></p>
                <div className={styles.projectActions}>
                  <Link className={styles.guideLink} to="/guides/clipcat"><Translate id="home.clipcat.guide">Get to know ClipCat</Translate><Arrow /></Link>
                  <Link className={styles.repoLink} href="https://github.com/catninth/clipcat" aria-label={translate({id: 'home.clipcat.repository', message: 'ClipCat GitHub repository'})}><IconBrandGithub size={20} stroke={1.7} aria-hidden="true" /></Link>
                </div>
              </div>
              <Link to="/guides/clipcat/quality-and-storage" className={styles.screenshotLink}>
                <img src={useBaseUrl('/img/clipcat/settings-preview.webp')} width="720" height="450" loading="lazy" alt={translate({id: 'home.clipcat.screenshot', message: 'Explore ClipCat: the real Settings interface with replay, resolution, and bitrate controls, shown in a browser preview'})} />
              </Link>
              <div className={styles.projectFoot}><span><Translate id="home.platforms">Windows & Linux</Translate></span><Link href="https://github.com/catninth/clipcat/releases/latest"><Translate id="home.download">Download</Translate><IconArrowUpRight size={15} aria-hidden="true" /></Link></div>
            </article>
          </div>
        </section>

        <section className={styles.quickStart} aria-labelledby="quick-heading">
          <div className={styles.quickIntro}><IconBook2 size={25} stroke={1.5} aria-hidden="true" /><h2 id="quick-heading"><Translate id="home.quick.title">A good place to start.</Translate></h2><p><Translate id="home.quick.description">A few useful paths, wherever you are in your setup.</Translate></p></div>
          <div className={styles.quickLinks}>
            <Link to="/guides/downloads"><IconDownload size={21} stroke={1.6} aria-hidden="true" /><div><strong><Translate id="home.quick.downloads">Install your next tool</Translate></strong><span><Translate id="home.quick.downloads.detail">Packages, platforms, and keeping up to date</Translate></span></div><Arrow /></Link>
            <Link to="/guides/gitcat/first-repository"><IconBook2 size={21} stroke={1.6} aria-hidden="true" /><div><strong><Translate id="home.quick.repository">Open your first repository</Translate></strong><span><Translate id="home.quick.repository.detail">From opening a folder to your first commit</Translate></span></div><Arrow /></Link>
            <Link to="/guides/clipcat/first-clip"><IconKeyboard size={21} stroke={1.6} aria-hidden="true" /><div><strong><Translate id="home.quick.clip">Save your first clip</Translate></strong><span><Translate id="home.quick.clip.detail">Set up replay and catch the next moment</Translate></span></div><Arrow /></Link>
            <Link to="/guides/help"><IconLifebuoy size={21} stroke={1.6} aria-hidden="true" /><div><strong><Translate id="home.quick.help">Find a little help</Translate></strong><span><Translate id="home.quick.help.detail">Troubleshooting, bug reports, and contributions</Translate></span></div><Arrow /></Link>
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-heading">
          <div><h2 id="about-heading"><Translate id="home.about.title">Small by choice. Open by nature.</Translate></h2><p><Translate id="home.about.description">Cat Ninth builds focused alternatives to bloated desktop software. Local-first where possible, with development out in the open. These guides help you get comfortable and get on with your day.</Translate></p></div>
          <Link href="https://github.com/catninth"><Translate id="home.about.link">Meet the organization</Translate><IconArrowUpRight size={18} aria-hidden="true" /></Link>
        </section>
      </main>
    </Layout>
  );
}
