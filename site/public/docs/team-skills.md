# Team Skills — RAiL внутрикомандные скиллы

> Скиллы, которые команда RAiL использует во внутренних процессах. Rezolve-специфичные — не имеют смысла вне контекста команды.

---

## `teams-outlook-setup` — Подключение Teams / Outlook к Claude Code

**Что делает:** Подключает MCP-сервер `@softeria/ms-365-mcp-server` к Claude Code через кастомный Rezolve Entra app (`teams-outlook-mcp-graph`). После подключения Claude умеет читать твой Outlook-календарь, входящую почту, Teams встречи и их транскрипты.

**Зачем:**
- Календарь — `list-calendar-events`, `get-calendar-event`
- Встречи — `list-online-meetings`, `get-online-meeting`
- Транскрипты — `list-meeting-transcripts`, `get-meeting-transcript` (работает и для встреч, где ты participant, не только organizer)
- Почта — `list-mail-messages`, `get-mail-message`, attachments

**Безопасность:** каждый пользователь видит **только свои** данные — delegated user-scoped flow, 4 одобренных read-only scope (Calendars.Read, Mail.Read, OnlineMeetings.Read, OnlineMeetingTranscript.Read.All).

**Когда вызвать:**
- Один раз — для первичной установки MCP в свой Claude Code.
- Скилл сам проверит prereqs (Node ≥ 20, claude CLI), выполнит `claude mcp add`, проведёт через device-login и проверит доступ.

**Как использовать:** в Claude Code набрать `/teams-outlook-setup`.

**Где лежит:** [Rezolve/share/teams-outlook-setup/SKILL.md](../share/teams-outlook-setup/SKILL.md)

**Контакт:** @Olya Shtalberg — если что-то не подключается или нужно расширить scope.

---

_Здесь будут добавляться другие командные скиллы по мере появления — например, для `slack-setup`, `weekly-status`, `transcripts` и т.д. Файл актуализирует @Olya Shtalberg._
