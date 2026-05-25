"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "ru";

const REPO_URL = "https://github.com/rezolved/rail-onboarding";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ============================================================
   ORG CHART — drawn in Rezolve brand colors, not loaded as image.
   ============================================================ */
const orgChart = {
  ceo: { name: "Salman Ahmad", role: "Chief AI Officer" },
  branches: [
    { lead: { name: "Senka Krivic", role: "Principal Scientist" }, team: [] },
    {
      lead: { name: "Juber Pathan", role: "Innovations & Agentic" },
      team: [
        { name: "Aleksandre Javakhishvili", role: "ML Engineer" },
        { name: "Amrita Yadav", role: "ML Engineer" },
        { name: "Avinash Sing", role: "—" },
        { name: "Tim Tang", role: "Data Scientist" },
        { name: "Tom Bornar", role: "ML Engineer" },
        { name: "Marcin Figiewicz", role: "ML / Software Engineer" },
        { name: "Angelica Turla", role: "ML Engineer" },
        { name: "Wojciech Dobry", role: "UI Engineer" },
      ],
    },
    {
      lead: { name: "Vladimir Gorovoy", role: "LLM" },
      team: [
        { name: "Ruban Agresh", role: "Data Scientist" },
        { name: "Preeti Kumar", role: "Data Scientist" },
        { name: "Mohanraj Chandrasekar", role: "Data Scientist" },
      ],
    },
    {
      lead: { name: "Yuri Vorontsov", role: "Benchmarking + Evals" },
      team: [
        { name: "Anna Platonov", role: "Data Engineer" },
        { name: "Anastasia Vorontsov", role: "ML Engineer" },
        { name: "Hossam Zawbaa", role: "ML Engineer" },
        { name: "Eli Briskin", role: "Business and Data Analyst" },
        { name: "Sam Hart", role: "AI / ML Engineer" },
      ],
    },
    {
      lead: { name: "Yusuf Sevinir", role: "Brainpowa Labs" },
      team: [
        { name: "Isa Tarık", role: "ML Engineer" },
        { name: "Kubra Akcay", role: "QA Engineer" },
        { name: "Diogo Carvalho", role: "AI / ML Engineer" },
        { name: "Shereef Bankole", role: "Senior Data Scientist" },
      ],
    },
    { lead: { name: "Felix Tseitlin", role: "VP of Platform & AI" }, team: [] },
    {
      lead: { name: "Umer Ahmad", role: "Delivery Manager" },
      team: [{ name: "Shivaji Jadhao", role: "QA Engineer" }],
    },
    { lead: { name: "Olya Shtalberg", role: "Project Manager" }, team: [] },
  ],
};

/* ============================================================
   PETS
   ============================================================ */
const pets: { file: string; ownerEn: string; ownerRu: string }[] = [
  { file: "Koshka.jpeg",    ownerEn: "Olya's",  ownerRu: "Оли" },
  { file: "Tenzor.jpeg",    ownerEn: "Felix's", ownerRu: "Феликса" },
  { file: "Marfa.jpeg",     ownerEn: "Yuri's",  ownerRu: "Юры" },
  { file: "Leela.jpeg",     ownerEn: "Sam's",   ownerRu: "Сэма" },
  { file: "Tutanhamon.jpeg", ownerEn: "Anya's", ownerRu: "Ани" },
];

/* ============================================================
   ACCESS — clickable links
   ============================================================ */
type AccessRow = {
  tool: string;
  link?: { label: string; href: string };
  linkText?: string;
  access: string;
};

const accessRows: AccessRow[] = [
  { tool: "Slack", linkText: "invite by email", access: "@Tanya (HR)" },
  {
    tool: "GitHub",
    link: { label: "github.com/rezolved — quepasa-team", href: "https://github.com/orgs/rezolved/teams/quepasa-team" },
    access: "@Kristijan Belosevic",
  },
  { tool: "JupyterHub", linkText: "link from @Yuri Vorontsov", access: "@Yuri Vorontsov" },
  {
    tool: "Jira",
    link: { label: "rezolvetech.atlassian.net", href: "https://rezolvetech.atlassian.net" },
    access: "@Umer",
  },
  {
    tool: "Confluence",
    link: { label: "rezolvetech.atlassian.net/wiki", href: "https://rezolvetech.atlassian.net/wiki" },
    access: "@Umer",
  },
  { tool: "Notion", linkText: "invite by email", access: "@Olya Shtalberg" },
  { tool: "Azure", linkText: "MaaP / Foundry / clusters", access: "SRE — @Hrvoje" },
  { tool: "BambooHR", linkText: "invite by email", access: "@Tanya (HR)" },
  { tool: "Microsoft Teams", linkText: "email, calls, calendar — MS ecosystem", access: "@Tanya (HR)" },
];

/* ============================================================
   REPOS
   ============================================================ */
