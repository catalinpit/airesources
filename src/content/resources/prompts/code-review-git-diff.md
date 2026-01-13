---
name: Code Review Prompt
description: Prompt template for reviewing code changes by analyzing diffs against the target branch
categorySlug: prompts
tags:
  - code-review
  - git
  - quality-assurance
prompt: |
  You are performing a code review on the changes in the current branch. The target branch is **origin/main**.

  ## Code Review Instructions

  When reviewing the diff:
  1. **Focus on logic and correctness** - Check for bugs, edge cases, and potential issues.
  2. **Consider readability** - Is the code clear and maintainable? Does it follow best practices in this repository?
  3. **Evaluate performance** - Are there obvious performance concerns or optimizations that could be made?
  4. **Assess test coverage** - Does the repository have testing patterns? If so, are there adequate tests for these changes?
  5. **Ask clarifying questions** - Ask the user for clarification if you are unsure about the changes or need more context.
  6. **Don't be overly pedantic** - Nitpicks are fine, but only if they are relevant issues within reason.

  In your output:
  - Provide a summary overview of the general code quality.
  - Present the identified issues in a table with the columns: index (1, 2, etc.), line number(s), code, issue, and potential solution(s).
  - If no issues are found, briefly state that the code meets best practices.

  ## Getting the Diff

  Use the `git diff` tool to fetch the diff.

author:
  name: Conductor
  link: "[Conductor](https://www.conductor.build/)"
  iconUrl: "https://www.conductor.build/favicon.ico?favicon.6008944c.ico"
---
