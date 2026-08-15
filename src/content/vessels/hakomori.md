---
title: "Hakomori"
kanji: "箱守"
romaji: "Hakomori"
meaning: "The Keeper of Boxes"
description: "A hermit crab changes shells without returning to a central nest. Hakomori watches each rootless box through its life, remembers what it owns, and leaves no forgotten piece on the shore."
seoDescription: "Hakomori is a Zig tool for rootless, daemonless OCI container lifecycle, recovery, Hakofile builds, and a deliberate Compose subset on Linux."
longDescription: "Hakomori keeps container work close enough to inspect. One Zig CLI coordinates established OCI tools, journals each external effect, and reconciles containers after an interrupted command or monitor failure. Hakofile and a bounded Compose language grow from that same lifecycle instead of hiding another engine below."
workbench: "The first work is a rootless Linux lifecycle that can pull, run, inspect, stop, remove, and repair a container without leaving mounts, namespaces, helpers, or stale state behind."
horizon: "A tested host and backend matrix will give the first lifecycle commands firm ground beneath them."
accent: "mint"
techStack: ["Zig", "crun", "Skopeo", "umoci", "Buildah", "pasta", "SQLite", "libyaml"]
tags: ["containers", "oci", "rootless", "daemonless", "linux", "zig"]
links: { github: "https://github.com/Fuyuhane/hakomori" }
order: 6
---

## The vessel

A hermit crab carries its shelter without answering to a distant keeper. Hakomori follows that small independence. Each container has a visible life, a narrow owner, and a way home when a command, monitor, or helper disappears halfway through the work.

## Core principles

- **Rootless ground**; unsupported privilege, namespace, mount, or cgroup conditions fail before mutation
- **No central daemon**; one small unprivileged monitor stays with each detached container
- **Visible ownership**; desired state, observed state, and external resources remain distinct
- **Recovery belongs to lifecycle**; interrupted work returns through a journal and revalidation
- **Narrow language**; Hakofile and Compose reject what they do not understand
- **Established mechanics**; OCI tools keep their own work while Hakomori owns orchestration and cleanup

## Beneath the shell

| Capability | Engine |
|------------|--------|
| Rootless lifecycle | Zig control plane with explicit state transitions and ReleaseSafe builds |
| OCI execution | `crun` bundles with bounded child-process ownership |
| Images and builds | Skopeo, umoci, and Buildah behind checked argument and output contracts |
| State and recovery | SQLite operation journal compared with observed host resources |
| Detached containers | One unprivileged monitor for streams, signals, exit state, and cleanup |
| Hakofile | A small typed build recipe translated into explicit Buildah operations |
| Compose | A deliberate supported subset with transactional startup and reverse-order rollback |
