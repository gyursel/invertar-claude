# AGENTS.md

## Project Overview

Single-file static HTML app (`index.html`) — a Bulgarian-language restaurant inventory tool ("Инвентар"). Users upload/photograph inventory, and the Groq API (meta-llama/llama-4-scout) analyzes the image and returns structured JSON.

## Architecture

- **No build step, no backend, no dependencies.** Everything lives in `index.html` (HTML + CSS + vanilla JS).
- The Groq API key is entered by the user in-browser and stored in `localStorage` (`groq_key`). No server-side credentials.
- Calls go directly from the browser to `https://api.groq.com/openai/v1/chat/completions`.

## Running in the Sandbox

- Served as static files via `nginx:alpine` on port 3000 (see `docker-compose.base44.yml`).
- Start: `docker compose -f docker-compose.base44.yml up -d`
- No secrets or environment variables required to boot.

## Verifying

- `curl http://localhost:3000/` should return the HTML page (title: "Инвентар").
- The app shows an API-key entry screen on first load; the user must provide their own Groq API key.
