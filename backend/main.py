from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .models import PatternRequest, PatternResponse
from .pattern_factory import PatternFactory

app = FastAPI()

# Enable CORS for localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.get("/pattern-types")
async def get_pattern_types():
    """Get list of supported pattern types."""
    return {"types": PatternFactory.get_supported_types()}


@app.post("/generate-pattern", response_model=PatternResponse)
async def generate_pattern(request: PatternRequest):
    """Generate a crochet pattern based on the request."""
    # Get the appropriate pattern generator
    generator = PatternFactory.get_generator(request.item_type)
    
    if not generator:
        supported_types = PatternFactory.get_supported_types()
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported item type: {request.item_type}. Supported types: {supported_types}"
        )
    
    # Generate the pattern
    pattern = generator.generate(
        width=request.width,
        height=request.height,
        stitch_per_gauge=request.stitch_per_gauge,
        rows_per_gauge=request.rows_per_gauge
    )
    
    return PatternResponse(
        materials=pattern["materials"],
        instructions=pattern["instructions"]
    )
