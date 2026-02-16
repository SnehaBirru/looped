"""Helper validation functions."""
from app.utils.exceptions import ValidationError
from app.utils.constants import MIN_DIMENSION, MAX_DIMENSION, MIN_GAUGE, MAX_GAUGE


def validate_positive_number(value: float, field_name: str) -> None:
    """Validate that a number is positive."""
    if value <= 0:
        raise ValidationError(f"{field_name} must be a positive number")


def validate_dimension(value: float, dimension_name: str) -> None:
    """Validate dimension values."""
    if value < MIN_DIMENSION or value > MAX_DIMENSION:
        raise ValidationError(
            f"{dimension_name} must be between {MIN_DIMENSION} and {MAX_DIMENSION} inches"
        )


def validate_gauge(value: float, gauge_name: str) -> None:
    """Validate gauge values."""
    if value < MIN_GAUGE or value > MAX_GAUGE:
        raise ValidationError(
            f"{gauge_name} must be between {MIN_GAUGE} and {MAX_GAUGE}"
        )
