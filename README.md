# Statish

Statish is a no-code-first state runtime, visual inspector, live editor, and application orchestration toolkit.

## Vision

Statish combines:

- hierarchical statecharts
- live runtime inspection
- session persistence
- time travel debugging
- REST + WebSocket runtime APIs
- typed React hooks
- plugin-based integrations
- no-code visual authoring

## Planned Architecture

```txt
apps/
  studio/         React runtime editor + inspector
  cli/            CLI + REPL

packages/
  core/           deterministic runtime engine
  model/          canonical AST + schemas
  server/         REST/WebSocket server
  react/          React hooks + subscriptions
  store-files/    filesystem-backed persistence
  plugin-http/    HTTP effect plugin
```

## Runtime Philosophy

External input becomes events.
External output becomes effects.

The runtime stays deterministic and replayable.
