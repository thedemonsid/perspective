import { ChunkProps } from "@/types";

export const renderAudio = (chunk: ChunkProps) => (
  <audio src={chunk.content} controls className="w-full" />
);
