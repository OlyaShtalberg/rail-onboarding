# AI Pulse — Sales cohort onboarding program

**Status:** DRAFT — edit collaboratively before sending.
**Owner:** Olya Shtalberg (with Felix Tseitlin)
**Pilot cohort:** Sales · Week 1 = 01–05 June 2026
**Comms channel:** all live sessions in Teams · async / videos via Luma

---

## Theme

Live what we sell. The Sales team learns to use AI in the highest-leverage
moments of their actual work, with peer-shown cases as the engine — not
generic AI literacy lectures.

Three live 30-min sessions over the first week. Hosts demo on Monday, two
team members demo Wed and Fri. Homework runs in parallel: each participant
builds their own case in the same shape as the Monday demos.

---

## Step 0 · Friday 30.05 — pre-work invite

Send Friday EOD to Sales cohort (21 people from `cohorts.csv` filter
`cohort=Sales`).

**Channel:** Teams calendar invite for the three dates + Luma async page
with pre-work material.

**Includes:**

- Three Teams meetings scheduled: Mon 01.06, Wed 03.06, Fri 05.06 (time-slot TBD).
- Why we're doing this (1 sentence): *"We're building AI-first products at Rezolve. Before we sell agentic AI, we live it ourselves."*
- Pre-work (10–15 min total before Monday):
  - Install Claude Desktop with **Slack connector (MCP)** and **Microsoft connector (MCP)**.
    - Slack-MCP setup: adapt the `slack-setup` skill in `~/.claude/skills/` into a one-pager.
    - Microsoft-MCP setup: adapt `teams-outlook-setup` into a one-pager.
  - Think of ONE concrete work task (meeting prep, follow-up, draft, research) you want to bring as your homework case.
- Agenda preview for the three sessions (below).

**Owner:** Olya
**Send-by:** Friday 30.05 EOD

---

## Day 1 · Mon 01.06 — kickoff workshop (30 min + 30min · Teams)

Hosts (Olya + Felix) lead the session. Screen-share two real workflows.

### Part A · 10 min — Encouragement & principles

Peer-to-peer tone, not lecture.

| Theme | Soundbite |
|---|---|
| **Empowerment** | *"We want you to use AI. This is good for you, the team, and the company."* |
| **Encouragement** | *"Throw things at it. No wrong answers, no judgment — the worst case is you don't get help."* |
| **Responsibility** | *"You stay accountable for the output. AI is a fast intern, not your stand-in."* |
| **Safety / Review** | *"Always review before anything customer-facing leaves your hands."* |
| **Three skills that compound across tool changes:** | |
| → **Curiosity** | *"Try the thing — even when you're not sure it'll work."* |
| → **Optimization mindset** | *"If it CAN be optimized with AI, you have to try. If you find a better way, share it."* |
| → **Asking** | *"Ask the AI directly. AND ask humans about AI when stuck — Slack channel, your champion, Felix or me."* |

### Part B · 20 min — Two live demos by Felix, according to team's request

Both demos use the **same Sales workflow split into two halves** so the
audience sees end-to-end coverage.

| Slot | Case | Who demos | Workflow shown |
|---|---|---|---|
| 1 (~9 min) | **Meeting preparation** | TBD (?) | AI pulls context from prior call transcripts + handwritten notes + decks → produces a structured pre-meeting brief |
| 2 (~9 min) | **Meeting follow-up** | TBD (?) | AI takes the meeting transcript / recap notes → drafts follow-up email + updates the CRM + queues next-action reminders |
| Q&A (~2 min) | open | both hosts | quick questions only — longer ones in Teams chat after |

### Homework (due before Wed 03.06)

> Take one workflow of your own. Build a case in the same shape as Monday's
> demo (prep or follow-up). Bring the result to Wed or Fri — or post it
> in the Teams chat.

We will pick the strongest cases from the homework batch to be the Wed and
Fri demos in **future weeks** (cohort 2 onward).

---

## Day 2 · Wed 03.06 — Sales case demos (30 min · Teams)

Two team members present their own AI workflows. Hosts moderate.

| Slot | Case owner (TBD) | Workflow |
|---|---|---|
| 1 (~12 min) | **TBD (?)** | TBD — pick from candidate list below |
| 2 (~12 min) | **TBD (?)** | TBD — pick from candidate list below |
| Q&A (~6 min) | open | both presenters take questions |

### Candidate presenters (from `master-2026-05-25.csv` — Sales with substantive cases)

> Pick 2 for Wed, 1 for Fri. Maddie is reserved for Monday if she agrees to host the demo there; otherwise she's a strong Wed candidate.

| Name | Case topic | Sharing | workCase length |
|---|---|---|---|
| **Maddie Dixon** | SKO prep: scattered sources → finished deck | "dont-mind" | 327 chars |
| **luca acernese** | CRM migration + integrating Sales-stack | "yes" | 250 chars |
| **Arv Natarajan** | Claude Code + Gmail → expense report pipeline | "yes" | 202 chars *(could be too technical for Sales)* |
| **Dan Fahey** | Salesforce data wrangling after acquisition | "yes" | 149 chars |
| **Greg Radford** | GPT for drafting commercial proposal deck | "dont-mind" | 106 chars |

**Action items before Wed:**
- Confirm with each chosen presenter that they're up for it
- 15-min prep call between Olya and each presenter to walk through their slot
- Make sure their demo runs in ≤12 min with a single tab / screen open

---

## Day 3 · Fri 05.06 — Sales case demo + ??? (30 min · Teams)

| Slot | Owner | Workflow |
|---|---|---|
| 1 (~12 min) | **TBD (?)** — third presenter from the candidate list | TBD |
| 2 (~15 min) | **TBD (?)** — open slot, possibly homework showcase or AMA | TBD |
| Q&A / close (~3 min) | both hosts | next-week ask, championing the next-cohort path |

---

## Async between sessions

| Channel | Purpose |
|---|---|
| **Luma async page** | Recorded versions of the live sessions + short pre-recorded mini-clips for topics that don't fit in 30 min live |
| **Teams chat** (cohort group) | Wins / questions / failures shared between sessions. Low bar — emoji reactions ok. |
| **Office hours** | Optional 15-min 1:1 slots with Olya for anyone stuck on homework |

---

## Pre-flight checklist

- [ ] Champion candidates from `master-2026-05-25.csv` shortlisted
- [ ] Confirmed presenters for Monday demos (?)
- [ ] Confirmed 2 Wed presenters (?)
- [ ] Confirmed Fri presenter (?)
- [ ] Time-slot for the three sessions chosen (UK / Israel / India / US compatibility?)
- [ ] Pre-work one-pagers for Slack-MCP and Microsoft-MCP drafted
- [ ] Luma event page created
- [ ] Teams invites sent to all 21 Sales emails
- [ ] Email blast to Sales cohort sent Friday EOD

---

## Open questions

1. **Hosts for Monday demos** — Olya solo, Olya+Felix tag-team, or Felix solo?
2. **"Pre-work" tool install** — Claude Desktop is the assumption. Confirm vs. Claude Code / Cursor / ChatGPT Team.
3. **Time-slot** — Sales is distributed across geographies; pick a window that covers UK + East Coast comfortably. India/AU is unlikely to be in Sales cohort.
4. **Cohort coverage** — current 21 Sales submitters or all 32 from the original list (incl. non-submitters who need a separate nudge)?
5. **"Akrin 3" mystery** — voice fragment from earlier sketch not parsed. If something specific was meant for Friday, drop a note here.

---

_Last updated: 2026-05-28 · DRAFT — edit before sending_
