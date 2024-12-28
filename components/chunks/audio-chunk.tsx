import { ChunkProps } from "@/types";

export const Audio = ({chunk}:{chunk:ChunkProps}) => (
  <audio src={chunk.content} controls className="w-full" />
);
