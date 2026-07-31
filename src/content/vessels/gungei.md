---
title: "Gungei"
kanji: "群鯨"
romaji: "Gungei"
meaning: "The Whale Pod"
description: "A whale pod shares awareness across cold and uncertain water. Gungei follows that formation, with each vessel listening, remembering, and relaying for the others."
seoDescription: "Gungei is a planned Zig ship-to-ship mesh network, beginning with a local simulation of discovery, gossip routing, distress propagation, persistence, and observability."
longDescription: "Gungei begins with a committed portfolio demo: a local Zig mesh simulation with a terminal interface, observable gossip, distress propagation, persistent event logs, and chaos drills. The wider ship-to-ship system remains aspirational. LoRa coordination, a Ground Station, hardware sales, cloud services, and a Raylib tactical display proceed only after demand, field evidence, and radio, privacy, security, and certification gates are met."
accent: "mint"
status: "planning"
techStack: ["Zig", "Raylib", "SQLite", "libvaxis", "LoRa", "PostgreSQL", "SvelteKit"]
tags: ["distributed-systems", "p2p", "mesh-networking", "maritime", "zig"]
links: { github: "https://github.com/Fuyuhane/gungei" }
order: 1
---
## The Vessel

Whales move in loose formation, aware of one another across distances no single body can hold. Gungei gives ships a similar shape. No captain commands the whole pod; each vessel discovers its companions, carries urgent signals first, and keeps a local memory for the hours when the sea breaks the connection.

## Core Principles

- **No central server**; ship-to-ship operation is leaderless by default
- **Partition tolerant**; anti-entropy heals divergent state after reconnect
- **Distress first**; urgent traffic bypasses ordinary paths
- **Event-sourced**; SQLite keeps an append-only ship log for replay and audit
- **Simulation first**; TUI, observer protocol, and chaos drills come before pilots
- **Field gated**; live vessels wait for hardware, radio, privacy, and certification checks

## The Charted Course

| Capability | Engine |
|------------|--------|
| Discovery + membership | Multicast, UDP seeds, SWIM-style suspicion, incarnation rules |
| Gossip + healing | Fan-out broadcast with anti-entropy missing-event sync |
| Distress relay | Priority propagation, deduplication, hop-count guards, acknowledgments |
| Event sourcing | SQLite append-only event log; Ground Station PostgreSQL optional |
| Convoy coordination | Custom Raft consensus, scoped to Ground Station and convoy clusters, never the open mesh |
| Observer surfaces | libvaxis TUI, WebSocket observer protocol, SvelteKit topology view |
| Aspirational field path | LoRa coordination radio, Raspberry Pi adapters, Raylib tactical display, and CE/Giteki gates |
