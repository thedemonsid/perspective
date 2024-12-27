/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

interface TitleProps {
  content: string;
  sequence: number;
}

export function Title({ content, sequence }: TitleProps) {
  return <h2 className="text-2xl font-bold mb-4">{content}</h2>;
}
