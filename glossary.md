# Rezolve — Glossary of Names & Terms (Public)

_Last updated: 2026-05-22_

> **Version for the AI agent of a new developer.** Contains roles, projects, terms. Does not contain personal information (biography, contracts, personality assessments) — that data is only in the internal version held by the TPM.

---

## Team Members

> Structure of each entry: **Role → What they do → Background/personal → Notes → Reports to / connections**

---

### Olya

- **Role:** TPM (Technical Project Manager)
- **What they do:** coordination between the RAIL/lab teams, onboarding, systematization of processes, benchmarks, developer checklist
- **Reports to:** Salman → Yuri (primary contact)

---

### Dan / Dan Wagner

- **Role:** CEO Rezolve
- **What they do:** makes all key decisions, focused on demos and the company's image, initiated the "war room" — bringing teams together for fast demos
- **Connections:** has known Felix since his first startup; Salman reports directly to him

---

### Salman / Salman

- **Role:** Chief Scientist (RAiL) & Chief AI Officer; former CTO
- **What they do:** takes top priorities from the CEO and cascades them down; manages tools, access, headcount; responsible for HR and hiring
- **Reports to:** directly to Dan; above Felix and RAIL

---

### Yuri / Yuri

- **Role:** VP of AI Search Architecture (RAIL/lab — Model Garden, EVALS, LLM)
- **What they do:** leads his team (Anastasia, Ilya, Anna, Hossam, Mohan, Preethi, Sergey and others), responsible for the website assistant, Real-time API (STT + LLM + TTS + Qwen3 Omni), onboarding processes. Migrated the real-time solution from the OpenAI WebSocket API to a proprietary REST-based orchestration (an orchestrator on HTTP requests instead of a persistent WebSocket connection)
- **Reports to:** Salman → Felix; Olya's primary contact

---

### Vlad / Vladimir / Vladimir

- **Role:** VP of AI Search Product; co-lead RAIL/lab (focus on EVALS and MaaP)
- **What they do:** leads the model deployment project on Microsoft AI Foundry (MaaP), coordinates the fine-tuning pipeline, Microsoft load testing, closes out the collaboration with the external agency Aion
- **Reports to:** on par with Yuri inside RAIL/lab

---

### Felix / Felix

- **Role:** VP of AI Strategy; the "face" of the team — partnerships, clients, demos, Microsoft
- **What they do:** sales demos, product evangelism, client relations. Responsible for benchmark visualization. Initiated the public e-commerce benchmark
- **Reports to:** Salman → Felix; Yuri is the technical partner

---

### Yusuf / Youssef

- **Role:** AI / LLM Team Lead @RAILS (Model Garden)
- **What they do:** search experiments, model deployment in Model Garden (deployed Gemma 4, plans OmniOne), aligning the pipeline on unstructured/hierarchical data with Yuri
- **Reports to:** RAIL/lab; Mohan also reported to him

---

### Anastasia / Anastasia

- **Role:** Prompt Engineer / LLM Linguist
- **What they do:** prompt engineering, LLM instructions, dialog quality, customer simulation. Develops and maintains the Jupyter notebooks for the dialog generation pipeline (scenarios, datasets, auto-evaluation). Prepares tenant × model configurations, runs generations and evaluations
- **Reports to:** Yuri's team; works in tandem with Anna and Ilya

---

### Anna / Anna

- **Role:** Data Engineer (per Slack title); in practice the work is analyst / content manager-style
- **What they do:** Pinterest queries for the pipeline, product catalog (converting Amazon catalogs, uploading to the platform), content for the Rezolve website, evaluating results. Runs the "human style" dialog experiment (rewrites assistant replies for style without changing the product part). Manual checking of the web assistant together with Ilya. In Super Demo: works on unstructured data for the Shopify store
- **Reports to:** Yuri's team; tight pairing with Anastasia

---

### Ilya / Ilya / Eli

- **Role:** Data Analyst
- **What they do:** Semrush — extracting real search queries (filtering, dedup, classification by gender). General data tasks. Manages the Semrush data source in the pipeline. In Super Demo: works on unstructured data for the Shopify store together with Anna
- **Reports to:** Yuri's team; works in tandem with Anna and Anastasia

