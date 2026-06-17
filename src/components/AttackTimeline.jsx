import { useState } from 'react';

const DAYS = [
  {
    day: 1, state: 'clean', icon: '🖥️', status: 'Clean',
    title: 'Day 1 — Normal Operations',
    body: 'Active Directory is healthy. Users log in, passwords are managed, group policies are applied normally. No threats detected.',
    tags: [{ label: 'AD Healthy', cls: 'tag-safe' }, { label: 'No Threat', cls: 'tag-safe' }],
  },
  {
    day: 2, state: 'clean', icon: '🖥️', status: 'Clean',
    title: 'Day 2 — Business as Usual',
    body: 'Routine AD operations continue. New employee accounts created, group memberships updated, service accounts rotated. Everything normal.',
    tags: [{ label: 'AD Healthy', cls: 'tag-safe' }, { label: '~320 Operations', cls: 'tag-info' }],
  },
  {
    day: 3, state: 'clean', icon: '🖥️', status: 'Clean',
    marker: 'traditional', markerText: 'Last Good (Traditional)',
    title: 'Day 3 — Last Known Good (Traditional Backup)',
    body: 'This is the last clean snapshot captured by the traditional backup. Any restore with a traditional tool will roll back to this point — losing all legitimate changes made after today.',
    tags: [{ label: 'AD Healthy', cls: 'tag-safe' }, { label: '📸 Traditional Backup Taken', cls: 'tag-warning' }, { label: '~310 Operations', cls: 'tag-info' }],
  },
  {
    day: 4, state: 'infected', icon: '🔥', status: 'Infected',
    title: 'Day 4 — Malware Enters via Phishing',
    body: 'A spear-phishing email compromises a domain user account. Attackers begin enumerating AD objects quietly. Legitimate users continue working, making real changes to AD.',
    tags: [{ label: '⚠ Malware Entry', cls: 'tag-danger' }, { label: 'Recon Begins', cls: 'tag-warning' }, { label: '~340 Legit Operations', cls: 'tag-info' }],
  },
  {
    day: 5, state: 'infected', icon: '🔥', status: 'Spreading',
    title: 'Day 5 — Lateral Movement',
    body: 'Attackers harvest credentials using Mimikatz. They pivot to additional accounts. Service accounts are targeted. IT team is unaware. Normal business changes continue in AD.',
    tags: [{ label: 'Credential Harvesting', cls: 'tag-danger' }, { label: 'Service Accts Targeted', cls: 'tag-danger' }, { label: '~300 Legit Operations', cls: 'tag-info' }],
  },
  {
    day: 6, state: 'spreading', icon: '🔥', status: 'Critical',
    title: 'Day 6 — Privilege Escalation',
    body: 'Attackers achieve Domain Admin access. They begin modifying Group Policy Objects and creating hidden backdoor accounts. Hundreds of users still making legitimate AD changes.',
    tags: [{ label: '🔴 Domain Admin Compromised', cls: 'tag-danger' }, { label: 'GPO Modified', cls: 'tag-danger' }, { label: '~380 Legit Operations', cls: 'tag-info' }],
  },
  {
    day: 7, state: 'spreading', icon: '🔥', status: 'Critical',
    title: 'Day 7 — Deep Compromise',
    body: 'Mass password changes by attackers. Shadow admin accounts proliferate. Critical OUs are tampered with. Legitimate users unknowingly co-exist with attacker operations.',
    tags: [{ label: 'Mass Pwd Changes', cls: 'tag-danger' }, { label: 'Shadow Admins', cls: 'tag-danger' }, { label: '~420 Legit Operations', cls: 'tag-info' }],
  },
  {
    day: 8, state: 'critical', icon: '💀', status: 'Critical',
    marker: 'semperis', markerText: 'ADFR Last Good',
    title: 'Day 8 — Semperis ADFR Identifies Last Clean AD Snapshot',
    body: 'Semperis ADFR has been taking frequent, AD-only backups. Analysis identifies this point as the last recoverable clean AD state before attacker changes become too embedded. Restoring here means only ~5 days of legit operations may need replay.',
    tags: [{ label: '🟢 ADFR Clean Point', cls: 'tag-semperis' }, { label: '5.8 GB Snapshot', cls: 'tag-semperis' }, { label: '~360 Legit Operations', cls: 'tag-info' }],
  },
  {
    day: 9, state: 'critical', icon: '💀', status: 'Near-Total Compromise',
    title: 'Day 9 — Encryption Begins',
    body: 'Ransomware pre-positioning is complete. File servers begin encrypting. Most domain controllers are affected. Security team detects anomalies and triggers incident response.',
    tags: [{ label: '🔴 Encryption Started', cls: 'tag-danger' }, { label: 'Incident Declared', cls: 'tag-warning' }],
  },
  {
    day: 10, state: 'locked', icon: '🔒', status: 'Ransomware',
    title: 'Day 10 — Full Ransomware Deployment',
    body: 'Ransomware is fully deployed. Active Directory is locked. All systems are encrypted or inaccessible. The organization must now restore — and the backup strategy determines everything.',
    tags: [{ label: '🔴 AD Locked', cls: 'tag-danger' }, { label: 'All Systems Encrypted', cls: 'tag-danger' }, { label: '⏱ Recovery Clock Starts', cls: 'tag-warning' }],
  },
];

