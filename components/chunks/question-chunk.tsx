/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface QuestionProps {
  content: string;
  sequence: number;
}

export function Question({ content, sequence }: QuestionProps) {
  return (
    <div className="bg-neutral-100 p-4 rounded-lg mb-4">
      <p className="font-semibold">{content}</p>
    </div>
  );
}
