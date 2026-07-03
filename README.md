# HOL Guard Plugin for Grok Build

Grok Build plugin for HOL Guard local AI harness protection. Teaches Grok Build how to install and operate HOL Guard across Grok, Codex, Claude Code, Copilot CLI, Cursor, Gemini, Hermes, OpenClaw, OpenCode, and Antigravity. Also guides plugin-scanner checks for Grok plugins, Codex plugins, Claude Code project surfaces, skills, MCP servers, and marketplace packages.

## Install

From the Grok Build marketplace:

```bash
grok plugin install hol-guard-grok-plugin --trust
```

Or add this repository as a marketplace first:

```bash
grok plugin marketplace add hashgraph-online/hol-guard-grok-plugin
grok plugin install hol-guard-grok-plugin --trust
```

## What This Plugin Does

| Component | What it does |
|-----------|-------------|
| `skills/hol-guard/SKILL.md` | Teaches Grok how to install, operate, and verify HOL Guard protection |
| `scripts/hol-guard-plugin` | Local helper script for status, harness listing, protect, scan, evidence, approvals |

## HOL Guard

HOL Guard protects local AI harnesses before tools run. It acts as AI antivirus: intercepting tool calls, scanning for dangerous patterns, and requiring approval for risky operations.

```bash
# Install HOL Guard
pipx install hol-guard

# Protect Grok Build
hol-guard install grok
hol-guard run grok

# Check status
hol-guard status
```

## Supported Harnesses

- Grok Build (`grok`)
- Codex (`codex`)
- Claude Code (`claude-code`)
- Copilot CLI (`copilot`)
- Cursor (`cursor`)
- Gemini CLI (`gemini`)
- Hermes (`hermes`)
- OpenClaw (`openclaw`)
- OpenCode (`opencode`)
- Antigravity (`antigravity`)

## Plugin Scanner

The plugin-scanner validates plugin packages for security and quality:

```bash
plugin-scanner lint .
plugin-scanner verify .
```

## License

Apache License 2.0
