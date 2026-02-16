"""Custom exceptions."""


class PatternGeneratorError(Exception):
    """Base exception for pattern generator errors."""
    pass


class UnsupportedItemTypeError(PatternGeneratorError):
    """Raised when an unsupported item type is requested."""
    pass


class ValidationError(PatternGeneratorError):
    """Raised when input validation fails."""
    pass


class CalculationError(PatternGeneratorError):
    """Raised when a calculation error occurs."""
    pass
