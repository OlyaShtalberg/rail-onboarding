# Welcome to RAiL

Welcome to the team — glad you're here. This doc has everything you need to get started.

_Onboarding to RAiL team (Rezolve AI Lab)_
_Updated 19.05.26 · Contact: @Olya Shtalberg_

---

## Access & Tools

| Tool | Link | Access via |
|---|---|---|
| Slack |  _(invite by email)_ | @Tanya (HR) |
| GitHub | [github.com/rezolved — quepasa-team](https://github.com/orgs/rezolved/teams/quepasa-team) | @Kristijan Belosevic |
| JupyterHub | _(link from @Yuri Vorontsov)_ | @Yuri Vorontsov |
| Jira | [rezolvetech.atlassian.net](https://rezolvetech.atlassian.net) | @Umer |
| Confluence | [rezolvetech.atlassian.net/wiki](https://rezolvetech.atlassian.net/wiki) | @Umer |
| Notion | _(invite by email)_ | @Olya Shtalberg |
| Azure | _(MaaP / Foundry / clusters)_ | SRE — @Hrvoje |
| BambooHR | _(invite by email)_ | @Tanya (HR) |
| Microsoft Teams | email, calls, calendar — MS ecosystem | @Tanya (HR) — invite by email |

---

## Repos

GitHub org: [github.com/rezolved](https://github.com/rezolved) · Team: [quepasa-team](https://github.com/orgs/rezolved/teams/quepasa-team)

| Repo | What's inside |
|---|---|
| `rezolved/rail-benchmarks` | Dataset generation CLI (`generate_dataset.py`), Semrush → scenarios pipeline, benchmark runner. **Start here** for data generation work |
| `rezolved/rail-finetuning` | SFT / DPO experiment scripts, training configs, experiment history |
| `rezaillm/brainpowa-research` | Phase 0 reference — historical experiments. Useful for: guardrails templates (attack vectors, jailbreak tactics), sales stage taxonomy (12 stages), model configs. Generation pipeline itself is not reusable (not grounded) |
| `rezolved/quepasa` | RAG agent, Product Ingestion API (`products_handler.py`), Multi-turn Conversation API with MongoDB session history |

Which repos are relevant to your first task — confirm with @Yuri Vorontsov.

---

## Slack Channels to Keep an Eye On

| Channel | Purpose |
|---|---|
| `#general` | Company-wide |
| `#rail-private-oneteam-onegoal` | RAiL team-wide |
| `#rail_pod_maap_llm` | Main pod channel |
| `#llm-maap-data-benchmarking` | LLM / data / benchmarking + текстовые дейлики |
| `#e-commerce-benchmark-project` | Project: Conversational Commerce Benchmark |
| `#brainpowa_realtime_api` | Production realtime API |
| `#wins-and-shoutouts`, `#fun_random` | Опционально — культура |

---

## Recurring Calls

| When | Event |
|---|---|
| Mon & Fri, 9:00 London | RAiL Oneteam Standup |
| Tue & Thu, 13:45 London | Bi-weekly sync — LLM / MaaP / Data / Benchmarking |
| Daily (текстом) | Дейлики в `#llm-maap-data-benchmarking` |

---

## Working Communication Rules

**Avatars.** Поставь аватарку в Slack, Jira, Confluence, GitHub, Teams. Базовая гигиена коммуникации.

**PRs.** В заголовке PR — номер тикета из Jira (например, `LLM-577: ...`). Ссылки на артефакты эксперимента (PRs, reports, etc) — в Jira-тикете 



**Task ownership.** По умолчанию, передавая задачу — передаём оунершип и ответственность за результат. Идеальный ответ на задачу:

1. Переспросить в своей формулировке — убедиться, что задачу понимаем одинаково.
2. Предложить свой таймлайн.
3. Нести ответственность за результат: если результат не достигается предложенными инструментами — прийти к репортёру с вопросами и проблемами, предложить другое решение.
4. По завершению писать в Slack — дублировать с тегами потенциально заинтересованных лиц.

---

## First Two Weeks

Первые две недели — нормально потратить часть времени на тюнинг собственного сетапа: подключение инструментов, настройка IDE, AI-агента, доступы.

**AI-агент в работе — база.** Мы рассчитываем, что ты работаешь с AI-агентом. За это не ругаем и не поощряем — это просто стандарт.

**Ответственность — на человеке.** За каждый PR и каждое отправленное сообщение отвечает тот, кто их сделал, независимо от того, помогал агент или нет.

**Скиллы для AI-агента:**
- `general-skills.md` — общие скиллы для Cursor
- `team-skills.md` — скиллы, которые используются внутри команды

_(оба файла приложены отдельно)_

---

## Helicopter View: What We're Building

Rezolve AI builds an **Adaptive AI Sales Agent** — a conversational commerce experience where AI is the primary shopping interface, not a chatbot layered on top. The agent adapts the UI in real time based on user intent, conversation history, and context.

**Current verticals:** Fashion, Grocery
**Input:** text, voice, image
**Key capabilities:** multilingual, dynamic agent orchestration, grounding against retail data, upsell/cross-sell, checkout

The RAiL team (Rezolve AI Lab) owns the **model layer**: fine-tuning, dataset generation, evaluation, and benchmarking of **Brainpowa** — our custom conversational LLM.

**Read more:**
- PRD: Adaptive AI Sales Agent Demo — https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5581275160/PRD+Adaptive+AI+Sales+Agent+Demo
- [rezolve.ai](https://rezolve.ai) — external product overview

---

## Fine-Tuning Pipeline

The full automated fine-tuning loop. The goal: an agent that generates data, trains models, deploys, evaluates, and iterates — without manual steps.

- [Fine-Tuning Roadmap — Confluence](https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5485920843/Fine-Tuning+Roadmap)

---

## Team

| Person | Role | Good to ask about |
|---|---|---|
| @Salman | Chief Scientist (RAiL) & Chief AI Officer | Overall direction, headcount, top-level priorities |
| @Felix | VP of AI Strategy | Product vision, partnerships, demos, E-Commerce Benchmark |
| @Yuri Vorontsov | VP of AI Search Architecture | Tasks, architecture, process, Model Garden, Real-time API |
| @Vladimir Gorovoy | VP of AI Search Product | Fine-tuning pipeline, MaaP / Azure Foundry, load testing |
| @Anastasia Vorontsov | Prompt Engineer / LLM Linguist | Dataset generation, dialog quality, Jupyter notebooks |
| @Hossam | Senior AI Engineer / Agentic AI / RAiL | Benchmark runner, fine-tuning experiments, Conversation Commerce Benchmark |
| @Mohan | AI / ML Engineer — Squad Brainpowa | Model deployment (GPU), voice-to-voice, fine-tuning |
| @Preethi | AI / ML Engineer — Squad Brainpowa | Fine-tuning specialist, Vertex AI, dataset validation |
| @Sam Hart | AI / ML Engineer | Audio (STT/TTS), brainpowa-realtime-api, audio benchmarks |
| @Serhii Chashchukhin | CCAI / S&PD / Analytics | brainpowa Realtime API bugs, interruption handling |
| @Yusuf | AI / LLM Team Lead @RAILS | Model Garden (Gemma, OmniOne deploys) |
| @Wojciech Dobry | UI Engineer | Super Demo UX/Frontend |
| @Devendra | Frontend | Website frontend + Pipecat integration |
| @Shivaji | QA Team Lead | QA process, release testing |
| @Ilya (Eli) | Data Analyst | Semrush pipeline, data filtering and processing |
| @Anna (Anya) | Data Engineer | Product catalogs, dialog evaluation, Shopify data |
| @Umer | Project Manager | Jira, Confluence access |
| @Hrvoje | SRE Engineer | Кластеры, prod env, deploy, high-load |
| @Kristijan Belosevic | SRE Engineer | Доступы (GitHub и пр.) |
| @Tanya | HR | Contract, conditions |
| @Olya Shtalberg | PM | Onboarding, processes, coordination, any remaining questions |
