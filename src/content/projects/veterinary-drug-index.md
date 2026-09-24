---
title: Veterinary Drug Index
subtitle: A specialist reference, organized around everyday work.
summary: >-
  A desktop application for organizing veterinary medicine records and finding entries by medicine and species.
  Local SQLite storage and Excel import/export connect structured lookup with familiar spreadsheets.
category: Desktop application
tags: [Electron, Node.js, SQLite, ExcelJS]
role: Desktop application development
order: 2
featured: true
visual: medicine
accent: sage
context: Personal project
evidence:
  - animal_medicines/package.json
  - animal_medicines/index.js:9
  - animal_medicines/app.js:85
  - animal_medicines/app.js:189
  - animal_medicines/app.js:263
  - animal_medicines/app.js:395
  - docs/project-audit.json#veterinary-drug-index
---

## The problem

A specialist collection becomes more useful when its records have a consistent structure and a clear way to find them. A veterinary medicine entry needs context: the medicine, the species, supporting remarks and its reference all belong together.

I wanted to bring that organization into a focused desktop application while keeping spreadsheets part of the workflow. This is the project listed as Animal Medicine Record Keeper on my resume, presented here as the Veterinary Drug Index.

## My contribution

I worked on the desktop application and its local records workflow using Electron, Node.js and SQLite. The interface runs inside an Electron window, while a local Express service handles record operations and spreadsheet exchange.

The application supports entering records, looking them up by medicine and species, importing an Excel sheet, and exporting either a filtered selection or the complete index. Those capabilities give the collection a repeatable path from a spreadsheet into structured storage and back out again.

## Decisions that mattered

The data model carries domain context alongside each entry. Medicine name and species are explicit fields, with remarks and references kept with the record. That allows lookup to follow the organization of the collection rather than relying on a single unstructured text field.

Excel remains a first-class part of the application. Import reads spreadsheet rows and checks for matching records before inserting them. Export supports both a specific selection and the full collection, so the desktop application does not become the only place where the information can be used.

SQLite keeps the record store local, and Electron packages the interface with the application runtime. Together they make the project an exercise in desktop delivery as well as web development: window behavior, the local service and stored records are parts of the same user experience.

## What this demonstrates

This project shows how I approach practical software around a specific workflow. The interesting work is connecting ordinary operations—find, add, import and export—so that the application's structure matches the information it handles.

It also brought together skills that are sometimes treated separately: interface work, API operations, database structure and spreadsheet automation. Here they serve one purpose, making a specialist record collection easier to organize and retrieve.

## Scope & reflection

The application organizes reference information; this case study does not offer medical advice or establish clinical validation. The portfolio illustrations contain no clinical records or treatment recommendations.

A further release would deserve focused review of desktop process isolation, import failure handling, backup and recovery. I see those as natural next steps for a local records tool, alongside observing how its intended users move between the index and their existing spreadsheets.
