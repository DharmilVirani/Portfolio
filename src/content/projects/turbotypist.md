---
title: TurboTypist
subtitle: Small details that make practice feel more considered.
summary: >-
  A browser typing experience with timed sessions, selectable practice text and immediate feedback.
  Recognized with First Runner Up and Best UI/UX awards.
category: Interactive web
tags: [JavaScript, HTML, CSS, Interaction design]
role: Frontend development and interaction design
order: 3
featured: true
visual: typing
accent: lavender
context: Competition project
evidence:
  - WebHorizon/index.html:12
  - WebHorizon/script.js:148
  - WebHorizon/script.js:228
  - WebHorizon/script.js:349
  - WebHorizon/script.js:377
  - source:resume
  - docs/project-audit.json#turbotypist
---

## The problem

Typing practice looks simple until you consider the interaction moment by moment. A person needs to know when a session starts, where to focus, whether the text matches and how much time remains. The interface has to answer those questions while the person is doing something else: typing.

TurboTypist gave me a compact setting to work on those details. The experience centers on a timed practice session, with text selection beforehand and performance feedback during the session.

## My contribution

I worked on the browser interface and its interaction behavior using HTML, CSS and JavaScript. The project combines difficulty and genre selection, a countdown, a typing area and displays for speed and accuracy.

The work received First Runner Up and Best UI/UX recognition. I value this project because it connects that design recognition to something concrete: a small interface whose usefulness depends on how its parts respond together.

## Decisions that mattered

The session has an explicit beginning. Starting practice prepares the prompt, enables the typing area and starts the countdown. The original implementation uses a 45-second session and provides a stop control. That makes the session boundary visible instead of leaving the user to infer when measurement begins.

Practice text is selected through difficulty and genre. These controls give the user a way to shape the exercise before entering the focused typing state. Keeping that choice separate from the main task gives the interface a straightforward sequence.

Feedback is tied to input. As text changes, the application updates its performance displays and highlights mismatches in the prompt. The aim is to keep the relationship between an action and its result easy to notice. Theme switching and a circular timer are additional parts of the visual treatment around that central interaction.

## What this demonstrates

TurboTypist shows my interest in the small behavioral details of frontend work. A screen can contain the right controls and still feel uncertain if its timing, feedback and states do not agree.

Building the interaction directly in JavaScript also makes its moving parts clear: input events, elapsed time, the selected prompt and the rendered feedback. Working at that level is useful practice for reasoning about more complex component-based interfaces later.

## Scope & reflection

This is an interaction project, not a standardized typing assessment. The original accuracy calculation uses its own relationship between matched words and the full prompt, so its results should not be compared directly with other typing products.

If I revisited the original, I would give measurement definitions, keyboard behavior and assistive-technology feedback particular attention. The next level of polish is making the experience as clear to different users as it appears visually.
