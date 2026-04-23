# Hanzo + Lux Codex Starter Repo

A starter repo for loading your Hanzo and Lux operating system into Codex with:

- Codex skills in `.codex/skills`
- A portable plugin bundle in `plugin/`
- MCP server placeholders for Hanzo and Lux
- Config templates for local and team use

## Repo structure

```text
hanzo-lux-codex-repo/
├── .codex/
│   └── skills/
├── plugin/
│   ├── .codex-plugin/
│   │   └── plugin.json
│   ├── .mcp.json
│   ├── skills/
│   └── mcp/
├── mcp/
├── config/
│   └── config.toml.example
├── package.json
└── README.md
```

## Fast start

### 1) Use the local skills directly

From this repo root:

```bash
codex --enable skills
```

Codex will read the skills in `.codex/skills`.

### 2) Install the plugin bundle

```bash
codex plugin install ./plugin
```

### 3) Wire MCP servers

Copy the example config into your Codex config location and update the paths:

```bash
mkdir -p ~/.codex
cp ./config/config.toml.example ~/.codex/config.toml
```

Then update the file so the `command` and `args` point to your actual Hanzo and Lux MCP server implementations.

## What is included

### Skills

- `hanzo_core` — operating system brain for agent design and execution
- `lux_execution` — on-chain, payment, settlement, and sovereign rails logic
- `lead_engine` — discovery, enrichment, routing, outreach logic
- `dossier` — business, deal, and opportunity intelligence summaries
- `monetization` — offers, pricing, royalties, affiliate flows
- `agent_loader` — chooses skills and MCP dependencies for a goal

### MCP placeholders

- `mcp/hanzo-mcp.js`
- `mcp/lux-mcp.js`

These are starter stubs so you can swap in real logic later.

## Recommended next moves

1. Replace the MCP stubs with your real services.
2. Add Airtable, Notion, Telegram, and Firecrawl MCP entries.
3. Split `hanzo_core` into sub-skills once usage patterns become clear.
4. Add tests for MCP tool discovery and auth.

## Notes

This repo is intentionally minimal so it loads cleanly and gives you a stable base.
