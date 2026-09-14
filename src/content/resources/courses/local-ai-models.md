---
name: Local AI Models
description: Choose an open-weight model that fits your hardware, run it locally with Ollama and Node.js, build a private AI feature with structured output and fallbacks, and operate local AI responsibly.
accessNote: Readable online with no signup, or offline as a PDF or EPUB via the free newsletter.
categorySlug: courses
link: "https://flaviocopes.com/courses/local-ai-models/"
iconUrl: "https://flaviocopes.com/favicon.ico"
type: course
pricing:
  type: free
  tiers:
    - name: Full Course
      price: $0
curriculum:
  - title: Understand open weights
    description: Separate weights, architecture, training, inference, licenses, and the wider meaning of open source AI.
    lessons:
      - Weights are learned numbers
      - Separate training from inference
      - Architecture, weights, and runtime
      - Open weights and open source AI
      - Read the model card and license
      - "Check your understanding: open weights"
  - title: Choose a model that fits
    description: Compare capabilities, parameter counts, quantization, formats, context, memory, and task quality.
    lessons:
      - Start from the task
      - Parameters and memory
      - Understand quantization
      - Safetensors and GGUF
      - Context and the KV cache
      - Build a small evaluation
      - "Check your understanding: choosing a model"
  - title: Run models locally
    description: Install Ollama, manage model files, use the local API, stream responses, and measure performance.
    lessons:
      - Choose a local runtime
      - Install and check Ollama
      - Pull and run your first model
      - Call the local chat API
      - Call Ollama from Node.js
      - Stream and measure responses
      - "Check your understanding: running models locally"
  - title: Build a local AI feature
    description: Create a Node.js summarizer with structured output, timeouts, cancellation, fallback behavior, and focused tests.
    lessons:
      - Define the feature boundary
      - Request structured output
      - Add timeout and cancellation
      - Add a deterministic fallback
      - Use tools with a permission boundary
      - Keep the provider swappable
      - Test the local AI feature
      - "Check your understanding: building a local feature"
  - title: Operate local AI responsibly
    description: Review privacy, model supply chains, permissions, upgrades, costs, evaluations, and production boundaries.
    lessons:
      - Map the complete data flow
      - Verify model files and code
      - Pin and upgrade models
      - Understand the real cost
      - Complete the local summarizer
      - "Check your understanding: operating local AI"
author:
  name: Flavio Copes
  link: "https://flaviocopes.com"
  iconUrl: "https://github.com/flaviocopes.png"
---
