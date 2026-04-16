

## CORTA-Maintenance — Showcase Landing Page

A single-page showcase website for an AI-powered industrial production line maintenance portal, built with the same design language, color scheme, and component patterns as CORTA-PL (Pixel Pulse Showcase).

### Assets to Copy
- Copy `corta-logo.png` and `hero-factory.jpg` from Pixel Pulse Showcase for branding consistency
- Copy `favicon.png` from Pixel Pulse Showcase

### Design System (from Pixel Pulse Showcase)
- Dark industrial theme (background: `220 20% 7%`)
- Inter + JetBrains Mono fonts
- Same CSS component classes: `data-card`, `module-card`, `benefit-card`, `gradient-text`, `grid-pattern`, `pulse-dot`, etc.
- Maintenance-specific accent color (amber/orange for maintenance theme alongside the existing primary blue)

### Page Sections

**1. Navigation** — Fixed top nav with CORTA logo, links to page sections (AI Features, Architecture, Benefits, Standards)

**2. Hero Section** — Factory background image with overlay, "CORTA-Maintenance" branding, tagline about AI-powered predictive maintenance for production lines, key stats (10 AI Features, Real-time Monitoring, Predictive Analytics, etc.)

**3. System Architecture** — Two-tier view showing:
- AI Intelligence Layer (Predictive Engine, NLP Search, Anomaly Detection)
- Operations Layer (Work Orders, Inspections, Spare Parts, Energy)

**4. AI Feature Showcase** — The 10 requested features displayed as detailed module cards with icons, descriptions, impact metrics, and screen lists:
1. Predictive Maintenance
2. Smart Work Order Triage
3. Failure Root Cause Analysis
4. AI Chatbot for Technicians
5. Spare Parts Demand Forecasting
6. Inspection Anomaly Detection
7. Shift Handover Summarization
8. Energy Optimization Suggestions
9. Reports & Analytics
10. Natural Language Search

Each feature gets an impact card row (like the CORTA-PL modules) showing projected KPI improvements.

**5. Benefits Section** — Grid of key value propositions (Reduce Downtime, Cut Costs, Improve Safety, etc.)

**6. Industry Standards** — Compliance badges (ISA-95, ISO 55000, ISO 14224, CMMS standards, etc.)

**7. Footer** — CORTA branding, "Powered by CortaneX AI" link

### Docker Compose
- `Dockerfile` using Node/Bun to build the Vite app, then serve via nginx on port 80
- `docker-compose.yml` mapping port `7701:80`
- `nginx.conf` for SPA routing