const repos = [
  {
    name: "rezolved/rail-benchmarks",
    href: "https://github.com/rezolved/rail-benchmarks",
    descEn: "Dataset generation CLI (generate_dataset.py), Semrush → scenarios pipeline, benchmark runner.",
    descRu: "CLI для генерации датасетов (generate_dataset.py), Semrush → сценарии, benchmark runner.",
  },
  {
    name: "rezolved/rail-finetuning",
    href: "https://github.com/rezolved/rail-finetuning",
    descEn: "SFT / DPO experiment scripts, training configs, experiment history.",
    descRu: "SFT / DPO эксперимент-скрипты, training-конфиги, история экспериментов.",
  },
  {
    name: "rezaillm/brainpowa-research",
    href: "https://github.com/rezaillm/brainpowa-research",
    descEn: "Phase 0 reference — historical experiments. Useful for guardrails templates, sales stage taxonomy, model configs. Generation pipeline itself is not reusable (not grounded).",
    descRu: "Phase 0 — исторические эксперименты. Полезно для guardrails-шаблонов, sales stage taxonomy, model configs. Pipeline генерации не переиспользуется (not grounded).",
  },
  {
    name: "rezolved/quepasa",
    href: "https://github.com/rezolved/quepasa",
    descEn: "RAG agent, Product Ingestion API (products_handler.py), Multi-turn Conversation API with MongoDB session history.",
    descRu: "RAG-агент, Product Ingestion API (products_handler.py), Multi-turn Conversation API с MongoDB session history.",
  },
];

/* ============================================================
   CHANNELS
   ============================================================ */
const channels = [
  { name: "#general", descEn: "Company-wide", descRu: "Company-wide" },
  { name: "#rail-private-oneteam-onegoal", descEn: "RAiL team-wide", descRu: "RAiL команда — общий канал" },
  { name: "#rail_pod_maap_llm", descEn: "Main pod channel", descRu: "Main pod канал" },
  {
    name: "#llm-maap-data-benchmarking",
    descEn: "LLM / data / benchmarking + text dailies",
    descRu: "LLM / data / benchmarking + текстовые дейлики",
  },
  {
    name: "#e-commerce-benchmark-project",
    descEn: "Project: Conversational Commerce Benchmark",
    descRu: "Проект: Conversational Commerce Benchmark",
  },
  { name: "#brainpowa_realtime_api", descEn: "Production realtime API", descRu: "Production realtime API" },
  { name: "#wins-and-shoutouts, #fun_random", descEn: "Optional — culture", descRu: "Опционально — культура" },
];

/* ============================================================
   CALLS
   ============================================================ */
const calls = [
  { whenEn: "Mon & Fri", whenRu: "Пн и Пт", what: "RAiL Oneteam Standup" },
  {
    whenEn: "Tue & Thu",
    whenRu: "Вт и Чт",
    what: "Bi-weekly sync — LLM / MaaP / Data / Benchmarking",
  },
  { whenEn: "Daily (text)", whenRu: "Каждый день (текст)", what: "Dailies in #llm-maap-data-benchmarking" },
];

/* ============================================================
   TEAM TABLE (from MD)
   ============================================================ */
const teamTable = [
  { person: "@Salman", role: "Chief Scientist (RAiL) & Chief AI Officer", ask: "Overall direction, headcount, top-level priorities" },
  { person: "@Felix", role: "VP of AI Strategy", ask: "Product vision, partnerships, demos, E-Commerce Benchmark" },
  { person: "@Yuri Vorontsov", role: "VP of AI Search Architecture", ask: "Tasks, architecture, process, Model Garden, Real-time API" },
  { person: "@Vladimir Gorovoy", role: "VP of AI Search Product", ask: "Fine-tuning pipeline, MaaP / Azure Foundry, load testing" },
  { person: "@Anastasia Vorontsov", role: "Prompt Engineer / LLM Linguist", ask: "Dataset generation, dialog quality, Jupyter notebooks" },
  { person: "@Hossam", role: "Senior AI Engineer / Agentic AI / RAiL", ask: "Benchmark runner, fine-tuning experiments, Conversation Commerce Benchmark" },
  { person: "@Mohan", role: "AI / ML Engineer — Squad Brainpowa", ask: "Model deployment (GPU), voice-to-voice, fine-tuning" },
  { person: "@Preethi", role: "AI / ML Engineer — Squad Brainpowa", ask: "Fine-tuning specialist, Vertex AI, dataset validation" },
  { person: "@Sam Hart", role: "AI / ML Engineer", ask: "Audio (STT/TTS), brainpowa-realtime-api, audio benchmarks" },
  { person: "@Serhii Chashchukhin", role: "CCAI / S&PD / Analytics", ask: "brainpowa Realtime API bugs, interruption handling" },
  { person: "@Yusuf", role: "AI / LLM Team Lead @RAILS", ask: "Model Garden (Gemma, OmniOne deploys)" },
  { person: "@Wojciech Dobry", role: "UI Engineer", ask: "Super Demo UX/Frontend" },
  { person: "@Devendra", role: "Frontend", ask: "Website frontend + Pipecat integration" },
  { person: "@Shivaji", role: "QA Team Lead", ask: "QA process, release testing" },
  { person: "@Ilya (Eli)", role: "Data Analyst", ask: "Semrush pipeline, data filtering and processing" },
  { person: "@Anna (Anya)", role: "Data Engineer", ask: "Product catalogs, dialog evaluation, Shopify data" },
  { person: "@Umer", role: "Project Manager", ask: "Jira, Confluence access" },
  { person: "@Hrvoje", role: "SRE Engineer", ask: "Clusters, prod env, deploy, high-load" },
  { person: "@Kristijan Belosevic", role: "SRE Engineer", ask: "Access (GitHub etc.)" },
  { person: "@Tanya", role: "HR", ask: "Contract, conditions" },
  { person: "@Olya Shtalberg", role: "PM", ask: "Onboarding, processes, coordination, any remaining questions" },
];

