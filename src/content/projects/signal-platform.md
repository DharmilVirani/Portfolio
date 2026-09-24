---
title: Market Signal Platform
subtitle: From market events to decisions people can follow.
summary: >-
  A connected system for market-data ingestion, strategy evaluation and operator workflows.
  Rust services, a Node API and a Next.js interface bring the different parts together.
category: Systems engineering
tags: [Rust, Node.js, Next.js, PostgreSQL, Redis]
role: Full-stack and systems contribution
order: 1
featured: true
visual: signal
accent: cobalt
context: Professional contribution
evidence:
  - New-AlgoTrading/README.md
  - New-AlgoTrading/signal-generator/rust-engine/src/main.rs:1
  - New-AlgoTrading/signal-generator/rust-engine/Cargo.toml:8
  - New-AlgoTrading/signal-generator/rust-ws/src/main.rs:1
  - New-AlgoTrading/signal-generator/apps/api-server/src/routes/approval.routes.js:14
  - docs/project-audit.json#signal-platform
---

## The problem

A market-data application has to connect several kinds of work. Events arrive continuously, strategies depend on changing state, and an operator needs to understand what happened before deciding what to do next. Each service can make sense on its own while the complete workflow remains difficult to follow.

This platform brings ingestion, strategy evaluation, signal records and dashboard workflows into one system. The interesting engineering problem is the relationship between those parts: how an incoming event becomes something another service, and eventually a person, can use.

## My contribution

My work sits at the intersection of backend services and the interfaces around them. This case study describes the wider system I contribute to, including the Rust processing layer, Node.js orchestration and Next.js dashboard. It is a collaborative project with responsibilities across multiple components.

The platform includes subscription management and reconnect handling for incoming data, strategy modules that consume that data, and API routes for reviewing signals. The operator workflow also includes approval and rejection actions. Those steps make the connection between computation and human judgment visible in the product.

## Decisions that mattered

The architecture gives different responsibilities their own place. Rust services handle incoming data and strategy execution. Node.js and Express expose application workflows. Next.js and React provide the operator-facing interface, with PostgreSQL and Redis supporting stored records and event transport.

Strategy implementations are shared as Rust modules. Keeping that logic in a common location creates a clearer boundary between the strategy itself and the services that run it. That structure is useful, although it does not by itself prove identical behavior across every execution environment.

Approval is also an explicit application action. The API distinguishes listing signals from approving or rejecting them, with role checks on the latter. That distinction matters because a computed result and an operator's decision represent different moments in the workflow.

## What this demonstrates

This work represents the part of engineering I find especially engaging: understanding a whole system while still caring about its individual interfaces. Data transport, application state and dashboard behavior all shape the final experience.

It also shows why I like working across Rust and JavaScript. They meet at practical boundaries, where a service needs to exchange useful information with another service or make that information understandable to a person.

## Scope & reflection

This is a high-level view of a private project. It focuses on architecture and signal workflows; it makes no claim about investment returns, measured capacity or current broker execution settings.

The continuing challenge is making behavior explainable when components reconnect, configuration changes or an operator intervenes. Those boundaries are where I would concentrate further verification and operational refinement.
