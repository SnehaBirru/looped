"""Dependency injection for API routes."""
from typing import Generator
from app.services.pattern_service import PatternService


def get_pattern_service() -> Generator[PatternService, None, None]:
    """Get pattern service instance."""
    yield PatternService()
