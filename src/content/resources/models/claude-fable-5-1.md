---
name: Claude Fable 5.1
description: Anthropic's most capable generally available model, released September 1, 2026, for long-running agentic coding, multistep research, and document work. 1M-token context, 128K output, adaptive thinking that is always on.
accessNote: "Model id `claude-fable-5-1` on the Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry. In Claude for Pro, Max, Team, and Enterprise. Requires 30-day data retention."
categorySlug: models
link: "https://www.anthropic.com/claude/fable"
iconUrl: "https://www.anthropic.com/favicon.ico"
type: model
pricing:
  type: paid
  tiers:
    - name: Input
      price: $10 / MTok
    - name: Output
      price: $50 / MTok
    - name: Cache read
      price: $0.25 / MTok
  details: Same input and output prices as Fable 5; cache reads cost 75% less, which cuts typical workloads by about 25% and agentic ones by up to 45%. Batch API is half price. Claude Mythos 5.1 is the same model with looser safeguards for trusted-access programs.
highlights:
  - title: 1M context, 128K output
    description: Whole repositories and long agent transcripts fit in one window; effort can change mid-conversation without invalidating the cache.
    icon: cpu
  - title: Adaptive thinking, always on
    description: There is no thinking-off mode. The effort parameter controls depth, from routine edits to days-long tasks.
    icon: sparkles
  - title: Built for long-horizon agents
    description: Stronger on tasks that run for hours across many files and tools, plus spreadsheets, documents, and slides.
    icon: clock
createdAt: "2026-09-17"
---
