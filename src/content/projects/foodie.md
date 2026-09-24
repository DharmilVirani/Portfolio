---
title: Foodie
subtitle: Turning a catalog into a connected browsing experience.
summary: >-
  A React project connecting food discovery, account screens and an API-backed cart.
  The current local prototype uses a simulated backend to support the browsing and cart workflow.
category: Full-stack web
tags: [React, Node.js, Express, Redux]
role: Full-stack application development
order: 4
featured: true
visual: food
accent: peach
context: Personal project
evidence:
  - foodie/package.json
  - foodie/src/App.js
  - foodie/src/Pages/Home/Home.js:19
  - foodie/src/Pages/Usermenu/Profile/Cart.js:1
  - foodie/src/Pages/Usermenu/Profile/Cart.js:174
  - foodie/server/server.js:8
  - docs/project-audit.json#foodie
---

## The problem

A food catalog is only one part of a browsing experience. Once someone chooses an item, the application needs to carry that choice into a cart, allow changes and keep the resulting totals understandable. Account and address screens add another layer of state and navigation.

Foodie was an opportunity to connect those pieces in a full-stack project. I focused on how a collection of React views becomes an application with routes, data requests and actions that update what the user sees.

## My contribution

I worked on the React interface and the application workflows around food browsing and cart management. The project includes home, login, signup, profile, cart and add-address views, organized with React Router.

Food items can be added through an API request. The cart view retrieves its items, handles quantity changes and removal, supports clearing the cart, and calculates item and price totals. These are small operations individually, but together they require the interface and API layer to agree about the current state.

## Decisions that mattered

Routing gives the application distinct destinations for different jobs. Browsing, managing a cart and editing account details each have a place, so navigation reflects what the user is trying to do.

Cart operations are expressed as API interactions. That makes the boundary between interface state and application data concrete: an action starts in the browser, a request carries it to the backend, and the interface responds to the result. Loading, failure and empty-cart messages are part of that flow rather than separate visual extras.

The current local version runs against an in-memory mock API served by Node.js and Express. My resume lists MongoDB in the project's broader stack; this prototype uses simulated server data. Keeping that distinction clear matters when explaining what a local demonstration actually proves.

## What this demonstrates

Foodie represents my work connecting frontend composition with backend interactions. It moves beyond a static catalog into stateful behavior: retrieving data, submitting actions and keeping a view useful as its contents change.

It also captures an important learning stage in full-stack development. Page structure, shared state and API boundaries all affect one another. A quantity control is a useful example: the action has implications for the stored item, the displayed quantity and the summary beneath the cart.

## Scope & reflection

This is a prototype for browsing, accounts and cart interactions. Payment, order submission and fulfillment are not implemented in the current version; the presence of a checkout-style control does not make those workflows complete.

The next meaningful extension would be to define and implement the order lifecycle, including persistence and failure recovery. Before that, I would tighten the relationship between shared cart state and server responses so the existing journey has one clear source of truth.