---

### Hossam / Hassan

- **Role:** Senior AI Engineer / Agentic AI / RAiL
- **Reports to:** Yuri's team; works with Vladimir on fine-tuning
- **Spelling variants:** Hossam, Hassan — the same person

---

### Mohan / Mohan

- **Role:** AI / ML Engineer — Squad Brainpowa
- **What they do:** model deployment on GPU (Model Garden), fine-tuning, dataset generation, voice-to-voice (the first audio input/output for Model Garden, experimental stage). Creates SRE tickets for deployment requests
- **Reports to:** Yuri + Yusuf (direct managers); biweekly with Vlad, weekly with Salman

---

### Preethi

- **Role:** AI / ML Engineer — Squad Brainpowa (fine-tuning focus)
- **Reports to:** Yuri's team; biweekly with Vlad; deployment via SRE (Hervoy and Sarim)

---

### Senka _(on maternity leave)_

- **Status:** maternity leave

---

### Hrvoje / Harvey

- **Role:** SRE Engineer (Site Reliability Engineering)
- **What they do:** deploys models handed off from the ML team; works with GPU clusters and website assistant infrastructure
- **Spelling variants:** Hrvoje (Croatian, correct), Harvey (Anglicized, how he introduces himself), Hervoy (our misspelling) — the same person

---

### Sarim

- **Role:** SRE Engineer (Site Reliability Engineering)
- **What they do:** deploys models handed off from the ML team

---

### Sergey / Sergey

- **Role:** Developer
- **What they do:** investigates and fixes the interruption bug in the website assistant. Recently embedded full-time in Yuri's team
- **Reports to:** Yuri's team

---

### Juber / Zubair / Subeer / Zubair

- **Role:** Team Lead (Brain Cortex team)
- **What they do:** voice assistant — voice quality/stability (no v3 models due to latency), Shopify connector, cross-session memory, card persistence. Finalizing the Brain Cortex + Pristine demo. Drives the design plan and UI/UX epic for Super Demo, fixes bugs in Aura
- **Reports to:** a separate team within RAIL, in parallel with Yuri's team
- **Spelling variants:** appears in transcripts as Juber, Zubair, Subeer, Zubair — the same person

---

### Shevadja / Shivaji

- **Role:** QA Lead
- **What they do:** lead tester; QA collaboration with the LLM team

---

### Karbati / Karbati

- **Role:** Load Testing Engineer
- **What they do:** load testing

---

### Song Joong

- **Role:** Engineer (infrastructure)
- **What they do:** GPU memory bottleneck — autoscaling tests on the test env, production reconfiguration

---

### Sam / Sam Hart

- **Role:** AI / ML Engineer
- **What they do:** Audio (STT / TTS), production brainpowa-realtime-api on k8s dev/prod, audio benchmarks (fp16 baseline + int4/8-bit quantization), co-located Qwen3-Omni deployment
- **Reports to:** Yuri's team

---

### Serhii Chashchukhin / Sergey Chashchukhin

