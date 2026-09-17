---
name: Cursor CLI
description: Cursor's agent in the terminal. The same Agent, Plan, and Ask modes as the editor, a print mode for scripts and CI, Cloud Agent handoff, and your project's rules and MCP servers picked up automatically.
accessNote: "Install with `curl https://cursor.com/install -fsS | bash` (macOS, Linux, WSL) or `irm 'https://cursor.com/install?win32=true' | iex` on Windows, then run `agent`. Set `CURSOR_API_KEY` for headless use."
categorySlug: cli-assistants
link: "https://cursor.com/cli"
iconUrl: "https://www.cursor.com/favicon.ico"
type: cli-assistant
pricing:
  type: freemium
  tiers:
    - name: Hobby
      price: $0
    - name: Pro
      price: $20/month
    - name: Pro+
      price: $60/month
    - name: Ultra
      price: $200/month
  details: Uses the usage included in your Cursor plan, the same pool as the editor. Teams can authenticate CI with a service account key.
highlights:
  - title: Same agent, same rules
    description: Reads .cursor/rules and mcp.json from the project, so the terminal agent follows the setup you already have in the editor.
    icon: cursor
  - title: Hand off to a Cloud Agent
    description: Prefix a message with & to push the conversation to a Cloud Agent that keeps working after you close the terminal.
    icon: zap
  - title: Built for automation
    description: agent -p runs a task non-interactively with text, JSON, or streaming output, and --force applies changes without prompts in CI.
    icon: code
  - title: Worktrees and sandbox
    description: --worktree runs the agent in a fresh Git worktree; /sandbox controls command execution and network access.
    icon: shield
platforms:
  - macOS
  - Linux
  - Windows
---
