# Architecture Overview

## Backend Architecture

The backend follows a layered architecture:

- **API Layer** (`app/api/`): Route definitions and dependency injection
- **Service Layer** (`app/services/`): Business logic orchestration
- **Generator Layer** (`app/generators/`): Pattern-specific generation logic
- **Core Layer** (`app/core/`): Core functionality (stitches, calculations, formatting)
- **Models Layer** (`app/models/`): Data models and schemas
- **Utils Layer** (`app/utils/`): Shared utilities and constants

## Frontend Architecture

The frontend uses Next.js App Router with a component-based structure:

- **Pages** (`src/app/`): Next.js pages using App Router
- **Components** (`src/components/`): Reusable React components
- **Lib** (`src/lib/`): Utilities, hooks, types, and API client
- **Context** (`src/lib/context/`): Global state management

## Data Flow

1. User submits form → Frontend API client
2. API client → Backend API endpoint
3. API endpoint → Pattern Service
4. Pattern Service → Pattern Generator
5. Pattern Generator → Core calculations
6. Results flow back through the chain
