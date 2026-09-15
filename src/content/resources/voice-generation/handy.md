---
name: Handy
description: Free, open-source speech-to-text app that runs fully offline. Hold a shortcut, speak, and have the transcription pasted into any text field.
accessNote: Download from handy.computer or GitHub releases, or install with Homebrew (`brew install --cask handy`) or winget (`winget install cjpais.Handy`).
categorySlug: voice-generation
link: "https://handy.computer"
iconUrl: "https://raw.githubusercontent.com/cjpais/Handy/main/src-tauri/icons/128x128.png"
type: audio
pricing:
  type: free
  tiers:
    - name: Open Source
      price: $0
  details: MIT-licensed with no paid tier. Development is funded by sponsors and donations.
highlights:
  - title: Private by default
    description: Your voice never leaves your computer. Transcription runs locally, with no account and no API key.
    icon: lock
  - title: Speak into any text field
    description: Hold a shortcut, talk, release. Handy pastes the text wherever your cursor is.
    icon: cursor
  - title: Open source and forkable
    description: MIT-licensed Tauri app in Rust and React, built to be extended rather than locked down.
    icon: fork
  - title: Works on modest hardware
    description: Parakeet V3 runs on the CPU at about 5× real time with automatic language detection; Whisper uses your GPU when available.
    icon: cpu
models:
  - Whisper Small
  - Whisper Medium
  - Whisper Turbo
  - Whisper Large
  - Parakeet V3
platforms:
  - macOS
  - Windows
  - Linux
author:
  name: CJ Pais
  link: "https://github.com/cjpais"
  iconUrl: "https://github.com/cjpais.png"
---
