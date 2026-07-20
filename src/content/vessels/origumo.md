---
title: "Origumo"
kanji: "織蛛"
romaji: "Origumo"
meaning: "The Weaving Spider"
description: "Like a weaving spider in moonlight, each keystroke lays a thread, and thread by thread, speed becomes craft."
longDescription: "A typing world woven between a Rust + Raylib desktop client and a Gleam service running on Erlang/OTP. Every keystroke draws another thread through rooms, races, ghosts, and ranked play, while Wisp and Mist carry the real-time pulse. Beyond the race, a Lustre web platform gathers profiles, leaderboards, text packs, accounts, and moderation into the same patient web."
accent: "lavender"
status: "active"
techStack: ["Gleam", "Erlang/OTP", "Rust", "Wisp", "Mist", "Lustre", "PostgreSQL", "Raylib", "SQLite"]
tags: ["multiplayer", "real-time", "typing", "competitive", "gleam", "rust"]
links: { github: "https://github.com/Fuyuhane/origumo" }
order: 2
---

## The Vessel

Origumo begins where fingers meet keys: a Rust + Raylib client where each strike pulls the web tighter through practice, rooms, races, ghosts, ranked play, and code. Behind it, Gleam actors keep watch over every living thread, while Lustre opens the wider web to profiles, leaderboards, text packs, accounts, and moderation.

## Core Features

- **Native racing**; race from the Rust + Raylib desktop client
- **Real-time competition**; see opponents' cursors advancing as they type
- **Ghost Racer**; race against your past self, beat your personal best
- **Ranked Matchmaking**; ELO-based ladder with animal ranks from Snail to Phoenix
- **Code Mode**; type real code snippets with syntax highlighting
- **Practice Mode**; timed tests, custom text, offline results, and sync
- **Custom Themes**; JSON themes with a full editor for everyone

## Threads To Be Woven

| Capability | Engine |
|------------|--------|
| Real-time rooms | Gleam/OTP typed actors and a custom control WebSocket, with chat and spectators |
| Race orchestration | Supervised race actors with a dedicated binary WebSocket through Mist |
| Low-latency play | Rust + Raylib native client with compact keystroke streams |
| Leaderboards + ranks | Pog/Squirrel and PostgreSQL-backed results, ghosts, and ELO history |
| Fair play | Keystroke replays in R2, statistical timing checks, server-side validation |
| Offline practice | Local SQLite results, text packs, ghosts, and sync queue |
| Background jobs | PostgreSQL-backed durable jobs claimed by bounded Gleam workers |
