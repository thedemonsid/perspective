import { ChunkProps } from "@/types";

export const renderText = (chunk: ChunkProps) => (
  <p className="text-gray-700">{chunk.content}</p>
);