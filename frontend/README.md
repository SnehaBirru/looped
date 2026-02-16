# Looped Frontend

Next.js frontend for the crochet pattern generator.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components
  - `ui/` - Reusable UI components
  - `forms/` - Form components
  - `pattern/` - Pattern display components
  - `layout/` - Layout components
- `src/lib/` - Utilities and helpers
  - `api/` - API client and endpoints
  - `types/` - TypeScript type definitions
  - `hooks/` - Custom React hooks
  - `utils/` - Utility functions
  - `context/` - React context providers
