"""App-wide constants."""
# Gauge constants
GAUGE_FACTOR = 4  # Standard gauge is measured over 4 inches

# Dimension limits
MIN_DIMENSION = 0.1
MAX_DIMENSION = 1000.0

# Gauge limits
MIN_GAUGE = 0.1
MAX_GAUGE = 100.0

# Yarn estimates (yards per stitch)
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

# Skein sizes (yards per skein)
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
