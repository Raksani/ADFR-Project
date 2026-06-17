const LIFECYCLE = [
  {
    phase: 'PRE-ATTACK',
    color: 'var(--safe)',
    colorDim: 'rgba(61,233,122,0.08)',
    border: 'rgba(61,233,122,0.3)',
    icon: '🛡️',
    tool: 'Directory Services Protector (DSP)',
    capabilities: [
      'Continuous monitoring of 200+ indicators across AD & Entra ID',
      'Tamper-proof, change tracking — even if EDR agents are disabled',
      'Auto-remediation: automatic rollback of malicious AD changes',
      'Real-time alerts',
      'Inventory & monitoring of high-risk service accounts (ITDR)',
      'Attack path analysis leading to Tier 0 assets',
      'Reduction in the likelihood of a successful AD attack',
    ],
  },
  {
    phase: 'DURING ATTACK',
    color: 'var(--warning)',
    colorDim: 'rgba(255,170,0,0.08)',
    border: 'rgba(255,170,0,0.3)',
    icon: '🔍',
    tool: 'Directory Services Protector (DSP)',
    capabilities: [
      'Tamper-proof threat visibility — attackers cannot disable monitoring',
      'Pattern-based attack detection & response',
      'Response playbooks & auto-remediation',
      'Continuous exposure management',
      'Machine identity discovery & monitoring',
      'Cyber crisis management support',
      '24/7 Global IFIR Support',
    ],
  },
  {
    phase: 'POST-ATTACK',
    color: 'var(--semperis)',
    colorDim: 'rgba(0,207,255,0.08)',
    border: 'rgba(0,207,255,0.3)',
    icon: '🔄',
    tool: 'AD Forest Recovery (ADFR) + Cohesity',
    capabilities: [
      'Guaranteed malware-free AD recovery — decoupled from the OS',
      'Parallel DC rebuild: recover minimum viable business in hours',
      'No internet access required — fully air-gapped capable',
      'Post-breach forensics to fully evict attackers',
      'Entra ID protection for complete hybrid environment coverage',
      'Automated recovery with no manual intervention required',
      '90% faster AD forest recovery — proven in 100s of real incidents',
    ],
  },
];

