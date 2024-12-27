/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface ParagraphProps {
  content: string;
  sequence: number;
}

export function Paragraph({ content, sequence }: ParagraphProps) {
  return <p className="text-base mb-4">{content}</p>;
}
