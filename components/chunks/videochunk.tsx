/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface VideoProps {
  content: string; // URL of the video
  sequence: number;
}

export function Video({ content, sequence }: VideoProps) {
  return (
    <video controls className="max-w-full h-auto rounded-lg my-4">
      <source src={content} />
    </video>
  );
}
