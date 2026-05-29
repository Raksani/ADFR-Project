# 🛡️ Active Directory Recovery Under Attack
### Educational Demo: Semperis ADFR vs Traditional Backup

An interactive educational website illustrating the critical differences between traditional backup solutions and Semperis ADFR (Active Directory Forest Recovery) during a ransomware/cyber attack scenario.

---

## 📚 What This Demo Teaches

| Topic | What You Learn |
|---|---|
| **Attack Timeline** | How malware infiltrates and spreads across 10 days in an AD environment |
| **Data Loss (Traditional)** | Why restoring to "last known good" with a traditional backup loses 7 days of critical changes |
| **AD User Activity** | The sheer volume of AD operations (1000+ users, 3000+ events) that are at risk during an attack |
| **Backup Size Impact** | How Semperis backs up only AD (5.8 GB) vs bare metal (37+ GB) enabling far more frequent backups |
| **Recovery Comparison** | Side-by-side: Traditional restore brings back malware; Semperis ADFR is decoupled from OS and malware-free |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Raksani/semperis-adfr-demo.git
cd semperis-adfr-demo
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. 

---

## 🏗️ Project Structure

```
src/
├── App.jsx                    # Main layout
├── index.css                  # Global styles & CSS variables
├── main.jsx                   # React entry point
└── components/
    ├── Hero.jsx               # Opening screen with key stats
    ├── AttackTimeline.jsx     # Interactive Day 1–10 attack timeline
    ├── RecoveryComparison.jsx # Side-by-side Traditional vs ADFR restore
    ├── ADChangesFlood.jsx     # Animated stream of at-risk AD operations
    ├── BackupSizeComparison.jsx # Backup size & frequency visualization
    └── Benefits.jsx           # Semperis ADFR key benefits summary
```

---

## 📖 Source Material

Diagrams and scenario data sourced from Semperis ADFR product presentations and Cohesity ADFR educational materials. This demo is for **educational purposes only**.

Key data points used:
- **Traditional Bare Metal Recovery**: 37+ GB (Windows OS 25 GB + AD 11 GB + other volumes)
- **Windows System State Backup**: Minimum 22 GB
- **Semperis ADFR Backup**: 5.8 GB (AD-only, decoupled from OS)
- **Attack window**: Day 3 = last known good (traditional) | Day 8 = last known good (Semperis ADFR)
- **Data loss with traditional backup**: All changes from Day 4–10 (7 days)

---

## 🎨 Tech Stack

- **React 18** + **Vite 5**
- Pure CSS animations (no external animation library)
- Google Fonts: Orbitron, Exo 2, Share Tech Mono
- No external UI libraries — fully custom design

---

*Built for enterprise training use.*
# ADFR-Project
