import { ChunkProps } from "@/types";

export const Simulation = ({chunk}:{chunk:ChunkProps}) => (
  <div dangerouslySetInnerHTML={{ __html: chunk.content }} />
);
