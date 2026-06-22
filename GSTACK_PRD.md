# gstack — Product Requirements & Usage Reference

**Status:** Installed & active on this machine (team mode)
**Version installed:** v1.58.4.0
**Owner:** Acacia Labs (founder/lead dev)
**Last updated:** 2026-06-22

---

## 1. Executive Summary

gstack turns Claude Code into a **virtual engineering org**: a CEO who pressure-tests the product, an eng manager who locks architecture, a designer who catches AI slop, a reviewer who finds production bugs, a QA lead who drives a real browser, a security officer who runs OWASP + STRIDE audits, and a release engineer who ships the PR. It is ~55 skills and a set of native power tools, all delivered as Claude Code slash commands. MIT-licensed, free, open source (`garrytan/gstack`).

The point: **one builder moves like a team of twenty** by routing work through specialist roles and automated review gates instead of a single blank prompt.

---

## 2. Problem & Why It Exists

A solo founder using a raw AI coding agent gets one undifferentiated voice that agrees too easily, skips review, never opens a browser, and ships unverified. gstack injects structured rigor:

- **No blind agreement** — CEO/eng/design/security review boards challenge the work.
- **Verification, not assumption** — QA opens a real headless browser and tests flows.
- **Production discipline** — review, security audit, and release automation on every change.
- **Persistent memory** — decisions, plans, and learnings survive across sessions (gbrain).

This maps directly onto Acacia Labs' operating principles (Critical Review Board, Founder Reality Check, Execution Bias) in `EXECUTIVE_OS.md`.

---

## 3. Who Uses It

| Persona | Value |
|---|---|
| Founder / CEO who still ships | Strategic review (`/office-hours`, `/plan-ceo-review`) before writing code |
| Solo builder | Full team coverage — design, eng, QA, security, release — without hiring |
| Tech lead | Rigorous `/review`, `/qa`, and `/ship` gates on every PR |

---

## 4. How It Works (Architecture)

- **Skills** live at `~/.claude/skills/gstack/<skill>/SKILL.md` — Markdown instruction files Claude executes step by step.
- **Native binaries** (compiled by `./setup` via Bun): `browse.exe` (headless browser/QA), `design.exe`, `pdf.exe`, `server-node.mjs`. On Windows the install uses file copies, so **re-run `./setup` after every `git pull`**.
- **Team mode** (active here): a session-start hook auto-updates gstack hourly, silently, network-failure-safe.
- **Repo enforcement** (committed to this repo): `.claude/hooks/check-gstack.sh` + `.claude/settings.json` block skill use if gstack is missing, so teammates can't bypass it.
- **gbrain** (optional, installed): a Postgres/PGLite-backed knowledge store the agent can query semantically and via MCP.

---

## 5. Skill Catalog — by Workflow

### Plan & Strategy
| Command | What it does |
|---|---|
| `/office-hours` | YC-style product/strategy consult — describe what you're building |
| `/plan-ceo-review` | Founder-mode review of a feature/plan: should this exist, who cares, why pay |
| `/plan-eng-review` | Eng-manager review: architecture, scalability, maintainability |
| `/plan-design-review` | Designer's-eye review of the plan |
| `/plan-devex-review` | Developer-experience review of the plan |
| `/autoplan` | Runs CEO + design + eng + DX reviews sequentially with auto-decisions |
| `/spec` | Turn vague intent into a precise, executable spec |

### Design
| Command | What it does |
|---|---|
| `/design-consultation` | Researches your product, proposes a full design system + font/color previews |
| `/design-shotgun` | Generate multiple AI design variants, compare, collect feedback |
| `/design-html` | Production-quality HTML/CSS finalization |
| `/design-review` | Designer's-eye QA: spacing, hierarchy, AI-slop patterns — then fixes them |

### Build, Review & Ship
| Command | What it does |
|---|---|
| `/review` | Pre-landing PR review — finds correctness bugs and cleanup opportunities |
| `/ship` | Detect base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, open PR |
| `/land-and-deploy` | Land + deploy workflow |
| `/canary` | Post-deploy canary monitoring |
| `/investigate` | Systematic root-cause debugging |

### QA & Browser
| Command | What it does |
|---|---|
| `/qa` | Systematically QA a web app in a real headless browser and fix bugs found |
| `/qa-only` | Same, report-only (no fixes) |
| `/browse` | Fast headless browser for navigation, screenshots, DOM inspection, scraping. **Use for ALL web browsing** (never the Chrome MCP) |
| `/scrape` | Pull structured data from a page |
| `/benchmark` | Performance regression detection |

### Security
| Command | What it does |
|---|---|
| `/cso` | Chief Security Officer mode — OWASP + STRIDE audit |

