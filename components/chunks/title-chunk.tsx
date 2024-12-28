import { ChunkProps } from "@/types";

export const renderTitle = (chunk: ChunkProps) => (
  <h3 className="text-2xl font-bold">{chunk.content}</h3>
);
