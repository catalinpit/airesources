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
          type: "free",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
          ],
          details: "Open source and free to use",
        },
        models: [
          "Claude 3.5 Sonnet",
          "Claude 3.7 Sonnet",
          "Claude 3.7 Sonnet (Thinking)",
          "GPT-4o",
          "GPT-4",
          "GPT-3.5 Turbo",
          "GPT-4 Turbo",
          "GPT-4o mini",
          "o1-mini",
          "Gemini 1.5 Pro",
          "Gemini 1.5 Flash",
          "DeepSeek Chat",
          "DeepSeek Reasoner",
          "GitHub Copilot Chat",
          "Ollama Models",
          "LM Studio Models",
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
          "claude-3.7-sonnet",
          "claude-3.7-sonnet MAX",
          "claude-3.5-sonnet",
          "claude-3.5-haiku",
          "claude-3-opus",
          "cursor-small",
          "deepseek-v3",
          "deepseek-r1",
          "gemini-2.5-pro-exp",
          "gemini-2.5-pro-exp MAX",
          "gemini-2.0-pro-exp",
          "gpt-4o",
          "gpt-4o-mini",
          "gpt-4.5-preview",
          "o1",
          "o1-mini",
          "o3-mini",
          "grok-2",
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
              price: "$0",
            },
            {
              name: "Pro",
              price: "$15/month",
            },
            {
              name: "Pro Ultimate",
              price: "$60/month",
            },
            {
              name: "Teams",
              price: "$35/user/month",
            },
            {
              name: "Teams Ultimate",
              price: "$90/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes 5 premium model credits and basic features. Pro includes 500 User Prompt and 1,500 Flow Action credits. Pro Ultimate includes infinite User Prompt credits and 3,000 Flow Action credits.",
        },
        models: [
          "GPT-4o",
          "Claude 3.5 Sonnet",
          "Claude 3.7 Sonnet",
          "Claude 3.7 Sonnet (Thinking)",
          "DeepSeek-V3",
          "DeepSeek-R1",
          "o3-mini (medium reasoning)",
          "Gemini 2.0 Flash",
          "Gemini 2.5 Pro",
          "Cascade Base ⚡",
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
              price: "$0",
            },
            {
              name: "Pro",
              price: "$15/user/mo",
            },
            {
              name: "Turbo",
              price: "$40/user/mo",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details:
            "Free tier includes 150 AI requests per month. Pro includes 1,000 AI requests and 35M token limit. Turbo includes unlimited AI requests and 100M token limit. Teams of 3+ get discounts on Turbo plan.",
        },
        models: [
          "Claude 3.7 Sonnet",
          "Claude 3.5 Haiku",
          "GPT-4o",
          "o3-mini",
          "Claude 3.5 Sonnet",
          "Gemini 2.0 Flash",
          "DeepSeek R1 (US hosted)",
          "DeepSeek V3 (US hosted)",
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
              name: "Community",
              price: "50 messages/month free",
            },
            {
              name: "Developer",
              price: "$50/month",
            },
            {
              name: "Pro",
              price: "$100/month",
            },
            {
              name: "Max",
              price: "$250/month",
            },
          ],
          details:
            "Community: 50 messages free/month. Developer: 600 messages. Pro: 1,500 messages. Max: 4,500 messages. 300 message top-ups available.",
        },
        models: [
          "Claude 3.5 Sonnet",
          "GPT-4",
          "GPT-4o",
          "Multiple AI providers",
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
          type: "freemium",
          tiers: [
            {
              name: "Free",
              price: "$0",
            },
            {
              name: "Pro",
              price: "Paid tier available",
            },
          ],
          details:
            "Free tier includes Mac-Native UX, clipboard & chat, workspaces, search & filtering. Pro adds model delegation and ACT mode.",
        },
        models: [
          "Multiple LLM providers",
          "OpenAI models",
          "Anthropic models",
          "Local models",
        ],
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
        models: [
          "Claude 3.5 Sonnet",
          "Ollama Llama 3.2",
          "Azure GPT-4",
          "Perplexity Sonar",
          "Gemini 2.0",
        ],
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
              price: "$10/month",
            },
            {
              name: "Pro+",
              price: "$39/month",
            },
            {
              name: "Business",
              price: "$19/user/month",
            },
            {
              name: "Enterprise",
              price: "$39/user/month",
            },
          ],
          details:
            "Free tier with limited access. Free for verified students and open source maintainers. Enterprise requires GitHub Enterprise Cloud ($21/user/month).",
        },
        models: ["Codex", "GPT-4", "GPT-4o", "Claude 3.5 Sonnet"],
      },
      {
        name: "Cline",
        description:
          "Open-source collaborative AI coding agent with frontier model access",
        link: "https://cline.bot",
        iconUrl:
          "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cline.png",
        type: "extension",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Zencoder AI",
        description: "AI code completion and refactoring assistant",
        link: "https://zencoder.ai",
        iconUrl: "https://zencoder.ai/favicon.ico",
        type: "extension",
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
              name: "Team",
              price: "$30/user/month",
            },
            {
              name: "Enterprise",
              price: "Custom",
            },
          ],
          details: "GPT-3.5 is free, GPT-4 requires subscription",
        },
        models: ["GPT-4", "GPT-3.5"],
      },
      {
        name: "Claude",
        description:
          "Anthropic's advanced AI assistant with strong analytical and creative capabilities",
        link: "https://claude.ai/",
        iconUrl: "https://claude.ai/favicon.ico",
        type: "chat",
        models: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 2"],
      },
      {
        name: "Perplexity",
        description:
          "AI-powered search engine that combines real-time information with conversational AI",
        link: "https://www.perplexity.ai/",
        iconUrl: "https://www.perplexity.ai/favicon.ico",
        type: "chat",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Google AI Studio",
        description:
          "Google's platform for experimenting with and building AI applications",
        link: "https://aistudio.google.com/welcome",
        iconUrl: "https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png",
        type: "chat",
        models: ["Gemini Pro", "Gemini Ultra"],
      },
      {
        name: "TypingMind",
        description:
          "A better UI for ChatGPT with features like chat history, prompt templates, and more",
        link: "https://www.typingmind.com/",
        iconUrl: "https://www.typingmind.com/favicon.ico",
        type: "chat",
        models: ["GPT-4", "GPT-3.5", "Claude 3", "Claude 2"],
      },
      {
        name: "T3 Chat",
        description: "A modern chat interface for interacting with AI models",
        link: "https://t3.chat/chat",
        iconUrl: "https://t3.chat/favicon.ico",
        type: "chat",
        models: ["GPT-4", "Claude 3", "Gemini Pro"],
      },
      {
        name: "Fyzz Chat",
        description: "Chat with the best AI models in one place",
        link: "https://www.fyzz.chat/chat",
        iconUrl: "https://www.fyzz.chat/icon-192x192.png",
        type: "chat",
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
        iconUrl: "https://via.placeholder.com/64/E74C3C/FFFFFF?text=AI",
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
        iconUrl: "https://via.placeholder.com/64/2E8B57/FFFFFF?text=DL",
        models: ["Theoretical Models", "Mathematical Foundations"],
      },
      {
        name: "Principled AI Coding",
        description:
          "IndyDevDan's comprehensive course on AI coding principles, covering the Big Three: Context, Prompt, and Model",
        link: "https://agenticengineer.com/principled-ai-coding",
        iconUrl: "https://via.placeholder.com/64/3498DB/FFFFFF?text=DD",
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
    description: "AI-powered tools for code review",
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