/* ============================================================
   CONTENT (EN/RU)
   ============================================================ */
const content = {
  en: {
    nav: { hello: "Welcome", access: "Access", team: "Team", downloads: "Downloads" },
    langLabel: "RU",
    hero: {
      overline: "Rezolve AI Lab · Onboarding",
      titleA: "Welcome to ",
      titleHighlight: "RAiL",
      titleB: ".",
      titleLine2: "Glad you're here.",
      body: "This page has everything you need to get started — access, channels, recurring calls, working norms, the team, and how to wire up your AI agent. Last updated 19.05.26 · Contact @Olya Shtalberg.",
    },
    helicopter: {
      h2: "Helicopter View — what we're building",
      tagline: "We're Rezolve AI Lab — the R&D arm inside Rezolve.",
      diagram: {
        outer: { title: "Rezolve", subtitle: "ecommerce company" },
        middle: { title: "Rezolve AI Lab (RAiL)", subtitle: "R&D arm" },
        inner: { title: "Our team", subtitle: "Fine-tuning · MaaS" },
      },
      facts: [
        { label: "Who we are", value: "R&D lab inside Rezolve" },
        { label: "What we do", value: "Fine-tune models · multi tool calling" },
        { label: "Where they ship", value: "Brainpowa Model Garden + Microsoft Azure AI Foundry" },
      ],
      para1: (
        <>
          <strong>Rezolve</strong> is an ecommerce company growing by acquiring e-commerce search startups — rolling up
          customer base and tech.
        </>
      ),
      para2: (
        <>
          Inside Rezolve sits <strong>Rezolve AI Lab (RAiL)</strong> — the R&D arm. We're the AI team inside this AI lab
          inside that ecommerce company.
        </>
      ),
      para3: (
        <>
          We fine-tune <strong>models</strong> — for search, multi tool calling, and conversation — and assemble them
          into <strong>composable building blocks</strong> that plug into different products, for different customers,
          across different verticals. Hosted in <strong>Brainpowa Model Garden</strong>. Distributed externally via{" "}
          <strong>Microsoft Azure AI Foundry</strong> as Models-as-a-Service (3 models published, more coming).
        </>
      ),
      para4: (
        <>
          <strong>Right now</strong> — we're shipping <strong>Super Demo</strong>: end-to-end agent on{" "}
          <strong>grocery</strong> (Sainsbury's) and <strong>fashion</strong> (Harrods) verticals.
        </>
      ),
      links: [
        { label: "rezolve.com — general look at how we appear externally", href: "https://rezolve.com" },
        { label: "PRD: Adaptive AI Sales Agent Demo (Confluence)", href: "https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5581275160/PRD+Adaptive+AI+Sales+Agent+Demo" },
        { label: "Fine-Tuning Roadmap (Confluence)", href: "https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5485920843/Fine-Tuning+Roadmap" },
      ],
    },
    access: {
      h2: "Access & Tools",
      sub: "Click the link or ask the person on the right.",
      cols: ["Tool", "Link", "Access via"],
    },
    repos: {
      h2: "Repos",
      sub: (
        <>
          GitHub org:{" "}
          <a href="https://github.com/rezolved" target="_blank" rel="noreferrer" className="text-[var(--color-blue)] hover:underline">
            github.com/rezolved
          </a>{" "}
          · Team:{" "}
          <a
            href="https://github.com/orgs/rezolved/teams/quepasa-team"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-blue)] hover:underline"
          >
            quepasa-team
          </a>
          . Confirm which repos matter for your first task with @Yuri Vorontsov.
        </>
      ),
    },
    channels: { h2: "Slack channels to keep an eye on", cols: ["Channel", "Purpose"] },
    calls: { h2: "Recurring calls", cols: ["When", "Event"] },
    norms: {
      h2: "Working communication rules",
      avatars: (
        <>
          <strong>Avatars.</strong> Set an avatar in Slack, Jira, Confluence, GitHub, Teams. Basic comms hygiene.
        </>
      ),
      prs: (
        <>
          <strong>PRs.</strong> Put the Jira ticket number in the PR title (e.g. <code>LLM-577: ...</code>). Experiment
          artefacts (PRs, reports, configs) — into the Jira ticket.
        </>
      ),
      ownership: <strong>Task ownership.</strong>,
      ownershipBody: "By default, accepting a task means accepting ownership and responsibility for the outcome. The ideal task acknowledgement:",
      steps: [
        "Rephrase the task in your own words — confirm we mean the same thing.",
        "Propose your own timeline.",
        "Own the outcome: if the proposed tools don't get you there — come back to the requester with questions or problems, propose another path.",
        "When done, post in Slack with tags of potentially interested people.",
      ],
    },
    first: {
      h2: "First two weeks",
      tuning:
        "Part of your time goes into tuning your setup — that's normal. Wire up your AI agent, sort out access, settle into the workflow.",
      agent: (
        <>
          <strong>AI-agent in your loop is the baseline.</strong> We expect you to work with an AI agent. Neither punished
          nor praised — it's just the standard.
        </>
      ),
      responsibility: (
        <>
          <strong>Responsibility is on the human.</strong> Every PR, every message — owned by the person who shipped it,
          regardless of whether the agent helped.
        </>
      ),
    },
    team: {
      h2: "Team",
      chartTitle: "Org chart",
      tableTitle: "Who to ask about what",
      cols: ["Person", "Role", "Good to ask about"],
    },
    downloads: {
      overline: "Downloads",
      h2: "Two bundles, one click each.",
      sub: "On the left — text files for your AI agent: onboarding, glossary, general-purpose skills, and the team-wide skills we use with Claude / Cursor. On the right — brand assets for video calls and LinkedIn.",
      agent: {
        title: "For your AI agent",
        sub: "Drop these into Cursor / Claude as Project Knowledge. The agent will know the team, terms, tools, and which skills to call.",
        button: "Download AI pack (ZIP, 331 KB)",
        files: [
          "onboarding-rail.md — this page in markdown",
          "glossary.md — 45 people + 80 technical terms",
          "general-skills.md — superpowers skills",
          "team-skills.md — teams-outlook-setup",
          "README.md — bundle overview",
          "RAIL-Team-Org.pdf — org chart",
        ],
      },
      brand: {
        title: "Brand assets",
        sub: "LinkedIn banners and video-call backgrounds. Rezolve-branded. Use them.",
        button: "Download all 4 templates (ZIP, 6 MB)",
        files: [
          "LinkedIn Banner — Dark",
          "LinkedIn Banner — Light",
          "Video Call BG — Dark",
          "Video Call BG — Light",
        ],
      },
    },
    pets: {
      overline: "Last but not least",
      h2: "The team behind the team.",
      sub: (
        <>
          Want your pet on the page? Send a photo to <strong>@Olya Shtalberg</strong> on Slack.
        </>
      ),
    },
    footer: { updated: "Last updated: 25.05.2026 · Contact: @Olya Shtalberg" },
  },
  ru: {
    nav: { hello: "Welcome", access: "Доступы", team: "Команда", downloads: "Скачать" },
    langLabel: "EN",
    hero: {
      overline: "Rezolve AI Lab · Онбординг",
      titleA: "Добро пожаловать в ",
      titleHighlight: "RAiL",
      titleB: ".",
      titleLine2: "Рады, что ты с нами.",
      body: "На этой странице есть всё, что нужно — доступы, каналы, созвоны, рабочие нормы, команда и как подключить AI-агента. Обновлено 19.05.26 · Контакт @Olya Shtalberg.",
    },
    helicopter: {
      h2: "Helicopter View — что мы строим",
      tagline: "Мы Rezolve AI Lab — R&D-подразделение внутри Rezolve.",
      diagram: {
        outer: { title: "Rezolve", subtitle: "ecommerce-компания" },
        middle: { title: "Rezolve AI Lab (RAiL)", subtitle: "R&D-подразделение" },
        inner: { title: "Наша команда", subtitle: "Fine-tuning · MaaS" },
      },
      facts: [
        { label: "Кто мы", value: "R&D-лаборатория внутри Rezolve" },
        { label: "Что делаем", value: "Файнтюним модели · multi tool calling" },
        { label: "Где они живут", value: "Brainpowa Model Garden + Microsoft Azure AI Foundry" },
      ],
      para1: (
        <>
          <strong>Rezolve</strong> — ecommerce-компания, растёт через покупку поисковых ecommerce-стартапов, собирая
          клиентскую базу и технологии.
        </>
      ),
      para2: (
        <>
          Внутри Rezolve есть <strong>Rezolve AI Lab (RAiL)</strong> — R&D-подразделение. Мы — AI-команда внутри этой
          AI-лаборатории внутри ecommerce-компании.
        </>
      ),
      para3: (
        <>
          Мы файнтюним <strong>модели</strong> — для поиска, multi tool calling и диалога — и собираем из них{" "}
          <strong>составные кирпичики</strong>, которые подключаются к разным продуктам, для разных клиентов, в разных
          вертикалях. Хостинг в <strong>Brainpowa Model Garden</strong>. Дистрибуция наружу через{" "}
          <strong>Microsoft Azure AI Foundry</strong> как Models-as-a-Service (3 модели уже опубликованы, ещё в работе).
        </>
      ),
      para4: (
        <>
          <strong>Сейчас</strong> — выкатываем <strong>Super Demo</strong>: end-to-end ассистент на вертикалях{" "}
          <strong>grocery</strong> (Sainsbury's) и <strong>fashion</strong> (Harrods).
        </>
      ),
      links: [
        { label: "rezolve.com — общее знакомство с тем, как мы выглядим во внешнем мире", href: "https://rezolve.com" },
        { label: "PRD: Adaptive AI Sales Agent Demo (Confluence)", href: "https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5581275160/PRD+Adaptive+AI+Sales+Agent+Demo" },
        { label: "Fine-Tuning Roadmap (Confluence)", href: "https://rezolvetech.atlassian.net/wiki/spaces/RAIL/pages/5485920843/Fine-Tuning+Roadmap" },
      ],
    },
    access: {
      h2: "Доступы и инструменты",
      sub: "Жми по ссылке или спроси у человека справа.",
      cols: ["Инструмент", "Ссылка", "Доступ через"],
    },
    repos: {
      h2: "Репо",
      sub: (
        <>
          GitHub org:{" "}
          <a href="https://github.com/rezolved" target="_blank" rel="noreferrer" className="text-[var(--color-blue)] hover:underline">
            github.com/rezolved
          </a>{" "}
          · Team:{" "}
          <a
            href="https://github.com/orgs/rezolved/teams/quepasa-team"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-blue)] hover:underline"
          >
            quepasa-team
          </a>
          . Какие репо нужны для твоей первой задачи — уточни у @Yuri Vorontsov.
        </>
      ),
    },
    channels: { h2: "Slack-каналы, на которые подписаться", cols: ["Канал", "Назначение"] },
    calls: { h2: "Регулярные созвоны", cols: ["Когда", "Что"] },
    norms: {
      h2: "Рабочие нормы коммуникации",
      avatars: (
        <>
          <strong>Аватарки.</strong> Поставь аватар в Slack, Jira, Confluence, GitHub, Teams. Базовая гигиена коммуникации.
        </>
      ),
      prs: (
        <>
          <strong>PRs.</strong> В заголовке PR — номер тикета Jira (например, <code>LLM-577: ...</code>). Артефакты
          эксперимента (PRs, reports, configs) — в Jira-тикете.
        </>
      ),
      ownership: <strong>Ответственность за задачу.</strong>,
      ownershipBody: "По умолчанию, принимая задачу — принимаешь оунершип и ответственность за результат. Идеальный ответ на задачу:",
      steps: [
        "Переспроси задачу в своей формулировке — убедись, что задачу понимаем одинаково.",
        "Предложи свой таймлайн.",
        "Неси ответственность за результат: если результат не достигается предложенными инструментами — приди к репортёру с вопросами и проблемами, предложи другое решение.",
        "По завершению — пиши в Slack с тегами потенциально заинтересованных лиц.",
      ],
    },
    first: {
      h2: "Первые две недели",
      tuning:
        "Часть времени уйдёт на тюнинг сетапа — это нормально. Подключи AI-агента, разберись с доступами, освойся в рабочем процессе.",
      agent: (
        <>
          <strong>AI-агент в работе — база.</strong> Мы ожидаем, что ты работаешь с AI-агентом. Не ругаем и не поощряем —
          это стандарт.
        </>
      ),
      responsibility: (
        <>
          <strong>Ответственность — на человеке.</strong> За каждый PR и каждое сообщение отвечает тот, кто их сделал,
          независимо от того, помогал агент или нет.
        </>
      ),
    },
    team: {
      h2: "Команда",
      chartTitle: "Org chart",
      tableTitle: "Кому что задавать",
      cols: ["Человек", "Роль", "Стоит спросить"],
    },
    downloads: {
      overline: "Скачать",
      h2: "Два пакета, один клик каждый.",
      sub: "Слева — текстовые файлы для твоего AI-агента: онбординг, глоссарий, общие скиллы и командные скиллы, которые мы используем с Claude / Cursor. Справа — брендовые ассеты для звонков и LinkedIn.",
      agent: {
        title: "Для AI-агента",
        sub: "Подключи как Project Knowledge в Cursor / Claude. Агент узнает команду, термины, инструменты и какие скиллы вызвать.",
        button: "Скачать AI pack (ZIP, 331 KB)",
        files: [
          "onboarding-rail.md — эта страница в markdown",
          "glossary.md — 45 человек + 80 терминов",
          "general-skills.md — superpowers скиллы",
          "team-skills.md — teams-outlook-setup",
          "README.md — обзор пакета",
          "RAIL-Team-Org.pdf — org chart",
        ],
      },
      brand: {
        title: "Брендовые ассеты",
        sub: "LinkedIn-баннеры и фоны для звонков. В фирменном стиле. Используй.",
        button: "Скачать все 4 шаблона (ZIP, 6 MB)",
        files: [
          "LinkedIn Banner — Dark",
          "LinkedIn Banner — Light",
          "Video Call BG — Dark",
          "Video Call BG — Light",
        ],
      },
    },
    pets: {
      overline: "Last but not least",
      h2: "Команда за командой.",
      sub: (
        <>
          Хочешь, чтобы твой питомец был на странице? Пришли его фото <strong>@Olya Shtalberg</strong> в Slack.
        </>
      ),
    },
    footer: { updated: "Последнее обновление: 25.05.2026 · Контакт: @Olya Shtalberg" },
  },
} as const;

