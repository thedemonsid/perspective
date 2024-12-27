export enum ChunkType {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  QUIZ = "QUIZ",
}

export interface BaseChunk {
  id: number;
  type: ChunkType;
  sequence: number;
  title: string;
  content: string;
}
