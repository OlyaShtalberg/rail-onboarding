# RAiL Onboarding

Онбординг-бандл для нового разработчика команды **RAiL (Rezolve AI Lab)** — R&D-подразделения внутри Rezolve.

## 🌐 Лендинг

**[olyashtalberg.github.io/rail-onboarding](https://olyashtalberg.github.io/rail-onboarding/)** — публичная страница для пересылки новичкам.
Содержит всё: доступы, каналы, созвоны, рабочие нормы, org chart, downloads.
EN / RU тумблер сверху справа.

## 📦 Файлы в репо

| Файл | Что внутри |
|---|---|
| `onboarding-rail.md` | Master MD: доступы, каналы, созвоны, working norms, команда |
| `glossary.md` | 45 человек + 80 терминов · slim для AI-агента (RAG) |
| `general-skills.md` | Superpowers скиллы для Cursor / Claude Code |
| `team-skills.md` | Внутрикомандные скиллы (teams-outlook-setup) |
| `RAIL-Team-Org.pdf` | Org chart мастер-копия |

Лежат также в `site/public/docs/` для скачивания с лендинга + упакованы в ZIP-ы в `site/public/downloads/`.

## 🧱 Структура репо

```
rail-onboarding/
├── README.md                      ← этот файл
├── onboarding-rail.md             ← master content
├── glossary.md
├── general-skills.md
├── team-skills.md
├── RAIL-Team-Org.pdf              ← org chart
└── site/                          ← Next.js лендинг
    ├── src/app/page.tsx           ← вся страница
    ├── src/app/globals.css        ← Rezolve design tokens
    ├── src/app/icon.png           ← favicon (Rezolve "ai" бабл)
    ├── public/
    │   ├── pets/                  ← фото питомцев команды
    │   ├── backgrounds/           ← LinkedIn banners, видео-call BG
    │   ├── docs/                  ← MD-файлы для download
    │   └── downloads/             ← ZIP-архивы (AI pack + brand assets)
    ├── next.config.ts             ← static export + basePath для Pages
    └── package.json
```

## 🚀 Стек

- **Next.js 16** App Router + **TypeScript** + **Tailwind v4** + Turbopack
- Шрифты: Manrope (headings) + Inter Tight (body) через `next/font`
- Брендовые цвета: Navy `#001E60`, Blue `#478BC9`, Cyan `#00C8E8` (из rezolve.com design system)
- Static export → GitHub Pages
- Авто-деплой на каждый push в `main` через GitHub Actions ([deploy.yml](.github/workflows/deploy.yml))

## 💻 Локальная разработка

```bash
cd site
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → site/out
```

## 📤 Deploy

Авто на каждый push в `main`. Workflow собирает с `GITHUB_PAGES=true` (включает `basePath: /rail-onboarding`) и публикует на:
**https://olyashtalberg.github.io/rail-onboarding/**

Статус: [Actions tab](https://github.com/OlyaShtalberg/rail-onboarding/actions/workflows/deploy.yml).

## 📬 Контакт

По любым вопросам по онбордингу, лендингу или этим артефактам — **@Olya Shtalberg** в Slack.

---

_Last updated: 26.05.2026_
