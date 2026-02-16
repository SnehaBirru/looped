# Looped Backend

FastAPI backend for the crochet pattern generator.

## Setup

1. Create a virtual environment:
```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Run the server:
```bash
uvicorn app.main:app --reload --port 8000
```

## Project Structure

- `app/` - Main application code
  - `api/` - API routes and dependencies
  - `core/` - Core functionality (stitches, calculations, formatting)
  - `generators/` - Pattern generators
  - `models/` - Pydantic models
  - `services/` - Business logic services
  - `utils/` - Utility functions

## Testing

```bash
pytest
```
