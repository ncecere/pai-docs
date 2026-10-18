# Screenshot capture list

Every image in these docs has a named slot in `lib/screenshot-slots.json` (its alt text and the file names it may have) and is placed with `<Screenshot slot="…" />`. Until an image is imported, the page shows a marked placeholder ("Screenshot to come", with the alt text and the slot's name). This file is the capture list for the screenshot session. **None of the 27 slots is captured yet.**

## Rules

- **Only the fictional demo instance, never a real install.** Company: **Example Corp**, domain `example.com`. The app at `https://chat.example.com`, branding name **Example Corp Agents**, the platform at `https://agents.example.com`, team `pi-agent-interface`. Never show a real person, organisation, key or address.
- **Personas** (all fictional, Example Corp):
  - **Morgan Lee**, `morgan.lee@example.com`, Administrator (the first administrator, by `INITIAL_ADMIN_EMAIL`)
  - **Priya Shah**, `priya.shah@example.com`, Member (analyst)
  - **Sam Ortiz**, `sam.ortiz@example.com`, Member, later made an administrator by Morgan
  - The quick start's `sign-in-dev` uses the built-in development accounts Tim, Bob and Sally (`example.test`).
- **Agents**: provided **Assistant** (built in) and **HR Helper** ("Questions about benefits and leave"); Priya's own **Research helper**. **Models** published to the team: **Chat model** (default) and **Fast model**. **Templates**: **General assistant** (platform catalog) and **Research assistant** (the team's own). Generic tools only (`get_time`, `read`, `bash`, a web fetch).
- **Size**: PNG, **1440×900** (device scale factor 1), Dark theme, accent Neutral, avatar style Face, unless the state says otherwise. Phone slots (`"phone": true`): **390×844** CSS pixels (scale 3 is fine; the import script keeps width ≤ 1600 px).
- **Version**: Pi Agent Interface at the commit the docs describe (`lib/site.ts`, `describedCommit`), built from that commit (not a working tree). Pin the clock where you can so times don't churn.
- **File name**: the slot name, `<slot>.png`, in the screenshots directory (`../pai-assets/screenshots/`), then:

  ```sh
  SCREENSHOTS_DIR=../pai-assets/screenshots npm run screenshots
  npm run screenshots:check
  ```

- After capturing, check each slot's alt text in `lib/screenshot-slots.json` still describes the image, and update it where the capture differs.

## Slots

