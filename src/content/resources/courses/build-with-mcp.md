---
name: Build with MCP
description: Build a TypeScript MCP server with tools, resources, and prompts, move it to remote HTTP with authorization and security boundaries, then deploy and review it.
accessNote: Readable online with no signup, or offline as a PDF or EPUB via the free newsletter.
categorySlug: courses
link: "https://flaviocopes.com/courses/build-with-mcp/"
iconUrl: "https://flaviocopes.com/favicon.ico"
type: course
pricing:
  type: free
  tiers:
    - name: Full Course
      price: $0
curriculum:
  - title: Build a local TypeScript server
    description: Create a typed stdio server with useful tools, errors, and logs.
    lessons:
      - Set up the TypeScript project
      - Create the notes data
      - Create the server factory
      - Add the search_notes tool
      - Add the get_note tool
      - Keep errors useful
      - Log without breaking stdio
      - Serve and inspect the local server
      - "Check your understanding: build a stdio server"
  - title: Add resources and prompts
    description: Expose readable context and reusable prompt workflows deliberately.
    lessons:
      - Add a notes resource
      - Add a project review prompt
      - Design useful capability boundaries
      - "Check your understanding: resources and prompts"
  - title: Move to remote HTTP safely
    description: Use the stateless protocol, authorization, and defensive boundaries.
    lessons:
      - Turn the factory into an HTTP handler
      - Understand stateless MCP
      - Authenticate and authorize requests
      - Protect secrets and limit access
      - Treat returned text as untrusted
      - Write a threat checklist
      - "Check your understanding: remote HTTP and security"
  - title: Deploy and review
    description: Deploy the server, document both transports, and complete a security review.
    lessons:
      - Deploy to a web-standard runtime
      - Document local and remote setup
      - Run the final test matrix
      - Review the security boundary
      - Complete the project-notes server
      - "Final check: deploy and review"
author:
  name: Flavio Copes
  link: "https://flaviocopes.com"
  iconUrl: "https://github.com/flaviocopes.png"
---
