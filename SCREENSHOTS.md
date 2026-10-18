# Screenshot capture list

Every image in these docs has a named slot in `lib/screenshot-slots.json` (its alt text and the file names it may have) and is placed with `<Screenshot slot="…" />`. Until an image is imported, the page shows a marked placeholder ("Screenshot to come", with the alt text and the slot's name). This file is the capture list for the screenshot session. **All 31 slots are captured** (2026-10-18, from the app at v0.3.1; the files are in `../pai-assets/screenshots/`, see its `MANIFEST.md`).

## Rules

- **Only the fictional demo instance, never a real install.** Company: **Example Corp**, domain `example.com`. The app at `https://chat.example.com`, branding name **Example Corp Agents**, the platform at `https://agents.example.com`, and in service mode the team `pi-agent-interface`. Never show a real person, organisation, key or address.
- **Personas** (all fictional, Example Corp):
  - **Morgan Lee**, `morgan.lee@example.com`, Administrator (the first administrator, by `INITIAL_ADMIN_EMAIL`)
  - **Priya Shah**, `priya.shah@example.com`, Member (analyst)
  - **Alex Morgan**, `alex.morgan@example.com`, Administrator (made one by Morgan)
  - **Sam Ortiz**, `sam.ortiz@example.com`, a Member in Connect mode; in service mode Morgan has made him an administrator too, so there are **three** administrators (Morgan, Alex, Sam)
  - The quick start's `sign-in-dev` uses the built-in development accounts Tim, Bob and Sally (`example.test`).
- **Agents**: provided **Assistant** (built in) and **HR Helper** ("Questions about benefits and leave"); Priya's own **Research helper**. **Models** published to the team: **Chat model** (default) and **Fast model**. **Templates**: **General assistant** (platform catalog) and **Research assistant** (the team's own). Generic tools only (`get_time`, `read`, `bash`, a web fetch).
- **Mode**: Pi Agent Interface reaches the platform in Connect mode (the default) or service mode (see `operate/platform`). The slots that existed before v0.2.0 are captured in **service mode** (`PLATFORM_AUTH=service`, team `pi-agent-interface`), because several show Admin → Usage, which Connect mode locks off. The four Connect slots (`chat-agent-picker-teams`, `connect-gate`, `settings-connection`, `admin-features-locked`) are captured in **Connect mode** (`PLATFORM_AUTH=connect`, a platform with Connect and personal workspaces; each persona has a platform account with the same email as here, so the account check passes). In Connect mode the models and templates are those of a personal workspace.
- **Size**: PNG, **1440×900** (device scale factor 1), Dark theme, accent Neutral, avatar style Face, unless the state says otherwise. Phone slots (`"phone": true`): **390×844** CSS pixels (scale 3 is fine; the import script keeps width ≤ 1600 px).
- **Version**: Pi Agent Interface v0.3.1 (`lib/site.ts`, commit `fe94cdb`): the published image `ghcr.io/ncecere/pi-agent-interface:v0.3.1`, or a build of that tag, not a working tree. Pin the clock where you can so times don't churn.
- **File name**: the slot name, `<slot>.png`, in the screenshots directory (`../pai-assets/screenshots/`), then:

  ```sh
  SCREENSHOTS_DIR=../pai-assets/screenshots npm run screenshots
  npm run screenshots:check
  ```

- After capturing, check each slot's alt text in `lib/screenshot-slots.json` still describes the image, and update it where the capture differs.

## Slots

