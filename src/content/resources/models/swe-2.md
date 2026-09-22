---
name: SWE-2
description: Cognition's most advanced coding model, released September 10, 2026. Post-trained with RL from Kimi K3, it scores 50.0% on FrontierCode 1.1 Main, within a point of Claude Fable 5.1 at 64% lower cost, and ships in medium, high and max effort levels.
accessNote: "Available in Devin Desktop and Devin CLI, rolling out to Devin Web and Fusion. There is no standalone API and no open weights, so you pick `swe` inside a Devin product rather than calling it from your own harness."
categorySlug: models
link: "https://cognition.com/blog/swe-2"
iconUrl: "https://cognition.com/favicon.ico"
type: model
pricing:
  type: paid
  tiers:
    - name: Devin Pro
      price: $20 / month
    - name: Devin Max
      price: $200 / month
    - name: Devin Teams
      price: $80 / month + $40 per seat
  details: No per-token price. SWE-2 is billed through a Devin plan's daily and weekly usage allowance, with extra usage at API pricing. Pro, Max and Teams get it free in Desktop and CLI through October 10, 2026.
highlights:
  - title: Frontier scores, 64% cheaper
    description: 50.0% on FrontierCode 1.1 Main, 73.0% on DeepSWE 1.1 and 92.8% on Terminal-Bench 2.1, ahead of Grok 4.6 and GPT-5.6 Sol on score and cost and within a few points of GPT-6 Astra at a quarter of the price.
    icon: zap
  - title: Starts editing sooner
    description: Medium effort makes its first real edit after a median of 18 steps against 48 for SWE-1.7, with 58% fewer turns and 81% lower cost per task.
    icon: cursor
  - title: Three effort levels from one RL run
    description: Medium, high and max are trained together with a cost penalty tuned to the Pareto frontier. Medium gets moving on simple tasks; high and max plan, explore and verify more.
    icon: sparkles
  - title: Built on Kimi K3
    description: Post-trained from the 2.8T-parameter Kimi K3, the first time Cognition scaled RL to multi-trillion parameters. The RL adds 5 to 6 points on many benchmarks.
    icon: cpu
createdAt: "2026-09-22"
---
