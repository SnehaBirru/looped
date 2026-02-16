"""Gauge calculation helpers."""
from typing import Dict


class GaugeService:
    """Service for gauge-related calculations."""
    
    GAUGE_FACTOR = 4  # Standard gauge is measured over 4 inches
    
    @classmethod
    def calculate_stitches_per_inch(cls, stitches_per_gauge: float) -> float:
        """Calculate stitches per inch from gauge measurement."""
        return stitches_per_gauge / cls.GAUGE_FACTOR
    
    @classmethod
    def calculate_rows_per_inch(cls, rows_per_gauge: float) -> float:
        """Calculate rows per inch from gauge measurement."""
        return rows_per_gauge / cls.GAUGE_FACTOR
    
    @classmethod
    def calculate_dimensions(
        cls,
        width_inches: float,
        height_inches: float,
        stitches_per_gauge: float,
        rows_per_gauge: float
    ) -> Dict[str, int]:
        """Calculate stitch and row counts from dimensions and gauge."""
        stitches_per_inch = cls.calculate_stitches_per_inch(stitches_per_gauge)
        rows_per_inch = cls.calculate_rows_per_inch(rows_per_gauge)
        
        width_stitches = int(width_inches * stitches_per_inch)
        height_rows = int(height_inches * rows_per_inch)
        total_stitches = width_stitches * height_rows
        
        return {
            "width_stitches": width_stitches,
            "height_rows": height_rows,
            "total_stitches": total_stitches,
        }
