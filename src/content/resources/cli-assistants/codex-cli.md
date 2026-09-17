---
name: Codex CLI
description: OpenAI's coding agent for the terminal. It reads, edits, and tests your repository locally, delegates to subagents, connects to MCP servers, hands sessions off to Codex cloud, and runs non-interactively in CI with codex exec.
accessNote: "Install with `npm install -g @openai/codex`, `brew install --cask codex`, or `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, then run `codex` and sign in with ChatGPT or an API key."
categorySlug: cli-assistants
link: "https://github.com/openai/codex"
iconUrl: "https://icons.duckduckgo.com/ip3/openai.com.ico"
type: cli-assistant
pricing:
  type: freemium
  tiers:
    - name: ChatGPT Free and Go
      price: Included, lower limits
    - name: ChatGPT Plus, Pro, Business, Edu, Enterprise
      price: Included
    - name: API key
      price: Per token at API rates
  details: Plan usage is governed by rolling five-hour and weekly limits that vary by model and task; check them with /status. Signing in with an API key bills tokens directly and skips the cloud features such as code review and Slack.
highlights:
  - title: Local first, cloud when needed
    description: Work in your checkout, then move a task to Codex cloud with codex cloud and apply the result back to your repository from the terminal.
    icon: terminal
  - title: Subagents
    description: Ask Codex to split an investigation across focused agents and bring their findings back into the main session.
    icon: fork
  - title: Scriptable
    description: codex exec runs a task non-interactively for scripts, GitHub Actions, and CI, and the Codex SDK embeds the same agent in your own tools.
    icon: code
  - title: Sandbox and permissions
    description: Choose when Codex may edit files or run commands without asking, and inspect the writable roots before continuing.
    icon: shield
  - title: Visual and web context
    description: Pass screenshots or diagrams with codex --image and switch on live web search with codex --search.
    icon: globe
platforms:
  - macOS
  - Linux
  - Windows
models:
  - GPT-6 Astra
  - GPT-5.6 Sol
  - GPT-5.6 Terra
  - GPT-5.6 Luna
  - GPT-5.5
  - GPT-5.4
  - GPT-5.3-Codex-Spark
features:
  - open-source
---
