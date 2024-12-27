/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface SimulationProps {
  content: string; // iframe URL
  sequence: number;
}

export function Simulation({ content, sequence }: SimulationProps) {
  return (
    <iframe
      src={content}
      className="w-full min-h-[400px] rounded-lg border my-4"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
