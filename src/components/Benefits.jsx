const BENEFITS = [
  {
    icon: '🌐',
    title: 'Recover Anywhere',
    desc: 'Removes dependence on source hardware. Restore to any VM, cloud instance, or physical server — no hardware matching required.',
    highlight: 'recover anywhere',
    accent: 'var(--semperis)',
    hero: false,
  },
  {
    icon: '🧹',
    title: 'Malware-Free Recovery',
    desc: 'Decoupled from the OS entirely. Because only AD data is backed up, there is no pathway for malware embedded in Windows to re-enter through the restore.',
    highlight: 'malware-free',
    accent: 'var(--safe)',
    hero: false,
  },
  {
    icon: '📡',
    title: 'Improved RPO — More Frequent Backups',
    desc: 'At 5.8 GB, backups can run every 2 hours or more. Traditional solutions running 37+ GB cannot compete on frequency, leaving organizations with large data-loss windows.',
    highlight: 'improved RPO',
    accent: 'var(--info)',
    hero: false,
  },
  {
    icon: '⚡',
    title: 'Faster Backup & Recovery',
    desc: 'A fraction of the size means a fraction of the time. Faster backups, faster restores, and faster return to business operations.',
    highlight: 'faster',
    accent: 'var(--warning)',
    hero: false,
  },
  {
    icon: '🤖',
    title: 'Fully Automated Forest Recovery',
    desc: 'Recover an entire Active Directory forest with just a few clicks. Automation eliminates manual steps that introduce human error during high-stress incident response.',
    highlight: 'Fully automated',
    accent: 'var(--semperis)',
    hero: true,
  },
  {
    icon: '🔒',
    title: 'SYSVOL Quarantine',
    desc: 'SYSVOL (Group Policy scripts and replication data) is quarantined separately, preventing attacker-planted scripts from re-executing after restore.',
    highlight: 'quarantine',
    accent: 'var(--safe)',
    hero: false,
  },
];

export default function Benefits() {
  return (
    <>
      <hr className="section-sep" />
      <section id="benefits">
        <div className="section">
          <div className="section-tag">Semperis ADFR — Key Advantages</div>
          <h2 className="section-title">Why ADFR Changes Active Directory Recovery</h2>
          <p className="section-desc">
            The fundamental principle: <strong style={{ color: 'var(--semperis)' }}>"It's about the service, not the server."</strong>{' '}
            By backing up only the AD service layer, Semperis ADFR sidesteps every weakness of OS-coupled traditional backup.
          </p>

          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className={`benefit-card ${b.hero ? 'hero-card' : ''}`}
                style={{ '--card-accent': b.accent }}
              >
                <span className="benefit-icon">{b.icon}</span>
                <div className="benefit-title">{b.title}</div>
                <div className="benefit-desc">
                  {b.desc.split(b.highlight).map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && (
                        <span className="benefit-highlight">{b.highlight}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ marginTop: 48, overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              fontFamily: 'var(--ff-body)', fontSize: '0.88rem',
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-card-alt, #142048)', borderBottom: '1px solid var(--border-bright)' }}>
                  {['Capability', 'Bare Metal Recovery', 'System State Backup', 'Semperis ADFR'].map((h, i) => (
                    <th key={i} style={{
                      padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                      fontFamily: 'var(--ff-display)', fontSize: '0.72rem',
                      fontWeight: 700, letterSpacing: '0.05em',
                      color: i === 3 ? 'var(--semperis)' : 'var(--text-dim)',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Backup size',             '37+ GB',    '22+ GB',  '5.8 GB'],
                  ['OS included in backup',   '✗ Yes',     '✗ Yes',   '✓ No'],
                  ['Malware risk in restore', '✗ High',    '✗ Medium','✓ None'],
                  ['Hardware independent',    '✗ No',      '✗ No',    '✓ Yes'],
                  ['Backup frequency',        '≤1×/day',   '1–2×/day','12+×/day'],
                  ['RPO (approx.)',           '~24 hours', '~12 hours','< 2 hours'],
                  ['Forest recovery',         '✗ Manual',  '✗ Manual','✓ Automated'],
                  ['SYSVOL quarantine',       '✗ No',      '✗ No',    '✓ Yes'],
                ].map(([cap, bm, ss, adfr], i) => (
                  <tr key={i} style={{
                    borderBottom: '1px solid var(--border)',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                  }}>
                    <td style={{ padding: '11px 16px', color: 'var(--text)', fontWeight: 500 }}>{cap}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'center',
                      color: bm.startsWith('✗') ? 'var(--danger)' : 'var(--text-dim)' }}>{bm}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'center',
                      color: ss.startsWith('✗') ? 'var(--warning)' : 'var(--text-dim)' }}>{ss}</td>
                    <td style={{ padding: '11px 16px', textAlign: 'center',
                      color: adfr.startsWith('✓') ? 'var(--safe)' : 'var(--semperis)',
                      fontWeight: 700 }}>{adfr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