export default function FullSolution() {
  return (
    <>
      <hr className="section-sep" />
      <section id="full-solution">
        <div className="section">
          <div className="section-tag">07 — Full Solution</div>
          <h2 className="section-title">Cohesity Identity Resilience, Powered by Semperis</h2>
          <p className="section-desc">
            Full-lifecycle exposure monitoring, real-time attack detection, and automated remediation —
            covering Pre-Attack, During Attack, and Post-Attack.
          </p>

          {/* Two pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
            {[
              {
                label: 'SECURITY',
                title: 'Directory Services Protector (DSP)',
                color: 'var(--safe)',
                colorDim: 'rgba(61,233,122,0.08)',
                border: 'rgba(61,233,122,0.3)',
                icon: '🔒',
                items: [
                  'Continuous monitoring of 200+ indicators across AD & Entra ID',
                  'Tamper-proof, change tracking — even if EDR agents are disabled',
                  'Auto-remediation: automatic rollback of malicious AD changes',
                  'Real-time alerts',
                  'Inventory & monitoring of high-risk service accounts (ITDR)',
                  'Attack path analysis leading to Tier 0 assets',
                  'Reduction in the likelihood of a successful AD attack',
                ],
              },
              {
                label: 'RECOVERY',
                title: 'AD Forest Recovery (ADFR) + Cohesity Cloud Protection',
                color: 'var(--semperis)',
                colorDim: 'rgba(0,207,255,0.08)',
                border: 'rgba(0,207,255,0.3)',
                icon: '🔄',
                items: [
                  'Guaranteed malware-free AD recovery — decoupled from the OS',
                  'Parallel DC rebuild: recover minimum viable business in hours',
                  'No internet access required — fully air-gapped capable',
                  'Post-breach forensics to fully evict attackers',
                  'Entra ID protection for complete hybrid environment coverage',
                  'Automated recovery with no manual intervention required',
                  '90% faster AD forest recovery — proven in 100s of real incidents',
                ],
              },
            ].map((pillar, i) => (
              <div key={i} style={{
                background: pillar.colorDim,
                border: `1px solid ${pillar.border}`,
                borderRadius: 'var(--r)',
                boxShadow: i === 0 ? '0 0 40px rgba(61,233,122,0.18), inset 0 0 60px rgba(61,233,122,0.04)' : 'none',
                transform: i === 0 ? 'scale(1.01)' : 'none',
                overflow: 'hidden',
              }}>
                {i === 0 && (
                  <div style={{ height: 3, background: 'linear-gradient(90deg, var(--safe), rgba(61,233,122,0.3))' }} />
                )}
                <div style={{
                  padding: '20px 24px',
                  borderBottom: `1px solid ${pillar.border}`,
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: i === 0 ? 'rgba(61,233,122,0.07)' : 'transparent',
                }}>
                  <span style={{ fontSize: i === 0 ? '2rem' : '1.6rem' }}>{pillar.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: pillar.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {pillar.label}
                    </div>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: i === 0 ? '1rem' : '0.85rem', fontWeight: 700, color: pillar.color }}>
                      {pillar.title}
                    </div>
                  </div>
                  {i === 0 && (
                    <div style={{
                      marginLeft: 'auto', fontFamily: 'var(--ff-mono)', fontSize: '0.62rem',
                      color: 'var(--safe)', border: '1px solid rgba(61,233,122,0.4)',
                      borderRadius: 4, padding: '3px 10px', background: 'rgba(61,233,122,0.1)',
                      whiteSpace: 'nowrap',
                    }}>
                      ● ACTIVE PROTECTION
                    </div>
                  )}
                </div>
                <ul style={{ listStyle: 'none', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {pillar.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                      <span style={{ color: pillar.color, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Attack lifecycle */}
          <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: 24 }}>
            Complete Attack Lifecycle Coverage
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {LIFECYCLE.map((phase, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${phase.border}`,
                borderRadius: 'var(--r)',
                overflow: 'hidden',
              }}>
                <div style={{ padding: '16px 20px', background: phase.colorDim, borderBottom: `1px solid ${phase.border}` }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: phase.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
                    {phase.icon} {phase.phase}
                  </div>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.76rem', fontWeight: 700, color: 'var(--text)' }}>
                    {phase.tool}
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {phase.capabilities.map((cap, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                      <span style={{ color: phase.color, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Purple Knight — expanded with sample report */}
          <div style={{ marginTop: 32 }}>
            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 32 }} />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
              <div style={{ fontSize: '3.5rem' }}>🔮</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: '#c97bff', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Free Community Tool
                </div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#c97bff', marginBottom: 6 }}>
                  Purple Knight — Hybrid AD Security Assessment
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                  Spot weaknesses before attackers do. Scans Active Directory, Entra ID, and Okta for 218+ security indicators — free, no agent required.
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, flexShrink: 0 }}>
                {[
                  { num: '75,600+', label: 'Downloads' },
                  { num: '218+', label: 'Security Indicators' },
                  { num: '45%', label: 'Attack Surface Reduction' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: 'rgba(180,100,255,0.08)', border: '1px solid rgba(180,100,255,0.25)',
                    borderRadius: 'var(--r)', padding: '12px 16px', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 700, color: '#c97bff' }}>{s.num}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Report Card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(180,100,255,0.35)',
              borderRadius: 'var(--r)',
              overflow: 'hidden',
              boxShadow: '0 0 32px rgba(180,100,255,0.08)',
            }}>
              {/* Report header bar */}
              <div style={{
                padding: '16px 28px',
                background: 'linear-gradient(135deg, rgba(180,100,255,0.18), rgba(100,60,200,0.12))',
                borderBottom: '1px solid rgba(180,100,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: '#c97bff' }}>
                    🔮 Purple Knight 5.0 — Sample Security Report Card
                  </div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    Scanned: Active Directory · Entra ID · Okta &nbsp;|&nbsp; Indicators checked: 218
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.65rem',
                  color: 'var(--warning)', border: '1px solid rgba(255,170,0,0.35)',
                  borderRadius: 4, padding: '4px 10px', background: 'rgba(255,170,0,0.08)',
                }}>
                  ⚠ OVERALL SCORE: 61 / 100 — Barely Passing
                </div>
              </div>

              <div style={{ padding: '28px' }}>

                {/* Overall score + donut visual */}
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, marginBottom: 32, alignItems: 'center' }}>
                  {/* Score ring (SVG) */}
                  <div style={{ textAlign: 'center' }}>
                    <svg viewBox="0 0 120 120" width="160" height="160" style={{ display: 'block', margin: '0 auto' }}>
                      <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                      <circle cx="60" cy="60" r="50" fill="none"
                        stroke="rgba(255,170,0,0.85)" strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 50 * 0.61} ${2 * Math.PI * 50 * 0.39}`}
                        strokeDashoffset={2 * Math.PI * 50 * 0.25}
                        strokeLinecap="round"
                      />
                      <text x="60" y="56" textAnchor="middle" fill="currentColor" fontFamily="Orbitron,monospace" fontSize="22" fontWeight="700">61</text>
                      <text x="60" y="72" textAnchor="middle" fill="#7a9abf" fontFamily="Orbitron,monospace" fontSize="9">/ 100</text>
                    </svg>
                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--warning)', marginTop: 4 }}>
                      Industry avg initial score
                    </div>
                  </div>

                  {/* IOE vs IOC */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                      What Purple Knight Detects
                    </div>
                    {[
                      {
                        label: 'Indicators of Exposure (IOEs)',
                        sub: 'Risky configurations attackers can exploit — before any breach',
                        pct: 68, color: 'var(--warning)',
                        examples: ['Old admin passwords', 'Inactive admin accounts enabled', 'Unconstrained delegation', 'Weak Kerberos settings'],
                      },
                      {
                        label: 'Indicators of Compromise (IOCs)',
                        sub: 'Evidence of active or in-progress attack activity',
                        pct: 32, color: 'var(--danger)',
                        examples: ['Unauthorized DCSync rights', 'SID history anomalies', 'KRBTGT password age', 'AdminSDHolder modifications'],
                      },
                    ].map((row, i) => (
                      <div key={i} style={{
                        padding: '14px 18px', borderRadius: 'var(--r-sm)',
                        background: i === 0 ? 'rgba(255,170,0,0.06)' : 'rgba(255,59,85,0.06)',
                        border: `1px solid ${row.color}33`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <div>
                            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.75rem', fontWeight: 700, color: row.color }}>{row.label}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{row.sub}</div>
                          </div>
                          <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 700, color: row.color, flexShrink: 0, marginLeft: 12 }}>{row.pct}%</div>
                        </div>
                        {/* bar */}
                        <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, marginBottom: 10 }}>
                          <div style={{ height: 5, width: `${row.pct}%`, background: row.color, borderRadius: 3 }} />
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {row.examples.map((ex, j) => (
                            <span key={j} style={{
                              fontFamily: 'var(--ff-mono)', fontSize: '0.62rem',
                              padding: '2px 8px', borderRadius: 4,
                              background: `${row.color}18`, color: row.color,
                              border: `1px solid ${row.color}44`,
                            }}>{ex}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category scores */}
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
                  Security Score by Category
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 28 }}>
                  {[
                    { cat: 'Kerberos Security',     score: 54, color: 'var(--danger)' },
                    { cat: 'Account Security',      score: 62, color: 'var(--warning)' },
                    { cat: 'AD Delegation',         score: 48, color: 'var(--danger)' },
                    { cat: 'Group Policy',          score: 71, color: 'var(--warning)' },
                    { cat: 'AD Infrastructure',     score: 80, color: 'var(--safe)' },
                  ].map((c, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${c.color}33`,
                      borderRadius: 'var(--r-sm)',
                      padding: '14px 12px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 700, color: c.color, marginBottom: 4 }}>
                        {c.score}
                      </div>
                      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, marginBottom: 8 }}>
                        <div style={{ height: 4, width: `${c.score}%`, background: c.color, borderRadius: 2 }} />
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{c.cat}</div>
                    </div>
                  ))}
                </div>

                {/* Workflow steps */}
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
                  How It Works — 4-Stage Workflow
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
                  {[
                    { num: '01', label: 'Find',       desc: 'Comprehensive testing against common AD attack vectors — no agent needed', icon: '🔍', color: '#c97bff' },
                    { num: '02', label: 'Prioritize', desc: 'Security scores across 5 categories with expert remediation guidance', icon: '📊', color: 'var(--warning)' },
                    { num: '03', label: 'Fix',        desc: 'Addresses misconfigurations: old admin passwords, inactive accounts, delegations', icon: '🔧', color: 'var(--semperis)' },
                    { num: '04', label: 'Validate',   desc: 'Periodic rescanning prevents security degradation over time', icon: '✅', color: 'var(--safe)' },
                  ].map((step, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${step.color}33`,
                      borderRadius: 'var(--r-sm)',
                      padding: '16px 14px',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: step.color }} />
                      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: step.color, marginBottom: 6 }}>{step.num}</div>
                      <div style={{ fontSize: '1.4rem', marginBottom: 8 }}>{step.icon}</div>
                      <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.78rem', fontWeight: 700, color: step.color, marginBottom: 6 }}>{step.label}</div>
                      <div style={{ fontSize: '0.77rem', color: 'var(--text-dim)', lineHeight: 1.55 }}>{step.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Improvement callout */}
                <div style={{
                  padding: '18px 24px',
                  background: 'linear-gradient(135deg, rgba(61,233,122,0.07), rgba(180,100,255,0.05))',
                  border: '1px solid rgba(61,233,122,0.25)',
                  borderRadius: 'var(--r-sm)',
                  display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
                }}>
                  <div style={{ flex: 1, fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    Organizations applying Purple Knight guidance report average improvements of{' '}
                    <strong style={{ color: 'var(--safe)' }}>+21 to +61 points</strong> on their security score,
                    with up to <strong style={{ color: 'var(--safe)' }}>45% attack surface reduction</strong>.
                    MITRE ATT&CK correlation included for every finding.
                  </div>
                  <div style={{ display: 'flex', gap: 20, flexShrink: 0 }}>
                    {[
                      { before: '61', after: '82+', label: 'Score improvement' },
                    ].map((m, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div>
                            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--warning)' }}>{m.before}</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Before</div>
                          </div>
                          <div style={{ fontSize: '1.2rem', color: 'var(--safe)' }}>→</div>
                          <div>
                            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--safe)' }}>{m.after}</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>After</div>
                          </div>
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 4 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
