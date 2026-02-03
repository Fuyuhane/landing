---
title: "Hayai"
kanji: "速い"
romaji: "Hayai"
meaning: "The Speed"
description: "A real-time multiplayer typing race where you compete, climb ranks, and make it yours."
longDescription: "Join a room, race others typing the same text, see everyone's progress live. Fastest fingers win. Track your ghost, climb the ladder, customize everything. Built with Elixir, Phoenix LiveView, and the satisfying sound of mechanical keyboards."
accent: "lavender"
status: "active"
techStack: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "Oban", "Tailwind CSS"]
tags: ["multiplayer", "real-time", "typing", "competitive", "elixir"]
links:
  github: "https://github.com/Fuyuhane/hayai"
order: 2
---

## The Vessel

A competitive typing race where speed meets craft. Real-time multiplayer, ELO-based ranked matchmaking, ghost racers, and deep customization — all built on the BEAM.

## Core Features

- **Real-time competition** — see opponents' cursors advancing as they type
- **Ghost Racer** — race against your past self, beat your personal best
- **Ranked Matchmaking** — ELO-based ladder with animal ranks from Snail to Phoenix
- **Code Mode** — type real code snippets with syntax highlighting
- **Custom Themes** — fully customizable UI via TOML theme files
- **Daily Challenge** — same text globally for 24h, compete for the top

## Operational Capabilities

| Capability | Engine |
|------------|--------|
| Real-time rooms | GenServer-per-room with Phoenix PubSub fanout |
| Race orchestration | Supervised race processes with fault isolation |
| Low-latency updates | LiveView + PubSub keystroke streams |
| Leaderboards + ranks | Postgres-backed ELO ladder + seasonal tiers |
| Background jobs | Oban pipelines for scoring, rewards, and cleanup |
| Always-on state | BEAM process memory with crash recovery |
