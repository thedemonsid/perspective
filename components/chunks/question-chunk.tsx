import { ChunkProps } from "@/types";

export const Question = ({chunk}:{chunk:ChunkProps}) => (
  <p className="text-gray-700 font-semibold">{chunk.content}</p>
);