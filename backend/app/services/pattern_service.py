"""Pattern generation orchestration service."""
from typing import Optional, List
from app.generators import PatternGenerator, TotePatternGenerator
from app.utils.exceptions import UnsupportedItemTypeError


class PatternService:
    """Service for pattern generation orchestration."""
    
    _generators: dict[str, type[PatternGenerator]] = {
        "tote": TotePatternGenerator,
        # Future patterns can be added here:
        # "hat": HatPatternGenerator,
        # "scarf": ScarfPatternGenerator,
        # "blanket": BlanketPatternGenerator,
    }
    
    def get_generator(self, item_type: str) -> Optional[PatternGenerator]:
        """Get a pattern generator for the specified item type."""
        generator_class = self._generators.get(item_type.lower())
        if generator_class:
            return generator_class()
        return None
    
    def get_supported_types(self) -> List[str]:
        """Get list of supported item types."""
        return list(self._generators.keys())
    
    def generate_pattern(
        self,
        width: float,
        height: float,
        stitch_per_gauge: float,
        rows_per_gauge: float,
        item_type: str = "tote"
    ) -> dict:
        """Generate a pattern using the appropriate generator."""
        generator = self.get_generator(item_type)
        
        if not generator:
            supported_types = self.get_supported_types()
            raise UnsupportedItemTypeError(
                f"Unsupported item type: {item_type}. Supported types: {supported_types}"
            )
        
        return generator.generate(
            width=width,
            height=height,
            stitch_per_gauge=stitch_per_gauge,
            rows_per_gauge=rows_per_gauge
        )
