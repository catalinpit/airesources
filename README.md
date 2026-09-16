# airesources.dev

Repository for adding tools to airesources.dev

## Adding a new resource

1. Fork this repository
2. Add a new resource to the [`resources.ts`](./resources.ts) file
3. Push your changes
4. Create a pull request

## Publishing your AI stack

Anyone can publish the tools they use at `airesources.dev/stack/<handle>/`.

The easiest way is the builder at [airesources.dev/stack/new](https://airesources.dev/stack/new/): pick your tools, and it opens the stack file prefilled on GitHub; commit it and open the pull request from there.

To do it by hand, add `src/content/stacks/<handle>.json` (the file name becomes your URL; lowercase letters, digits and hyphens only):

```json
{
  "name": "Ada Lovelace",
  "bio": "One line about what you build.",
  "links": {
    "website": "https://example.com",
    "github": "octocat",
    "x": "octocat"
  },
  "updatedAt": "2026-09-16",
  "stack": [
    "coding-tools/cursor",
    { "resource": "coding-tools/claude-code", "note": "Why you use it, shown instead of the description." }
  ]
}
```

Each `stack` entry is a resource id: its path under `src/content/resources/` without the `.md` extension. Only `name` and `stack` are required; the avatar comes from `links.github` unless you set `avatar`. Unknown keys are rejected. Run `pnpm build` to check the file, then open a pull request.