const STATE_COLORS = {
  clean: 'var(--safe)',
  infected: 'var(--warning)',
  spreading: '#ff6b00',
  critical: 'var(--danger)',
  locked: '#aa1122',
};

export default function AttackTimeline() {
  const [selected, setSelected] = useState(9); // default Day 10

  const d = DAYS[selected];

  return (
    <section className="timeline-wrapper" id="timeline">
      <div className="section">
        <div className="section-tag">Step 1 — The Attack</div>
        <h2 className="section-title">10-Day Cyber Attack Timeline</h2>
        <p className="section-desc">
          Click each day to see what happens to your Active Directory environment. Watch how malware
          silently spreads while your users continue making real, legitimate changes.
        </p>

        {/* Day Grid */}
        <div style={{ paddingTop: 28 }}>
          <div className="timeline-days" style={{ overflow: 'visible' }}>
            {DAYS.map((day, i) => (
              <div
                key={day.day}
                className={`day-cell ${day.state} ${selected === i ? 'active' : ''}`}
                style={{ '--day-accent': STATE_COLORS[day.state] }}
                onClick={() => setSelected(i)}
                title={`Day ${day.day}`}
              >
                {day.marker === 'traditional' && (
                  <div className="day-marker" style={{ background: 'var(--warning)', color: '#000', top: '-26px' }}>
                    Traditional Backup
                  </div>
                )}
                {day.marker === 'semperis' && (
                  <div className="day-marker" style={{ background: 'var(--semperis)', color: '#000', top: '-26px' }}>
                    ADFR Last Good
                  </div>
                )}
                <div className="day-label">Day {day.day}</div>
                <div className="day-icon">{day.icon}</div>
                <div className="day-status">{day.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div
          className="day-info-panel"
          style={{ borderColor: STATE_COLORS[d.state] + '55', marginTop: 24 }}
        >
          <div className="day-info-title" style={{ color: STATE_COLORS[d.state] }}>
            {d.title}
          </div>
          <div className="day-info-body">{d.body}</div>
          <div className="day-info-tags">
            {d.tags.map((t, i) => (
              <span key={i} className={`info-tag ${t.cls}`}>{t.label}</span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="timeline-legend">
          {Object.entries(STATE_COLORS).map(([state, color]) => (
            <div key={state} className="legend-item">
              <div className="legend-dot" style={{ background: color }} />
              <span style={{ textTransform: 'capitalize' }}>{state}</span>
            </div>
          ))}
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--warning)', borderRadius: 2 }} />
            <span>Traditional last-good marker</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--semperis)', borderRadius: 2 }} />
            <span>Semperis ADFR last-good marker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
