import { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import AttackReality from './components/AttackReality.jsx';
import WhyAD from './components/WhyAD.jsx';
import BackupSizeComparison from './components/BackupSizeComparison.jsx';
import AttackTimeline from './components/AttackTimeline.jsx';
import RecoveryComparison from './components/RecoveryComparison.jsx';
import ADChangesFlood from './components/ADChangesFlood.jsx';
import RecoveryProblem from './components/RecoveryProblem.jsx';
import SevenClickRecovery from './components/SevenClickRecovery.jsx';
import CohesityIntegration from './components/CohesityIntegration.jsx';
import Benefits from './components/Benefits.jsx';
import FullSolution from './components/FullSolution.jsx';

const NAV_LINKS = [
  { href: '#attack-reality',       label: '01 — Attack Reality' },
  { href: '#why-ad',               label: '00 — Why AD' },
  { href: '#backup-size',          label: '02 — Backup Size' },
  { href: '#timeline',             label: '03 — Timeline' },
  { href: '#recovery',             label: '04 — Recovery' },
  { href: '#changes',              label: '05 — AD Changes' },
  { href: '#recovery-problem',     label: '07 — Recovery Problem' },
  { href: '#seven-click',          label: '08 — 7-Click Recovery' },
  { href: '#cohesity-integration', label: '09 — Cohesity' },
  { href: '#benefits',             label: '10 — Benefits' },
  { href: '#full-solution',        label: '11 — Full Solution' },
];

export default function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
  }, [light]);

  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-brand">ADFR// EDU</a>
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setLight(v => !v)}
          style={{
            flexShrink: 0,
            marginLeft: 16,
            padding: '6px 14px',
            borderRadius: 100,
            border: '1px solid var(--border-bright)',
            background: light ? '#0d1a35' : '#f0f4ff',
            color: light ? '#f0f4ff' : '#0d1a35',
            fontFamily: 'var(--ff-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.06em',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          {light ? '🌙 Dark' : '☀ Light'}
        </button>
      </nav>

      <main>
        <Hero />
        <AttackReality />
        <WhyAD />
        <BackupSizeComparison />
        <AttackTimeline />
        <RecoveryComparison />
        <ADChangesFlood />
        <RecoveryProblem />
        <SevenClickRecovery />
        <CohesityIntegration />
        <Benefits />
        <FullSolution />
      </main>

      <footer className="footer">
        <p>
          Educational Demo — Based on Semperis ADFR &amp; Cohesity ADFR product materials.{' '}
          <br />
          For classroom and enterprise training use only. Not affiliated with Semperis Inc.
        </p>
      </footer>
    </>
  );
}
