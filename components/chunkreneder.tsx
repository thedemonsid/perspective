"use client";
import { Title } from "@/components/chunks/title-chunk";
import { Text } from "@/components/chunks/text-chunk";
import { ImageChunk } from "@/components/chunks/image-chunk";
import { Video } from "@/components/chunks/video-chunk";
import { Quiz } from "@/components/chunks/quiz-chunk";
import { Simulation } from "@/components/chunks/simul-chunk";
import { BaseChunk, ChunkType } from "@/temptypes/chunks";

const chunkComponents = {
  [ChunkType.TITLE]: Title,
  [ChunkType.TEXT]: Text,
  [ChunkType.IMAGE]: ImageChunk,
  [ChunkType.VIDEO]: Video,
  [ChunkType.QUIZ]: Quiz,
  [ChunkType.SIMULATION]: Simulation,
} as const;

interface ChunkRendererProps {
  chunk: BaseChunk;
  onComplete?: () => void;
}

export function ChunkRenderer({ chunk, onComplete }: ChunkRendererProps) {
  const Component = chunkComponents[chunk.type];
  if (!Component) return null;

  return (
    <Component
      content={chunk.content}
      sequence={chunk.sequence}
      onComplete={onComplete}
    />
  );
}
