---
title: "Umitsuki"
kanji: "海月"
romaji: "Umitsuki"
meaning: "The Sea Moon"
description: "Messages that drift between ships like jellyfish through dark waters, glowing faintly as they heal their path through the mesh."
longDescription: "A peer-to-peer communication system for ships traversing cold seas, where messages drift like jellyfish through the night. Built from scratch in Rust to orchestrate fleet-scale coordination across the open sea: Gossip protocols, Raft consensus, and mesh networking. Ships form a self-organizing mesh network across the ocean — they discover each other, share status updates, relay distress signals, and maintain awareness of their maritime neighbors — all without central infrastructure."
accent: "mint"
status: "active"
techStack: ["Rust", "Tokio", "Axum", "SQLX", "Ratatui"]
tags: ["distributed-systems", "p2p", "mesh-networking", "rust"]
links: {}
order: 1
---

## The Vessel

Ships form a self-organizing mesh network across the ocean. They discover each other, share status updates, relay distress signals, and maintain awareness of their maritime neighbors — all without central infrastructure.

## Core Principles

- **No central server** — fully decentralized, leaderless by default
- **Resilient to partitions** — operates during network splits, heals automatically
- **Eventually consistent** — uses Anti-Entropy to reconcile divergent state
- **Chaos-ready** — tested with random failures, packet loss, and high latency
- **Single binary** — ship node deploys anywhere
- **Observable** — real-time topology visualization showing gossip propagation

## Operational Capabilities

| Capability | Engine |
|------------|--------|
| Gossip Protocols | SWIM-based failure detection + epidemic broadcast |
| Consensus | Raft leader election |
| Event Sourcing | SQLite append-only log with CQRS |
| Chaos Engineering | Simulation mode with network partitions |
| NAT Traversal | UDP hole punching for mesh connectivity |
| Real-time Systems | WebSocket observers + TUI live updates |
