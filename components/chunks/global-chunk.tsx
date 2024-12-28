import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
type card = {
  card: {
    chunks: {
      id: string;
      chunkType: string;
      content: string;
      sequence: number;
      createdAt: Date;
      updatedAt: Date;
      cardsId: string | null;
    }[];
  } & {
    id: string;
    sequence: number;
    createdAt: Date;
    updatedAt: Date;
    lessonsId: string | null;
  };
};
const CardComponent = ({ card }: card) => {
  return (
    <Card key={card.id}>
      <CardContent className="py-2">
        {card.chunks.map((chunk) => (
          <div key={chunk.id} className="mb-4">
            {chunk.chunkType === "TITLE" && (
              <h3 className="text-2xl font-bold">{chunk.content}</h3>
            )}
            {chunk.chunkType === "TEXT" && (
              <p className="text-gray-700">{chunk.content}</p>
            )}
            {chunk.chunkType === "PARAGRAPH" && (
              <p className="text-gray-700">{chunk.content}</p>
            )}
            {chunk.chunkType === "QUESTION" && (
              <p className="text-gray-700 font-semibold">{chunk.content}</p>
            )}
            {chunk.chunkType === "IMAGE" && (
              <Image
                src={chunk.content}
                alt="Chunk Image"
                width={800}
                height={400}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            {chunk.chunkType === "VIDEO" && (
              <video
                src={chunk.content}
                controls
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            {chunk.chunkType === "AUDIO" && (
              <audio src={chunk.content} controls className="w-full" />
            )}
            {chunk.chunkType === "CODE" && (
              <pre className="bg-gray-100 p-2 rounded-md">
                <code>{chunk.content}</code>
              </pre>
            )}
            {chunk.chunkType === "SIMULATION" && (
              <div dangerouslySetInnerHTML={{ __html: chunk.content }} />
            )}
            {chunk.chunkType === "QUIZ" && (
              <pre className="bg-gray-100 p-2 rounded-md">
                <code>{chunk.content}</code>
              </pre>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
