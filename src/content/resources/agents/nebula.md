---
name: Nebula
description: Mission control for coding agents in one terminal. Run Claude Code, Codex, Cursor, Pi and Muse across projects and git worktrees, with status dots that show which session needs you.
accessNote: Install or update with the one-line `install.sh` from the repo, which drops a ~4 MB binary into `~/.local/bin`; `nebula upgrade` updates in place. Needs at least one agent CLI (`claude`, `codex`, `cursor-agent`, `pi` or `muse`) on your PATH.
categorySlug: agents
link: "https://github.com/AgentSystemLabs/nebula"
previewImage: "https://raw.githubusercontent.com/AgentSystemLabs/nebula/main/assets/screenshot.png"
type: terminal
pricing:
  type: free
  tiers:
    - name: Open Source
      price: $0
  details: MIT-licensed with no paid tier. Nebula launches the agent CLIs you already have; model usage is billed through those tools' own plans or API keys.
highlights:
  - title: One tree for every agent
    description: Projects, worktrees and sessions in one TUI. Move with h/j/k/l, drill in with Enter, and type straight at the agent.
    icon: terminal
  - title: Sessions outlive the TUI
    description: A daemon owns the PTYs, so agents keep working after you quit or close the laptop. Scrollback replays on reattach.
    icon: clock
  - title: Status dots, not tab-switching
    description: Yellow is running, red is waiting on you, violet is done and unread. Parent rows roll up, so a collapsed project still points the way.
    icon: check
  - title: Real git worktrees, one keystroke
    description: Press n to branch into a real git worktree so two agents never collide. Switch branches without leaving the tree.
    icon: fork
  - title: Five agent CLIs out of the box
    description: Claude Code, Codex, Cursor, Pi and Muse are built in. Grok or any other CLI is one config block away.
    icon: code
  - title: One 4 MB Rust binary
    description: No Electron, no browser, no server, no MCP. Just a binary and a unix socket.
    icon: cpu
platforms:
  - macOS
  - Linux
createdAt: "2026-09-17"
---
