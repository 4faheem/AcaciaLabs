# Acacia Labs — Product Requirements Document
**Version:** 1.0  
**Status:** Living Document  
**Date:** 2026-06-01  
**Authors:** Fahim Kiama (CEO), Gwamaka Johas (COO)

---

## Scalable Company PRD Benchmark

> Before Acacia's PRD, here is how industry-leading companies structure theirs — and how we compare:

| Dimension | Stripe | Linear | Shopify | **Acacia Labs** |
|---|---|---|---|---|
| **Core thesis** | API-first payments infra | Speed-first project mgmt | Merchant-first commerce | **Operations-first African enterprise infra** |
| **User focus** | Developers | Engineering teams | SMB merchants | **East African enterprise operators** |
| **Deployment** | Global, cloud-native | SaaS | Multi-channel | **Regional, low-bandwidth-first** |
| **Differentiation** | Simplicity + reliability | Opinionated UX speed | Full commerce stack | **Context-native design (M-Pesa, Swahili ops)** |
| **PRD style** | Problem → API → Metrics | User story → sprint | Feature → merchant impact | **Infra problem → system solution → adoption** |

---

## 1. Executive Summary

**Acacia Labs** builds AI-native operational infrastructure for East African businesses. We replace fragmented execution workflows — scattered across mobile money networks, WhatsApp chains, and manual spreadsheets — with unified, automated enterprise systems.

**Primary products:**
- **E-Manager** — Financial ledger, workflow automation & multi-carrier payment reconciliation
- **syncAI** — Real-time AI synchronization layer across teams, carriers, and field agents

**HQ:** Dar es Salaam, Tanzania | **Founded:** 2024  
**Current scale:** $1.2M+ revenue tracked, 2,400+ active workflows, 99.99% uptime SLA

---

## 2. Problem Statement

### The Core Problem
African commerce does not suffer from a lack of activity — it suffers from **extreme execution fragmentation**.

Transactions flow across:
- M-Pesa, Airtel Money, Tigopesa, and informal cash channels
- WhatsApp groups, spreadsheets, and verbal handoffs
- Physical logistics nodes with no digital touchpoint

Without unified coordination, enterprise scale becomes a liability. Each new team member, product line, or market expansion multiplies operational complexity instead of efficiency.

### Quantified Impact (per medium enterprise, per month)
| Problem | Estimated Loss |
|---|---|
| Untracked cash-flow leakage | 8–12% of monthly revenue |
| Manual reconciliation overhead | 60–120 operator-hours |
| Communication handoff failure rate | 22% of field operations |
| Reporting latency (real-time → weekly batch) | 5–7 business days |

### Why Existing Solutions Fail
- **Salesforce / SAP:** Designed for Western enterprise; fail at M-Pesa depth, bandwidth constraints
- **Local ERP systems:** No AI layer; no real-time carrier integrations
- **WhatsApp + Google Sheets:** Non-auditable, non-scalable, zero automation

---

## 3. Market Opportunity

### TAM / SAM / SOM

| | Size | Notes |
|---|---|---|
| **TAM** | $14.2B | East African enterprise software market (2026E) |
| **SAM** | $2.8B | Businesses with >10 employees needing ops software |
| **SOM** | $180M | Tanzania + Kenya SME/mid-market reachable by 2028 |

### Why Now
1. Mobile money penetration in East Africa: **78%** (2025)
2. Smartphone adoption growth: **+31% YoY** in Tanzania
3. Regulatory push for digital financial reporting in TZ, KE, UG
4. No dominant regional player in AI-native operational software

---

## 4. User Personas

### Persona A — "The Enterprise Operator"
- **Role:** Operations Manager at a mid-size Tanzanian distributor (20–200 employees)
- **Pain:** Reconciles M-Pesa receipts manually every Friday, loses track of field agent deliveries
- **Goal:** Real-time financial visibility without hiring a 5-person finance team
- **Metric for success:** Weekly reconciliation time drops from 8 hours → 20 minutes

### Persona B — "The Growth CEO"
- **Role:** Founder scaling from 3 cities to 7 cities
- **Pain:** Can't trust the numbers from regional managers; no unified view
- **Goal:** Single dashboard showing operations across all nodes
- **Metric for success:** C-suite reporting time: 2 days → real-time

### Persona C — "The Field Coordinator"
- **Role:** Manages 30+ delivery agents across Dar es Salaam
- **Pain:** Agents report via WhatsApp; status updates are unreliable and delayed
- **Goal:** Route-by-route visibility and automated exception alerts
- **Metric for success:** Failed delivery rate reduced by 40%

---

## 5. Product Vision & Goals

> **Vision:** Every East African business — from a 10-person importer to a 500-person distributor — operates with the infrastructure precision of a Fortune 500, built for their actual conditions.

### 12-Month OKRs

