"""Pytest fixtures."""
import pytest
from app.services.pattern_service import PatternService


@pytest.fixture
def pattern_service():
    """Fixture for pattern service."""
    return PatternService()
