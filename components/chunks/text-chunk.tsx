import { ChunkProps } from "@/types";

export const Text = ({chunk}:{chunk:ChunkProps}) => (
  <p className="text-gray-700">{chunk.content}</p>
);