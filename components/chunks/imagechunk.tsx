"use client";
import Image from "next/image";
interface ImageProps {
  content: string; // URL of the image
  sequence: number;
}

export function ImageChunk({ content, sequence }: ImageProps) {
  return (
    <Image
      src={content}
      alt={`Content image ${sequence}`}
      width={800}
      height={600}
      className="max-w-full h-auto rounded-lg my-4"
      priority={sequence === 1}
    />
  );
}
