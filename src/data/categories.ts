type Author = {
  name: string;
  link: string;
  iconUrl: string;
};

type CategoryItem = {
  name: string;
  description: string;
  link: string;
  iconUrl: string;
  author?: Author;
  previewImage?: string;
  type?: string;
  models?: string[];
  pricing?: {
    type: "free" | "paid" | "freemium" | "byok" | "top-up";
    tiers: {
      name: string;
      price: string;
    }[];
    details?: string;
  };
  sponsored?: "small" | "big";
};

type Category = {
  title: string;
  description: string;
  categorySlug: string;
  items: CategoryItem[];
};

export const categories: Category[] = [
  {
    title: "Coding Tools",
    description:
      "Development environments and tools optimized for AI development",
    categorySlug: "coding-tools",
    items: [
      // {
      //   name: "AI Studio Pro",
      //   description:
      //     "Advanced AI-powered development environment with integrated model training and deployment capabilities",
      //   link: "https://example.com/ai-studio-pro",
      //   iconUrl: "https://via.placeholder.com/64",
      //   type: "editor",
      //   sponsored: "big",
      //   models: ["GPT-4", "Claude 3", "Gemini Pro"],
      //   pricing: {
      //     type: "paid",
      //     tiers: [
      //       {
      //         name: "Pro",
      //         price: "$49/month",
      //       },
      //       {
      //         name: "Enterprise",
      //         price: "Custom",
      //       },
      //     ],
      //     details: "14-day free trial available",
      //   },
      // },
      {
        name: "Claude Code",
        description:
          "Anthropic's agentic coding tool that works directly in your terminal to build features, debug code, and automate development tasks",
        link: "https://claude.ai/code",
        iconUrl: "https://claude.ai/favicon.ico",
        type: "terminal",
        previewImage: "https://claude.ai/code-preview.png",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$17/month (annual) or $20/month (monthly)",
            },
            {
              name: "Max",
              price: "From $100/month per person",
            },
            {
              name: "API - Opus 4.5",
              price: "$5/$25 per 1M tokens (input/output)",
            },
            {
              name: "API - Sonnet 4.5",
              price: "$3/$15 per 1M tokens (≤200K) or $6/$22.50 (>200K)",
            },
            {
              name: "API - Haiku 4.5",
              price: "$1/$5 per 1M tokens (input/output)",
            },
            {
              name: "Enterprise",
              price: "Pay-as-you-go",
            },
          ],
          details:
            "Free tier includes chat on web, iOS, Android, and desktop. Pro includes more usage, Claude Code access, unlimited projects, Research access, Google Workspace integration, and extended thinking. Max includes 5x or 20x more usage than Pro, higher output limits, memory across conversations, and early access to advanced features. API pricing varies by model and prompt size. Prompt caching available for additional savings.",
        },
        models: [
          "Claude Sonnet 4.5",
          "Claude Haiku 4.5",
          "Claude Opus 4.5",
          "Claude Opus 4.1",
          "Claude Sonnet 4",
          "Claude Sonnet 3.7",
          "Claude Opus 4",
          "Claude Haiku 3.5",
        ],
      },
      {
        name: "Zed",
        description:
          "Next-generation code editor designed for high-performance collaboration with humans and AI",
        link: "https://zed.dev/",
        iconUrl:
          "https://zed.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_icon.d67dc948.webp&w=64&q=100",
        type: "editor",
        previewImage: "https://zed.dev/preview.png",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Personal",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$10/month",
            },
            {
              name: "Enterprise",
              price: "Contact us",
            },
          ],
          details:
            "Personal (free forever) includes 2,000 accepted edit predictions and unlimited use with your API keys or external agents like Claude Code. Pro includes unlimited edit predictions, $5 of tokens included, and usage-based billing beyond $5. Enterprise includes usage analytics, SSO, security & data privacy guarantees, shared billing, and premium support.",
        },
        models: [
          "Claude Opus 4.5",
          "Claude Opus 4.1",
          "Claude Sonnet 4.5",
          "Claude Sonnet 4",
          "Claude Sonnet 3.7",
          "Claude Haiku 4.5",
          "GPT-5",
          "GPT-5 mini",
          "GPT-5 nano",
          "Gemini 3.0 Pro",
          "Gemini 2.5 Pro",
          "Gemini 2.5 Flash",
          "Grok 4",
          "Grok 4 Fast",
          "Grok 4 (Non-Reasoning)",
          "Grok Code Fast 1",
        ],
      },
      {
        name: "Cursor",
        description: "AI-powered code editor with built-in AI assistance",
        link: "https://cursor.sh",
        iconUrl: "https://www.cursor.com/favicon.ico",
        type: "editor",
        previewImage: "https://cursor.sh/cursor-hero.png",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Hobby",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$20/month",
            },
            {
              name: "Pro+",
              price: "$60/month",
            },
            {
              name: "Ultra",
              price: "$200/month",
            },
            {
              name: "Team",
              price: "$40/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Hobby includes one-week Pro trial, limited Agent requests, and limited Tab completion. Pro includes extended limits on Agent, unlimited Tab completion, background Agent, and maximum context window. Pro+ includes 3x usage on all OpenAI, Claude, Gemini models. Ultra includes 20x usage on all models and priority access to new features. Team includes centralized billing, usage analytics, org-wide privacy controls, role-based access, and SAML/OIDC SSO.",
        },
        models: [
          "Claude 4 Opus",
          "Claude 4 Sonnet",
          "Claude 4 Sonnet 1M",
          "Claude 4.1 Opus",
          "Claude 4.5 Haiku",
          "Claude 4.5 Opus",
          "Claude 4.5 Sonnet",
          "Composer 1",
          "Deepseek R1 (05/28)",
          "Deepseek V3.1",
          "Gemini 2.5 Flash",
          "Gemini 3 Pro",
          "GPT 4.1",
          "GPT-5",
          "GPT-5 Fast",
          "GPT-5 Mini",
          "GPT-5 Nano",
          "GPT-5-Codex",
          "GPT-5-Pro",
          "GPT-5.1",
          "GPT-5.1 Codex",
          "GPT-5.1 Codex Mini",
          "Grok 4",
          "Grok 4 Fast",
          "Grok Code",
          "o3",
        ],
      },
      {
        name: "Windsurf IDE",
        description:
          "The first agentic IDE with AI flows and deep contextual awareness",
        link: "https://codeium.com/windsurf",
        iconUrl: "https://codeium.com/favicon.ico",
        type: "editor",
        previewImage: "https://codeium.com/windsurf-hero.png",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0/user/month",
            },
            {
              name: "Pro",
              price: "$15/user/month",
            },
            {
              name: "Teams",
              price: "$30/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free includes 25 prompt credits/month, basic model access, Fast Context trial access, unlimited Tab completions, unlimited inline edits, and Windsurf app previews. Pro includes everything in Free plus 500 prompt credits/month, all Premium Models, SWE-1.5 Model, full Fast Context access, and add-on credits at $10/250 credits. Teams includes everything in Pro plus 500 prompt credits/user/month, Windsurf Reviews, centralized billing, admin dashboard with analytics, priority support, automated zero data retention, and SSO available for +$10/user/month. Enterprise includes everything in Teams plus 1,000 prompt credits/user/month, Role-Based Access Control (RBAC), SSO + Access control features, and for orgs with 200+ users: highest priority support, dedicated account management, and hybrid deployment option.",
        },
        models: [
          "SWE-1.5",
          "SWE-1",
          "Claude Sonnet 4.5",
          "Claude Sonnet 4.5 (Thinking)",
          "Claude Haiku 4.5",
          "Claude Opus 4.1",
          "Claude Opus 4.1 Thinking",
          "Claude Sonnet 4",
          "Claude Sonnet 4 (Thinking)",
          "Claude 3.7 Sonnet",
          "Claude 3.7 Sonnet (Thinking)",
          "Claude 3.5 Sonnet",
          "Claude 4 Opus",
          "Claude 4 Opus (Thinking)",
          "GPT-5.1 (no reasoning)",
          "GPT-5.1 (low reasoning)",
          "GPT-5.1 (medium reasoning)",
          "GPT-5.1 (high reasoning)",
          "GPT-5.1 (no reasoning, high priority)",
          "GPT-5.1 (low reasoning, high priority)",
          "GPT-5.1 (medium reasoning, high priority)",
          "GPT-5.1 (high reasoning, high priority)",
          "GPT-5.1-Codex",
          "GPT-5.1-Codex Mini",
          "GPT-5 (low reasoning)",
          "GPT-5 (medium reasoning)",
          "GPT-5 (high reasoning)",
          "GPT-5-Codex",
          "GPT-4.1",
          "GPT-4o",
          "o3",
          "o3 (high reasoning)",
          "Gemini 2.5 Pro",
          "xAI Grok Code Fast",
          "Kimi K2",
          "Qwen3-Coder Fast",
          "Qwen3-Coder",
          "DeepSeek-V3-0324",
          "DeepSeek-R1",
          "gpt-oss 120B (Medium)",
        ],
      },
      {
        name: "Warp",
        description:
          "The agentic command line that can perform any coding task for you",
        link: "https://www.warp.dev/?utm_source=ai-resources-dev&ref=airesources.dev",
        iconUrl: "https://www.warp.dev/favicon.png",
        type: "terminal",
        previewImage: "https://www.warp.dev/preview.png",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0/month",
            },
            {
              name: "Build",
              price: "$20/month",
            },
            {
              name: "Business",
              price: "$50/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free includes free AI credits, limited access to frontier OpenAI, Anthropic, and Google models, limited codebase indexing, state-of-the-art modern terminal, and individually configured Zero Data Retention. Build includes everything in Free plus 1,500 AI credits per month, cloud agents via Slack and Linear, access to Reload credits and volume-based discounts, bring your own API key, highest codebase indexing limits, unlimited Warp Drive objects and collaboration, and private email support. Business includes everything in Build plus 1,500 AI credits per month, SOC 2 compliance, automatically enforced team-wide Zero Data Retention, and SAML-based SSO (up to 50 seats). Enterprise includes everything in Business plus custom compute environments, dedicated account manager, white-glove onboarding, and bring your own LLM.",
        },
        models: [
          "GPT-5 (low reasoning)",
          "GPT-5 (medium reasoning)",
          "GPT-5 (high reasoning)",
          "GPT-5.1 (low reasoning)",
          "GPT-5.1 (medium reasoning)",
          "GPT-5.1 (high reasoning)",
          "Claude Sonnet 4.5",
          "Claude Opus 4.1",
          "Claude Haiku 4.5",
          "Claude Sonnet 4",
          "Gemini 3 Pro",
          "Gemini 2.5 Pro",
          "GLM 4.6 (US hosted)",
        ],
      },
      {
        name: "Aider",
        description:
          "Open-source AI pair programming tool that runs in your terminal and works with most LLMs",
        link: "https://aider.chat/",
        iconUrl: "https://aider.chat/assets/logo.svg",
        type: "terminal",
        pricing: {
          type: "byok",
          tiers: [
            {
              name: "BYOK",
              price: "Bring your own API key",
            },
          ],
          details:
            "Free tool that requires your own API keys for LLM providers. Approximately $0.007 per file processed. Very cost-effective at ~$100/year for typical usage.",
        },
        models: [
          "Claude 3.7 Sonnet",
          "DeepSeek R1",
          "DeepSeek Chat V3",
          "OpenAI o1",
          "o3-mini",
          "GPT-4o",
          "Local models via Ollama",
          "Most LLM APIs",
        ],
      },
      {
        name: "Augment Code",
        description:
          "AI coding platform with industry-leading context engine and AI agent for large codebases",
        link: "https://www.augmentcode.com/",
        iconUrl: "https://www.augmentcode.com/favicon.ico",
        type: "editor",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Indie",
              price: "$20/month",
            },
            {
              name: "Standard",
              price: "$60/month",
            },
            {
              name: "Max",
              price: "$200/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Indie includes 40,000 credits, Context Engine, MCP & Native Tools, unlimited Next Edits & Completions, SOC 2 type II, auto top-up credits $15/24,000, and no AI training allowed. Standard includes everything in Indie plus 130,000 credits and auto top-up credits available. Max includes everything in Standard plus 450,000 credits. Enterprise includes custom user pricing, bespoke credit limit, Slack integration, volume-based annual discounts, SSO/OIDC/SCIM support, SOC 2 & Security Reports, CMEK & ISO42001 compliance, dedicated support, and no AI training allowed.",
        },
        models: [
          "Claude Haiku 4.5",
          "Claude Sonnet 4",
          "Claude Sonnet 4.5",
          "GPT-5",
        ],
      },
      {
        name: "RepoPrompt",
        description:
          "macOS native app for AI-assisted coding with advanced file selection, token estimation, and model delegation",
        link: "https://repoprompt.com/",
        iconUrl: "https://repoprompt.com/images/RepoPromptLogo_NoBG.png",
        type: "editor",
        pricing: {
          type: "paid",
          tiers: [
            {
              name: "Monthly",
              price: "$14.99/month",
            },
            {
              name: "Yearly",
              price: "$99/year",
            },
            {
              name: "Buy-to-own",
              price: "$249",
            },
            {
              name: "Team",
              price: "From $14.99/mo per seat",
            },
          ],
          details:
            "Monthly subscription includes 1-week free trial, all updates during subscription, and flexible billing. Yearly subscription ($99/year, regular $150) includes all updates and saves 2 months compared to monthly. Buy-to-own ($249, regular $349) includes lifetime access, all future updates, and is for individuals only. Team licenses include managed seats with centralized billing and volume discounts available.",
        },
        models: [
          "Multiple LLM providers",
          "OpenAI models",
          "Anthropic models",
          "Local models",
        ],
      },
      {
        name: "Crystal",
        description:
          "Run multiple Claude Code AI sessions in parallel git worktrees. Manage, inspect, test, and compare different AI-assisted development approaches in one desktop app",
        link: "https://github.com/stravu/crystal",
        iconUrl: "https://github.com/stravu.png",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "PearAI",
        description:
          "An open source fork of VS Code with chat and inline code generation",
        link: "https://trypear.ai/",
        iconUrl: "https://trypear.ai/favicon.ico",
        type: "editor",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Intern",
              price: "Free",
            },
            {
              name: "Maker",
              price: "$15/month",
            },
            {
              name: "Enterprise",
              price: "Contact Us",
            },
          ],
          details:
            "Intern includes free trial, use your own API key or local models, Community Discord server, and macOS (Silicon) support. Maker includes full access to PearAI Router & Hosted Servers, monthly refill of $15 credits for market-leading AI models, full privacy with zero data retention policy with Anthropic, direct customer support by founders and contributors, and pay-as-you-go for additional credits. Enterprise includes monthly refill of increased PearAI Credits, zero data retention policy with Anthropic, centralized billing and dashboard, direct customer support by founders and contributors, and bulk purchase discounts.",
        },
      },
      {
        name: "Melty",
        description:
          "An open source fork of VS Code with built in chat, change previews, and ability to write commits with AI",
        link: "https://melty.sh/",
        iconUrl: "https://melty.sh/favicon.ico",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Replit",
        description:
          "Web-based IDE with cloud developer environments, code completion, chat, a software development agent and deployments",
        link: "https://replit.com/",
        iconUrl: "https://replit.com/favicon.ico",
        type: "editor",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Starter",
              price: "Free",
            },
            {
              name: "Core",
              price: "$20/month (annual) or $25/month",
            },
            {
              name: "Teams",
              price: "$35/user/month (annual) or $40/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Starter includes Replit Agent trial, 10 development apps (with temporary links), public apps only, and limited build time without long full autonomy. Core includes $25 monthly credits, a personal workspace, full Agent access, create apps & automations, autonomous app testing, and connectors. Teams includes everything in Core plus $40 monthly credits, credits granted upfront on annual plan, centralized billing, role-based access control, and private deployments. Enterprise includes custom credit allowance, everything in Teams, custom Viewer Seats, SSO/SAML, SCIM, advanced privacy controls, and SOC 2 & SSO.",
        },
        models: ["OpenAI", "replit-code-v1-3b"],
      },
      {
        name: "Mutable",
        description: "Web-based IDE, integrated with a chatbot and GitHub",
        link: "https://github.com/mutableai/monitors4codegen",
        iconUrl: "https://github.com/mutableai.png",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "CodeStory",
        description:
          "An IDE with chat, code explanations, auto-generated commits and PR summaries. Forked from VSCodium",
        link: "https://codestory.ai/",
        iconUrl: "https://www.google.com/s2/favicons?domain=codestory.ai&sz=64",
        type: "editor",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "UI Pilot",
        description:
          "Chat-based AI code editor that creates forms using Material UI, using GPT-4",
        link: "https://ui-pilot.com/",
        iconUrl: "https://ui-pilot.com/favicon.ico",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["GPT-4"],
      },
      {
        name: "GitWit",
        description:
          "Web-based editor for building ReactJS applications with AI",
        link: "https://gitwit.dev/",
        iconUrl: "https://gitwit.dev/favicon.ico",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source AI-native coding platform",
        },
      },
      {
        name: "Theia IDE",
        description:
          "An extensible open-source IDE (web and desktop) providing AI-powered features like chat, code completion, terminal assistance and custom agents using arbitrary LLMs",
        link: "https://theia-ide.org/#theiaide",
        iconUrl: "https://github.com/eclipse-theia.png",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "OneCompiler",
        description:
          "A free AI Powered online compiler supporting over 70 languages, including Java, Python, MySQL, C++, and HTML, for writing, running, and sharing code",
        link: "https://onecompiler.com/",
        iconUrl: "https://onecompiler.com/favicon.ico",
        type: "editor",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "trae",
        description:
          "Trae is an adaptive AI IDE that transforms how you work, collaborating with you to run faster",
        link: "https://www.trae.ai/",
        iconUrl: "https://www.google.com/s2/favicons?domain=trae.ai&sz=64",
        type: "editor",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier includes 1,000 requests of Advanced models/month and 5,000 Autocomplete/month. Pro includes unlimited requests of Advanced models, unlimited Autocomplete, and 300 bonus Fast requests/month (limited-time offer).",
        },
        models: ["Advanced models", "Fast models"],
      },
    ],
  },
  {
    title: "Git Clients",
    description: "AI-powered Git clients and version control tools",
    categorySlug: "git-clients",
    items: [
      {
        name: "GitBrain",
        description:
          "Git client that simplifies the git workflow. Splits code changes, generates summaries & commit messages for code changes",
        link: "https://gitbrain.dev/",
        iconUrl: "https://gitbrain.dev/favicon.ico",
        type: "git-client",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["OpenAI"],
      },
      {
        name: "GitButler",
        description:
          "Git client for simultaneous branches on top of your existing workflow. Defaults to OpenAI, can be changed to Perplexity for generating conventional commit messages",
        link: "https://gitbutler.com/",
        iconUrl: "https://gitbutler.com/favicon.ico",
        type: "git-client",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["OpenAI", "Perplexity"],
      },
    ],
  },
  {
    title: "Terminals",
    description: "Modern terminal emulators with AI capabilities",
    categorySlug: "terminals",
    items: [
      {
        name: "Wave",
        description:
          "Open-source terminal with superpowers, integrating file previews, file editing, AI, web browsing, and workspace organization",
        link: "https://www.waveterm.dev",
        iconUrl:
          "https://github.com/wavetermdev/waveterm/blob/main/assets/waveterm-logo-with-bg.png?raw=true",
        type: "terminal",
        previewImage:
          "https://raw.githubusercontent.com/wavetermdev/waveterm/refs/heads/main/assets/waveterm-logo-with-bg.ico",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source terminal, free to use",
        },
        models: [
          "Claude 3.5 Sonnet",
          "Ollama Llama 3.2",
          "Azure GPT-4",
          "Perplexity Sonar",
          "Gemini 2.0",
        ],
      },
      {
        name: "AskCommand",
        description:
          "Web based tool to generate Unix commands from text automatically using AI",
        link: "https://www.askcommand.cppexpert.online/",
        iconUrl:
          "https://www.google.com/s2/favicons?domain=askcommand.cppexpert.online&sz=64",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Butterfish",
        description:
          "CLI tool that embeds ChatGPT in your shell for easy access. Includes simple agentic capabilities",
        link: "https://butterfi.sh",
        iconUrl: "https://butterfi.sh/favicon.ico",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source CLI tool, free to use",
        },
        models: ["ChatGPT"],
      },
      {
        name: "Shell Whiz",
        description:
          "Highly configurable CLI assistant to generate shell commands and get explanations for them",
        link: "https://github.com/beimzhan/shell-whiz",
        iconUrl: "https://github.com/favicon.ico",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "GitFluence",
        description:
          "Web-based Git command generator to automatically generate Git commands for terminal or CLI from text description, using an AI-driven solution",
        link: "https://www.gitfluence.com/",
        iconUrl: "https://www.gitfluence.com/favicon.ico",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "AutoComplete.sh",
        description:
          "CLI tool that adds AI-powered command-line suggestions directly to your terminal with just type <TAB><TAB> to return the top suggestions",
        link: "https://github.com/closedLoop-technologies/autocomplete-sh",
        iconUrl: "https://github.com/closedLoop-technologies.png",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "code-collator",
        description:
          "CLI tool that creates a single markdown file that describes your entire codebase to language models. Useful for AI-coding assistance from the Claude/ChatGPT web interface",
        link: "https://github.com/tawandakembo/code-collator",
        iconUrl: "https://github.com/favicon.ico",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "TmuxAI",
        description: "AI-powered, non-intrusive terminal assistant",
        link: "https://tmuxai.dev/",
        iconUrl: "https://tmuxai.dev/favicon.ico",
        type: "terminal",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source terminal assistant",
        },
      },
    ],
  },
  {
    title: "Extensions",
    description: "AI-powered extensions and plugins for your favorite editors",
    categorySlug: "extensions",
    items: [
      {
        name: "GitHub Copilot",
        description: "AI pair programmer that works in your editor",
        link: "https://github.com/features/copilot",
        iconUrl: "https://github.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$10/month or $100/year",
            },
            {
              name: "Business",
              price: "$39/month or $390/year",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes 50 agent mode or chat requests per month and 2,000 completions per month. Pro includes unlimited agent mode and chat with GPT-5 mini, unlimited code completion, access to code review, Claude Sonnet 4/4.5, GPT-5, Gemini 2.5 Pro, and 300 premium requests. Free for verified students, teachers, and maintainers of popular open source projects. 30-day free trial available.",
        },
        models: [
          "GPT-5 mini",
          "GPT-5",
          "Claude Sonnet 4",
          "Claude Sonnet 4.5",
          "Gemini 2.5 Pro",
          "Codex",
          "GPT-4",
          "GPT-4o",
          "Claude 3.5 Sonnet",
        ],
      },
      {
        name: "Cline",
        description:
          "Open-source collaborative AI coding agent with frontier model access",
        link: "https://cline.bot",
        iconUrl:
          "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cline.png",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Open Source",
              price: "$0",
            },
            {
              name: "Teams",
              price: "Contact for pricing",
            },
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Open source version available for free. Teams and Enterprise plans include additional features and support.",
        },
        models: [
          "GPT-4",
          "Claude 3",
          "Gemini Pro",
          "OpenRouter models",
          "Anthropic models",
          "OpenAI models",
          "Google models",
          "AWS Bedrock",
          "Azure",
          "GCP Vertex",
        ],
      },
      {
        name: "Zencoder AI",
        description: "AI code completion and refactoring assistant",
        link: "https://zencoder.ai",
        iconUrl: "https://zencoder.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Starter",
              price: "Contact for pricing",
            },
            {
              name: "Core",
              price: "Contact for pricing",
            },
            {
              name: "Advanced",
              price: "Contact for pricing",
            },
            {
              name: "Max",
              price: "Contact for pricing",
            },
          ],
        },
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Sourcegraph Cody",
        description: "AI code assistant powered by semantic code search",
        link: "https://about.sourcegraph.com/cody",
        iconUrl: "https://sourcegraph.com/favicon.ico",
        type: "extension",
        models: ["Claude 3", "GPT-4"],
      },
      {
        name: "Supermaven",
        description:
          "The fastest copilot with a 1 million token context window, 3x faster than competitors, and built-in chat interface for GPT-4 and Claude 3",
        link: "https://supermaven.com",
        iconUrl: "https://supermaven.com/favicon-32x32.png",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
            {
              name: "Team",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier includes fast code suggestions and works with large codebases. Pro includes adapts to your coding style, 1 million token context window, largest most intelligent model, and $5/month in Supermaven Chat credit. 30-day free trial available.",
        },
        models: ["GPT-4o", "GPT-4", "Claude 3"],
      },
      {
        name: "Tabnine",
        description: "AI code completion tool supporting multiple languages",
        link: "https://www.tabnine.com",
        iconUrl: "https://www.tabnine.com/favicon.ico",
        type: "extension",
        models: ["Tabnine Pro", "Tabnine Enterprise"],
      },
      {
        name: "Amazon Q",
        description:
          "AI-powered developer tool that helps you code faster and more securely",
        link: "https://aws.amazon.com/q/developer/",
        iconUrl: "https://aws.amazon.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$19/month",
            },
          ],
          details:
            "Free tier includes basic features with limits: 50 chat interactions, 10 agent invocations, 1,000 lines of code transformation per month. Pro includes unlimited usage, enterprise access controls, and IP indemnity.",
        },
        models: ["Amazon Q"],
      },
      {
        name: "JetBrains AI Assistant",
        description: "AI coding assistant integrated into JetBrains IDEs",
        link: "https://www.jetbrains.com/ai/",
        iconUrl: "https://www.jetbrains.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$10/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes basic AI features. Pro includes advanced AI features, unlimited usage, and priority support.",
        },
        models: [
          "GPT-4",
          "Claude 3 Opus",
          "Claude 3 Sonnet",
          "Claude 3 Haiku",
          "Gemini 1.5 Pro",
          "CodeLlama 70B",
          "CodeLlama 34B",
          "CodeLlama 13B",
          "CodeLlama 7B",
          "StarCoder 2",
          "StarCoder 1",
          "Phi-2",
          "Phi-1.5",
          "Phi-1",
          "Ollama Models",
          "LM Studio Models",
        ],
      },
      {
        name: "Neocodeium",
        description:
          "Free AI code completion plugin for Neovim powered by Windsurf, eliminating suggestion flickering",
        link: "https://github.com/monkoose/neocodeium",
        iconUrl: "https://github.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details:
            "Free plugin but uses Windsurf servers for completions. Requires Neovim 0.10.0+.",
        },
        models: ["Windsurf AI models"],
      },
      {
        name: "Cmp-AI",
        description:
          "AI-powered code completion source for nvim-cmp with support for multiple AI providers",
        link: "https://github.com/tzachar/cmp-ai",
        iconUrl: "https://github.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "byok",
          tiers: [
            {
              name: "BYOK",
              price: "Bring your own API key",
            },
          ],
          details:
            "Free plugin that requires API keys for AI providers. Supports multiple providers with flexible configuration.",
        },
        models: [
          "HuggingFace models",
          "OpenAI GPT-3.5",
          "OpenAI GPT-4",
          "Codestral",
          "Google Bard",
          "Ollama",
          "Tabby",
        ],
      },
      {
        name: "Avante.nvim",
        description:
          "Neovim plugin that emulates Cursor AI IDE with AI-powered code suggestions and one-click application",
        link: "https://github.com/yetone/avante.nvim",
        iconUrl: "https://github.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "byok",
          tiers: [
            {
              name: "BYOK",
              price: "Bring your own API key",
            },
          ],
          details:
            "Free plugin that requires API keys for AI providers. Supports multiple AI providers with configurable settings.",
        },
        models: [
          "Claude (Anthropic)",
          "OpenAI GPT models",
          "Azure OpenAI",
          "Google Gemini",
          "GitHub Copilot",
          "Local models",
        ],
      },
      {
        name: "Refact AI",
        description:
          "Open source assistant with chat, completion, refactoring, and codebase-specific fine-tuning. Extensions for VS Code and JetBrains",
        link: "https://refact.ai/",
        iconUrl: "https://refact.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Continue",
        description:
          "VS Code extension with chat, refactor, and code generation. Edits multiple files and runs commands on your behalf",
        link: "https://continue.dev/",
        iconUrl: "https://continue.dev/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Blackbox AI",
        description:
          "VS Code extension with autocomplete and chat including links to online coding references",
        link: "https://www.useblackbox.io/",
        iconUrl: "https://www.useblackbox.io/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
            {
              name: "Pro Plus",
              price: "Contact for pricing",
            },
            {
              name: "Unlimited",
              price: "Contact for pricing",
            },
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier available. Pro, Pro Plus, Unlimited, and Enterprise plans available with monthly and yearly billing options.",
        },
      },
      {
        name: "CodeGeeX",
        description:
          "Open source assistant based on the CodeGeeX LLM with chat, completion, and refactoring. Extensions for 9 editors including VS Code, and PyCharm",
        link: "https://codegeex.cn/",
        iconUrl: "https://codegeex.cn/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["CodeGeeX LLM"],
      },
      {
        name: "Quack AI",
        description:
          "VS Code extension for adhering to project coding guidelines",
        link: "https://www.quackai.com/",
        iconUrl: "https://www.quackai.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source VS Code extension for team alignment",
        },
      },
      {
        name: "Tabby",
        description:
          "Open source, self-hosted code completion assistant. Extensions for VS Code and Vim",
        link: "https://tabbyml.github.io/tabby/",
        iconUrl: "https://tabbyml.github.io/tabby/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "CodeMate",
        description: "VS Code extension for debugging and optimizing code",
        link: "https://www.codemate.ai/",
        iconUrl: "https://www.codemate.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier available. Pro and Enterprise plans available with features like seat management, knowledge base sharing, advanced ML models, own API key, debug/review/refactor code, internet search, search & chat with documentation & codebase, and generate unit/functional test cases.",
        },
      },
      {
        name: "AskCodi",
        description:
          "AI coding assistant with extensions for VS Code, JetBrains and Sublime Text",
        link: "https://www.askcodi.com/",
        iconUrl: "https://www.askcodi.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "OpenAI-compatible API with custom models. Free tier available. Pro plans available.",
        },
      },
      {
        name: "Rubberduck",
        description:
          "Open source, chat assistant for the Visual Studio Code side bar",
        link: "https://github.com/rubberduck-ai/rubberduck-vscode",
        iconUrl: "https://github.com/rubberduck-ai.png",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "CodeComplete",
        description: "Self hosted, enterprise completion assistant",
        link: "https://codecomplete.ai/",
        iconUrl: "https://codecomplete.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "paid",
          tiers: [
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details: "Currently on waitlist. Enterprise self-hosted solution.",
        },
      },
      {
        name: "GoCodeo",
        description:
          "GoCodeo is an AI agent that lets you build and deploy full-stack apps effortlessly, with one click Vercel deployment and seamless Supabase integration",
        link: "https://www.gocodeo.com/",
        iconUrl: "https://www.gocodeo.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Hobby",
              price: "$0",
            },
            {
              name: "Starter",
              price: "Contact for pricing",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Hobby includes 50 premium model requests/month, 1000 autocompletions, 100 basic model requests, 5 deployments, and MCP integration. Starter includes 200 premium model requests/month, 4000 autocompletions, 400 basic model requests, and 50 deployments. Pro includes 500 premium model requests/month, 10 Claude 4 Sonnet requests/day, unlimited autocompletions, unlimited basic model requests, and 100 deployments/month.",
        },
      },
      {
        name: "aiXcoder",
        description:
          "Local or cloud-based assistant with extensions for IntelliJ IDEA, CLion, GoLand, PyCharm, WebStorm, Visual Studio Code, and Eclipse",
        link: "https://www.aixcoder.com/en/",
        iconUrl: "https://www.aixcoder.com/en/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier available. Pro plans available for cloud-based features.",
        },
      },
      {
        name: "Sourcery",
        description:
          "AI assistant and linter with a reference of 160 Python best practices and 40+ JS/TS best practices. Extensions for VS Code, PyCharm, vim and Sublime",
        link: "https://sourcery.ai/",
        iconUrl: "https://sourcery.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
            {
              name: "Team",
              price: "Contact for pricing",
            },
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
            {
              name: "Resilience Plus",
              price: "Contact for pricing",
            },
            {
              name: "Enterprise Uptime",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier includes monitoring Sentry.io issues, AI investigation and code fixes, 20 Sentry issues per month. Pro includes code review and security production issues. Team includes everything in Pro plus repo analytics, security scans for 200+ repos, unlimited security issues, daily security scans, 3x code review rate limit, and bring your own LLM. Resilience Plus includes up to 200 issues per month, fully automated AI code fixes, and Slack integration. Enterprise includes everything in Team plus self-hosting option, priority support, customer success manager, and invoice billing.",
        },
      },
      {
        name: "Swimm",
        description:
          "Assistant for contextual code understanding using static analysis and AI generated documentation. VSCode, Jetbrains, IntelliJ, WebStorm, Rider, PhpStorm, Android Studio, PyCharm, PhPStorm",
        link: "https://swimm.io",
        iconUrl: "https://swimm.io/favicon.ico",
        type: "extension",
        pricing: {
          type: "paid",
          tiers: [
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Enterprise pricing available. Contact for demo and pricing information.",
        },
      },
      {
        name: "Android Studio Bot",
        description:
          "Studio Bot is an AI powered coding assistant that is tightly integrated in Android Studio. Studio Bot can help Android developers generate code, find relevant resources, learn best practices, and save time",
        link: "https://developer.android.com/studio/preview/studio-bot",
        iconUrl: "https://developer.android.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Free AI assistant integrated in Android Studio",
        },
      },
      {
        name: "IBM watsonx Code Assistant for Z",
        description:
          "watsonx Code Assistant for Z is an AI-powered mainframe application modernization product with code generation. Features include application discovery and analysis, automated code refactoring and COBOL to Java conversion",
        link: "https://www.ibm.com/products/watsonx-code-assistant-z",
        iconUrl: "https://www.ibm.com/favicon.ico",
        type: "extension",
        pricing: {
          type: "paid",
          tiers: [
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Enterprise solution for mainframe modernization. Contact IBM for pricing.",
        },
      },
      {
        name: "EasyCode",
        description: "VS Code extension with GPT-4 chat",
        link: "https://www.easycode.ai/",
        iconUrl: "https://www.easycode.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
        models: ["GPT-4"],
      },
      {
        name: "Kilo Code",
        description:
          "Open Source AI coding assistant for planning, building, and fixing code inside VS Code",
        link: "https://kilocode.ai",
        iconUrl: "https://kilocode.ai/favicon.ico",
        type: "extension",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Chat Bots",
    description: "AI-powered chat interfaces and assistants",
    categorySlug: "chat-bots",
    items: [
      {
        name: "ChatGPT",
        description:
          "OpenAI's powerful language model for natural conversations and assistance",
        link: "https://chat.openai.com/",
        iconUrl: "https://chat.openai.com/favicon.ico",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Plus",
              price: "$20/month",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
            {
              name: "Business",
              price: "$30/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes basic ChatGPT access. Plus includes GPT-4 access, image creation, and more. Pro includes unlimited GPT-5.1 messages, generous access to GPT-5.1 thinking, and access to GPT-5.1 pro. Business includes business features like data analysis, record mode, canvases, shared projects, tasks, and custom workspace GPT. Enterprise includes advanced admin controls, SSO, and priority support.",
        },
        models: [
          "GPT-5.1",
          "GPT-5.1 thinking",
          "GPT-5.1 pro",
          "GPT-4",
          "GPT-3.5",
        ],
      },
      {
        name: "Claude",
        description:
          "Anthropic's advanced AI assistant with strong analytical and creative capabilities",
        link: "https://claude.ai/",
        iconUrl: "https://claude.ai/favicon.ico",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$20/month",
            },
            {
              name: "Team",
              price: "$30/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes basic Claude access. Pro includes more usage, Claude Code access, unlimited projects, Research access, Google Workspace integration, extended thinking, and access to more Claude models. Team includes everything in Pro plus team collaboration features.",
        },
        models: [
          "Claude 4 Sonnet",
          "Claude 3.7 Sonnet",
          "Claude 3.5 Sonnet",
          "Claude 3 Opus",
          "Claude 3 Haiku",
          "Claude 2",
        ],
      },
      {
        name: "Perplexity",
        description:
          "AI-powered search engine that combines real-time information with conversational AI",
        link: "https://www.perplexity.ai/",
        iconUrl: "https://www.perplexity.ai/favicon.ico",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$20/month",
            },
            {
              name: "Max",
              price: "$200/month",
            },
          ],
          details:
            "Free tier includes basic search. Pro includes 10x more citations, Perplexity Lab access, unlimited file and photo uploads, extended Research access, extended image generation, limited video generation, and access to latest AI models including GPT-5 and Claude Sonnet 4. Max includes everything in Pro plus early access to newest products, unlimited Lab and Research access, unlimited access to advanced AI models like o3-pro, enhanced video generation, and priority support.",
        },
        models: [
          "GPT-5",
          "GPT-4",
          "Claude Sonnet 4",
          "Claude 3",
          "Gemini Pro",
          "o3-pro",
        ],
      },
      {
        name: "Google AI Studio",
        description:
          "Google's platform for experimenting with and building AI applications",
        link: "https://aistudio.google.com/welcome",
        iconUrl: "https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Paid",
              price: "Pay-as-you-go",
            },
          ],
          details:
            "Free tier available with usage limits. Pay-as-you-go pricing for API usage.",
        },
        models: [
          "Gemini Pro",
          "Gemini Ultra",
          "Gemini 2.0",
          "Gemini 1.5 Pro",
          "Gemini 1.5 Flash",
        ],
      },
      {
        name: "TypingMind",
        description:
          "A better UI for ChatGPT with features like chat history, prompt templates, and more",
        link: "https://www.typingmind.com/",
        iconUrl: "https://www.typingmind.com/favicon.ico",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Lifetime License",
              price: "One-time payment",
            },
          ],
          details:
            "Free tier available. Lifetime license available for one-time payment.",
        },
        models: [
          "GPT-4",
          "GPT-3.5",
          "Claude 3",
          "Claude 2",
          "Gemini Pro",
          "Llama",
        ],
      },
      {
        name: "T3 Chat",
        description: "A modern chat interface for interacting with AI models",
        link: "https://t3.chat/chat",
        iconUrl: "https://t3.chat/favicon.ico",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$8/month",
            },
          ],
        },
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Fyzz Chat",
        description: "Chat with the best AI models in one place",
        link: "https://www.fyzz.chat/chat",
        iconUrl: "https://www.fyzz.chat/icon-192x192.png",
        type: "chat",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details:
            "Free tier includes limited requests per day. Premium plans available.",
        },
        models: [
          "GPT",
          "Claude 4",
          "Gemini Pro",
          "Grok 3",
          "DeepSeek",
          "Perplexity",
          "Llama",
        ],
      },
    ],
  },
  {
    title: "Courses & Learning",
    description: "Educational resources to learn about AI and machine learning",
    categorySlug: "courses",
    items: [
      {
        name: "Fast.ai",
        description: "Practical deep learning for coders",
        link: "https://www.fast.ai",
        iconUrl: "https://www.fast.ai/favicon.ico",
        models: ["Custom Models", "PyTorch"],
      },
      {
        name: "DeepLearning.AI",
        description: "Comprehensive AI and machine learning courses",
        link: "https://www.deeplearning.ai",
        iconUrl: "https://www.deeplearning.ai/favicon.ico",
        models: ["TensorFlow", "PyTorch", "Keras"],
      },
      {
        name: "Coursera Machine Learning",
        description: "Stanford's machine learning course",
        link: "https://www.coursera.org/learn/machine-learning",
        iconUrl: "https://www.coursera.org/favicon.ico",
        models: ["Octave", "MATLAB"],
      },
      {
        name: "Hugging Face Course",
        description: "Learn about transformers and NLP",
        link: "https://huggingface.co/course",
        iconUrl: "https://huggingface.co/favicon.ico",
        models: ["Transformers", "PyTorch", "TensorFlow"],
      },
      {
        name: "MIT OpenCourseWare",
        description: "Free AI and machine learning courses",
        link: "https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science",
        iconUrl: "https://ocw.mit.edu/favicon.ico",
        models: ["Python", "TensorFlow", "PyTorch"],
      },
      {
        name: "Udacity AI Nanodegree",
        description: "Comprehensive AI program with industry projects",
        link: "https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Udacity_logo.png",
        models: ["TensorFlow", "PyTorch", "Keras"],
      },
      {
        name: "Deep Learning Book",
        description: "The definitive textbook on deep learning",
        link: "https://www.deeplearningbook.org",
        iconUrl: "https://www.deeplearningbook.org/favicon.ico",
        models: ["Theoretical Models", "Mathematical Foundations"],
      },
      {
        name: "Principled AI Coding",
        description:
          "IndyDevDan's comprehensive course on AI coding principles, covering the Big Three: Context, Prompt, and Model",
        link: "https://agenticengineer.com/principled-ai-coding",
        iconUrl: "https://agenticengineer.com/favicon.ico",
        pricing: {
          type: "paid",
          tiers: [
            {
              name: "Full Course",
              price: "$299",
            },
          ],
          details:
            "6 hours of content across 8 lessons (beginner to advanced). Lifetime access with updates. No-questions-asked refund before lesson four.",
        },
        models: [
          "OpenAI models",
          "Anthropic models",
          "Aider",
          "Various AI tools",
        ],
      },
    ],
  },
  {
    title: "Posts",
    description: "Blog, newsletter and social media posts related to AI",
    categorySlug: "posts",
    items: [
      {
        name: "Vibing a Non-Trivial Ghostty Feature",
        description:
          "In this post, Mitchell Hashimoto writes about his process of implementing a difficult feature to Ghostty using AI.",
        link: "https://mitchellh.com/writing/non-trivial-vibing",
        iconUrl: "https://mitchellh.com/static/favicons/favicon-32x32.png",
        type: "post",
        author: {
          name: "Mitchell Hashimoto",
          link: "https://x.com/mitchellh",
          iconUrl:
            "https://pbs.twimg.com/profile_images/1141762999838842880/64_Y4_XB_400x400.jpg",
        },
      },
    ],
  },
  {
    title: "People",
    description: "Influential figures in AI and technology",
    categorySlug: "people",
    items: [
      {
        name: "Simon Willison",
        description:
          "Creator of Datasette, co-creator of Django, and prolific AI experimenter",
        link: "https://x.com/simonw",
        iconUrl:
          "https://pbs.twimg.com/profile_images/378800000261649705/be9cc55e64014e6d7663c50d7cb9fc75_400x400.jpeg",
        type: "person",
      },
      {
        name: "Andrew Ng",
        description:
          "Co-founder of Coursera and DeepLearning.AI, leading AI educator and researcher",
        link: "https://x.com/AndrewYNg",
        iconUrl:
          "https://pbs.twimg.com/profile_images/733174243714682880/oyG30NEH_400x400.jpg",
        type: "person",
      },
      {
        name: "Andrej Karpathy",
        description:
          "Former Director of AI at Tesla, founder of Karpathy.ai, and influential AI researcher",
        link: "https://x.com/karpathy",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg",
        type: "person",
      },
    ],
  },
  {
    title: "Code Review",
    description: "AI-powered tools for code review and PR agents",
    categorySlug: "code-review",
    items: [
      {
        name: "CodeRabbit",
        description:
          "CodeRabbit is an AI-powered code review tool that automates the code review process, providing context-aware feedback on pull requests within minutes.",
        link: "https://www.coderabbit.ai/",
        iconUrl: "https://www.coderabbit.ai/favicon.ico",
        type: "code-review",
        models: ["Custom models"],
      },
      {
        name: "Graphite",
        description:
          "Graphite is a pull-request toolchain with AI and non-AI features that help you ship code faster by reducing the time it spends in review.",
        link: "https://www.graphite.com/",
        iconUrl: "https://graphite.dev/favicon/favicon-32x32.png",
        type: "code-review",
        models: ["Custom models"],
      },
      {
        name: "Greptile",
        description:
          "AI bot that reviews PRs in GitHub/Gitlab with full context of the codebase",
        link: "https://greptile.com/code-review-bot",
        iconUrl: "https://greptile.com/favicon.ico",
        type: "code-review",
      },
      {
        name: "EntelligenceAI",
        description:
          "AI powered code reviews for Github and Gitlab that improves over time based on user comments",
        link: "https://entelligence.ai/pr",
        iconUrl: "https://entelligence.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "Sweep",
        description:
          "AI junior dev: GitHub integration to generate, test, and self-review pull requests from issues",
        link: "https://github.com/sweepai/sweep",
        iconUrl: "https://github.com/sweepai.png",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Codegen",
        description: "GPT-4 based PR agent for enterprise codebases",
        link: "https://www.codegen.com/",
        iconUrl: "https://www.codegen.com/favicon.ico",
        type: "code-review",
        models: ["GPT-4"],
      },
      {
        name: "Code Review GPT",
        description:
          "An open source tool for reviewing PRs. Works as GitHub action, Gitlab CLI or locally",
        link: "https://github.com/mattzcarey/code-review-gpt",
        iconUrl: "https://github.com/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Qodo PR Agent",
        description:
          'Open source tool for automated code reviews. Qodo was formerly known as Codium (not to be confused with Codeium with an "E")',
        link: "https://github.com/qodo-ai/pr-agent",
        iconUrl: "https://github.com/qodo-ai.png",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Nova",
        description:
          "CI bot to add actions such as summaries and tests to new PRs",
        link: "https://www.trynova.ai/",
        iconUrl: "https://www.trynova.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "SwePT",
        description:
          "Open source PR generator written in 150 lines of Python code",
        link: "https://github.com/keerthanpg/SwePT",
        iconUrl: "https://github.com/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Duckie",
        description:
          "A web based chat assistant for modifying GitHub repositories",
        link: "https://duckie.ai/",
        iconUrl: "https://duckie.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "PR Explainer Bot",
        description:
          "A GitHub integration that adds explanatory text to newly created PRs",
        link: "https://pr-explainer-bot.web.app/",
        iconUrl: "https://pr-explainer-bot.web.app/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Goast",
        description:
          "A hosted tool that ingests your error logs and suggests fixes",
        link: "https://goast.ai/",
        iconUrl: "https://goast.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "Corgea",
        description:
          "A GitHub integration that finds and fixes vulnerable code",
        link: "https://corgea.com/",
        iconUrl: "https://corgea.com/favicon.ico",
        type: "code-review",
      },
      {
        name: "vx.dev",
        description:
          "A GitHub integration focused on UI generation with built in support for shadcn, lucide, and nivo charts",
        link: "https://github.com/Yuyz0112/vx.dev",
        iconUrl: "https://github.com/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Pixee",
        description:
          "Pixeebot finds security and code quality issues in your code and creates merge-ready pull requests with recommended fixes",
        link: "https://pixee.ai",
        iconUrl: "https://pixee.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "CodeAnt AI",
        description: "Automatically create PRs to fix code issues",
        link: "https://www.codeant.ai/",
        iconUrl: "https://www.codeant.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "What The Diff",
        description:
          "AI-powered app that reviews the diff of pull requests and writes a descriptive comment about the changes in plain english",
        link: "https://whatthediff.ai/",
        iconUrl: "https://whatthediff.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "Trag",
        description:
          "AI powered code reviews with pre-defined instructions and patterns",
        link: "https://usetrag.com/",
        iconUrl: "https://usetrag.com/favicon.ico",
        type: "code-review",
      },
      {
        name: "CodeReviewBot",
        description: "AI powered code reviews for GitHub",
        link: "https://codereviewbot.ai/",
        iconUrl: "https://codereviewbot.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "Callstack.ai Code Reviewer",
        description:
          "AI-powered PR reviewer for GitHub, designed to identify bugs, security issues, and performance bottlenecks",
        link: "https://callstack.ai/code-reviewer",
        iconUrl: "https://callstack.ai/favicon.ico",
        type: "code-review",
      },
      {
        name: "Matter AI",
        description:
          "Open Source AI Code Reviewer to help engineering teams release code with confidence",
        link: "https://matterai.dev",
        iconUrl: "https://matterai.dev/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Gito",
        description:
          "AI code reviewer that works with any language model, locally or in GitHub Actions",
        link: "https://github.com/Nayjest/Gito",
        iconUrl: "https://github.com/favicon.ico",
        type: "code-review",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Image Generation",
    description: "AI-powered tools for creating and editing images",
    categorySlug: "image-generation",
    items: [
      {
        name: "Midjourney",
        description: "AI-powered image generation from text descriptions",
        link: "https://www.midjourney.com/",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg",
        type: "image",
        models: ["Midjourney v6", "Midjourney v5"],
      },
      {
        name: "Stable Diffusion",
        description: "Open-source image generation model",
        link: "https://stability.ai/",
        iconUrl: "https://stability.ai/favicon.ico",
        type: "image",
        models: ["SDXL", "SD 2.1", "SD 1.5"],
      },
    ],
  },
  {
    title: "Voice Generation",
    description: "AI-powered tools for text-to-speech and voice synthesis",
    categorySlug: "voice-generation",
    items: [
      {
        name: "ElevenLabs",
        description: "AI voice generation and text-to-speech platform",
        link: "https://elevenlabs.io/",
        iconUrl: "https://elevenlabs.io/favicon.ico",
        type: "audio",
        models: ["Eleven Multilingual v2", "Eleven English v2"],
      },
    ],
  },
  {
    title: "Web Assistants",
    description: "AI-powered web-based coding assistants and chatbots",
    categorySlug: "web-assistants",
    items: [
      {
        name: "Replit Ghostwriter Chat",
        description:
          "Assistant built into Replit with chat, proactive debugging, and autocomplete. Uses OpenAI for chat and replit-code-v1-3b (OS) for autocomplete",
        link: "https://replit.com/site/ghostwriter",
        iconUrl: "https://replit.com/favicon.ico",
        type: "web-assistant",
        models: ["OpenAI", "replit-code-v1-3b"],
      },
      {
        name: "Unblocked",
        description:
          "Augment source code with relevant existing knowledge in GitHub, Slack, Jira, Confluence, and more. Get answers through chat and IDE file-level context. Available on web, macOS, Slack, VSCode, and JetBrains IDE's",
        link: "https://getunblocked.com/",
        iconUrl: "https://getunblocked.com/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Magnet",
        description:
          "Web-based chatbot with repositories and issues as context",
        link: "https://www.magnet.run/",
        iconUrl: "https://www.magnet.run/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Adrenaline",
        description:
          "Web-based chatbot using AI and ASTs to answer questions about your codebase",
        link: "https://useadrenaline.com/",
        iconUrl: "https://useadrenaline.com/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "CodeSquire",
        description:
          "Chrome extension that adds autocomplete to Google Colab, BigQuery, and JupyterLab",
        link: "https://codesquire.ai/",
        iconUrl: "https://codesquire.ai/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Incognito Pilot",
        description:
          "Open source assistant with built-in Python editor and interpreter",
        link: "https://github.com/silvanmelchior/IncognitoPilot",
        iconUrl: "https://github.com/favicon.ico",
        type: "web-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Onboard",
        description: "Chat with an AI about public and private codebases",
        link: "https://www.getonboardai.com",
        iconUrl: "https://www.getonboardai.com/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Code to Flow",
        description:
          "Visualize, analyze, and understand code with interactive flowcharts",
        link: "https://codetoflow.com",
        iconUrl: "https://codetoflow.com/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Pieces",
        description:
          "An on-device copilot that helps you capture, enrich, and reuse code, streamline collaboration, and solve complex problems through a contextual understanding of your workflow",
        link: "https://pieces.app/",
        iconUrl: "https://pieces.app/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Wren AI",
        description:
          "SQL AI Agent to get results and insights faster by asking questions without writing SQL, and it's open-source!",
        link: "https://getwren.ai/oss",
        iconUrl: "https://getwren.ai/favicon.ico",
        type: "web-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "TEXT2SQL.AI",
        description:
          "AI-powered SQL query builder. Translate, explain and fix complex SQL queries using plain English",
        link: "https://www.text2sql.ai/",
        iconUrl: "https://www.text2sql.ai/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "SQLAI.ai",
        description:
          "AI generates, fixes, explains and optimizes SQL queries. Ability to add your own database schema and train AI to understand it",
        link: "https://www.sqlai.ai/",
        iconUrl: "https://www.sqlai.ai/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "CodeWP",
        description:
          "AI chat and coding tools specifically trained for WordPress developers. AI code generation for code snippets and plugins in WordPress",
        link: "https://codewp.ai/",
        iconUrl: "https://codewp.ai/favicon.ico",
        type: "web-assistant",
      },
      {
        name: "Gru.ai",
        description:
          "An AI developer can help you solve technical problems and tackle daily coding tasks, such as building algorithms, debug issues, test solutions, answer programming questions, etc",
        link: "https://www.gru.ai/",
        iconUrl: "https://www.gru.ai/favicon.ico",
        type: "web-assistant",
      },
    ],
  },
  {
    title: "Command-line Assistants",
    description: "AI-powered command-line tools and CLI assistants",
    categorySlug: "cli-assistants",
    items: [
      {
        name: "Amazon Q Developer CLI",
        description:
          "CLI that provides command completion, command translation using generative AI to translate intent to commands, and a full agentic chat interface with context management that helps you write code",
        link: "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html",
        iconUrl: "https://aws.amazon.com/favicon.ico",
        type: "cli-assistant",
        models: ["Amazon Q"],
      },
      {
        name: "talk-codebase",
        description:
          "CLI chatbot with repository as context. Supports OpenAI as well as locally running LLMs via GPT4All",
        link: "https://github.com/rsaryev/talk-codebase",
        iconUrl: "https://github.com/favicon.ico",
        type: "cli-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["OpenAI", "Local LLMs via GPT4All"],
      },
      {
        name: "gptcomet",
        description:
          "CLI tool to help you generate commit message and review changes. Support multiple providers and languages",
        link: "https://github.com/belingud/gptcomet",
        iconUrl: "https://github.com/favicon.ico",
        type: "cli-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "poorcoder",
        description:
          "A collection of Bash scripts to extract code context, apply changes from markdown, and generate AI commit messages while using web-based LLMs",
        link: "https://github.com/vgrichina/poorcoder",
        iconUrl: "https://github.com/favicon.ico",
        type: "cli-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Vibe Compiler (vibec)",
        description:
          "A self-compiling tool that transforms markdown-based prompt stacks into code and tests using LLM generation. Works with any LLM via OpenRouter, including Claude, ChatGPT, and Grok",
        link: "https://github.com/Strawberry-Computer/vibe-compiler",
        iconUrl: "https://github.com/Strawberry-Computer.png",
        type: "cli-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["Claude", "ChatGPT", "Grok", "OpenRouter"],
      },
      {
        name: "cmd-ai",
        description: "Turns natural language into executable shell commands",
        link: "https://github.com/BrodaNoel/cmd-ai",
        iconUrl: "https://github.com/favicon.ico",
        type: "cli-assistant",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Desktop Assistants",
    description: "AI-powered desktop applications for coding assistance",
    categorySlug: "desktop-assistants",
    items: [
      {
        name: "Memex",
        description:
          "Build anything in any stack, with just natural language, on your desktop",
        link: "https://memex.tech/",
        iconUrl: "https://memex.tech/favicon.ico",
        type: "desktop-assistant",
      },
      {
        name: "Pieces Desktop",
        description:
          "AI-enabled desktop application and browser extension designed to assist developers in enhancing productivity",
        link: "https://pieces.app/",
        iconUrl: "https://pieces.app/favicon.ico",
        type: "desktop-assistant",
      },
    ],
  },
  {
    title: "Agents",
    description: "AI agents that automate coding tasks and generate code",
    categorySlug: "agents",
    items: [
      {
        name: "Smol Developer",
        description:
          "CLI agent that generates a repository from a prompt. Uses OpenAI and Anthropic",
        link: "https://github.com/smol-ai/developer",
        iconUrl: "https://github.com/smol-ai.png",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["OpenAI", "Anthropic"],
      },
      {
        name: "Blinky",
        description:
          "A debugging agent for VS Code that helps to identify and fix backend errors, inspired by SWE-agent",
        link: "https://github.com/seahyinghang8/blinky",
        iconUrl: "https://github.com/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Mentat",
        description:
          "CLI assistant and agent that makes changes to repositories",
        link: "https://www.mentat.ai/",
        iconUrl: "https://www.mentat.ai/favicon.ico",
        type: "agent",
      },
      {
        name: "GPT Engineer",
        description:
          "CLI agent that generates a repository from a prompt, and asks clarifying questions",
        link: "https://github.com/AntonOsika/gpt-engineer",
        iconUrl: "https://github.com/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["GPT-4"],
      },
      {
        name: "GPT Migrate",
        description:
          "CLI agent that converts a full-stack application from one language or framework to another. Uses GPT-4 32k context",
        link: "https://github.com/0xpayne/gpt-migrate",
        iconUrl: "https://github.com/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["GPT-4 32k"],
      },
      {
        name: "Grit",
        description:
          "GitHub-integrated agent for automating maintenance tasks and other development work",
        link: "https://app.grit.io",
        iconUrl: "https://app.grit.io/favicon.ico",
        type: "agent",
      },
      {
        name: "DemoGPT",
        description: "Auto Gen-AI App Generator with the Power of Llama 2",
        link: "https://github.com/melih-unsal/DemoGPT",
        iconUrl: "https://github.com/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["Llama 2"],
      },
      {
        name: "DevOpsGPT",
        description:
          "DevOpsGPT: AI-Driven Software Development Automation Solution",
        link: "https://github.com/kuafuai/DevOpsGPT",
        iconUrl: "https://github.com/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Second.dev",
        description: "A platform for adding features to full-stack apps",
        link: "https://www.second.dev/",
        iconUrl: "https://www.second.dev/favicon.ico",
        type: "agent",
      },
      {
        name: "Factory",
        description: "Agents for code generation. Waitlisted",
        link: "https://www.factory.ai/",
        iconUrl: "https://www.factory.ai/favicon.ico",
        type: "agent",
      },
      {
        name: "sudocode",
        description:
          "A web based chat assistant for generating projects, similar to Code Interpreter",
        link: "https://sudocode.ai/",
        iconUrl: "https://sudocode.ai/favicon.ico",
        type: "agent",
      },
      {
        name: "CodeFlash AI",
        description: "A CLI and CI tool for optimizing Python code using AI",
        link: "https://www.codeflash.ai/",
        iconUrl: "https://www.codeflash.ai/favicon.ico",
        type: "agent",
      },
      {
        name: "Micro Agent by Builder",
        description: "An AI agent that writes and fixes code for you",
        link: "https://www.builder.io/blog/micro-agent",
        iconUrl: "https://www.builder.io/favicon.ico",
        type: "agent",
      },
      {
        name: "Fine",
        description:
          "AI Dev Environment for automating mundane work. Integrate GitHub, Sentry, Linear. Get context-aware answers to questions. Plan, design and implement changes. Automate self-healing CI/CD",
        link: "https://fine.dev/?ref=awesome",
        iconUrl: "https://fine.dev/favicon.ico",
        type: "agent",
      },
      {
        name: "Potpie",
        description:
          "Open Source AI Agents for your codebase in minutes. Use pre-built agents for Q&A, Testing, Debugging and System Design or create your own purpose-built agents",
        link: "https://potpie.ai",
        iconUrl: "https://potpie.ai/favicon.ico",
        type: "agent",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Leap.new",
        description:
          "It builds functional apps with real backend services, APIs, and deploys to your cloud",
        link: "https://leap.new/",
        iconUrl: "https://leap.new/favicon.ico",
        type: "agent",
      },
    ],
  },
  {
    title: "App Generators",
    description: "AI-powered tools for generating full-stack applications",
    categorySlug: "app-generators",
    items: [
      {
        name: "Pico",
        description: "End-to-end micro app generator with instant deployment",
        link: "https://picoapps.xyz",
        iconUrl: "https://picoapps.xyz/favicon.ico",
        type: "app-generator",
      },
      {
        name: "Co.dev",
        description:
          "AI-powered app development platform that helps build and deploy full-stack applications",
        link: "https://www.co.dev/",
        iconUrl: "https://www.co.dev/favicon.ico",
        type: "app-generator",
      },
      {
        name: "SoftGen",
        description:
          "AI-powered software generation platform for building Web Apps",
        link: "https://softgen.ai/",
        iconUrl: "https://softgen.ai/favicon.ico",
        type: "app-generator",
      },
      {
        name: "LlamaCoder",
        description:
          "Open source code generation model for building applications using Opensource LLMs",
        link: "https://llamacoder.together.ai/",
        iconUrl: "https://together.ai/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "e2b_Fragments",
        description:
          "Platform for building and deploying AI-powered applications with sandboxed environments",
        link: "https://fragments.e2b.dev/",
        iconUrl: "https://e2b.dev/favicon.ico",
        type: "app-generator",
      },
      {
        name: "Bolt.new",
        description:
          "AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly in the browser using WebContainers. Supports npm packages, Node.js servers, and third-party APIs",
        link: "https://bolt.new",
        iconUrl: "https://bolt.new/favicon.ico",
        type: "app-generator",
      },
      {
        name: "Bolt.diy",
        description:
          "Open source version of Bolt.new that supports multiple LLM providers including Groq, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek",
        link: "https://github.com/stackblitz-labs/bolt.diy",
        iconUrl: "https://github.com/stackblitz-labs.png",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: [
          "Groq",
          "Anthropic",
          "Ollama",
          "OpenRouter",
          "Gemini",
          "LMStudio",
          "Mistral",
          "xAI",
          "HuggingFace",
          "DeepSeek",
        ],
      },
      {
        name: "Srcbook",
        description:
          "TypeScript-centric app development platform with an AI app builder and TypeScript notebook",
        link: "https://github.com/srcbookdev/srcbook",
        iconUrl: "https://github.com/srcbookdev.png",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Capacity",
        description:
          "AI powered full-stack web app development that turn prompt in natural language into fully functional web applications",
        link: "https://capacity.so",
        iconUrl: "https://capacity.so/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details: "Free tier available. Get free credits to get started.",
        },
      },
      {
        name: "Lovable",
        description:
          "AI-powered full-stack app development platform that converts natural language descriptions or designs into fully functional applications with built-in deployment and GitHub integration",
        link: "https://lovable.dev/",
        iconUrl: "https://lovable.dev/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free plan includes 100 credits/month. Start for free. Upgrade to get the capacity that exactly matches your team's needs.",
        },
      },
      {
        name: "Literally anything",
        description: "HTML and JavaScript web app generator",
        link: "https://literallyanything.io",
        iconUrl: "https://literallyanything.io/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "GPT Web App Generator",
        description:
          "Generates a full-stack React/Node.js/Prisma/Wasp app from a short description",
        link: "https://magic-app-generator.wasp-lang.dev/",
        iconUrl: "https://wasp-lang.dev/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["GPT"],
      },
      {
        name: "Make Real",
        description:
          "Online canvas that can be used to generate HTML/JavaScript apps",
        link: "https://makereal.tldraw.com/",
        iconUrl: "https://tldraw.com/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Marblism",
        description: "Generate a SaaS boilerplate from a prompt",
        link: "https://marblism.com",
        iconUrl: "https://marblism.com/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier available. Pro plans available for AI employees and SaaS generation.",
        },
      },
      {
        name: "Glowbom",
        description: "Generate apps with AI and export to multiple platforms",
        link: "https://glowbom.com/",
        iconUrl: "https://glowbom.com/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier includes unlimited projects, unlimited code export, code export to Replit, and $10 monthly credits for AI usage. Pro includes early feature access, priority support, TestFlight access, and $20 monthly credits for AI usage.",
        },
        models: [
          "o1",
          "Claude 3.5 Sonnet",
          "Grok",
          "FLUX",
          "Llama 3.2",
          "Gemini",
          "DeepSeek-R1",
        ],
      },
      {
        name: "Mage",
        description:
          "Generate full-stack web apps in Wasp, React, Node.js and Prisma",
        link: "https://usemage.ai/",
        iconUrl: "https://usemage.ai/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "ScrollHub",
        description:
          "Generate and publish websites using the Scroll programming language",
        link: "https://hub.scroll.pub/",
        iconUrl: "https://scroll.pub/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Berrry",
        description:
          "Twitter app generator that transforms social media posts into functional web applications. Turn tweets and Reddit content into complete apps with unique subdomains",
        link: "https://berrry.app",
        iconUrl: "https://berrry.app/favicon.ico",
        type: "app-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
    ],
  },
  {
    title: "UI Generators",
    description: "AI-powered tools for generating user interfaces",
    categorySlug: "ui-generators",
    items: [
      {
        name: "v0",
        description: "Create and iterate new UI components in your browser",
        link: "https://v0.dev/",
        iconUrl: "https://v0.dev/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "$20/month",
            },
            {
              name: "Team",
              price: "$20/user/month",
            },
            {
              name: "Enterprise",
              price: "Contact for pricing",
            },
          ],
          details:
            "Free tier includes $2 of free daily credits per user on login. Pro includes $30 of included monthly credits per user. Team includes $30 of included monthly credits per user, purchase additional credits outside of your monthly usage shared across your team, centralized billing on vercel.com, and share chats and collaborate with your team. Enterprise includes custom pricing and features.",
        },
      },
      {
        name: "Rendition Create",
        description: "Create and iterate new UI components in your browser",
        link: "https://www.renditioncreate.com/",
        iconUrl: "https://www.renditioncreate.com/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "Rapidpages",
        description: "Open source UI generator",
        link: "https://github.com/rapidpages/rapidpages",
        iconUrl: "https://github.com/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Magic Patterns",
        description:
          "Protoype your product ideas. UI generator website where you can prompt, upload images, or import design inspiration with their Chrome Extension. Can export to Figma with a plugin. Supports a number of component systems including Shadcn, ChakraUI, and HTML + Tailwind",
        link: "https://www.magicpatterns.com/",
        iconUrl: "https://www.magicpatterns.com/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "Tempo",
        description: "WYSIWYG editor for React interfaces",
        link: "https://www.tempolabs.ai/",
        iconUrl: "https://www.tempolabs.ai/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "Kombai",
        description: "AI Tool for generating frontend code from Figma",
        link: "https://kombai.com/",
        iconUrl: "https://kombai.com/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "CodeParrot",
        description:
          "VS code plugin to generate Frontend code from Figma. Reuses existing components, libraries and coding standards to generate code which fits perfectly with your existing codebase. All without any prompting",
        link: "https://www.codeparrot.ai/",
        iconUrl: "https://www.codeparrot.ai/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "Galileo AI",
        description: "A text-to-UI platform. Waitlist",
        link: "https://www.usegalileo.ai/",
        iconUrl: "https://www.usegalileo.ai/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details: "Currently on waitlist",
        },
      },
      {
        name: "Uizard",
        description:
          "Generate multi-screen mockups from text prompts and edit them with a drag-and-drop editor. Scan screenshots of apps or hand-drawn wireframes and transform them into editable app mockups",
        link: "https://uizard.io/",
        iconUrl: "https://uizard.io/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "Frontly",
        description: "Convert the uploaded image to HTML CSS code",
        link: "https://fronty.com/",
        iconUrl: "https://fronty.com/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "BoringUi",
        description:
          "Create beautiful UI using your JSON data. The generated UI is in HTML and Tailwind CSS with code which can be copied and UI can be shared with anyone using links",
        link: "https://www.boringui.xyz/",
        iconUrl: "https://www.boringui.xyz/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Polymet",
        description:
          "Create and iterate product design easily. Polymet helps teams create user interfaces and prototypes without any design experience, provides production-ready front-end code",
        link: "https://polymet.ai",
        iconUrl: "https://polymet.ai/favicon.ico",
        type: "ui-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Snippet Generators",
    description: "AI-powered tools for generating code snippets",
    categorySlug: "snippet-generators",
    items: [
      {
        name: "CodePal",
        description: "A web tool for quickly generating or refactoring code",
        link: "https://codepal.ai/",
        iconUrl: "https://codepal.ai/favicon.ico",
        type: "snippet-generator",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "AI Code Convert",
        description:
          "A web tool for translating code between programming languages",
        link: "https://aicodeconvert.com/",
        iconUrl: "https://aicodeconvert.com/favicon.ico",
        type: "snippet-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "AI Code Playground",
        description: "A web tool for refactoring and improving code",
        link: "https://aicodeplayground.com/",
        iconUrl: "https://aicodeplayground.com/favicon.ico",
        type: "snippet-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "AutoRegex",
        description:
          "AutoRegex uses OpenAI's GPT-3 to produce regular expressions from plain English",
        link: "https://www.autoregex.xyz/",
        iconUrl: "https://www.autoregex.xyz/favicon.ico",
        type: "snippet-generator",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["GPT-3"],
      },
    ],
  },
  {
    title: "Documentation",
    description:
      "AI-powered tools for generating and managing code documentation",
    categorySlug: "documentation",
    items: [
      {
        name: "Trelent",
        description:
          "A VS Code extension to generate docstrings. Uses proprietary models",
        link: "https://trelent.net/",
        iconUrl: "https://trelent.net/favicon.ico",
        type: "documentation",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "DiagramGPT",
        description:
          "DiagramGPT is a free AI-based web app that converts a schema, infrastructure definition, code snippet or plain language description into diagrams. The tool can generate flow charts, entity relationship diagrams, cloud architecture diagrams and sequence diagrams",
        link: "https://www.eraser.io/diagramgpt",
        iconUrl: "https://www.eraser.io/favicon.ico",
        type: "documentation",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "DocuWriter.ai",
        description:
          "AI-powered web app to generate automated Code & API documentation from your source code files",
        link: "https://www.docuwriter.ai/",
        iconUrl: "https://www.docuwriter.ai/favicon.ico",
        type: "documentation",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "README-AI",
        description:
          "Automated README.md file generator, powered by large language model APIs",
        link: "https://github.com/eli64s/readme-ai",
        iconUrl: "https://github.com/favicon.ico",
        type: "documentation",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "Supacodes",
        description:
          "An AI tool that automates writing & updating code documentation in Github",
        link: "https://www.supacodes.com",
        iconUrl: "https://www.supacodes.com/favicon.ico",
        type: "documentation",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
      {
        name: "CodexAtlas",
        description:
          "Automated code and API documentation using latest AI models",
        link: "https://codedocumentation.app/",
        iconUrl: "https://codedocumentation.app/favicon.ico",
        type: "documentation",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
        },
      },
    ],
  },
  {
    title: "OpenAI Plugins",
    description: "ChatGPT plugins for coding assistance",
    categorySlug: "openai-plugins",
    items: [
      {
        name: "ChatWithGit",
        description:
          "Enables ChatGPT to search GitHub and return links to relevant repositories",
        link: "https://gitsearch.sdan.io/",
        iconUrl: "https://gitsearch.sdan.io/favicon.ico",
        type: "openai-plugin",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["ChatGPT"],
      },
      {
        name: "Code ChatGPT Plugin",
        description:
          "Open source example of a ChatGPT plugin that pulls context from a directory of files",
        link: "https://github.com/kesor/chatgpt-code-plugin",
        iconUrl: "https://github.com/favicon.ico",
        type: "openai-plugin",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
        models: ["ChatGPT"],
      },
    ],
  },
  {
    title: "Search",
    description: "AI-powered code search tools",
    categorySlug: "search",
    items: [
      {
        name: "Bloop",
        description: "Natural language search for repositories",
        link: "https://bloop.ai/",
        iconUrl: "https://bloop.ai/favicon.ico",
        type: "search",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source code search tool",
        },
      },
      {
        name: "Buildt",
        description: "Natural language search for repositories. Waitlist",
        link: "https://www.buildt.ai/",
        iconUrl: "https://www.buildt.ai/favicon.ico",
        type: "search",
        pricing: {
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Contact for pricing",
            },
          ],
          details: "Currently on waitlist. Free tier available.",
        },
      },
      {
        name: "SeaGOAT",
        description:
          "A local search tool leveraging vector embeddings to search your codebase semantically",
        link: "https://kantord.github.io/SeaGOAT/latest/",
        iconUrl: "https://kantord.github.io/SeaGOAT/favicon.ico",
        type: "search",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
    ],
  },
  {
    title: "Testing",
    description: "AI-powered testing and QA tools",
    categorySlug: "testing",
    items: [
      {
        name: "Checksum AI",
        description:
          "End-to-end fully autonomous QA Automation agent that generates CI/CD ready Playwright tests directly to the repository",
        link: "https://checksum.ai",
        iconUrl: "https://checksum.ai/favicon.ico",
        type: "testing",
      },
      {
        name: "OctoMind",
        description:
          "Auto-maintenance and generated browser-based end-to-end-tests integrated into Github Actions, Azure DevOps and more",
        link: "https://octomind.dev",
        iconUrl: "https://octomind.dev/favicon.ico",
        type: "testing",
      },
      {
        name: "Traceloop",
        description:
          "Uses OpenTelemetry tracing data with generative AI to improve system reliability",
        link: "https://traceloop.com/",
        iconUrl: "https://traceloop.com/favicon.ico",
        type: "testing",
      },
      {
        name: "Carbonate",
        description:
          "End-to-end testing using natural language. Integrates into your existing test suite (currently Jest, PHPUnit and Python's unittest)",
        link: "https://carbonate.dev/",
        iconUrl: "https://carbonate.dev/favicon.ico",
        type: "testing",
      },
      {
        name: "Meticulous.ai",
        description:
          "Automatically generated, automatically maintained end-to-end tests: as your app evolves so does your test suite",
        link: "https://www.meticulous.ai/",
        iconUrl: "https://www.meticulous.ai/favicon.ico",
        type: "testing",
      },
      {
        name: "DiffBlue",
        description: "Automatically generated unit tests for Java",
        link: "https://www.diffblue.com/",
        iconUrl: "https://www.diffblue.com/favicon.ico",
        type: "testing",
      },
      {
        name: "Qodo",
        description:
          "Non-trivial test generation with support for major programming languages. Extensions for VS Code and JetBrains. (formerly Codium)",
        link: "https://www.qodo.ai/",
        iconUrl: "https://www.qodo.ai/favicon.ico",
        type: "testing",
      },
      {
        name: "DeepUnit",
        description:
          "Thoughtful test cases and generation of complete unit test files. Available as an interactive VS Code extension, npm package, CLI or CI/CD pipeline",
        link: "https://www.deepunit.ai/",
        iconUrl: "https://www.deepunit.ai/favicon.ico",
        type: "testing",
      },
      {
        name: "MutahunterAI",
        description:
          "Accelerate developer productivity and code security by finding vulnerabilities in code and generating tests for them. Open Source and available as a CLI or CI/CD pipeline",
        link: "https://github.com/codeintegrity-ai/mutahunter",
        iconUrl: "https://github.com/codeintegrity-ai.png",
        type: "testing",
        pricing: {
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
        },
      },
      {
        name: "KushoAI",
        description:
          "AI agent for API testing which transforms your Postman collections, OpenAPI specs, curl commands, etc. into exhaustive test suites that plug into your CI/CD pipeline",
        link: "https://kusho.ai/",
        iconUrl: "https://kusho.ai/favicon.ico",
        type: "testing",
      },
      {
        name: "Test Gru",
        description: "Provides enterprise-level unit test automation services",
        link: "https://gru.ai/home#test-gru",
        iconUrl: "https://gru.ai/favicon.ico",
        type: "testing",
      },
    ],
  },
  {
    title: "Miscellaneous",
    description: "Various AI tools and resources for different purposes",
    categorySlug: "misc",
    items: [
      {
        name: "Aidbase",
        description:
          "AI-powered support ecosystem for SaaS startups with chatbot, knowledge base, and ticketing",
        link: "https://www.aidbase.ai/",
        iconUrl: "https://www.aidbase.ai/images/favicon.webp",
        type: "support",
        models: ["GPT-4", "Claude 3"],
      },
      {
        name: "Blog Recorder",
        description:
          "Create blog posts 10x faster by talking out loud, with AI-powered transcription and structuring",
        link: "https://blogrecorder.com/",
        iconUrl: "https://blogrecorder.com/_astro/favicon.3wOwjXYg.ico",
        type: "content",
        models: ["GPT-4", "Whisper"],
      },
      {
        name: "Remiq",
        description: "Self-service customer support platform",
        link: "https://remiq.ai/",
        iconUrl: "https://remiq.ai/icon.png",
        type: "support",
        models: ["GPT-4o-mini"],
      },
    ],
  },
];
