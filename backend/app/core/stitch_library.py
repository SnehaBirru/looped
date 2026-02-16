"""Stitch definitions and metadata."""
from typing import Dict, Any
from enum import Enum


class StitchType(str, Enum):
    """Supported stitch types."""
    SINGLE_CROCHET = "single_crochet"
    DOUBLE_CROCHET = "double_crochet"
    HALF_DOUBLE_CROCHET = "half_double_crochet"
    TREBLE_CROCHET = "treble_crochet"
    SLIP_STITCH = "slip_stitch"


class StitchLibrary:
    """Library of stitch definitions and metadata."""
    
    STITCH_DEFINITIONS: Dict[str, Dict[str, Any]] = {
        "single_crochet": {
            "name": "Single Crochet",
            "abbreviation": "sc",
            "height_multiplier": 1.0,
            "yarn_usage_multiplier": 1.0,
        },
        "double_crochet": {
            "name": "Double Crochet",
            "abbreviation": "dc",
            "height_multiplier": 2.0,
            "yarn_usage_multiplier": 1.5,
        },
        "half_double_crochet": {
            "name": "Half Double Crochet",
            "abbreviation": "hdc",
            "height_multiplier": 1.5,
            "yarn_usage_multiplier": 1.25,
        },
        "treble_crochet": {
            "name": "Treble Crochet",
            "abbreviation": "tr",
            "height_multiplier": 3.0,
            "yarn_usage_multiplier": 2.0,
        },
        "slip_stitch": {
            "name": "Slip Stitch",
            "abbreviation": "sl st",
            "height_multiplier": 0.5,
            "yarn_usage_multiplier": 0.5,
        },
    }
    
    @classmethod
    def get_stitch_info(cls, stitch_type: str) -> Dict[str, Any]:
        """Get information about a specific stitch type."""
        return cls.STITCH_DEFINITIONS.get(stitch_type.lower(), {})
