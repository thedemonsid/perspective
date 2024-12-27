/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

interface TextProps {
  content: string;
  sequence: number;
}

export function Text({ content, sequence }: TextProps) {
  return <span className="text-base">{content}</span>;
}
