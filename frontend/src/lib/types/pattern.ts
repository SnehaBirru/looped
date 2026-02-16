export interface Pattern {
  id?: string;
  content: string;
  itemType?: string;
  stitchType?: string;
  createdAt?: string;
}

export interface PatternGenerateRequest {
  itemType: string;
  width: number;
  height: number;
  gaugeStitches: number;
  gaugeRows: number;
  stitchType: string;
  imageUrl?: string;
}
