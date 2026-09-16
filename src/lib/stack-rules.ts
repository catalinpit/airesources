// Rules a stack file must satisfy. The content schema enforces them at build
// time and the builder's client script enforces the same ones as people type,
// so this module must stay free of server-only imports.

export const STACK_LIMITS = {
  handle: 39,
  name: 60,
  bio: 200,
  note: 160,
} as const;

// Handles double as URL segments, so they follow GitHub username rules:
// lowercase letters, digits and inner hyphens.
export const HANDLE_PATTERN = new RegExp(`^[a-z0-9](?:[a-z0-9-]{0,${STACK_LIMITS.handle - 2}}[a-z0-9])?$`);

// Routes under /stack/ that a handle must not shadow.
export const RESERVED_HANDLES = new Set(['new', 'index']);

// A GitHub or X username; a leading "@" is tolerated and dropped by `stripAt`.
export const USERNAME_PATTERN = /^@?[A-Za-z0-9_-]{1,39}$/;

export const HTTP_URL_PATTERN = /^https?:\/\/\S+$/;

export function stripAt(username: string): string {
  return username.replace(/^@/, '');
}
