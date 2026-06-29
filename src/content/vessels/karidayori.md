---
title: "Karidayori"
kanji: "雁便り"
romaji: "Karidayori"
meaning: "Tidings Borne by Geese"
description: "Like geese returning with the season, words arrive from far horizons, and distant strangers slowly become names you wait for."
longDescription: "A worldwide penpal platform for text-only letters. Browse by country, discover thoughtful profiles, and write through a safety-first mailbox shaped around 13+ age-tier isolation, optional moderated photos, contact-info scanning, reports, and letters that naturally expire. Built as a Rust + Datastar + Maud web app, open to all countries but careful with every border between people."
accent: "lavender"
status: "active"
techStack: ["Rust", "Axum", "SQLx", "Tokio", "Datastar", "Maud", "Dragonfly", "Cloudflare R2"]
tags: ["penpals", "directory", "safety", "global", "rust"]
links: { github: "https://github.com/Fuyuhane/karidayori" }
order: 3
---

## The Vessel

Karidayori is a global letter-writing directory. It lets people browse by country, discover thoughtful profiles, and send text-only letters through a mailbox guarded by age tiers, moderation, and data minimization, an exchange shaped by care rather than speed.

## Core Principles

- **All countries welcome**; no geo gates, no cultural bias
- **Text-only letters**; writing first, no attachments
- **Optional photos**; profiles can be anonymous or expressive
- **Directory model**; discover by country, scan, and choose
- **Age-tier walls**; minors and adults never cross the letter boundary
- **Safety-first**; reports, content scanning, and audit logs baked in

## Operational Capabilities

| Capability | Engine |
|------------|--------|
| Global discovery | Country pages, profile filters, and age-tiered search |
| Timezone-aware presence | IANA timezone activity with reduced precision for minors |
| Safe correspondence | Server-side age policy + text-only letter composer |
| Profile depth | Bios, hobbies, city-level location, optional moderated photos |
| Moderation flow | Contact-info scanner, reports, auto-suspension, audit log |
| Letter lifecycle | Inbox, archive, thread, report, and 12-month expiry |