/* ============================================================
   COMPONENTS
   ============================================================ */
function SectionHeader({ overline, title, sub }: { overline?: string; title: string; sub?: React.ReactNode }) {
  return (
    <>
      {overline && <p className="overline mb-3">{overline}</p>}
      <h2 className="text-[28px] md:text-[36px] font-bold mb-3 text-[var(--color-navy)]">{title}</h2>
      {sub && <p className="text-[var(--color-gray)] mb-10 max-w-[720px]">{sub}</p>}
    </>
  );
}

function Table<T extends object>({ cols, rows, render }: { cols: string[]; rows: T[]; render: (r: T) => React.ReactNode[] }) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {cols.map((c) => (
              <th
                key={c}
                className="py-4 px-5 text-[11px] uppercase tracking-[2px] font-bold text-[var(--color-blue)] border-b-[2px] border-[var(--color-navy)] bg-white"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-bg)] transition-colors">
              {render(r).map((cell, j) => (
                <td key={j} className="py-4 px-5 align-top text-[14px]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Org chart — drawn with Rezolve colors */
function OrgChart() {
  return (
    <div className="space-y-8">
      {/* CEO */}
      <div className="flex justify-center">
        <div className="bg-[var(--color-navy)] text-white rounded-2xl px-8 py-5 text-center shadow-lg">
          <p className="font-extrabold text-[18px]" style={{ fontFamily: "var(--font-manrope)" }}>
            {orgChart.ceo.name}
          </p>
          <p className="text-[12px] uppercase tracking-[1.5px] opacity-80 mt-1">{orgChart.ceo.role}</p>
        </div>
      </div>

      {/* Connector */}
      <div className="flex justify-center">
        <div className="w-px h-6 bg-[var(--color-blue)]" />
      </div>

      {/* Sub-leads grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {orgChart.branches.map((branch, i) => (
          <div key={i} className="flex flex-col bg-white rounded-xl overflow-hidden border border-[var(--color-border)]">
            <div className="bg-gradient-to-br from-[var(--color-blue)] to-[#3a7bb8] text-white px-4 py-3">
              <p className="font-bold text-[14px]" style={{ fontFamily: "var(--font-manrope)" }}>
                {branch.lead.name}
              </p>
              <p className="text-[11px] uppercase tracking-[1.2px] opacity-90 mt-0.5">{branch.lead.role}</p>
            </div>
            {branch.team.length > 0 && (
              <ul className="p-3 space-y-1.5">
                {branch.team.map((m, j) => (
                  <li key={j} className="text-[12px] py-1.5 px-2 border-l-[2px] border-[var(--color-blue)] bg-[var(--color-bg)]">
                    <span className="font-bold text-[var(--color-navy)]">{m.name}</span>
                    <span className="text-[var(--color-gray)]"> · {m.role}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("rail-lang")) as Lang | null;
    if (saved === "en" || saved === "ru") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("rail-lang", lang);
  }, [lang]);
  const t = content[lang];
  const toggle = () => setLang(lang === "en" ? "ru" : "en");

  return (
    <>
      {/* HEADER */}
      <header className="border-b border-[var(--color-border)] sticky top-0 z-10 bg-[var(--color-bg)]/90 backdrop-blur">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-[var(--color-navy)]" />
            <span
              className="font-bold text-[var(--color-navy)] tracking-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              RAiL · Rezolve AI Lab
            </span>
          </div>
          <nav className="flex items-center gap-3 md:gap-6 text-sm">
            <a href="#access" className="hidden md:inline hover:text-[var(--color-navy)]">{t.nav.access}</a>
            <a href="#team" className="hidden md:inline hover:text-[var(--color-navy)]">{t.nav.team}</a>
            <a href="#downloads" className="hidden md:inline hover:text-[var(--color-navy)]">{t.nav.downloads}</a>
            <a href={REPO_URL} target="_blank" rel="noreferrer" className="hidden md:inline hover:text-[var(--color-navy)]">GitHub ↗</a>
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="px-3 py-1.5 rounded-full border-[1.5px] border-[var(--color-border)] text-[12px] font-bold tracking-[1.5px] text-[var(--color-navy)] hover:border-[var(--color-navy)] transition-colors"
            >
              {t.langLabel}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
          <p className="overline mb-5">{t.hero.overline}</p>
          <h1 className="text-[44px] md:text-[60px] leading-[1.05] font-extrabold tracking-tight">
            {t.hero.titleA}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
            {t.hero.titleB}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p className="mt-6 max-w-[680px] text-[17px]">{t.hero.body}</p>
        </div>
      </section>

      {/* HELICOPTER VIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.helicopter.h2} />

          <p
            className="text-[22px] md:text-[26px] font-bold mb-10 max-w-[820px] text-[var(--color-navy)] leading-[1.25]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            {t.helicopter.tagline}
          </p>

          {/* Nested diagram: Rezolve → RAiL → Our team */}
          <div className="mb-12 max-w-[680px] mx-auto sm:mx-0">
            <div className="rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] p-5 md:p-7">
              <div className="text-center mb-4">
                <p className="text-[18px] font-bold text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-manrope)" }}>
                  {t.helicopter.diagram.outer.title}
                </p>
                <p className="text-[11px] uppercase tracking-[1.5px] text-[var(--color-gray)] mt-0.5">
                  {t.helicopter.diagram.outer.subtitle}
                </p>
              </div>

              <div className="rounded-xl bg-white border-[2px] border-[var(--color-blue)] p-5 md:p-6">
                <div className="text-center mb-4">
                  <p className="text-[17px] font-bold text-[var(--color-blue)]" style={{ fontFamily: "var(--font-manrope)" }}>
                    {t.helicopter.diagram.middle.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-[var(--color-gray)] mt-0.5">
                    {t.helicopter.diagram.middle.subtitle}
                  </p>
                </div>

                <div className="rounded-lg bg-[var(--color-navy)] text-white px-4 py-3.5 text-center mx-4 sm:mx-10">
                  <p className="text-[15px] font-bold" style={{ fontFamily: "var(--font-manrope)" }}>
                    {t.helicopter.diagram.inner.title}
                  </p>
                  <p className="text-[10.5px] uppercase tracking-[1.5px] opacity-80 mt-0.5">
                    {t.helicopter.diagram.inner.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10 max-w-[1000px]">
            {t.helicopter.facts.map((f) => (
              <div key={f.label} className="card p-5">
                <p className="overline mb-1.5">{f.label}</p>
                <p className="text-[14px] font-bold text-[var(--color-navy)]">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 max-w-[780px] text-[15px] leading-[1.7] mb-8">
            <p>{t.helicopter.para1}</p>
            <p>{t.helicopter.para2}</p>
            <p>{t.helicopter.para3}</p>
            <p>{t.helicopter.para4}</p>
          </div>

          <ul className="space-y-2">
            {t.helicopter.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-blue)] hover:text-[var(--color-navy)] hover:underline"
                >
                  → {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.access.h2} sub={t.access.sub} />
          <Table
            cols={t.access.cols as unknown as string[]}
            rows={accessRows}
            render={(r) => [
              <span key="tool" className="font-bold text-[var(--color-navy)]">{r.tool}</span>,
              r.link ? (
                <a key="link" href={r.link.href} target="_blank" rel="noreferrer" className="text-[var(--color-blue)] hover:underline">
                  {r.link.label} ↗
                </a>
              ) : (
                <span key="link" className="text-[var(--color-gray)] italic">{r.linkText}</span>
              ),
              <span key="access">{r.access}</span>,
            ]}
          />
        </div>
      </section>

      {/* REPOS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.repos.h2} sub={t.repos.sub} />
          <div className="grid sm:grid-cols-2 gap-5">
            {repos.map((r) => (
              <article key={r.name} className="card p-6">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[var(--color-navy)] hover:text-[var(--color-blue)] inline-flex items-center gap-2"
                >
                  <code className="bg-[var(--color-code-bg)] px-2 py-0.5 rounded">{r.name}</code>
                </a>
                <p className="mt-3 text-[14px] leading-[1.55]">{lang === "en" ? r.descEn : r.descRu}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.channels.h2} />
          <Table
            cols={t.channels.cols as unknown as string[]}
            rows={channels}
            render={(c) => [
              <code key="name" className="bg-[var(--color-code-bg)] text-[var(--color-navy)] px-2 py-1 rounded text-[13px]">
                {c.name}
              </code>,
              <span key="desc">{lang === "en" ? c.descEn : c.descRu}</span>,
            ]}
          />
        </div>
      </section>

      {/* CALLS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.calls.h2} />
          <Table
            cols={t.calls.cols as unknown as string[]}
            rows={calls}
            render={(c) => [
              <span key="when" className="font-bold text-[var(--color-navy)]">{lang === "en" ? c.whenEn : c.whenRu}</span>,
              <span key="what">{c.what}</span>,
            ]}
          />
        </div>
      </section>

      {/* WORKING NORMS */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.norms.h2} />
          <div className="grid md:grid-cols-2 gap-6 max-w-[920px]">
            <div className="card p-6">
              <p className="text-[15px] leading-[1.6]">{t.norms.avatars}</p>
            </div>
            <div className="card p-6">
              <p className="text-[15px] leading-[1.6]">{t.norms.prs}</p>
            </div>
          </div>
          <div className="card p-6 mt-6 max-w-[920px]">
            <p className="text-[15px] leading-[1.6] mb-3">
              {t.norms.ownership} {t.norms.ownershipBody}
            </p>
            <ol className="space-y-2.5 list-decimal list-inside text-[14px] leading-[1.6]">
              {t.norms.steps.map((s, i) => (
                <li key={i} className="pl-2">{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FIRST TWO WEEKS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.first.h2} />
          <div className="space-y-4 max-w-[760px] text-[15px] leading-[1.7]">
            <p>{t.first.tuning}</p>
            <p>{t.first.agent}</p>
            <p>{t.first.responsibility}</p>
          </div>
        </div>
      </section>

      {/* TEAM — Org chart only */}
      <section id="team" className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionHeader title={t.team.h2} />
          <OrgChart />
        </div>
      </section>

      {/* DOWNLOADS — NAVY BLOCK */}
      <section id="downloads" className="py-20 md:py-24 bg-gradient-to-br from-[var(--color-navy)] to-[#0a2d8a] text-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "#7ee3f5" }}>{t.downloads.overline}</p>
          <h2
            className="text-[24px] md:text-[28px] font-bold mb-5"
            style={{ fontFamily: "var(--font-manrope)", color: "#ffffff" }}
          >
            {t.downloads.h2}
          </h2>
          <p className="max-w-[720px] mb-12 text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.85)" }}>{t.downloads.sub}</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* AI Agent Pack */}
            <div>
              <p className="overline mb-2" style={{ color: "var(--color-cyan)" }}>{t.downloads.agent.title}</p>
              <p className="max-w-[420px] mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>{t.downloads.agent.sub}</p>
              <a
                href={`${BASE}/downloads/rail-agent-pack.zip`}
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--color-navy)] font-bold text-[14px] hover:bg-[var(--color-cyan)] transition-colors"
              >
                ↓ {t.downloads.agent.button}
              </a>
              <ul className="mt-7 space-y-1.5 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t.downloads.agent.files.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </div>

            {/* Brand Assets */}
            <div>
              <p className="overline mb-2" style={{ color: "var(--color-cyan)" }}>{t.downloads.brand.title}</p>
              <p className="max-w-[420px] mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>{t.downloads.brand.sub}</p>
              <a
                href={`${BASE}/downloads/rezolve-brand-assets.zip`}
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[var(--color-navy)] font-bold text-[14px] hover:bg-[var(--color-cyan)] transition-colors"
              >
                ↓ {t.downloads.brand.button}
              </a>
              <ul className="mt-7 space-y-1.5 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t.downloads.brand.files.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LAST BUT NOT LEAST — PETS (warm beige, italic title) */}
      <section className="py-20 md:py-24" style={{ background: "#fdf6ec" }}>
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="overline mb-3" style={{ color: "#b8945c" }}>
            {t.pets.overline}
          </p>
          <h2
            className="text-[40px] md:text-[56px] font-extrabold mb-4 text-[var(--color-navy)]"
            style={{ fontFamily: "var(--font-manrope)", fontStyle: "italic" }}
          >
            {t.pets.h2}
          </h2>
          <p className="text-[var(--color-gray)] mb-12 max-w-[560px] mx-auto">{t.pets.sub}</p>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
            {pets.map((pet) => {
              const name = pet.file.replace(/\.[^.]+$/, "");
              const owner = lang === "en" ? pet.ownerEn : pet.ownerRu;
              return (
                <div key={pet.file} className="flex flex-col items-center">
                  <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden border-[3px] border-white shadow-[0_8px_20px_rgba(184,148,92,0.25)] hover:shadow-[0_12px_28px_rgba(184,148,92,0.4)] transition-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BASE}/pets/${pet.file}`} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <p className="mt-3 text-[14px] font-bold text-[var(--color-navy)]" style={{ fontStyle: "italic" }}>
                    {name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--color-gray)]" style={{ fontStyle: "italic" }}>
                    {owner}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-[var(--color-gray)]">
          <span>{t.footer.updated}</span>
          <a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--color-navy)]">
            github.com/rezolved/rail-onboarding ↗
          </a>
        </div>
      </footer>
    </>
  );
}
