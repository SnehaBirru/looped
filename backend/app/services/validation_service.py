"""Input validation logic."""
from typing import Tuple


class ValidationService:
    """Service for validating pattern generation inputs."""
    
    MIN_DIMENSION = 0.1
    MAX_DIMENSION = 1000.0
    MIN_GAUGE = 0.1
    MAX_GAUGE = 100.0
    
    @classmethod
    def validate_dimensions(cls, width: float, height: float) -> Tuple[bool, str]:
        """Validate width and height dimensions."""
        if width < cls.MIN_DIMENSION or width > cls.MAX_DIMENSION:
            return False, f"Width must be between {cls.MIN_DIMENSION} and {cls.MAX_DIMENSION} inches"
        
        if height < cls.MIN_DIMENSION or height > cls.MAX_DIMENSION:
            return False, f"Height must be between {cls.MIN_DIMENSION} and {cls.MAX_DIMENSION} inches"
        
        return True, ""
    
    @classmethod
    def validate_gauge(cls, stitch_per_gauge: float, rows_per_gauge: float) -> Tuple[bool, str]:
        """Validate gauge measurements."""
        if stitch_per_gauge < cls.MIN_GAUGE or stitch_per_gauge > cls.MAX_GAUGE:
            return False, f"Stitches per gauge must be between {cls.MIN_GAUGE} and {cls.MAX_GAUGE}"
        
        if rows_per_gauge < cls.MIN_GAUGE or rows_per_gauge > cls.MAX_GAUGE:
            return False, f"Rows per gauge must be between {cls.MIN_GAUGE} and {cls.MAX_GAUGE}"
        
        return True, ""
