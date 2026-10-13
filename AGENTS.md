# AGENTS.md

## Project Overview
Single-file static HTML app — a Bulgarian restaurant inventory tool ("Инвентар") that uses the Groq AI API (Llama 4 Scout model) for image recognition. Users photograph a warehouse or bar, and the app identifies/counts products via AI.

## Tech Stack
- Plain HTML/CSS/JS — no framework, no build step in the original code
- Vite is used only as a dev server (live reload + HMR), not as a build tool
- Groq API called directly from the browser; API key stored in `localStorage` (entered by user on first load)

## Setup
- `docker compose -f docker-compose.base44.yml up -d` starts a Vite dev server on port 3000
- Node 22 slim image; dependencies (vite only) installed on container startup via `npm install`
- No backend, no database, no secrets required to boot
- The Groq API key is user-supplied at runtime (browser localStorage) — not an environment variable

## Verification
- `curl http://localhost:3000/` should return the HTML with `<title>Инвентар</title>`
- The app shows an API key entry screen first; after entering a Groq key, the main inventory UI appears
- Two modes: Warehouse (Склад) and Bar (Бар), each with different AI prompts and result layouts
