import { ChunkProps } from "@/types";

export const Paragraph = ({chunk}:{chunk:ChunkProps}) => (
  <p className="text-gray-700">{chunk.content}</p>
);