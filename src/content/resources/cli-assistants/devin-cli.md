---
name: Devin CLI
description: Cognition's local coding agent for the terminal, written in Rust. It works against your files, tools, and shell with any frontier model, and hands the same session to Devin in the cloud when a task outgrows your laptop.
accessNote: "Install with `curl -fsSL https://cli.devin.ai/install.sh | bash`, `brew install --cask devin-cli`, or `irm https://static.devin.ai/cli/setup.ps1 | iex` in PowerShell, then run `devin` in a project directory."
categorySlug: cli-assistants
link: "https://devin.ai/cli"
iconUrl: "https://devin.ai/favicon.ico"
type: cli-assistant
pricing:
  type: freemium
  tiers:
    - name: Free
      price: $0
    - name: Pro
      price: $20/month
    - name: Max
      price: $200/month
    - name: Team
      price: $80/month + $40 per seat
    - name: Enterprise
      price: Custom
  details: CLI usage draws from the same daily and weekly allowance as the rest of your Devin plan. Free has a light quota and limited models; Pro adds full model access and Devin Cloud; extra usage on paid plans is billed at API pricing.
highlights:
  - title: Hand off to the cloud
    description: /handoff moves the session to a Devin cloud agent with its own VM, browser, and tests, and you come back to a finished pull request.
    icon: zap
  - title: Multi-model
    description: Pick from frontier models including Claude Opus 4.8, Claude Fable 5, GPT-5.5, and Cognition's own SWE-1.6 and SWE-1.7.
    icon: cpu
  - title: Fast terminal UI
    description: A custom Rust rendering library keeps the interface snappy; Cognition demoed it running on a 1978 VT100.
    icon: terminal
  - title: MCP and permissions
    description: First-party MCP support with the same allow, deny, and ask rules as the built-in tools.
    icon: shield
platforms:
  - macOS
  - Linux
  - Windows
models:
  - Claude Fable 5
  - Claude Opus 4.8
  - GPT-5.5
  - SWE-1.7
  - SWE-1.6
createdAt: "2026-09-17"
---
