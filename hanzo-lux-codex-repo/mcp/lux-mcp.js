#!/usr/bin/env node

// Minimal placeholder MCP server for Lux.
// Replace with your real MCP server implementation.

const serverInfo = {
  name: "lux",
  version: "0.1.0",
  description: "Placeholder Lux MCP server"
};

console.log(JSON.stringify({
  status: "ready",
  server: serverInfo,
  tools: [
    "prepare_settlement",
    "route_payments",
    "evaluate_execution_path"
  ]
}, null, 2));
