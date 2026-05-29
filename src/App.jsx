import Hero from './components/Hero.jsx';
import AttackTimeline from './components/AttackTimeline.jsx';
import RecoveryComparison from './components/RecoveryComparison.jsx';
import ADChangesFlood from './components/ADChangesFlood.jsx';
import BackupSizeComparison from './components/BackupSizeComparison.jsx';
import Benefits from './components/Benefits.jsx';

const NAV_LINKS = [
  { href: '#timeline',    label: '01 — Timeline' },
  { href: '#recovery',   label: '02 — Recovery' },
  { href: '#changes',    label: '03 — AD Changes' },
  { href: '#backup-size',label: '04 — Backup Size' },
  { href: '#benefits',   label: '05 — Benefits' },
];

export default function App() {
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
      </nav>

      <main>
        <Hero />
        <AttackTimeline />
        <RecoveryComparison />
        <ADChangesFlood />
        <BackupSizeComparison />
        <Benefits />
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
