---
title: "Origumo"
kanji: "織蛛"
romaji: "Origumo"
meaning: "The Weaving Spider"
description: "Like a weaving spider in moonlight, each keystroke lays a thread, and thread by thread, speed becomes craft."
longDescription: "Join a room, race others typing the same text, see everyone's progress live. Fastest fingers win. Track your ghost, climb the ladder, customize everything. Built with Go, SvelteKit, and the satisfying sound of mechanical keyboards."
accent: "lavender"
status: "active"
techStack: ["Go", "Chi", "PostgreSQL", "sqlc", "SvelteKit", "Gorilla WebSocket", "Dragonfly"]
tags: ["multiplayer", "real-time", "typing", "competitive", "go"]
links: {}
order: 2
---

## The Vessel

A competitive typing race where speed meets craft. Real-time multiplayer, ELO-based ranked matchmaking, ghost racers, and deep customization — all built on a Go + SvelteKit backbone tuned for low-latency play.

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
| Real-time rooms | Gorilla WebSocket room actors with channel fanout |
| Race orchestration | Goroutine-per-race loops with typed message channels |
| Low-latency updates | SvelteKit client + WebSocket keystroke streams |
| Leaderboards + ranks | Postgres-backed ELO ladder + seasonal tiers |
| Background jobs | Worker pipelines for scoring, rewards, and cleanup |
| Always-on state | Dragonfly-backed sessions, cache, and rate limits |
