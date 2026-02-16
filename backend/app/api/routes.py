"""API route definitions."""
from fastapi import APIRouter, HTTPException, Depends
from app.models import PatternRequest, PatternResponse
from app.services.pattern_service import PatternService
from app.api.dependencies import get_pattern_service

router = APIRouter()


@router.get("/pattern-types")
async def get_pattern_types(
    service: PatternService = Depends(get_pattern_service)
):
    """Get list of supported pattern types."""
    return {"types": service.get_supported_types()}


@router.post("/generate-pattern", response_model=PatternResponse)
async def generate_pattern(
    request: PatternRequest,
    service: PatternService = Depends(get_pattern_service)
):
    """Generate a crochet pattern based on the request."""
    try:
        pattern = service.generate_pattern(
            width=request.width,
            height=request.height,
            stitch_per_gauge=request.stitch_per_gauge,
            rows_per_gauge=request.rows_per_gauge,
            item_type=request.item_type
        )
        return PatternResponse(
            materials=pattern["materials"],
            instructions=pattern["instructions"]
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
