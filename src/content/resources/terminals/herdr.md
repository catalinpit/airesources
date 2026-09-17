---
name: Herdr
description: Open-source Rust runtime and terminal multiplexer for running a fleet of coding agents. Each agent gets a real terminal, sessions survive closed lids and dropped SSH, and one view shows which agents are working, blocked, or done.
accessNote: "Install with `curl -fsSL https://herdr.dev/install.sh | sh`. One Rust binary, no Electron; Apache-2.0."
categorySlug: terminals
link: "https://herdr.dev"
iconUrl: "https://herdr.dev/favicon.ico"
type: terminal
pricing:
  type: free
  tiers:
    - name: Open source
      price: $0
  details: Apache-2.0 licensed. Development is funded by sponsors.
highlights:
  - title: Agents keep running
    description: A background server owns the terminal sessions, so work continues when you close the laptop or lose the connection. Reattach from any terminal, over SSH, or from your phone.
    icon: terminal
  - title: Attention queue
    description: Detects Claude Code, Codex, Cursor, opencode, Grok, Copilot, Hermes and more out of the box and marks each one working, blocked, or done, so you only look when an agent needs you.
    icon: zap
  - title: Agents can drive it too
    description: A CLI and socket API let agents spawn panes, read output, and wait on each other. A plugin marketplace passed 500 community plugins in its first month.
    icon: code
  - title: tmux habits carry over
    description: Prefix keys and mouse are both first-class; split, drag, and click, or stay on the keyboard.
    icon: cursor
platforms:
  - macOS
  - Linux
  - Windows
features:
  - open-source
author:
  name: Can Celik
  link: "https://github.com/herdrdev/herdr"
  iconUrl: "https://github.com/ogulcancelik.png"
---