### Docs & Knowledge
| Command | What it does |
|---|---|
| `/document-generate` | Generate missing docs from scratch |
| `/document-release` | Post-ship documentation update |
| `/diagram` | English (or mermaid) → editable diagram triplet |
| `/make-pdf` | Markdown → publication-quality PDF |
| `/retro` | Weekly engineering retrospective |
| `/learn` | Manage project learnings |

### Safety & Session
| Command | What it does |
|---|---|
| `/careful` / `/guard` | Destructive-command guardrails |
| `/freeze` / `/unfreeze` | Restrict edits to a directory for the session |
| `/context-save` / `/context-restore` | Save/resume working context |
| `/gstack-upgrade` | Upgrade gstack to latest |

> Full live list is in your global `CLAUDE.md` gstack section.

---

## 6. How To Use It — Common Recipes

**Validate a new feature idea before coding**
```
/office-hours        → describe the idea
/plan-ceo-review     → pressure-test it
/autoplan            → full multi-review pass, then implement
```

**Build → verify → ship a change**
```
(make the change)
/review              → catch bugs + cleanups on the diff
/qa <local-or-staging-url>   → real-browser test, auto-fix
/ship                → tests, changelog, commit, push, PR
```

**Security pass before release**
```
/cso                 → OWASP + STRIDE audit of the branch
```

**Debug a production issue**
```
/investigate         → systematic root-cause, not guess-and-check
```

---

## 7. Install State on This Machine

| Component | State |
|---|---|
| gstack core | ✅ v1.58.4.0 at `~/.claude/skills/gstack`, 55 skills registered |
| Prereqs | ✅ Bun 1.3.14, Git 2.52, Node 22.20 |
| Team mode | ✅ Enabled — auto-updates each session (`./setup --no-team` to disable) |
| Repo bootstrap | ✅ Committed to `main` (`61bb1ac`): gstack required for AI work; teammates auto-get it on clone |
| Plan-tune hooks | ✅ Installed — logs `AskUserQuestion` choices; tune via `/plan-tune` |
| Pre-push redaction | ✅ `redact_prepush_hook=true` — blocks pushing credentials (hook auto-installs on `/ship`) |
| gbrain | ⚠️ Installed but semantic search **deferred** — see §8 |

---

## 8. gbrain — Persistent Knowledge Store

**Installed:** gbrain v0.42.52.0 (`~/.bun/bin/gbrain`)
**Engine:** local **PGLite** at `C:\Users\HP\.gbrain\brain.pglite` (private, no cloud, no accounts)
**MCP:** registered at user scope, connected (`mcp__gbrain__*` tools available after restarting Claude Code)
**Trust policy:** personal (auto-pushes `~/.gstack/` artifacts back to the brain)

**⚠️ One step to fully activate:** semantic/vector search is **off** until an embedding API key is set. Keyword search and storage already work. To turn on semantic search, set one key and re-point the model:

```bash
# pick one provider
export ZEROENTROPY_API_KEY=ze-…      # default model already configured
export OPENAI_API_KEY=sk-…           # then: gbrain config set embedding_model openai:text-embedding-3-large
export VOYAGE_API_KEY=pa-…           # then: gbrain config set embedding_model voyage:voyage-code-3
```

Once a key is set, run `/setup-gbrain` again (idempotent) to index this repo and wire artifact sync. To move the brain to shared cloud (Supabase) later: `/setup-gbrain --switch`.

---

## 9. Maintenance

- **Update:** `/gstack-upgrade`, or `cd ~/.claude/skills/gstack && git pull && ./setup` (always re-run `./setup` on Windows after a pull).
- **Disable auto-update:** `cd ~/.claude/skills/gstack && ./setup --no-team`
- **Remove repo enforcement:** delete `.claude/hooks/check-gstack.sh`, the `PreToolUse` block in `.claude/settings.json`, and the gstack section in `CLAUDE.md`, then commit.

---

## 10. Risks & Notes

- **Mac-oriented tooling:** gstack and gbrain are primarily tested on macOS. This is a Windows install; core skills and binaries compiled cleanly, but edge-case skills may hit path issues — report and fix as encountered.
- **Repo requirement is enforced:** the committed hook denies skill use if gstack is missing globally. Any teammate/CI without gstack installed will be blocked until they install it (by design). The commit is **local only — not yet pushed**; it affects others only after you push.
- **gbrain doctor shows "unhealthy":** this is the deferred-embedding state on an empty brain (`resolver_health` warnings), not a real fault. It clears once embeddings + content are added.

---

## 11. Confidence

**High** on install state, skill catalog, and usage recipes (verified on this machine). **Medium** on long-term Windows stability of niche skills (gstack is macOS-first). **Medium** on gbrain semantic search until an embedding key is configured and verified.
