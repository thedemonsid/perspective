export enum ChunkType {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  QUIZ = "QUIZ",
  SIMULATION = "SIMULATION",
  TITLE = "TITLE",
  IMAGE = "IMAGE",
}

export interface BaseChunk {
  id: number;
  type: ChunkType;
  sequence: number;
  title: string;
  content: string;
}
