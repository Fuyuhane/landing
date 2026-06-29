---
title: "Origumo"
kanji: "織蛛"
romaji: "Origumo"
meaning: "The Weaving Spider"
description: "Like a weaving spider in moonlight, each keystroke lays a thread, and thread by thread, speed becomes craft."
longDescription: "A native-first typing race platform. Play in the Rust + Raylib desktop client; use the Phoenix LiveView web platform for profiles, leaderboards, account management, text packs, downloads, and moderation. Rooms, chat, racing, ghosts, ranked ELO, practice, and code mode run through an Elixir/Phoenix server with OTP processes, Postgres, and a dedicated race WebSocket."
accent: "lavender"
status: "active"
techStack: ["Elixir", "Phoenix LiveView", "PostgreSQL", "Rust", "Raylib", "SQLite"]
tags: ["multiplayer", "real-time", "typing", "competitive", "elixir", "rust"]
links: { github: "https://github.com/Fuyuhane/origumo" }
order: 2
---

## The Vessel

A native-first competitive typing race where speed meets craft. The Rust + Raylib client carries practice, rooms, real-time races, ghosts, ranked play, and code mode, while Phoenix LiveView keeps the web side close to accounts, profiles, leaderboards, text packs, and moderation.

## Core Features

- **Native racing**; race from the Rust + Raylib desktop client
- **Real-time competition**; see opponents' cursors advancing as they type
- **Ghost Racer**; race against your past self, beat your personal best
- **Ranked Matchmaking**; ELO-based ladder with animal ranks from Snail to Phoenix
- **Code Mode**; type real code snippets with syntax highlighting
- **Practice Mode**; timed tests, custom text, offline results, and sync
- **Custom Themes**; JSON themes with a full editor for everyone

## Operational Capabilities

| Capability | Engine |
|------------|--------|
| Real-time rooms | Phoenix Channels + supervised RoomServer GenServers |
| Race orchestration | RaceServer processes with a dedicated binary race WebSocket |
| Low-latency play | Rust + Raylib native client with compact keystroke streams |
| Leaderboards + ranks | Ecto/Postgres-backed results, ghosts, and ELO history |
| Offline practice | Local SQLite results, text packs, ghosts, and sync queue |
| Background jobs | Oban for replay checks, daily challenges, exports, and deletion |
