#!/usr/bin/env node

// Minimal placeholder MCP server for Hanzo.
// Replace with your real MCP server implementation.

const serverInfo = {
  name: "hanzo",
  version: "0.1.0",
  description: "Placeholder Hanzo MCP server"
};

console.log(JSON.stringify({
  status: "ready",
  server: serverInfo,
  tools: [
    "plan_agents",
    "select_skills",
    "orchestrate_workflows"
  ]
}, null, 2));
