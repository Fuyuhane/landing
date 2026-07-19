---
title: "Gungei"
kanji: "群鯨"
romaji: "Gungei"
meaning: "The Whale Pod"
description: "Across open water, messages move like whale-song between distant companions, each traveler guiding the next until direction emerges without a captain."
longDescription: "Charted in Zig, Gungei is a ship-to-ship mesh where signals travel like whale-song through broken seas. Each vessel will discover its companions, carry messages onward, preserve its own SQLite memory, and reveal the pod through libvaxis and WebSocket observers, all without waiting for a distant command. Once the mesh has weathered simulation, LoRa radios, Ground Station coordination, and a native Raylib tactical display will guide it toward open water."
accent: "mint"
status: "active"
techStack: ["Zig", "Raylib", "SQLite", "libvaxis", "LoRa", "PostgreSQL", "SvelteKit"]
tags: ["distributed-systems", "p2p", "mesh-networking", "maritime", "zig"]
links: { github: "https://github.com/Fuyuhane/gungei" }
order: 1
---
## The Vessel

Across cold and uncertain water, Gungei gathers ships into a pod without appointing a leader. Each vessel listens for the others, carries their messages beyond the horizon, raises distress above ordinary traffic, and remembers what passed while the sea kept them apart.

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
| Field product path | LoRa coordination radio (beacons and distress only), Raspberry Pi adapters, Raylib tactical display, CE/Giteki gates |
