/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface AudioProps {
  content: string; // URL of the audio file
  sequence: number;
}

export function Audio({ content, sequence }: AudioProps) {
  return (
    <audio controls className="w-full my-4">
      <source src={content} />
    </audio>
  );
}
