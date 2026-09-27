# ANUBHUTI — AI-Driven Hyper-Local Early Warning System for Severe Weather

> **Smart India Hackathon (SIH) 2026 Prototype**  
> *"Know the Risk. Act Early."*

---

## 📌 Overview

**ANUBHUTI** is a frontend-only web prototype for an **AI-driven hyper-local early warning and severe weather nowcasting system**. It is designed to assist **citizens**, **municipal corporations**, and **disaster-management authorities (EOC / SDMA)** by transforming complex meteorological radar streams and terrain vulnerability data into immediate, actionable intelligence.

The application answers 5 essential questions in under 10 seconds:
1. **WHERE is the risk?** — Granular 1–2 km² geographic grid cells.
2. **WHAT is happening?** — Severe rainfall, thunderstorm, lightning, or urban squall.
3. **WHEN will it happen?** — 0–120 minute nowcasting lead-time horizon (in 15-minute intervals).
4. **WHY is the risk increasing?** — Multi-sensor explainable AI (radar reflectivity, satellite cloud-top cooling, ground charge density).
5. **WHAT should the user do?** — Actionable life-safety advisories for citizens and tactical dispatch directives for authorities.

---

## 🚀 Key Features

- **Hyper-Local Risk Map (Leaflet + OpenStreetMap)**: 
  - Interactive grid overlays (LOW, MODERATE, HIGH, SEVERE)
  - Radar reflectivity core simulation
  - Lightning strike clusters (Damini ground flash feed)
  - Wind velocity vectors
  - Low-lying flood-prone topographic depressions
  - Critical infrastructure markers (hospitals, schools, subways, power substations)
  - Time horizon slider (`NOW`, `+15 MIN`, `+30 MIN`, `+60 MIN`, `+120 MIN`)
- **ConvLSTM Weather Nowcasting Engine**:
  - Interactive 0–120 minute timeline
  - Dynamic Chart.js trends for rainfall rates, risk trajectories, and lightning frequency
- **Explainable AI (XAI) Risk Score**:
  - Transparent sensor signal attribution (Doppler radar, satellite TIR, ground AWS, GIS slope)
  - Technical hyperparameters inspector (ConvLSTM architecture, XGBoost classifier, latency)
- **Impact & Vulnerability Analysis**:
  - `WEATHER + LOCAL VULNERABILITY = IMPACT RISK`
  - Flood risk, traffic disruption, infrastructure exposure
- **Dual Audience Modes**:
  - **Citizen Mode**: Simplified, high-readability safety cards and government emergency toll-free helplines (112, 1070, 1077, 108).
  - **Authority Mode**: Tactical EOC situation matrix, hotspot priority dispatch queue, and one-click SITREP export.
- **One-Click Severe Weather Simulation**:
  - Instantly trigger a severe storm scenario or reset to baseline to demonstrate end-to-end reactive state changes across all charts, maps, alerts, and AI explanations without requiring a backend.
- **SIH Presentation Mode**:
  - High-contrast, projector-ready pitch screen covering the 7 core evaluative checkpoints.
- **Bilingual Support**: English and Hindi UI labels.
- **Location Selector**: Seamless switching between Indore, Bhopal, Mumbai, Bengaluru, Delhi, and Wayanad.

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Maps**: Leaflet & React-Leaflet with OpenStreetMap & CartoDB tiles
- **Data Visualizations**: Chart.js & react-chartjs-2
- **State & Architecture**: Pure client-side state hooks with static/mock datasets

---

## 📦 Project Structure

```
ANUBHUTI/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── authority/       # EOC & municipal priority dispatch queue
│   │   ├── charts/          # Chart.js rainfall, risk & lightning visualizations
│   │   ├── citizen/         # Simplified resident & commuter safety view
│   │   ├── common/          # Navbar, Demo banner, Language/Location selector, StatusBadge, Pitch modal
│   │   ├── dashboard/       # Risk hero, Nowcast timeline, Explainable AI, Impact cards
│   │   └── map/             # Leaflet risk grid map, Layer controls, Grid detail drawer
│   ├── data/
│   │   ├── mockAlerts.ts    # Common Alerting Protocol (CAP) bulletins
│   │   ├── mockAnalytics.ts # Statistical verification metrics & chart data
│   │   ├── mockDataSources.ts # IMD, MOSDAC, AWS, OSM governance metadata
│   │   ├── mockGrids.ts     # 1km²-2km² polygonal grid generator
│   │   ├── mockHistorical.ts # Verified Indian case studies (Wayanad, Indore, Mumbai, etc.)
│   │   ├── mockLocations.ts # City baselines & coordinate anchors
│   │   ├── mockWeatherData.ts # In-situ & remote sensing telemetry
│   │   └── translations.ts  # English and Hindi localization dictionaries
│   ├── hooks/
│   │   └── useWeatherState.ts # Central frontend state management hook
│   ├── layouts/             # App shell & presentation wrappers
│   ├── pages/               # Dashboard, Risk Map, Nowcast, Alerts, Impact, Analytics, History, etc.
│   ├── styles/              # Tailwind CSS and Leaflet custom themes
│   ├── types/               # Strict TypeScript interface declarations
│   ├── utils/               # Formatting helpers and risk color maps
│   ├── App.tsx              # Main routing & application component
│   └── main.tsx             # Application bootstrap
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Local Setup & Execution

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL shown in your terminal).

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Vercel Deployment Instructions

This project is 100% frontend-only and deploys directly to **Vercel** with zero configuration:

### Option A: Deploy via Vercel Git Integration (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset: Select **Vite**.
5. Build Command: `npm run build` (or default).
6. Output Directory: `dist` (or default).
7. Click **"Deploy"**.

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts and accept the default Vite settings.

---

## ⚠️ Demo Mode & Governance Notice

- **Simulated Data**: This application is a UI/UX prototype created for **Smart India Hackathon 2026**. All live weather values, radar composites, and risk scores are simulated using realistic client-side datasets.
- **Non-Replacement Statement**: ANUBHUTI does not seek to replace the **India Meteorological Department (IMD)** or **State Disaster Management Authorities (SDMA)**; it serves as a decision-support and visualization prototype designed for authorized integration.

---

## 👥 Project Builders & Engineering Team (SIH 2026)

| Name | Role | Primary Focus |
| :--- | :--- | :--- |
| **⭐ Arman Rajbhar** | **Lead Full-Stack Developer & Architecture** | Frontend Architecture, Leaflet GIS Engine, Reactive UI State |
| **⭐ Anushka Jat** | **AI Modeling & Data Fusion Co-Lead** | ConvLSTM Nowcasting, XGBoost Risk Engine, Data Fusion |
| **Harsh Bhargav** | **GIS & Spatial Mapping Specialist** | Polygonal Grid Topology, OSM Layers & DEM Hydrology |
| **Vedika Dadhore** | **UX / UI & Accessibility Specialist** | Citizen Mode Safety Cards, Emergency Helplines & Ergonomics |
| **Bhavesh Parmar** | **Meteorological Telemetry Specialist** | Radar Echo Processing, AWS Sensor Simulation & CAP Alerts |
| **Megha Shivhare** | **Disaster Impact & Protocols Specialist** | Critical Infrastructure Exposure, Flood Basin Research & EOC Flows |

---

## 📄 License & Attribution

Developed with ❤️ by **Arman Rajbhar**, **Anushka Jat**, and the Team for **Smart India Hackathon 2026** • Problem Statement: AI-Driven Hyper-Local Weather Nowcasting & Early Warning.