| Objective | Key Results |
|---|---|
| **O1: Achieve product-market fit with E-Manager** | KR1: 50 active enterprise customers · KR2: NPS ≥ 45 · KR3: Monthly churn < 2% |
| **O2: Establish syncAI as operational backbone** | KR1: 10,000 synced operations/day · KR2: API uptime ≥ 99.9% · KR3: 5 enterprise integrations live |
| **O3: Build East African brand authority** | KR1: 3 media features in regional press · KR2: 500+ newsletter subscribers · KR3: 2 partnership agreements |

---

## 6. E-Manager — Feature Requirements

### What it is
A unified financial ledger, workflow automation engine, and multi-carrier payment reconciliation platform. The operational control room for East African businesses.

### P0 — Must ship (core product)

| Feature | User Story | Success Metric |
|---|---|---|
| **Multi-carrier ledger** | As an operator, I can view M-Pesa, Airtel Money, and Tigopesa transactions in one ledger | All 3 carriers reconciled in <5 min |
| **Workflow builder** | As a manager, I can create automated approval chains without code | First workflow live within 30 min of onboarding |
| **Real-time dashboard** | As a CEO, I can see revenue, workflows, and team status live | Dashboard load time < 2s on 3G |
| **Financial reports** | As a CFO, I can export audit-ready P&L and cash flow reports | PDF/Excel export in <10 seconds |
| **Role-based access** | As an admin, I can limit what each team member sees and edits | RBAC with ≤5 min setup |
| **Offline resilience** | As a field agent, data I enter offline syncs when I reconnect | Zero data loss on reconnect |

### P1 — Next quarter

| Feature | User Story | Notes |
|---|---|---|
| **Mobile app (PWA)** | Field agents submit updates from feature phones | PWA, not native, for fast distribution |
| **SMS notifications** | Managers receive critical alerts via SMS | Critical for low-smartphone environments |
| **Carrier API webhooks** | Transactions auto-ingest from M-Pesa Daraja | Requires Safaricom partnership |
| **Custom report builder** | Non-technical users build their own reports | Drag-and-drop interface |

### P2 — Future roadmap

| Feature | Notes |
|---|---|
| **AI spend forecasting** | Predict cash flow needs 30 days forward |
| **Multi-country currency** | TZS, KES, UGX, USD in one ledger |
| **Integration marketplace** | Connect to Zanaco, CRDB, NMB bank APIs |

### E-Manager Success Metrics
- Time-to-first-workflow: ≤ 30 minutes from signup
- Monthly active workflows: 2,400 → 10,000
- Revenue tracked monthly: $1.2M → $5M
- Customer reconciliation time: -75% vs manual baseline

---

## 7. syncAI — Feature Requirements

### What it is
A real-time AI synchronization layer that connects teams, carriers, field agents, and management into one coherent operational stream. The nervous system of Acacia's infrastructure.

### P0 — Core capabilities

| Feature | Description | Target |
|---|---|---|
| **Event stream** | Unified event bus for all operational data | ≥ 88,000 ops/sec throughput |
| **AI routing** | Auto-route exceptions, alerts, and approvals to the right person | <500ms decision latency |
| **Conflict resolution** | When two agents update the same record, AI resolves correctly | 99.8% accuracy on merge conflicts |
| **Audit trail** | Every state change logged with actor, timestamp, and reason | Full immutable log |

### P1 — Intelligence layer

| Feature | Description |
|---|---|
| **Anomaly detection** | Flag unusual transaction patterns in real-time |
| **Workflow suggestions** | AI recommends automation based on observed patterns |
| **Natural language queries** | "Show me all failed deliveries in Mwanza last week" → instant result |

### P2 — Platform play

| Feature | Description |
|---|---|
| **syncAI SDK** | Third-party developers can build on top of our event stream |
| **Partner integrations** | Plug into logistics, banking, and government APIs |

### syncAI Success Metrics
- System latency: ≤ 8ms average (current baseline maintained)
- Daily synced operations: 10,000 → 500,000
- AI routing accuracy: ≥ 99.5%
- Uptime: ≥ 99.99% (current SLA maintained)

---

## 8. Technical Architecture Requirements

### Design Constraints (Acacia-specific, non-negotiable)

1. **Low-bandwidth first:** All core features must work on 2G/3G. No feature can require >100KB initial load on mobile.
2. **Offline-capable:** Local-first architecture with eventual consistency sync.
3. **Multi-carrier:** All payment integrations must support M-Pesa Daraja v2, Airtel Money API, and Tigopesa.
4. **Data sovereignty:** All customer data must be stored in-region (Tanzania/Kenya data centers).
5. **Swahili-ready:** UI must support full Swahili localization without layout breakage.

### Infrastructure Stack (current)
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** API throughput: 4.8GB/s, 88,432 ops/sec
- **Uptime:** 99.99% SLA guaranteed

### Scalability Benchmarks (inspired by Stripe/Linear architecture principles)

