---
name: agent_loader
description: Meta-skill that selects the right skills, tools, and MCP dependencies for a goal before execution starts.
---

Use this skill first when the user gives a broad objective and the system needs to choose the right path.

## What this skill does

1. Reads the goal.
2. Classifies the work type.
3. Chooses the needed skills.
4. Chooses the needed MCP servers.
5. Produces a minimal execution stack.

## Decision pattern

- System design -> hanzo_core
- Settlement / payments / chain -> lux_execution
- Pipeline / outreach -> lead_engine
- Intelligence summary -> dossier
- Revenue design -> monetization

## Output format

- Goal
- Required skills
- Required MCPs
- Execution order
- Expected deliverable
