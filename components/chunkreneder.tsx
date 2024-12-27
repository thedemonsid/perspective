/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Title } from "@/components/chunks/titlechunk";
import { Text } from "@/components/chunks/textchunk";
import { ImageChunk } from "@/components/chunks/imagechunk";
import { Video } from "@/components/chunks/videochunk";
import { Quiz } from "@/components/chunks/quizchunk";
import { Simulation } from "@/components/chunks/simulchunk";
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