| # | File | Size | Page (`content/docs/…`) | URL path | Persona | State to set up | Now |
|---|---|---|---|---|---|---|---|
| 1 | `sign-in.png` | 1440×900 | `operate/sign-in` | `/sign-in` | Signed out | OIDC configured, DEV_AUTH off. Branding name "Example Corp Agents", no logo, Dark. | Captured |
| 2 | `sign-in-dev.png` | 1440×900 | `get-started/quick-start` | `/sign-in` | Signed out | Local quick start (Compose), APP_URL http://localhost:8080, DEV_AUTH=true, no OIDC, default name Pi Agent Interface. | Captured |
| 3 | `chat-home.png` | 1440×900 | `get-started/index` | `/` | Priya Shah (member) | Three agents (Assistant and HR Helper provided, Research helper hers). Inbox seeded: 1 pinned, 1 working, 5 or more in Inbox (one Done, one Failed), shelves with items. Empty message box. | Captured |
| 4 | `chat-agent-picker.png` | 1440×900 | `use/chat` | `/` | Priya Shah (member) | Same state as chat-home; picker opened from the agent name in the message box, Assistant selected. | Captured |
| 5 | `chat-agent-picker-teams.png` | 1440×900 | `use/agents` | `/` | Priya Shah (member) | Connect mode. Priya belongs to a team (Finance) on the platform that has an agent, Close checklist; she has the same provided and own agents as in chat-home. Picker opened from the agent name in the message box, Assistant selected. | Captured |
| 6 | `chat-conversation.png` | 1440×900 | `use/chat` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Asked "Plan a call with our Tokyo office next week: what time is it there now, and which hours overlap with ours?"; reply finished with a table of overlapping hours. Pointer over the reply. | Captured |
| 7 | `chat-tool-steps.png` | 1440×900 | `use/tool-steps-and-reasoning` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Same conversation as chat-conversation, work block opened and the get_time step expanded. | Captured |
| 8 | `chat-live-steps.png` | 1440×900 | `use/tool-steps-and-reasoning` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Captured live: Research helper asked to read and summarise several files, mid-reply (a read or bash step running). | Captured |
| 9 | `chat-reply-failed.png` | 1440×900 | `use/chat` | `/agents/<id>/threads/<id>` | Sam Ortiz (member) | A reply that failed with a 429 from the model provider (rate-limit the model on the platform). Details expanded. | Captured |
| 10 | `inbox-sidebar.png` | 1440×900 | `use/inbox`, `use/index` | `/` | Priya Shah (member) | The seeded inbox from chat-home, with one conversation working at capture time. Shelves closed. | Captured |
| 11 | `inbox-row-menu.png` | 1440×900 | `use/inbox` | `/` | Priya Shah (member) | Pointer on an Inbox row marked Done; menu opened with the … button. | Captured |
| 12 | `inbox-snooze.png` | 1440×900 | `use/inbox` | `/` | Priya Shah (member) | Captured before 17:00 local time so This evening is offered. Snooze opened from a row's clock button. | Captured |
| 13 | `command-palette.png` | 1440×900 | `use/keyboard-shortcuts` | `/` | Priya Shah (member) | Opened with ⌘K on the start page; Assistant last used. | Captured |
| 14 | `phone-inbox.png` | 390×844 | `use/index` | `/` | Priya Shah (member) | 390×844. The seeded inbox; panel opened with Open sidebar. | Captured |
| 15 | `settings-account.png` | 1440×900 | `use/settings` | `/settings` | Priya Shah (member) | Service mode (so no Agent platform card; see settings-connection). Personal usage on, so the Usage tab shows. | Captured |
| 16 | `settings-customization.png` | 1440×900 | `use/settings` | `/settings/customization` | Priya Shah (member) | Dark, accent Neutral, avatar Face. | Captured |
| 17 | `settings-my-agents.png` | 1440×900 | `use/agents` | `/settings/agents` | Priya Shah (member) | One own agent; personal limit 5, model choice on. | Captured |
| 18 | `settings-new-agent.png` | 1440×900 | `use/agents` | `/settings/agents` | Priya Shah (member) | Dialog opened with New agent, name typed, not yet made. | Captured |
| 19 | `settings-conversations.png` | 1440×900 | `use/settings` | `/settings/conversations` | Priya Shah (member) | 3 archived, 4 settled conversations across two agents. | Captured |
| 20 | `settings-usage.png` | 1440×900 | `use/settings` | `/settings/usage` | Priya Shah (member) | Personal usage on; a month of use on the platform; model prices set on the platform. | Captured |
| 21 | `connect-gate.png` | 1440×900 | `use/connect-your-platform-account` | `/connect (or / when not connected)` | Priya Shah (member), signed in, not connected | Connect mode (PLATFORM_AUTH=connect) against a platform with Connect. Branding name "Example Corp Agents", no logo, Dark. Priya has signed in with single sign-on and has not connected yet. No error box: capture before selecting Connect. | Captured |
| 22 | `settings-connection.png` | 1440×900 | `use/connect-your-platform-account` | `/settings` | Priya Shah (member) | Connect mode. Priya connected as priya.shah@example.com, the same email as her account here, so the account check passes. Capture so that the Agent platform card is in view between Profile and Sessions. | Captured |
| 23 | `admin-overview.png` | 1440×900 | `administer/index` | `/admin` | Morgan Lee (administrator) | 40 people, 3 administrators (Morgan, Alex, Sam), 1 suspended; recent changes include a role change and a branding change. Service mode, so Usage is in the page list. | Captured |
| 24 | `admin-people.png` | 1440×900 | `administer/people-and-roles` | `/admin/people` | Morgan Lee (administrator) | Same seed as admin-overview. | Captured |
| 25 | `admin-agents.png` | 1440×900 | `administer/agents` | `/admin/agents` | Morgan Lee (administrator) | Two models published to the team (Chat model, Fast model); templates General assistant (catalog) and Research assistant (your team). | Captured |
| 26 | `admin-provided-agent.png` | 1440×900 | `administer/agents` | `/admin/agents` | Morgan Lee (administrator) | Pencil on HR Helper. | Captured |
| 27 | `admin-branding.png` | 1440×900 | `administer/branding` | `/admin/branding` | Morgan Lee (administrator) | Name changed from the default to Example Corp Agents, unsaved, so Save is enabled. | Captured |
| 28 | `admin-features.png` | 1440×900 | `administer/features` | `/admin/features` | Morgan Lee (administrator) | Service mode, so Usage is on and can be switched (see admin-features-locked for Connect mode). Personal usage turned on; no DISABLED_FEATURES. | Captured |
| 29 | `admin-features-locked.png` | 1440×900 | `administer/features` | `/admin/features` | Morgan Lee (administrator) | Connect mode, no DISABLED_FEATURES: Usage off and locked with its reason; Personal usage turned on. | Captured |
| 30 | `admin-usage.png` | 1440×900 | `administer/usage` | `/admin/usage` | Morgan Lee (administrator) | A month of use; one agent made in the team by hand on the platform, so Other agents shows. Service mode (Connect mode locks Usage off). | Captured |
| 31 | `admin-audit.png` | 1440×900 | `administer/audit-log` | `/admin/audit` | Morgan Lee (administrator) | The same seed. The first screen shows the newest entries (Priya's first sign-in at the top); "Morgan Lee became the first administrator" is the oldest, below the first screen. | Captured |
