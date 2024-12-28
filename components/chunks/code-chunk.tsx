import { ChunkProps } from "@/types";

export const renderCode = (chunk: ChunkProps) => (
  <pre className="bg-gray-100 p-2 rounded-md">
    <code>{chunk.content}</code>
  </pre>
);