| # | File | Size | Page (`content/docs/…`) | URL path | Persona | State to set up | Now |
|---|---|---|---|---|---|---|---|
| 1 | `sign-in.png` | 1440×900 | `operate/sign-in` | `/sign-in` | Signed out | OIDC configured, DEV_AUTH off. Branding name "Example Corp Agents", no logo, Dark. | To capture |
| 2 | `sign-in-dev.png` | 1440×900 | `get-started/quick-start` | `/sign-in` | Signed out | Local quick start (Compose), APP_URL http://localhost:8080, DEV_AUTH=true, no OIDC, default name Pi Agent Interface. | To capture |
| 3 | `chat-home.png` | 1440×900 | `get-started/index` | `/` | Priya Shah (member) | Three agents (Assistant and HR Helper provided, Research helper hers). Inbox seeded: 1 pinned, 1 working, 5 or more in Inbox (one Done, one Failed), shelves with items. Empty message box. | To capture |
| 4 | `chat-agent-picker.png` | 1440×900 | `use/chat` | `/` | Priya Shah (member) | Same state as chat-home; picker opened from the agent name in the message box, Assistant selected. | To capture |
| 5 | `chat-conversation.png` | 1440×900 | `use/chat` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Asked "Plan a call with our Tokyo office next week: what time is it there now, and which hours overlap with ours?"; reply finished with a table of overlapping hours. Pointer over the reply. | To capture |
| 6 | `chat-tool-steps.png` | 1440×900 | `use/tool-steps-and-reasoning` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Same conversation as chat-conversation, work block opened and the get_time step expanded. | To capture |
| 7 | `chat-live-steps.png` | 1440×900 | `use/tool-steps-and-reasoning` | `/agents/<id>/threads/<id>` | Priya Shah (member) | Captured live: Research helper asked to read and summarise several files, mid-reply (a read or bash step running). | To capture |
| 8 | `chat-reply-failed.png` | 1440×900 | `use/chat` | `/agents/<id>/threads/<id>` | Sam Ortiz (member) | A reply that failed with a 429 from the model provider (rate-limit the model on the platform). Details expanded. | To capture |
| 9 | `inbox-sidebar.png` | 1440×900 | `use/inbox`, `use/index` | `/` | Priya Shah (member) | The seeded inbox from chat-home, with one conversation working at capture time. Shelves closed. | To capture |
| 10 | `inbox-row-menu.png` | 1440×900 | `use/inbox` | `/` | Priya Shah (member) | Pointer on an Inbox row marked Done; menu opened with the … button. | To capture |
| 11 | `inbox-snooze.png` | 1440×900 | `use/inbox` | `/` | Priya Shah (member) | Captured before 17:00 local time so This evening is offered. Snooze opened from a row's clock button. | To capture |
| 12 | `command-palette.png` | 1440×900 | `use/keyboard-shortcuts` | `/` | Priya Shah (member) | Opened with ⌘K on the start page; Assistant last used. | To capture |
| 13 | `phone-inbox.png` | 390×844 | `use/index` | `/` | Priya Shah (member) | 390×844. The seeded inbox; panel opened with Open sidebar. | To capture |
| 14 | `settings-account.png` | 1440×900 | `use/settings` | `/settings` | Priya Shah (member) | Personal usage on, so the Usage tab shows. | To capture |
| 15 | `settings-customization.png` | 1440×900 | `use/settings` | `/settings/customization` | Priya Shah (member) | Dark, accent Neutral, avatar Face. | To capture |
| 16 | `settings-my-agents.png` | 1440×900 | `use/agents` | `/settings/agents` | Priya Shah (member) | One own agent; personal limit 5, model choice on. | To capture |
| 17 | `settings-new-agent.png` | 1440×900 | `use/agents` | `/settings/agents` | Priya Shah (member) | Dialog opened with New agent, name typed, not yet made. | To capture |
| 18 | `settings-conversations.png` | 1440×900 | `use/settings` | `/settings/conversations` | Priya Shah (member) | 3 archived, 4 settled conversations across two agents. | To capture |
| 19 | `settings-usage.png` | 1440×900 | `use/settings` | `/settings/usage` | Priya Shah (member) | Personal usage on; a month of use on the platform; model prices set on the platform. | To capture |
| 20 | `admin-overview.png` | 1440×900 | `administer/index` | `/admin` | Morgan Lee (administrator) | About 40 people, 2 administrators, 1 suspended; recent changes include a role change and a branding change. | To capture |
| 21 | `admin-people.png` | 1440×900 | `administer/people-and-roles` | `/admin/people` | Morgan Lee (administrator) | Same seed as admin-overview. | To capture |
| 22 | `admin-agents.png` | 1440×900 | `administer/agents` | `/admin/agents` | Morgan Lee (administrator) | Two models published to the team (Chat model, Fast model); templates General assistant (catalog) and Research assistant (your team). | To capture |
| 23 | `admin-provided-agent.png` | 1440×900 | `administer/agents` | `/admin/agents` | Morgan Lee (administrator) | Pencil on HR Helper. | To capture |
| 24 | `admin-branding.png` | 1440×900 | `administer/branding` | `/admin/branding` | Morgan Lee (administrator) | Name changed from the default to Example Corp Agents, unsaved, so Save is enabled. | To capture |
| 25 | `admin-features.png` | 1440×900 | `administer/features` | `/admin/features` | Morgan Lee (administrator) | Personal usage turned on; no DISABLED_FEATURES. | To capture |
| 26 | `admin-usage.png` | 1440×900 | `administer/usage` | `/admin/usage` | Morgan Lee (administrator) | A month of use; one agent made in the team by hand on the platform, so Other agents shows. | To capture |
| 27 | `admin-audit.png` | 1440×900 | `administer/audit-log` | `/admin/audit` | Morgan Lee (administrator) | The same seed. | To capture |