| Scale Stage | Users | Ops/sec | Architecture requirement |
|---|---|---|---|
| **Seed (now)** | <500 | 88K | Monolith + managed cloud |
| **Series A** | 5,000 | 2M | Microservices, CDN edge |
| **Series B** | 50,000 | 20M | Multi-region, event sourcing |

---

## 9. Go-to-Market Strategy

### How Scalable Companies Do It

- **Stripe:** Developer evangelism → land with one API → expand to full stack
- **Linear:** Product-led growth → viral within engineering teams → seat expansion
- **Shopify:** Free trial → merchant success stories → platform network effects

### Acacia GTM (adapted for B2B East Africa)

**Phase 1 — Land (Now → Q3 2026)**
- Target: Tanzanian distributors and importers, 20–100 employees
- Channel: Direct sales + referral (word of mouth is dominant in TZ business culture)
- Offer: Free 30-day E-Manager trial with full onboarding support
- Conversion lever: Show live dashboard to decision maker within first meeting

**Phase 2 — Expand (Q4 2026 → Q2 2027)**
- Upsell syncAI to existing E-Manager customers
- Expand to Kenya (Nairobi mid-market)
- Add M-Pesa Daraja v2 + NMB/CRDB bank integrations
- First channel partnership with a regional logistics company

**Phase 3 — Platform (2028+)**
- Open syncAI SDK to third-party developers
- Launch integration marketplace
- Expand to Uganda, Rwanda

### Pricing Model (SaaS, per seat)

| Tier | Price/month | Includes |
|---|---|---|
| **Starter** | $49 | Up to 5 users, E-Manager core |
| **Growth** | $199 | Up to 25 users, syncAI included |
| **Enterprise** | Custom | Unlimited users, dedicated support, custom integrations |

---

## 10. Milestones & Timeline

| Quarter | Milestone |
|---|---|
| **Q2 2026** | E-Manager v2.0 public launch · First 10 paying customers |
| **Q3 2026** | syncAI general availability · M-Pesa Daraja v2 live |
| **Q4 2026** | 50 enterprise customers · Kenya market entry |
| **Q1 2027** | Series A raise ($2–4M) · Mobile PWA launch |
| **Q2 2027** | 200 enterprise customers · syncAI SDK beta |
| **2028** | Multi-country (UG, RW) · Platform marketplace |

---

## 11. Competitive Landscape

| Competitor | Strengths | Weaknesses | Acacia advantage |
|---|---|---|---|
| **SAP / Oracle** | Brand, scale, global support | Cost ($50K+/yr), no M-Pesa, too complex | 10x cheaper, built for local conditions |
| **QuickBooks Africa** | Accounting familiarity | No workflow automation, no carrier APIs | Full operational layer, not just accounting |
| **Odoo** | Open source, modular | Requires heavy customization, no AI layer | Out-of-box African commerce stack |
| **Local ERP startups** | Regional presence | No AI, low reliability, poor UX | AI-native from day one, enterprise-grade uptime |
| **WhatsApp + Sheets** | Zero cost, familiarity | Non-auditable, unscalable | Migration path + import tools |

---

## 12. Risk Analysis & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Carrier API changes (M-Pesa)** | Medium | High | Abstract carrier layer; build direct Safaricom relationship |
| **Customer churn from complexity** | Medium | High | Free onboarding + dedicated success manager for first 90 days |
| **Bandwidth constraints limit adoption** | High | Medium | Offline-first architecture (P0 requirement) |
| **Regulatory changes (data laws)** | Low | High | In-region data storage; legal counsel on TZ/KE data acts |
| **Fundraising delay** | Medium | Medium | Revenue-first model; target profitability at 50 customers |
| **Competitor enters market** | Low | Medium | Context advantage is hard to replicate; move fast on integrations |

---

## 13. Comparison Summary — Acacia vs. Scalable Company PRDs

### What Linear does that we should adopt:
- **Extremely clear P0/P1/P2 triage** (done above)
- **Speed as a product value** — Linear ships every 2 weeks; Acacia should too
- **Opinionated defaults** — don't make operators configure everything; pre-configure for East Africa

### What Stripe does that we should adopt:
- **API reliability as the product** — our 99.99% uptime claim must be the anchor of every sales conversation
- **Documentation as marketing** — Stripe's docs are world-class; our integration guides should be too
- **Start narrow, go deep** — Stripe started with 7 lines of code; E-Manager should have a "zero to first workflow in 10 minutes" guarantee

### What Shopify does that we should adopt:
- **Merchant success = company success** — our CS team's metric should be customer revenue growth, not ticket closures
- **App ecosystem** — long-term, syncAI SDK creates the same network effect as Shopify apps

### What makes Acacia unique vs. all of them:
1. **Context is the moat** — M-Pesa depth, Swahili UX, offline resilience cannot be bolt-on features
2. **Infrastructure, not features** — we sell operational certainty, not software tools
3. **Regional first, global capable** — build for Tanzania constraints; scale wins everywhere else

---

*This document is reviewed quarterly. Next review: September 2026.*
