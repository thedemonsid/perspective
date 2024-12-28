import { ChunkProps } from "@/types";

export const renderSimulation = (chunk: ChunkProps) => (
  <div dangerouslySetInnerHTML={{ __html: chunk.content }} />
);
