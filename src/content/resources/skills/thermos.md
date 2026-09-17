---
name: Thermos
description: Thermo-nuclear branch review for Cursor agents. Runs a deep correctness and security audit and a harsh maintainability audit as parallel subagents, then merges their findings into one verdict.
accessNote: "Ships as a Cursor plugin: run `/add-plugin thermos` to install the orchestrator, both review skills and their subagents. Each review skill also works on its own in any coding agent."
categorySlug: skills
link: "https://github.com/cursor/plugins/tree/main/thermos"
type: skill
tags:
  - code-review
  - security
  - code-quality
  - subagents
skill: |-
  ---
  name: thermos
  description: "Launch both thermo-nuclear review subagents in parallel, then synthesize their findings. Use for thermos, double thermo review, or combined bug/security and code-quality branch audits."
  disable-model-invocation: true
  ---

  # Thermos

  Run the two thermo review passes as async background subagents in parallel, then synthesize their results.

  ## Workflow

  1. Determine the review scope from the user request, PR, current branch, or relevant changed files.
  2. Gather the diff and any file/context excerpts needed for reviewers to evaluate the change without guessing.
  3. Launch both subagents in the same message with `run_in_background: true`:
     - `subagent_type: "thermo-nuclear-review-subagent"` for bugs, breakages, security, devex regressions, feature-flag leaks, and other branch-audit risks.
     - `subagent_type: "thermo-nuclear-code-quality-review-subagent"` for maintainability, structure, file-size growth, spaghetti, abstractions, and codebase-health risks.
  4. Pass each subagent the same scoped diff/file context and ask it to return prioritized findings with file references and evidence.
  5. After both finish, synthesize the results with findings first, deduplicated across reviewers. Weight overlapping findings more heavily, resolve disagreements with your own judgment, and keep summaries brief.

  If individual background summaries are already visible to the user, do not restate them wholesale. Surface the unified verdict, the highest-signal findings, and any remaining uncertainty.
example: |-
  /add-plugin thermos

  /thermos — both reviewers in parallel, findings deduplicated into one verdict
  /thermo-nuclear-review — correctness and security audit only
  /thermo-nuclear-code-quality-review — maintainability audit only
includes:
  - Thermo-Nuclear Review
  - Thermo-Nuclear Code Quality Review
author:
  name: Cursor
  link: "https://cursor.com"
  iconUrl: "https://github.com/cursor.png"
createdAt: "2026-09-17"
---
