export enum ChunkType {
  TITLE = "TITLE",
  TEXT = "TEXT",
  PARAGRAPH = "PARAGRAPH",
  QUESTION = "QUESTION",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  CODE = "CODE",
  SIMULATION = "SIMULATION",
  QUIZ = "QUIZ",
}

export interface BaseChunk {
  id: number;
  type: ChunkType;
  sequence: number;
  content: string;
}

export interface QuizContent {
  question: string;
  options: string[];
  correct: number;
}
