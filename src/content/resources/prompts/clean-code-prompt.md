---
name: Clean Code Prompt
description: Comprehensive guide for writing clean, maintainable, and extensible code with principles and best practices
categorySlug: prompts
link: "https://github.com/webdevcody"
tags:
  - code-quality
  - best-practices
  - refactoring
  - clean-code
prompt: |
  This document serves as a comprehensive guide for writing clean, maintainable, and extensible code. It outlines principles and practices that ensure code quality, reusability, and long-term maintainability. When writing or reviewing code, follow these guidelines to create software that is easy to understand, modify, and extend. This file is used by LLMs to understand and enforce coding standards throughout the codebase.
  
  ---
  
  ## Core Principles
  
  ### 1. DRY (Don't Repeat Yourself)
  
  **Principle**: Every piece of knowledge should have a single, unambiguous representation within a system.
  
  **Practices**:
  
  - Extract repeated logic into reusable functions, classes, or modules
  - Use constants for repeated values
  - Create shared utilities for common operations
  - Avoid copy-pasting code blocks
  - When you find yourself writing similar code more than twice, refactor it
  
  **Example - Bad**:
  
  ```typescript
  // Repeated validation logic
  if (email.includes('@') && email.length > 5) {
    // ...
  }
  if (email.includes('@') && email.length > 5) {
    // ...
  }
  ```
  
  **Example - Good**:
  
  ```typescript
  function isValidEmail(email: string): boolean {
    return email.includes('@') && email.length > 5;
  }
  
  if (isValidEmail(email)) {
    // ...
  }
  ```
  
  ---
  
  ### 2. Code Reusability
  
  **Principle**: Write code that can be used in multiple contexts without modification or with minimal adaptation.
  
  **Practices**:
  
  - Create generic, parameterized functions instead of specific ones
  - Use composition over inheritance where appropriate
  - Design functions to be pure (no side effects) when possible
  - Create utility libraries for common operations
  - Use dependency injection to make components reusable
  - Design APIs that are flexible and configurable
  
  **Example - Bad**:
  
  ```typescript
  function calculateUserTotal(userId: string) {
    const user = getUser(userId);
    return user.items.reduce((sum, item) => sum + item.price, 0);
  }
  ```
  
  **Example - Good**:
  
  ```typescript
  function calculateTotal<T extends { price: number }>(items: T[]): number {
    return items.reduce((sum, item) => sum + item.price, 0);
  }
  
  function calculateUserTotal(userId: string) {
    const user = getUser(userId);
    return calculateTotal(user.items);
  }
  ```
  
  ---
  
  ### 3. Abstract Functions and Abstractions
  
  **Principle**: Create abstractions that hide implementation details and provide clear, simple interfaces.
  
  **Practices**:
  
  - Use interfaces and abstract classes to define contracts
  - Create abstraction layers between different concerns
  - Hide complex implementation behind simple function signatures
  - Use dependency inversion - depend on abstractions, not concretions
  - Create factory functions/classes for object creation
  - Use strategy pattern for interchangeable algorithms
  
  **Example - Bad**:
  
  ```typescript
  function processPayment(amount: number, cardNumber: string, cvv: string) {
    // Direct implementation tied to specific payment processor
    fetch('https://stripe.com/api/charge', {
      method: 'POST',
      body: JSON.stringify({ amount, cardNumber, cvv }),
    });
  }
  ```
  
  **Example - Good**:
  
  ```typescript
  interface PaymentProcessor {
    processPayment(amount: number, details: PaymentDetails): Promise<PaymentResult>;
  }
  
  class StripeProcessor implements PaymentProcessor {
    async processPayment(amount: number, details: PaymentDetails): Promise<PaymentResult> {
      // Implementation
    }
  }
  
  function processPayment(processor: PaymentProcessor, amount: number, details: PaymentDetails) {
    return processor.processPayment(amount, details);
  }
  ```
  
  ---
  
  ### 4. Extensibility
  
  **Principle**: Design code that can be easily extended with new features without modifying existing code.
  
  **Practices**:
  
  - Follow the Open/Closed Principle: open for extension, closed for modification
  - Use plugin architectures and hooks for extensibility
  - Design with future requirements in mind (but don't over-engineer)
  - Use configuration over hardcoding
  - Create extension points through interfaces and callbacks
  - Use composition and dependency injection
  - Design APIs that can accommodate new parameters/options
  
  **Example - Bad**:
  
  ```typescript
  function sendNotification(user: User, type: string) {
    if (type === 'email') {
      sendEmail(user.email);
    } else if (type === 'sms') {
      sendSMS(user.phone);
    }
    // Adding new notification types requires modifying this function
  }
  ```
  
  **Example - Good**:
  
  ```typescript
  interface NotificationChannel {
    send(user: User): Promise<void>;
  }
  
  class EmailChannel implements NotificationChannel {
    async send(user: User): Promise<void> {
      // Implementation
    }
  }
  
  class SMSChannel implements NotificationChannel {
    async send(user: User): Promise<void> {
      // Implementation
    }
  }
  
  class NotificationService {
    constructor(private channels: NotificationChannel[]) {}
  
    async send(user: User): Promise<void> {
      await Promise.all(this.channels.map((channel) => channel.send(user)));
    }
  }
  // New notification types can be added without modifying existing code
  ```
  
  ---
  
  ### 5. Avoid Magic Numbers and Strings
  
  **Principle**: Use named constants instead of hardcoded values to improve readability and maintainability.
  
  **Practices**:
  
  - Extract all magic numbers into named constants
  - Use enums for related constants
  - Create configuration objects for settings
  - Use constants for API endpoints, timeouts, limits, etc.
  - Document why specific values are used
  
  **Example - Bad**:
  
  ```typescript
  if (user.age >= 18) {
    // What does 18 mean?
  }
  
  setTimeout(() => {
    // What does 3000 mean?
  }, 3000);
  
  if (status === 'active') {
    // What are the valid statuses?
  }
  ```
  
  **Example - Good**:
  
  ```typescript
  const MINIMUM_AGE_FOR_ADULTS = 18;
  const SESSION_TIMEOUT_MS = 3000;
  
  enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    SUSPENDED = 'suspended',
  }
  
  if (user.age >= MINIMUM_AGE_FOR_ADULTS) {
    // Clear intent
  }
  
  setTimeout(() => {
    // Clear intent
  }, SESSION_TIMEOUT_MS);
  
  if (status === UserStatus.ACTIVE) {
    // Type-safe and clear
  }
  ```
  
  ---
  
  ## Additional Best Practices
  
  ### 6. Single Responsibility Principle
  
  Each function, class, or module should have one reason to change.
  
  **Example**:
  
  ```typescript
  // Bad: Multiple responsibilities
  class User {
    save() {
      /* database logic */
    }
    sendEmail() {
      /* email logic */
    }
    validate() {
      /* validation logic */
    }
  }
  
  // Good: Single responsibility
  class User {
    validate() {
      /* validation only */
    }
  }
  
  class UserRepository {
    save(user: User) {
      /* database logic */
    }
  }
  
  class EmailService {
    sendToUser(user: User) {
      /* email logic */
    }
  }
  ```
  
  ### 7. Meaningful Names
  
  - Use descriptive names that reveal intent
  - Avoid abbreviations unless they're widely understood
  - Use verbs for functions, nouns for classes
  - Be consistent with naming conventions
  
  **Example**:
  
  ```typescript
  // Bad
  const d = new Date();
  const u = getUser();
  function calc(x, y) {}
  
  // Good
  const currentDate = new Date();
  const currentUser = getUser();
  function calculateTotal(price: number, quantity: number): number {}
  ```
  
  ### 8. Small Functions
  
  - Functions should do one thing and do it well
  - Keep functions short (ideally under 20 lines)
  - Extract complex logic into separate functions
  - Use descriptive function names instead of comments
  
  ### 9. Error Handling
  
  - Handle errors explicitly
  - Use appropriate error types
  - Provide meaningful error messages
  - Don't swallow errors silently
  - Use try-catch appropriately
  
  **Example**:
  
  ```typescript
  // Bad
  function divide(a: number, b: number) {
    return a / b; // Can throw division by zero
  }
  
  // Good
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
  ```
  
  ### 10. Comments and Documentation
  
  - Write self-documenting code (code should explain itself)
  - Use comments to explain "why", not "what"
  - Document complex algorithms or business logic
  - Keep comments up-to-date with code changes
  - Use JSDoc/TSDoc for public APIs
  
  ### 11. Type Safety
  
  - Use TypeScript types/interfaces effectively
  - Avoid `any` type unless absolutely necessary
  - Use union types and discriminated unions
  - Leverage type inference where appropriate
  - Create custom types for domain concepts
  
  **Example**:
  
  ```typescript
  // Bad
  function processUser(data: any) {
    return data.name;
  }
  
  // Good
  interface User {
    id: string;
    name: string;
    email: string;
  }
  
  function processUser(user: User): string {
    return user.name;
  }
  ```
  
  ### 12. Testing Considerations
  
  - Write testable code (pure functions, dependency injection)
  - Keep functions small and focused
  - Avoid hidden dependencies
  - Use mocks and stubs appropriately
  - Design for testability from the start
  
  ### 13. Performance vs. Readability
  
  - Prefer readability over premature optimization
  - Profile before optimizing
  - Use clear algorithms first, optimize if needed
  - Document performance-critical sections
  - Balance between clean code and performance requirements
  
  ### 14. Code Organization
  
  - Group related functionality together
  - Use modules/packages to organize code
  - Follow consistent file and folder structures
  - Separate concerns (UI, business logic, data access)
  - Use barrel exports (index files) appropriately
  
  ### 15. Configuration Management
  
  - Externalize configuration values
  - Use environment variables for environment-specific settings
  - Create configuration objects/interfaces
  - Validate configuration at startup
  - Provide sensible defaults
  
  **Example**:
  
  ```typescript
  // Bad
  const apiUrl = 'https://api.example.com';
  const timeout = 5000;
  
  // Good
  interface Config {
    apiUrl: string;
    timeout: number;
    maxRetries: number;
  }
  
  const config: Config = {
    apiUrl: process.env.API_URL || 'https://api.example.com',
    timeout: parseInt(process.env.TIMEOUT || '5000'),
    maxRetries: parseInt(process.env.MAX_RETRIES || '3'),
  };
  ```
  
  ---
  
  ## Code Review Checklist
  
  When reviewing code, check for:
  
  - [ ] No code duplication (DRY principle)
  - [ ] Meaningful variable and function names
  - [ ] No magic numbers or strings
  - [ ] Functions are small and focused
  - [ ] Proper error handling
  - [ ] Type safety maintained
  - [ ] Code is testable
  - [ ] Documentation where needed
  - [ ] Consistent code style
  - [ ] Proper abstraction levels
  - [ ] Extensibility considered
  - [ ] Single responsibility principle followed
  
  ---
  
  ## Summary
  
  Clean code is:
  
  - **Readable**: Easy to understand at a glance
  - **Maintainable**: Easy to modify and update
  - **Testable**: Easy to write tests for
  - **Extensible**: Easy to add new features
  - **Reusable**: Can be used in multiple contexts
  - **Well-documented**: Clear intent and purpose
  - **Type-safe**: Leverages type system effectively
  - **DRY**: No unnecessary repetition
  - **Abstracted**: Proper separation of concerns
  - **Configurable**: Uses constants and configuration over hardcoding
  
  Remember: Code is read far more often than it is written. Write code for your future self and your teammates.
author:
  name: Web Dev Cody
  link: "https://github.com/webdevcody"
  iconUrl: "https://github.com/webdevcody.png"
---
