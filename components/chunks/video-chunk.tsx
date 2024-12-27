/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
interface VideoProps {
  content: string;
  sequence: number;
  onComplete?: () => void;
}

export function Video({ content, sequence, onComplete }: VideoProps) {
  const data = JSON.parse(content);

  return (
    <div className="space-y-6">
      <p className="text-lg">{data.description}</p>
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src={data.videoUrl}
          className="w-full h-[400px] rounded-xl shadow-lg"
          allowFullScreen
        />
      </div>
    </div>
  );
}
