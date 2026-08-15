---
title: "Anagura"
kanji: "穴蔵"
romaji: "Anagura"
meaning: "The Hidden Storehouse"
description: "A mole keeps only what it can find again. Anagura follows the paths a test truly touched, stores its result beside the evidence, and opens the cache only while every trail still holds."
seoDescription: "Anagura is a test-result cache for Linux, written in Rust, that observes process dependencies, explains every reuse or refusal, and fails closed when evidence is incomplete."
longDescription: "Anagura watches a command and its full process tree, then records the files, directories, missing paths, executables, and environment that shaped the result. BLAKE3 binds immutable output in a local content store while SQLite keeps rebuildable metadata. On the next run, unchanged evidence opens the hidden storehouse; uncertainty simply sends the command back through its ordinary path."
workbench: "The first work follows one bounded Linux process tree, pairs syscall entry with exit, and shows exactly why a result may or may not return from the cache."
horizon: "A generic command will run twice, reuse only complete evidence, and leave no child, lock, or partial entry behind when observation is interrupted."
accent: "lavender"
techStack: ["Rust", "rustix", "libc", "ptrace", "seccomp", "BLAKE3", "SQLite", "Ratatui"]
tags: ["testing", "cache", "linux", "process-observation", "developer-tools", "rust"]
links: { github: "https://github.com/Fuyuhane/anagura" }
order: 5
---

## The vessel

Below the frost, a mole remembers every tunnel by the earth it passed through. Anagura gives repeated test work a similar memory. A result enters the storehouse with the evidence that shaped it, and it returns only while those paths remain unchanged.

## Core principles

- **Evidence before reuse**; every cache entry keeps the conditions that made its result true
- **Uncertainty runs live**; missing or unknown observation closes the storehouse without hiding the reason
- **The whole process tree**; children, threads, signals, and exits stay under one owned lifecycle
- **Local by nature**; the first product needs no account, network service, license key, or telemetry
- **Every verdict speaks**; human output and stable JSON explain each hit, miss, and refusal
- **Content has identity**; BLAKE3 binds immutable payloads while SQLite remains a rebuildable index

## Inside the storehouse

| Capability | Engine |
|------------|--------|
| Process observation | Rust Linux boundary over `ptrace`, seccomp-assisted stops, and exact process ownership |
| Dependency evidence | Files, directories, missing paths, executables, and the inherited environment |
| Reuse decision | Fail-closed eligibility with named reasons for unknown inputs and side effects |
| Local storage | BLAKE3-addressed filesystem blobs with transactional SQLite metadata |
| Tool support | Dedicated Cargo, Go, and Zig adapters with complete-command Python and JavaScript profiles |
| Recovery | Atomic publication, verification, repair, garbage collection, and residue checks |
| Inspection | Stable CLI and JSON output with a read-only Ratatui view |
