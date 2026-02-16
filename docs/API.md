# API Documentation

## Endpoints

### Health Check
- **GET** `/health`
- Returns: `{ "status": "ok", "version": "1.0.0" }`

### Get Pattern Types
- **GET** `/api/v1/pattern-types`
- Returns: `{ "types": ["tote", ...] }`

### Generate Pattern
- **POST** `/api/v1/generate-pattern`
- Request Body:
```json
{
  "width": 12.0,
  "height": 14.0,
  "stitch_per_gauge": 16.0,
  "rows_per_gauge": 14.0,
  "item_type": "tote"
}
```
- Returns:
```json
{
  "materials": {
    "yarn_skeins": 2.1,
    "yarn_yards": 420.0,
    "hook_size": "H/8 (5mm)",
    "width_stitches": 48,
    "height_rows": 49,
    "total_stitches": 2352
  },
  "instructions": [
    "Chain 50 stitches for foundation.",
    ...
  ]
}
```
