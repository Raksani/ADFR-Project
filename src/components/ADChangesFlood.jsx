import { useState, useEffect, useRef } from 'react';

const EVENT_POOL = [
  // Day 4
  { type: 'create',   badge: 'badge-create',   day: 'Day 4', time: '09:12', text: 'User created: alex.johnson@corp.com (Sales Dept)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 4', time: '09:34', text: 'Password reset: maria.chen@corp.com — HR request' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 4', time: '10:02', text: 'Group membership added: finance_team → david.park' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 4', time: '10:45', text: 'Computer account joined domain: LAPTOP-7F3A2B' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 4', time: '11:20', text: 'GPO linked: Workstation Hardening v2.1 → OU=Laptops' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 4', time: '12:05', text: 'OU created: IT/Contractors/External2024' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 4', time: '13:30', text: 'User enabled: jessica.wu@corp.com — returning from leave' },
  { type: 'security', badge: 'badge-security', day: 'Day 4', time: '14:10', text: 'MFA enrollment completed: robert.kim@corp.com' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 4', time: '14:55', text: 'Service account password rotated: svc_backup@corp.com' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 4', time: '15:40', text: 'User created: contractor.temp002@corp.com (90-day)' },
  // Day 5
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 5', time: '08:30', text: 'Group policy updated: Default Domain Password Policy' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 5', time: '09:00', text: 'Permissions granted: HR_FileShare → benefits_committee' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 5', time: '09:45', text: 'User created: priya.patel@corp.com (Marketing)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 5', time: '10:10', text: 'Password reset: tom.bradley@corp.com — forgotten pwd' },
  { type: 'delete',   badge: 'badge-delete',   day: 'Day 5', time: '11:00', text: 'User disabled: former.employee@corp.com — offboarding' },
  { type: 'security', badge: 'badge-security', day: 'Day 5', time: '11:30', text: 'Admin rights revoked: john.smith@corp.com — role change' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 5', time: '13:15', text: 'Service account created: svc_monitoring@corp.com' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 5', time: '14:00', text: 'User moved OU: sales_contractors → sales_permanent (5 users)' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 5', time: '15:25', text: 'Group created: project_phoenix_team — added 12 members' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 5', time: '16:00', text: 'Account expiry extended: vendor.account@corp.com +60 days' },
  // Day 6
  { type: 'create',   badge: 'badge-create',   day: 'Day 6', time: '08:00', text: 'User created: new.starter001@corp.com (Engineering)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 6', time: '08:45', text: 'Password reset (bulk): 18 users in Finance — policy change' },
  { type: 'security', badge: 'badge-security', day: 'Day 6', time: '09:30', text: 'Privileged role assigned: help_desk_admin → carlos.rodriguez' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 6', time: '10:15', text: 'SharePoint sync group updated: marketing_team (8 additions)' },
  { type: 'delete',   badge: 'badge-delete',   day: 'Day 6', time: '11:00', text: 'Computer object deleted: OLD-WORKSTATION-23 (decommissioned)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 6', time: '12:30', text: 'UPN suffix changed: legacy.corp → corp.com (batch: 34 users)' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 6', time: '13:45', text: 'Security group created: zero_trust_pilot (22 members)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 6', time: '15:00', text: 'Home drive path updated: 7 users migrated to new file server' },
  // Day 7
  { type: 'create',   badge: 'badge-create',   day: 'Day 7', time: '08:15', text: 'User created: intern.summer001 through intern.summer012 (12 accts)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 7', time: '09:00', text: 'Password reset: c-suite.user@corp.com — security audit' },
  { type: 'security', badge: 'badge-security', day: 'Day 7', time: '09:50', text: 'MFA enforced (global): all accounts — compliance requirement' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 7', time: '10:30', text: 'Cross-domain trust configured: corp.com ↔ subsidiary.local' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 7', time: '11:15', text: 'Logon hours restricted: 430 contractor accounts updated' },
  { type: 'delete',   badge: 'badge-delete',   day: 'Day 7', time: '12:00', text: 'User deleted (purged): 8 accounts inactive 180+ days' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 7', time: '13:30', text: 'Distribution list created: all-staff-apac@corp.com (290 members)' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 7', time: '14:15', text: 'Department attribute updated: Engineering → R&D (47 users)' },
  // Day 8
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 8', time: '08:30', text: 'Password reset: emergency.change@corp.com — IT policy' },
  { type: 'create',   badge: 'badge-create',   day: 'Day 8', time: '09:00', text: 'Admin account created: break-glass-admin — audit requirement' },
  { type: 'security', badge: 'badge-security', day: 'Day 8', time: '10:00', text: 'Fine-grained password policy: 125 high-value accounts — stricter rules' },
  { type: 'access',   badge: 'badge-access',   day: 'Day 8', time: '11:00', text: 'Resource-based delegation configured: app_server_cluster' },
  { type: 'modify',   badge: 'badge-modify',   day: 'Day 8', time: '12:30', text: 'Attribute sync: Azure AD Connect — 312 objects reconciled' },
];

export default function ADChangesFlood() {
  const [visible, setVisible] = useState([]);
  const [counter, setCounter] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(900);
  const counterRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      const idx = counterRef.current % EVENT_POOL.length;
      setVisible(prev => [...prev.slice(-9), EVENT_POOL[idx]]);
      counterRef.current += 1;
      setCounter(c => c + 1);
    }, speed);
    return () => clearInterval(id);
  }, [playing, speed]);

  // Compute day distribution for sidebar
  const dayBreakdown = [
    { day: 'Day 4', ops: 340, color: 'var(--warning)' },
    { day: 'Day 5', ops: 300, color: '#ff8000' },
    { day: 'Day 6', ops: 380, color: '#ff5500' },
    { day: 'Day 7', ops: 420, color: 'var(--danger)' },
    { day: 'Day 8', ops: 360, color: '#cc1133' },
  ];
  const total = dayBreakdown.reduce((s, d) => s + d.ops, 0);

  return (
    <>
      <hr className="section-sep" />
      <section id="changes">
        <div className="section">
          <div className="section-tag">Step 3 — The Hidden Cost</div>
          <h2 className="section-title">
            What Your 1,000+ Users Are Doing During Those{' '}
            <span style={{ color: 'var(--danger)' }}>7 Lost Days</span>
          </h2>
          <p className="section-desc">
            While the attackers are hiding in your network, your employees keep working.
            Every one of these legitimate AD operations is <strong style={{ color: 'var(--danger)' }}>permanently lost</strong> when
            you restore to the traditional Day 3 backup.
          </p>

          <div className="flood-layout">
            {/* Live Feed */}
            <div className="flood-feed">
              <div className="flood-feed-header">
                <span className="flood-feed-title">⚡ Live AD Operations Feed (Days 4–8)</span>
                <span className="flood-counter">{counter} events logged</span>
              </div>
              <div className="flood-feed-body">
                {visible.map((ev, i) => (
                  <div key={i} className="flood-event">
                    <span className={`event-type-badge ${ev.badge}`}>{ev.type}</span>
                    <div style={{ flex: 1 }}>
                      <div className="event-text">{ev.text}</div>
                      <div className="event-time">{ev.day} · {ev.time}</div>
                    </div>
                    <span className="event-lost-label">AT RISK</span>
                  </div>
                ))}
                {visible.length === 0 && (
                  <div style={{ padding: '40px 20px', color: 'var(--text-muted)', fontFamily: 'var(--ff-mono)', fontSize: '0.8rem', textAlign: 'center' }}>
                    Press ▶ Play to start the feed
                  </div>
                )}
              </div>
              <div className="flood-controls">
                <button
                  className={`flood-btn ${playing ? 'active' : ''}`}
                  onClick={() => setPlaying(v => !v)}
                >
                  {playing ? '⏸ Pause' : '▶ Play'}
                </button>
                <button
                  className={`flood-btn ${speed === 900 ? 'active' : ''}`}
                  onClick={() => setSpeed(900)}
                >
                  1× Speed
                </button>
                <button
                  className={`flood-btn ${speed === 350 ? 'active' : ''}`}
                  onClick={() => setSpeed(350)}
                >
                  2× Speed
                </button>
                <button
                  className="flood-btn"
                  onClick={() => { setVisible([]); setCounter(0); counterRef.current = 0; setPlaying(false); }}
                >
                  ↺ Reset
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flood-sidebar">
              <div className="stat-card danger">
                <div className="stat-card-title">Total Operations at Risk</div>
                <div className="stat-card-num">{total.toLocaleString()}+</div>
                <div className="stat-card-sub">AD changes lost if restored to Day 3</div>
              </div>

              <div className="stat-card info">
                <div className="stat-card-title">Estimated Users Affected</div>
                <div className="stat-card-num">1,200+</div>
                <div className="stat-card-sub">Accounts with pending or lost changes</div>
              </div>

              {/* Day breakdown */}
              <div className="stat-card" style={{ padding: '18px 20px' }}>
                <div className="stat-card-title">Operations by Day</div>
                {dayBreakdown.map(d => (
                  <div key={d.day} style={{ marginTop: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: 4 }}>
                      <span style={{ fontFamily: 'var(--ff-mono)', color: 'var(--text-dim)' }}>{d.day}</span>
                      <span style={{ color: d.color, fontFamily: 'var(--ff-mono)', fontWeight: 700 }}>{d.ops}</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 4, height: 6 }}>
                      <div style={{
                        height: '100%', borderRadius: 4,
                        background: d.color,
                        width: `${(d.ops / 420) * 100}%`,
                        transition: 'width 1s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flood-protection-box">
                <div className="fpb-title">🛡️ With Semperis ADFR</div>
                <ul className="fpb-list">
                  <li>AD-only restore to Day 8 — most recent clean state</li>
                  <li>Dramatically fewer operations to replay</li>
                  <li>Granular rollback per-object possible</li>
                  <li>No OS contamination — malware-free restore</li>
                  <li>More frequent backups = less data lost</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
