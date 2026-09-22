---
name: Devin Desktop
description: Cognition's IDE and agent command center, formerly Windsurf. Run local and cloud coding agents side by side, share context and git worktrees between them through Spaces, review every diff, and hand a session to the cloud when you close the laptop.
accessNote: "Download for macOS (Apple Silicon and Intel), Windows (x64 and arm64) and Linux (tarball, or `apt` / `dnf` install of `devin-desktop`). Existing Windsurf installs update in place with plans, extensions and settings intact. Windsurf for JetBrains stays a separate plugin."
categorySlug: coding-tools
link: "https://devin.ai/desktop"
iconUrl: "https://devin.ai/favicon.ico"
previewImage: "https://devin.ai/assets/images/desktop/og-desktop.png"
type: editor
pricing:
  type: freemium
  tiers:
    - name: Free
      price: $0
    - name: Pro
      price: $20/month
    - name: Max
      price: $200/month
    - name: Teams
      price: $80/month + $40 per full seat
    - name: Enterprise
      price: Custom
  details: Free has a light agent quota, limited models, and unlimited Tab completions and inline edits. Pro adds full model access, Devin Cloud agents and extra usage at API pricing; Max raises the quotas. Paid plans get SWE-2 free in Desktop and CLI through October 10, 2026.
highlights:
  - title: Agent Command Center
    description: Every local and cloud session on one board with a status per card, so you know which agent is working, waiting for CI or ready for review without tabbing through them.
    icon: check
  - title: Spaces share context and worktrees
    description: A Space gives a group of agents the same context and its own git worktree, so parallel sessions on one feature never collide.
    icon: fork
  - title: Any agent over ACP
    description: Devin Local, your team's custom background agents and third-party agents all run through the Agent Client Protocol, with your choice of model.
    icon: code
  - title: Hand off to the cloud
    description: Plan on your machine, then Implement in Cloud moves the session to a Devin cloud agent with its own VM and comes back as a pull request.
    icon: zap
  - title: A full IDE underneath
    description: The Windsurf editor is still all there, with Supercomplete predicting your next edit and Fast Context finding the right files in milliseconds.
    icon: cursor
  - title: MCP, extensions and language servers
    description: Slack, Linear, Notion, Figma, Sentry and Stripe as MCP servers, plus ESLint, Prettier and language servers for Rust, Go, Python and C++.
    icon: globe
platforms:
  - macOS
  - Windows
  - Linux
models:
  - SWE-2
  - SWE-1.7
  - Claude Fable 5
  - Claude Opus 4.8
  - GPT-5.5
  - Kimi K2.5
  - Fusion
  - Adaptive
createdAt: "2026-09-22"
---
