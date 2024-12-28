export type ChunkProps = {
  id: string;
  chunkType: string;
  content: string;
  sequence: number;
  createdAt: Date;
  updatedAt: Date;
  cardsId: string | null;
};
export type CardProps = {
  card: {
    chunks: ChunkProps[];
  } & {
    id: string;
    sequence: number;
    createdAt: Date;
    updatedAt: Date;
    lessonsId: string | null;
  };
};
