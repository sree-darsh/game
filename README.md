# Memory Card Game

A browser-based Memory Card Game built with React and TypeScript.

## Features

- 4x4 memory game board
- 8 unique matching pairs
- Randomized card shuffle
- Match and mismatch handling
- Move counter
- Restart game functionality
- Smooth animations and transitions

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- pnpm

---

# Setup Instructions

## Install dependencies

```bash
pnpm install
```

## Run development server

```bash
pnpm dev
```

## Build project

```bash
pnpm build
```

---

# Project Structure

src/
├── components/
├── hooks/
├── utils/
├── types/

---

# Approach

The application is separated into reusable UI components and isolated game logic.

- Components handle UI rendering
- Custom hooks manage game state and logic
- Utility functions contain reusable helper logic

This structure keeps the application scalable and maintainable.

---

# Key Decisions

## React + TypeScript

TypeScript improves maintainability and reduces runtime issues through static typing.

## Tailwind CSS

Tailwind was used for faster styling and easier component-based UI development.

## Custom Hook

The game logic is extracted into a custom hook to improve readability and separation of concerns.

---

# Assumptions

- Only two cards can be flipped at a time
- Matched cards remain visible
- The board reshuffles on every new game

---

# Trade-offs

- React local state was sufficient for the current application size, so additional state management libraries were not introduced.
- The focus was kept on clean architecture and gameplay rather than adding unnecessary complexity.
