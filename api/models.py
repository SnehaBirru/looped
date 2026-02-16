from pydantic import BaseModel
from typing import Dict, List, Any


class PatternRequest(BaseModel):
    width: float
    height: float
    stitch_per_gauge: float
    rows_per_gauge: float
    item_type: str = "tote"


class PatternResponse(BaseModel):
    materials: Dict[str, Any]
    instructions: List[str]
