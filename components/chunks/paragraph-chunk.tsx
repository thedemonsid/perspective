import { ChunkProps } from "@/types";

export const renderParagraph = (chunk: ChunkProps) => (
  <p className="text-gray-700">{chunk.content}</p>
);