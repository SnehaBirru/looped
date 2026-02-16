from abc import ABC, abstractmethod
from typing import Dict, List, Any


class PatternGenerator(ABC):
    """Base class for all pattern generators."""
    
    GAUGE_FACTOR = 4  # Standard gauge is measured over 4 inches
    
    @abstractmethod
    def calculate_dimensions(
        self, width: float, height: float, stitch_per_gauge: float, rows_per_gauge: float
    ) -> Dict[str, int]:
        """Calculate stitch and row counts from dimensions."""
        pass
    
    @abstractmethod
    def calculate_materials(
        self, width_stitches: int, height_rows: int, total_stitches: int
    ) -> Dict[str, Any]:
        """Calculate materials needed for the pattern."""
        pass
    
    @abstractmethod
    def generate_instructions(
        self, width_stitches: int, height_rows: int
    ) -> List[str]:
        """Generate step-by-step instructions."""
        pass
    
    def generate(
        self, width: float, height: float, stitch_per_gauge: float, rows_per_gauge: float
    ) -> Dict[str, Any]:
        """Main method to generate a complete pattern."""
        dimensions = self.calculate_dimensions(width, height, stitch_per_gauge, rows_per_gauge)
        
        materials = self.calculate_materials(
            dimensions["width_stitches"],
            dimensions["height_rows"],
            dimensions["total_stitches"]
        )
        
        instructions = self.generate_instructions(
            dimensions["width_stitches"],
            dimensions["height_rows"]
        )
        
        return {
            "materials": materials,
            "instructions": instructions
        }
