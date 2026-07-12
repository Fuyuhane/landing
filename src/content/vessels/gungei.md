---
title: "Gungei"
kanji: "群鯨"
romaji: "Gungei"
meaning: "The Whale Pod"
description: "Across open water, messages move like whale-song between distant companions, each traveler guiding the next until direction emerges without a captain."
longDescription: "A Rust-native ship-to-ship mesh runtime. Ship nodes discover peers, gossip state, route messages, relay distress traffic, persist SQLite event logs, and expose TUI/WebSocket observers without depending on a central service during normal operation. Ground Station analytics, Raft-scoped coordination, LoRa hardware, NAT traversal, and the Raylib tactical display arrive as field-product layers after the mesh proves itself in simulation."
accent: "mint"
status: "active"
techStack: ["Rust", "SQLite", "ratatui", "LoRa", "Raylib", "PostgreSQL"]
tags: ["distributed-systems", "p2p", "mesh-networking", "maritime", "rust"]
links: { github: "https://github.com/Fuyuhane/gungei" }
order: 1
---
## The Vessel

Ships form a self-organizing mesh across cold water. They discover each other, share status, route messages, relay distress signals, and keep local history even when the wider network splits apart.

## Core Principles

- **No central server**; ship-to-ship operation is leaderless by default
- **Partition tolerant**; anti-entropy heals divergent state after reconnect
- **Distress first**; urgent traffic bypasses ordinary paths
- **Event-sourced**; SQLite keeps an append-only ship log for replay and audit
- **Simulation ready**; TUI, observer protocol, and chaos drills come before pilots
- **Field gated**; live vessels wait for hardware, radio, privacy, and certification checks

## Operational Capabilities

| Capability | Engine |
|------------|--------|
| Discovery + membership | Multicast, UDP seeds, SWIM-style suspicion, incarnation rules |
| Gossip + healing | Fan-out broadcast with anti-entropy missing-event sync |
| Distress relay | Priority propagation, deduplication, hop-count guards, acknowledgments |
| Event sourcing | SQLite append-only event log; Ground Station PostgreSQL optional |
| Observer surfaces | ratatui TUI, WebSocket observer protocol, SvelteKit topology view |
| Field product path | LoRa coordination radio (beacons and distress only), Raspberry Pi adapters, Raylib tactical display, CE/Giteki gates |
