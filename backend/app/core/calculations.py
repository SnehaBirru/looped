"""Core math functions for pattern calculations."""
from typing import Dict


def calculate_yarn_needed(
    total_stitches: int,
    yarn_weight: str = "worsted",
    stitch_type: str = "single_crochet"
) -> Dict[str, float]:
    """
    Calculate yarn needed based on total stitches.
    
    Args:
        total_stitches: Total number of stitches in the pattern
        yarn_weight: Weight of yarn (worsted, dk, bulky, etc.)
        stitch_type: Type of stitch used
    
    Returns:
        Dictionary with yarn_yards and yarn_skeins
    """
    # Base estimates (yards per stitch) for different yarn weights
    YARN_ESTIMATES = {
        "lace": 0.2,
        "fingering": 0.3,
        "sport": 0.35,
        "dk": 0.4,
        "worsted": 0.5,
        "aran": 0.6,
        "bulky": 0.7,
        "super_bulky": 0.9,
    }
    
    # Skein sizes (yards per skein) for different weights
    SKEIN_SIZES = {
        "lace": 400,
        "fingering": 400,
        "sport": 300,
        "dk": 250,
        "worsted": 200,
        "aran": 200,
        "bulky": 150,
        "super_bulky": 120,
    }
    
    base_yards_per_stitch = YARN_ESTIMATES.get(yarn_weight.lower(), 0.5)
    yarn_yards = total_stitches * base_yards_per_stitch
    skein_size = SKEIN_SIZES.get(yarn_weight.lower(), 200)
    yarn_skeins = round(yarn_yards / skein_size, 1)
    
    return {
        "yarn_yards": round(yarn_yards, 1),
        "yarn_skeins": yarn_skeins,
    }


def calculate_hook_size(yarn_weight: str = "worsted") -> str:
    """Calculate recommended hook size based on yarn weight."""
    HOOK_SIZES = {
        "lace": "B/1 (2.25mm)",
        "fingering": "C/2 (2.75mm)",
        "sport": "E/4 (3.5mm)",
        "dk": "F/5 (3.75mm)",
        "worsted": "H/8 (5mm)",
        "aran": "I/9 (5.5mm)",
        "bulky": "K/10.5 (6.5mm)",
        "super_bulky": "M/13 (9mm)",
    }
    
    return HOOK_SIZES.get(yarn_weight.lower(), "H/8 (5mm)")