- **Role:** CCAI / S&PD / Analytics
- **What they do:** brainpowa Realtime API — software-level bugfixing; interruption handling in the website assistant
- **Reports to:** RAIL/lab — overlap with Yuri's team on the Website Assistant
- **Note:** Slack handle — `serhiichashchukhin`; not to be confused with **Sergey / Sergey** (developer on Yuri's team, a separate person)

---

### Kristijan Belosevic

- **Role:** SRE Engineer
- **What they do:** access (GitHub, etc.), infrastructure for the RAIL team
- **Contact for:** new hires regarding GitHub access; previously this function was handled by @Jamson

---

### Ruban / Ruban _(leaving)_

- **Role:** Engineer (India)
- **Status:** planned departure due to low engineering culture (as of April 2026)

---

### Marcin / Marсin _(left)_

- **What they did:** engineer on Yuri's team. Worked with Hossam on the COBASA integration test plan (20–30% done). Clarified that the "unstructured data" work is in fact hierarchical/complex structured data
- **Status:** left ~December 2025
- **Note:** in transcripts appears with double spelling — Marcin (Latin) and Marсin (with a Cyrillic "с") — the same person

---

### Umer / Umar / Omar

- **What they do:** manager; under him there was a structured Jira system (Mohan misses it)
- **Spelling variants:** Umer (preferred), Umar, Omar — the same person

---

### Chloe / Chloe

- **Role:** DevOps
- **Involvement:** minimal help on the MaaP project

---

### Angelica

- **Role:** UX/Frontend Engineer (new)
- **What they do:** UX and frontend for Super Demo together with Voitech
- **Reports to:** Super Demo team (Voice Orchestration layer)

---

### Abby

- **Role:** Engineer, Voice Orchestration
- **What they do:** Voice Orchestration as part of Super Demo — together with Juber and Yuri
- **Reports to:** Super Demo team

---


### Yannishen

- **Role:** Presales / Data
- **What they do:** prepared the grocery dataset for Super Demo

---

### Avinash Singh

- **Role:** Deepgram (STT) expert
- **What they do:** developer on Juber's team / expertise on speech-to-text and text-to-speech solutions


---

### David

- **Role:** HR. Based in London, UK. Familiar with hiring in Israel. Mentions having been to Israel once.

---

### Wojciech Dobry / Wojteck / Voitech

- **Role:** UI Engineer (Slack title); in practice a team-lead function in Super Demo UX/Frontend
- **What they do:** leads the Super Demo UX/Frontend layer, produces the design plan for his iterations
- **Reports to:** Super Demo team; Angelica works under him
- **Spelling variants:** Wojciech Dobry (correct / Slack), Wojteck, Voitech, Voigt, Dobry — the same person

---

### Avi / Avi

- **Role:** Engineer (Juber's team)
- **What they do:** TTS workups on open-source models with expressive voice, integration into the Brain Cortex voice UI. Goal — pick the best TTS model for self-hosted deployment

---

### Diego / Diego

- **Role:** Engineer (Yusuf's team)
- **What they do:** Embeddings Garden — exploration findings across different embedding models

---

### Tom Bonner / Tom Bonner

- **What they do:** produced a report on the Brain model and H4-5 using ~14 criteria. The artifact needs to be unpacked together with Yuri/Anastasia — exactly what the criteria were and in which process they were applied

---

### Mat / Mat

- **Role:** contact person of an external team/client
- **What they do:** their team is building an assistant outside Rezolve, RAIL helps them (running evaluations). Reported that they are moving to a new product feed — Anna is already preparing scenarios for it

---

### Isa / Asa

- **Role:** Engineer (Yusuf's team / Brain Power Labs)
- **What they do:** Data Ingestion in Brain Power Labs — processing hierarchical data
- **Reports to:** Yusuf's team
- **Spelling variants:** Isa (correct), Asa — the same person

---

### Jamson

- **Role:** SRE Engineer (Site Reliability Engineering)
- **What they do:** onboarded onto the Website Assistant (Enhanced Games)
- **Status:** previously Olya's SRE contact for GitHub access; from 05.2026 this function is handled by @Kristijan Belosevic

---

### Sharif

- **Role:** Engineer (Yusuf's team / Brain Power Labs)
- **What they do:** data enrichment side — works in tandem with Diego and Yuri
- **Reports to:** Yusuf's team

---

### Maria

- **Role:** ML / Fine-tuning
- **What they do:** discusses fine-tuning strategy with Vlad; participates in morning syncs before LLM Bi-weekly

---

### Devendra

- **Role:** Frontend Developer
- **What they do:** Website frontend + Pipecat integration; works in pair with Sergey — website assistant tasks are split between the two of them

---

### Robin

- **Role:** HR Director Rezolve


---

### Leon _(external / client)_

- **Role:** client or partner (presumably Enhanced Games or a closely related integration)
- **Context:** the RAIL team is building a solution for him — many requirements and issues, discussed at the Rail Standup (WebSpeech API, STT challenges in noisy environments)

---


## Roles & Abbreviations

| Abbreviation | Expansion |
|---|---|
| TPM | Technical Project Manager |
| ITSM | IT Service Management |
| LLM | Large Language Model |
| PM | Project Manager |
| AML Engineer | Applied Machine Learning Engineer — an ML engineer focused on application: deployment, training and supporting models in real systems |
| GPU | Graphics Processing Unit — a graphics card used to train and run ML models. At Rezolve — the hardware on which models run in Model Garden |
| VM | Virtual Machine — a virtual computer on Rezolve's servers. Engineers (e.g. Mohan) don't work locally but connect to a remote machine with the needed GPUs and access |
| SSH | Secure Shell — a way to connect to a remote machine (VM) through the terminal. Open the console → enter a command → work as if you were sitting at that computer, even though it's in a data center |
| SRE | Site Reliability Engineering — the team responsible for deployment and stability of systems in production. At Rezolve: @Hrvoje (clusters, prod env) and @Kristijan Belosevic (access) take models from the ML team and roll them out |
| PRD | Product Requirements Document — a document describing a feature or product: why it's needed, for whom, requirements, success metrics. Answers *what* and *why*, not *how* |
| Open-weight | A model whose **weights** (the numbers inside a neural network, the result of training) are published and available for download. You can run it on your own, fine-tune it, embed it into a product. Examples: Qwen3 Omni, Gemma 4, Phi-3. Important: open-weight ≠ open-source — training code and data may remain closed |
| Open Source (OSS) | In a broad sense — open code. In the ML context at Rezolve used as a synonym for open-weight: models that the team downloads, deploys on its own GPUs and fine-tunes |
| Proprietary model | A model with closed weights, architecture and training data. Available only via API, paid per request. Examples: GPT-4, Claude, Gemini. At Rezolve used as orchestrators for generating reference dialogs and for testing |

---

## Rezolve AI — Products & Features

| Name | Description |
|---|---|
| Agentic SideKick 3.0 | The main AI agent, autonomously closes 50–85% of requests |
| Creator Studio | No-code platform for designing AI workflows |
| Agentic ITSM | A full-fledged help desk with AI integration |
| VoiceIQ | Voice agent based on natural language |
| SearchIQ | AI search over the corporate knowledge base |
| Brainpowa Model Garden | Internal model repository (check with Yuri) |
| Groceries | Project (check with Yuri) |

**How to read the Brainpowa / Brain names:**

| Pattern | What it means | Analogy |
|---|---|---|
| **Brainpowa** | Name of the model — like "Claude" at Anthropic | Anthropic : Claude = Rezolve : Brainpowa |
| **Brainpowa [X]** | A specific model or a server that calls the model | Brainpowa Real-time API = server for real-time voice |
| **Brain [X]** | An SDK, platform component or product on top of an LLM | Brain Cortex = SDK/orchestration; Brain Checkout = product |

---


## Tools & Platforms

| Platform | Purpose | Access status |
|---|---|---|
| Slack | Primary communication | + |
| GitHub | Code | Set up — via @Kristijan Belosevic (SRE) |
| Jira | Task tracking | Via @Umer (PM) |
| Confluence | Documentation / wiki | Via @Umer (PM) |
| Notion | Project docs / planning | Via @Olya Shtalberg |
| JupyterHub | ML / data | + |
| BambooHR | HR | Onboarding completed |
| Deel | Salary / contract (Israel) | + |
| Microsoft Teams | Email, calls, calendar | Via @Tanya (HR) |
| Azure / Microsoft AI Foundry (MaaP) | Model deployment, GPU clusters, prod env | Via SRE — @Hrvoje |
| Semrush | SEO / data for the pipeline | — |
| Anthropic / Claude Code | AI development | Set up |
| Cursor | AI-first IDE; team-wide unification | Set up |
| Vertex AI | Google Managed ML Platform — environment for training and running models. Preethi uses it for fine-tuning | — |
| Hugging Face | Repository and hosting for ML models — publishing and sharing trained models | — |
| Nebius | Cloud inference provider for large ML models (testing Qwen 3.5 397B, etc.) | — |
| DeepInfra | Cloud inference provider, analog of Nebius (no JSON response format support) | — |
| Silicon Flow | Cloud inference provider, analog of Nebius/DeepInfra | — |
| DVC (Data Version Control) | Versioning of datasets and models; backend on Azure Blob | — |


---

## Notes

- All folders inside Rezolve: **names in English**
- Documents: Russian for documents for internal use*, English for external documents
- This file is updated as new names and terms appear


## Technical Terms

> Alphabetical consolidated list of Rezolve-specific and general ML terms. Aggregated from the accumulated "New terms (auto)" sections.

| Term | Definition |
|---|---|
| Add to Cart Behavior | One of the four eval-model criteria — assessment of correctness when adding a product to the cart (correct product, correct size, etc.). |
| Aion | External partner agency of Rezolve. Supplied data/artifacts for evaluation (Preethi validates datasets from Aion). The collaboration is winding down — Vladimir is closing the contract |
| Asking Clarification When Needed | One of the four eval-model criteria — assessment of whether the agent clarifies missing parameters (size, length, etc.) at the right moment. |
| ASR (Automatic Speech Recognition) | Speech recognition models — converting audio to text (Speech-to-Text). |
| Assert | An explicitly defined test pass criterion. In software testing — a check: "the expected result matches the actual one". In the LLM context: since model output is unstable and non-deterministic, an Assert is not strict equality but a criterion (e.g.: "the answer contains a greeting", "tool X is called", "an out-of-scope request is rejected"). A test configuration matrix without Asserts is a list of experiments, not a test plan. |
| Aura | A component / system inside Brain Cortex (mentioned by Zubair in the context of bugfixes before a demo). Exact purpose to be clarified |
| Azure ML Platform | Microsoft's cloud platform, used by Mohan to start, stop and monitor GPU instances for deploying models in Model Garden. |
| BAAI (BGE) | Open-source embedding models from the Beijing Academy of AI (Bge-M3 and similar). On one of the providers they were "cut off" — alternatives had to be found. Used as one of the embedding candidates |
| Brain API | Internal Rezolve project, run by Juber's team; used to create proof-of-concept products (Dunkin' Donuts, Rezolve Fashion, Shoebi, etc.) |
| Brain Power Labs | Internal environment / Notion space of Yusuf's team for data ingestion work with hierarchical data. Yusuf demoed the team workflow for processing hierarchical data via Brain Power Labs (received positive feedback, UI improvements required) |
| Brainpowa real-time API / Brainpowa RT API | Rezolve's own server for the real-time voice API. Replaced the OpenAI real-time API in the Heder Shalom stack |
| CC3 (Conversational Commerce v3) | Third version of the Conversational Commerce product at Rezolve. In context — the internal codename under which the corresponding AI assistant / product line is being built. When CC3 comes up in chats/meetings, this is what is meant, not any external term. |
| CLI (Command-Line Interface) | Command-line interface — a way to run programs through text commands in the terminal (rather than through buttons in an app). In the RAIL context: many tools (generate_dataset.py, train_trl.py) are CLI scripts that engineers run from the terminal with parameters. Example: `python generate_dataset.py generate --config experiment.yaml` |
| COBASA / Kubaza / COBESIS | An internal Rezolve system/product that Yuri's team worked on to stabilize and extend (integration tests, adding datasets, new features) |
| CoT (Chain of Thought) | A reasoning chain inside the model's answer — when the model "thinks out loud" before the final answer. Rule: if the base model can do CoT, the fine-tuning dataset should also contain CoT |
| Data enrichment search | Direction of work for Yusuf's team — data enrichment for search. One of the roadmap initiatives described in the Brain Power Labs Notion |
| Deepgram | Proprietary STT (speech-to-text) provider. Juber's team uses it currently. The goal of the Omni-LLM project is to find an open-weight alternative |
| DeepInfra | Cloud inference provider for ML models. Analog of Nebius — used as an alternative. Limitation: does not support JSON response format |
| Diversity (diversity parameters) | Parameters for synthetic dialog generation from Vlad: gender of the store's audience, format, type of buyer, etc. Layered onto the short-dialog task as dimensions for dataset diversity |
| DPO (Direct Preference Optimization) | A method of training a model on preferences: not just "here is the correct answer" but "here are two answers — this one is better, that one is worse". Training is done on pairs (DPO pairs): a bad answer + a good answer to the same query. In RAIL, pairs were generated automatically for gender clarification scenarios (5 error patterns). Problem: 187 pairs — too few, DPO didn't work in 4 attempts. Plan: Approach B will yield 1K+ quality pairs, then try again. |
| DVC (Data Version Control) | Dataset and model versioning system — an analog of Git but for large files. In RAIL: backend on Azure Blob Storage |
| ElevenLabs | Proprietary TTS provider. Used in Super Demo. The goal is to replace with an open-weight alternative (Kokoro TTS) to reduce vendor lock-in |
| Embeddings Garden | Internal Rezolve project — an analog of Model Garden, but for embedding models. Migration to KSOR/Qdrant for scaling is underway. Diego leads exploration of different embedding models, under Yusuf |
| Eval model / Automatic dialog scoring | A system for automatic scoring of agent dialogs against defined criteria. Developed by Anna and Anastasia since November. Evaluates the entire dialog, compares against human annotation. |
| Fine-tuning / fine-tuning | Further training of an existing model on new data for a specific task without changing the base architecture. |
| Fine-tuning data / Benchmark data | Two distinct types of data in the team: benchmark data — for evaluating models (answer quality); fine-tuning data — for training the model (e.g., tool calling). Problem: these two data types were for a long time created in isolation and were not aligned with each other |
| Gemma | Family of open-weight models from Google DeepMind (Gemma 2, Gemma 4). Yusuf deployed Gemma 4 in Model Garden |
| gpt-oss-120B / gpt-oss-20B | Open-weight LLM from OpenAI. 20B handled tasks faster than Gemini in some use cases. Discussed as a fallback for own deployment in Model Garden — as a replacement for proprietary models |
| Grounding | The 5th dialog evaluation metric (in addition to the 4 existing ones). Assesses how grounded the model's answer is in actual catalog data, rather than "made up" |
| Guardrails | Constraints and filters on model behavior — protection against unwanted answers, off-topic requests, etc. Salman requested guardrails testing |
| Human in the loop | Human participation in the evaluation/validation process — when part of the work cannot be automated and requires manual checking. Question: can it be avoided with improved prompt instructions? |
| Kokoro TTS | Open-weight speech synthesis model (Text-to-Speech). Planned as a replacement for ElevenLabs in Super Demo. Lightweight (~82M parameters), low latency |
| LoRA / QLoRA | Parameter-Efficient Fine-Tuning: instead of training the entire model, a small adapter (LoRA) is added. QLoRA — the same but with quantization (4-bit) to fit a large model into a smaller GPU. Allows fine-tuning of 20B–120B models on limited hardware |
| MaaP | Project for publishing Rezolve models on Microsoft Azure AI Foundry for the external market. Includes three models for ecommerce tasks. The publication process took several months (from December to April) — first experience for both sides. |
| MCP (Model Context Protocol) | An open protocol from Anthropic for connecting AI agents (Claude, Cursor) to external tools/data/services through a standard interface. Olya has MCP servers configured for MS365 / Slack / Granola / Telegram etc. |
| Nebius | Cloud provider for running large ML models. The team uses it for testing (e.g. Qwen 3.5 397B) |
| Noise cancellation | Suppression of background noise in real-time voice. One of the items in the real-time API backlog, being worked on together with Sam and Sergey |
| Omni-LLM | New project: monitoring and evaluation of open-source models for STT, TTS and VAD. Goal — find alternatives to Deepgram and ElevenLabs. Artifacts: model matrix, leaderboard, audio dataset |
| Omni models / LLM Omni | Multimodal models that accept text, audio, image and video as input and can produce a response in several modalities, including sound. |
| OmniOne | Open-weight Omni model in the Model Garden deployment roadmap under Yusuf. Exact specs to be clarified |
| Phi | Family of small open-weight models from Microsoft (Phi-3, Phi-3.5). Preethi worked with Phi-3/5.3 during fine-tuning |
| Product feed | Structured product feed from partners/clients. Mat reported that the external team is moving to a new product feed — Anna is preparing ~100 scenarios for it (45 already sent) |
| Product Fit (catalog) | Dataset / product catalog with the right structure for Rezolve AI's needs — cleaned and prepared for the model to work with. Includes products covering the agent's target queries. |
| Provenance | Metadata stored alongside each dialog in the dataset: which scenario, store configuration, which tools were called, which models were used, tool call patterns. Needed for experiment reproducibility |
| Qdrant | Open-source vector database. Used as the backend for Embeddings Garden — migration to KSOR/Qdrant for scaling embedding search |
| Quantization / Quantization | Compression of a model — reducing weights from float32/float16 to lower precision (int8, int4) to save VRAM and speed up inference. In audio benchmarks Sam compares an fp16 baseline against int4 and 8-bit |
| QuePasa | A startup created by Felix together with Yuri, sold to Rezolve in June. Felix was the initiator and executor of the deal. |
| Qwen | Family of open-weight models from Alibaba (Qwen3, Qwen3-Omni, Qwen 3.5 — 32B/35B/120B/397B). Qwen3-Omni co-located with brainpowa-realtime-api in production. Qwen3 32B — on Brainpowa Model Garden Dev (Mohan, fix tool-call parser) |
| RAG (Retrieval-Augmented Generation) | Architecture in which the model, before answering, searches for relevant information in a knowledge base (retrieval) and then generates an answer based on what was found. QuePasa works as a RAG agent |
| RAIL (Rezolve AI Lab) | Department inside Rezolve focused on AI development and research. Includes sub-teams: Model Garden, EVALS, LLM. |
| Recommendation Usefulness | One of the four eval-model criteria — assessment of the usefulness and relevance of the agent's recommendations. |
| REST-based orchestration | Architectural approach where regular HTTP requests are used instead of a persistent WebSocket connection. The orchestrator itself manages call order, error handling and state. Yuri migrated the real-time solution from the OpenAI WebSocket API to this approach |
| Rubrics | A system of scoring dialogs against criteria (per turn or for the entire dialog). In RAIL: Intent Understanding, Sales Persona, Context Use, Recommendation Usefulness, Clarification, Add-to-Cart. The sixth criterion — Grounding — is being added. Used as an LLM judge in the pipeline |
| Scope creep | Gradual, uncontrolled expansion of the scope of a task or project beyond what was initially agreed. Happens imperceptibly: "let's add this too", "while we're at it, let's also tweak that". In the LLM testing context: if Asserts aren't locked in beforehand, the evaluator starts expanding the criteria on the fly — and it becomes impossible to tell what was actually being tested. |
| Semrush | Platform for SEO and marketing analytics. In the RAIL context used as a source of real user search queries (what people search for on the internet). From these queries, scenarios for training data are generated — realistic buyer queries (e.g., "women's winter coat"). 104 directories of Semrush data are available in the pipeline. Ilya manages the Semrush → GitHub pipeline. |
| SER (Sentence Error Rate) | STT quality metric — the percentage of sentences with at least one error |
| SFT (Supervised Fine-Tuning) | A fine-tuning method: the model is shown pairs (prompt → ideal answer) and learns to reproduce such answers. The baseline training method in RAIL — before trying DPO |
| Showstopper | Critical bug blocking a release/demo. Yuri used the term about inconsistency in keeping context in the Brainpowa real-time API |
| Silicon Flow | Cloud inference provider, analog of Nebius and DeepInfra. Yuri is rolling out its use inside CUDA generator scenarios as an alternative |
| Simulation API | Nebius-hosted Kimi-K2 model that simulates buyer behavior in synthetic dialogs. Customer agent = Kimi-K2, Assistant agent = QuePasa. Together they generate dialogs for the dataset |
| Single-turn / Short dialog | Dataset generation format — short dialogs up to the first tool call. Originally a separate task, later merged with the diversity task (short dialogs × Vlad's diversity parameters) |
| SLO (Service Level Objective) | Service reliability target — a measurable promise about how the system behaves (e.g., "99.9% of API requests answer in < 200ms over a month"). Related terms: **SLI** — the metric itself (latency, error rate, availability) that is measured; **SLA** — a formal contract with the customer, usually weaker than the SLO + penalties for violation; **Error budget** — the allowed percentage of SLO violations (for 99.9% the budget = 0.1%); while the budget isn't exhausted — features are shipped, once exhausted — focus shifts to reliability |
| STG / Staging | Intermediate environment between development (dev) and production. Everything is real but not visible to users — a "rehearsal" before the live deploy. STG push = rolling out a new version to staging for testing. |
| Super Demo | Flagship demo in 5 layers: UX/Frontend → Voice Orchestration → Agent Orchestration (Brain Cortex + QuePasa) → Data Layer → Model Garden. Verticals: fashion and grocery. The TPM's task — centralized plan with gap analysis |
| Tool calling / Tool calls | A mechanism that the model is taught during fine-tuning — the ability of the model to call external tools/functions at the right moment in the dialog |
| TTS (Text-to-Speech) | Speech synthesis models — converting text to audio. |
| VAD (Voice Activation Detection) | Voice activity detection — determines when the user is speaking and when they are silent. Needed for real-time voice systems |
| Vendor lock-in | Dependence on a single vendor — when the product is so tied to a specific API (e.g. OpenAI, Anthropic) that switching is extremely hard. One of the reasons for moving to open-weight models |
| vLLM | Open-source framework for high-throughput LLM inference. Vladimir is exploring speeding up gpt-oss-120B through vLLM tuning + speculative decoding |
| Voice-to-voice model | An experimental model that accepts audio as input and returns audio as output. Unlike the existing text-to-text and VLM models in Model Garden. At the current stage — only for internal testing on top of open-source solutions. |
| WebRTC | Peer-to-peer real-time communication protocol (audio/video). Used in the WebSpeech API context, discussed at the Rail Standup regarding STT challenges in noisy environments |
| WebSocket | Protocol for a persistent two-way connection between client and server. The OpenAI Real-time API originally worked over WebSocket; Yuri migrated the Heder Shalom stack to REST-based orchestration instead of WebSocket |
| WER (Word Error Rate) | STT quality metric — the percentage of incorrectly recognized words. In the Rezolve context, especially important for brand names (Resolve, Apple, Asus, etc.) |
| Whisper | Open-source ASR model from OpenAI (speech-to-text). Used for transcription of meetings; at Rezolve also considered as a fallback ASR in the Omni-LLM project |
| Batch (batch) | A pack of examples/requests processed at once — to fit into GPU memory. In fine-tuning: dialogs go into the model in batches. In generation: Anastasia launches 30 scenarios in batches rather than one by one. A chunk is about the size of text, a batch is about the size of the task queue |
| Vibe coding / Vibe coding | An approach to development using AI tools (in context — Cursor). Felix independently wrote a white-code demo for the Rail models and taught this approach to David Minem. |
| Store configuration / Store configuration | Type of store (men's only / women's only / kids' / unisex) that affects the tool calls schema. For example, in a strictly women's store the `gender` parameter is excluded from the tool call and the assistant does not ask clarifying questions about gender. Affects the format and schema of the dataset, not just the catalog |
| Tricky customers | Synthetically generated user personas that behave non-standardly — forget to specify the size, leave parameters unsaid, etc. Used for stress-testing the agent. |
| Chunk (chunk) | A fragment that a large document is cut into so it fits into the model's context window. In RAG: document → chunks → indexing → on a query only the relevant chunks are retrieved. Example: an Amazon catalog is cut into chunks and indexed into QuePasa |
| Endpoint (Endpoint) | A specific address in an API at which one action can be performed. Example: `POST /evaluate` — accept a dialog and return a score; `GET /models` — return the list of models. Eval Endpoint = endpoint for scoring dialogs against rubrics |
