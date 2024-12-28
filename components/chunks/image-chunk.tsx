import { ChunkProps } from "@/types";
import Image from "next/image";

export const renderImage = (chunk: ChunkProps) => (
  <Image
    src={chunk.content}
    alt="Chunk Image"
    width={800}
    height={400}
    className="w-full h-48 object-cover rounded-md"
  />
);
