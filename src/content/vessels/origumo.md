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

Origumo turns a solitary measure of speed into a shared craft. Typists learn the rhythm alone, meet rivals across the web, chase the ghosts of who they were, and climb from Snail to Origumo one careful line at a time. The quickest fingers may reach the finish first, but precision is what keeps the weave from breaking.

## Core Features

- **Native racing**; race from the Rust + Raylib desktop client
- **Real-time competition**; see opponents' cursors advancing as they type
- **Ghost Racer**; race against your past self, beat your personal best
- **Ranked Matchmaking**; ELO-based ladder rising from Snail to Origumo
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
