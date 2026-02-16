from typing import Optional, List
from .patterns import PatternGenerator, TotePatternGenerator


class PatternFactory:
    """Factory to create pattern generators based on item type."""
    
    _generators = {
        "tote": TotePatternGenerator,
        # Future patterns can be added here:
        # "hat": HatPatternGenerator,
        # "scarf": ScarfPatternGenerator,
        # "blanket": BlanketPatternGenerator,
    }
    
    @classmethod
    def get_generator(cls, item_type: str) -> Optional[PatternGenerator]:
        """Get a pattern generator for the specified item type."""
        generator_class = cls._generators.get(item_type.lower())
        if generator_class:
            return generator_class()
        return None
    
    @classmethod
    def get_supported_types(cls) -> List[str]:
        """Get list of supported item types."""
        return list(cls._generators.keys())
