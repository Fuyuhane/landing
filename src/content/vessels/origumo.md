---
title: "Origumo"
kanji: "織蛛"
romaji: "Origumo"
meaning: "The Weaving Spider"
description: "The weaving spider works one patient thread at a time. Origumo gathers keystrokes into races, rivalries, and the slow craft of becoming precise."
seoDescription: "Origumo is a planned multiplayer typing game with native Rust and Raylib races, Gleam and Erlang/OTP services, ranked matchmaking, ghost racing, and practice modes."
longDescription: "Origumo is planned as one global typing game with a native Rust and Raylib client for play, a Gleam and Erlang/OTP service for real-time races, and a Lustre web platform for profiles, leaderboards, text packs, accounts, and moderation. Its first path runs from creating or joining a room through racing, results, and rematches; ghost racing, ranked play, code practice, and community text packs deepen the weave."
accent: "lavender"
status: "planning"
techStack: ["Gleam", "Erlang/OTP", "Rust", "Wisp", "Mist", "Lustre", "PostgreSQL", "Raylib", "SQLite"]
tags: ["multiplayer", "real-time", "typing", "competitive", "gleam", "rust"]
links: { github: "https://github.com/Fuyuhane/origumo" }
order: 2
---

## The Vessel

The weaving spider does not finish its web in one motion. It crosses the same space with patience until separate threads can hold together. Origumo follows that rhythm: practice begins alone, then opens into live races, old ghosts, seasonal ranks, and a community gathered around the pleasure of becoming precise.

## The Planned Weave

- **Native racing**; race from the Rust + Raylib desktop client
- **Real-time competition**; see opponents' cursors advancing as they type
- **Ghost Racer**; race against your past self, beat your personal best
- **Ranked Matchmaking**; Elo-based ladder rising from Snail to Origumo
- **Code Mode**; type real code snippets with syntax highlighting
- **Practice Mode**; timed tests, custom text, offline results, and sync
- **Custom Themes**; JSON themes with a full editor for everyone

## Beneath the Threads

| Capability | Engine |
|------------|--------|
| Real-time rooms | Gleam/OTP typed actors and a custom control WebSocket, with chat and spectators |
| Race orchestration | Supervised race actors with a dedicated binary WebSocket through Mist |
| Low-latency play | Rust + Raylib native client with compact keystroke streams |
| Leaderboards + ranks | Pog/Squirrel and PostgreSQL-backed results, ghosts, and ELO history |
| Fair play | Keystroke replays in R2, statistical timing checks, server-side validation |
| Offline practice | Local SQLite results, text packs, ghosts, and sync queue |
| Background jobs | PostgreSQL-backed durable jobs claimed by bounded Gleam workers |
