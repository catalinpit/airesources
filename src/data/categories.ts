interface CategoryItem {
  name: string;
  description: string;
  link: string;
  iconUrl: string;
  previewImage?: string;
  type?: string;
}

interface Category {
  title: string;
  description: string;
  categorySlug: string;
  items: CategoryItem[];
}

export const categories: Category[] = [
  {
    title: "IDEs & Code Editors",
    description: "Development environments optimized for AI development",
    categorySlug: "ides",
    items: [
      {
        name: "Cursor",
        description: "AI-powered code editor with built-in AI assistance",
        link: "https://cursor.sh",
        iconUrl: "https://www.cursor.com/favicon.ico",
        type: "editor",
        previewImage: "https://cursor.sh/cursor-hero.png",
      },
      {
        name: "Visual Studio Code",
        description: "Popular code editor with extensive AI extensions",
        link: "https://code.visualstudio.com",
        iconUrl: "https://code.visualstudio.com/favicon.ico",
        type: "editor",
        previewImage:
          "https://code.visualstudio.com/assets/home/home-screenshot-win.png",
      },
      {
        name: "JetBrains AI Assistant",
        description: "AI coding assistant integrated into JetBrains IDEs",
        link: "https://www.jetbrains.com/ai/",
        iconUrl: "https://www.jetbrains.com/favicon.ico",
      },
      {
        name: "Amazon CodeWhisperer",
        description: "AI-powered code suggestions and security scanning",
        link: "https://aws.amazon.com/codewhisperer/",
        iconUrl: "https://aws.amazon.com/favicon.ico",
      },
      {
        name: "Tabnine",
        description: "AI code completion tool supporting multiple languages",
        link: "https://www.tabnine.com",
        iconUrl: "https://www.tabnine.com/favicon.ico",
      },
      {
        name: "Windsurf IDE",
        description:
          "The first agentic IDE with AI flows and deep contextual awareness",
        link: "https://codeium.com/windsurf",
        iconUrl: "https://codeium.com/favicon.ico",
        type: "editor",
        previewImage: "https://codeium.com/windsurf-hero.png",
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
      },
      {
        name: "Cline",
        description:
          "Open-source collaborative AI coding agent with frontier model access",
        link: "https://cline.bot",
        iconUrl: "https://cline.bot/favicon.ico",
        type: "extension",
      },
      {
        name: "Zencoder AI",
        description: "AI code completion and refactoring assistant",
        link: "https://zencoder.ai",
        iconUrl: "https://zencoder.ai/favicon.ico",
        type: "extension",
      },
      {
        name: "Sourcegraph Cody",
        description: "AI code assistant powered by semantic code search",
        link: "https://about.sourcegraph.com/cody",
        iconUrl: "https://sourcegraph.com/favicon.ico",
        type: "extension",
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
        iconUrl:
          "https://raw.githubusercontent.com/fastai/logos/refs/heads/main/fastai_small.png",
      },
      {
        name: "DeepLearning.AI",
        description: "Comprehensive AI and machine learning courses",
        link: "https://www.deeplearning.ai",
        iconUrl: "https://www.deeplearning.ai/favicon.ico",
      },
      {
        name: "Coursera Machine Learning",
        description: "Stanford's machine learning course",
        link: "https://www.coursera.org/learn/machine-learning",
        iconUrl: "https://www.coursera.org/favicon.ico",
      },
      {
        name: "Hugging Face Course",
        description: "Learn about transformers and NLP",
        link: "https://huggingface.co/course",
        iconUrl: "https://huggingface.co/favicon.ico",
      },
      {
        name: "MIT OpenCourseWare",
        description: "Free AI and machine learning courses",
        link: "https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science",
        iconUrl: "https://ocw.mit.edu/favicon.ico",
      },
      {
        name: "Udacity AI Nanodegree",
        description: "Comprehensive AI program with industry projects",
        link: "https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898",
        iconUrl: "https://www.udacity.com/favicon.ico",
      },
      {
        name: "Deep Learning Book",
        description: "The definitive textbook on deep learning",
        link: "https://www.deeplearningbook.org",
        iconUrl: "https://www.deeplearningbook.org/favicon.ico",
      },
    ],
  },
  {
    title: "Leaders to Follow",
    description: "Influential figures in AI and machine learning",
    categorySlug: "leaders",
    items: [
      {
        name: "Andrew Ng",
        description: "Co-founder of Coursera and DeepLearning.AI",
        link: "https://twitter.com/AndrewYNg",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/andrew_ng_400x400.jpg",
      },
      {
        name: "Yann LeCun",
        description: "Chief AI Scientist at Meta, Turing Award winner",
        link: "https://twitter.com/ylecun",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/yann_lecun_400x400.jpg",
      },
      {
        name: "Fei-Fei Li",
        description: "Co-director of Stanford's Human-Centered AI Institute",
        link: "https://twitter.com/drfeifei",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/fei_fei_li_400x400.jpg",
      },
      {
        name: "Demis Hassabis",
        description: "CEO of DeepMind",
        link: "https://twitter.com/demishassabis",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/demis_hassabis_400x400.jpg",
      },
      {
        name: "Stuart Russell",
        description: "Professor at UC Berkeley, author of Human Compatible",
        link: "https://twitter.com/stuartrussell",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/stuart_russell_400x400.jpg",
      },
      {
        name: "Geoffrey Hinton",
        description:
          "Turing Award winner, known as the 'Godfather of Deep Learning'",
        link: "https://twitter.com/geoffreyhinton",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/geoffrey_hinton_400x400.jpg",
      },
      {
        name: "Yoshua Bengio",
        description: "Turing Award winner, founder of Mila",
        link: "https://twitter.com/YoshuaBengio",
        iconUrl:
          "https://pbs.twimg.com/profile_images/1234567890/yoshua_bengio_400x400.jpg",
      },
    ],
  },
];
