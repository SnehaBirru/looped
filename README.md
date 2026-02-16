# Looped

A crochet pattern generator that creates custom patterns based on user inputs.

## Project Structure

```
looped/
├── backend/          # FastAPI backend
├── frontend/         # Next.js frontend
├── docs/             # Documentation
└── .github/          # GitHub workflows
```

## Quick Start

See [SETUP.md](docs/SETUP.md) for detailed setup instructions.

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Documentation

- [API Documentation](docs/API.md)
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Setup Instructions](docs/SETUP.md)
- [Engineering Requirements](docs/ERD.md)

## Tech Stack

- **Backend**: FastAPI, Python 3.10+
- **Frontend**: Next.js 14, React 18, TypeScript
- **Architecture**: Monorepo with modular design
