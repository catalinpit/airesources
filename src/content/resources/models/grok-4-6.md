---
name: Grok 4.6
description: SpaceXAI's frontier model for coding, agentic tasks, and knowledge work, released August 12, 2026. A post-training upgrade over Grok 4.5 tuned for agents that stay on a task across many steps, with a 500K-token context window.
accessNote: "Model name `grok-4.6` on the xAI API. Default model in Grok Build, available in Cursor on all plans, and through OpenRouter, Vercel, and Cloudflare."
categorySlug: models
link: "https://x.ai/news/grok-4-6"
iconUrl: "https://x.ai/favicon.ico"
type: model
pricing:
  type: paid
  tiers:
    - name: Input
      price: $2 / MTok
    - name: Output
      price: $6 / MTok
    - name: Cached input
      price: $0.50 / MTok
  details: Prompts of 200K tokens or more bill at $4 input and $12 output for the whole request. A fast variant costs twice the price. No open weights.
highlights:
  - title: 500K context
    description: Text and image input, text output, and no stated output limit. Knowledge cutoff February 1, 2026.
    icon: cpu
  - title: Reasoning effort up to xhigh
    description: Low, medium, high (default), and a new xhigh level for the hardest multi-step work.
    icon: sparkles
  - title: Tools built in
    description: Function calling, structured outputs, web search, X search, and code execution on the Responses and Chat Completions APIs.
    icon: code
createdAt: "2026-09-17"
---
