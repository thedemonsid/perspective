import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";

const Lesson = async ({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) => {
  const { lessonId } = await params;
  const lesson = await prisma.lessons.findUnique({
    where: {
      id: lessonId,
    },
    include: {
      cards: {
        include: {
          chunks: {
            orderBy: {
              sequence: "asc",
            },
          },
        },
        orderBy: {
          sequence: "asc",
        },
      },
    },
  });

  if (!lesson) {
    return <div>No lesson found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">{lesson.name}</h1>
        <p className="text-gray-700 mb-4">{lesson.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lesson.cards.map((card) => (
            <Card key={card.id} className="shadow-lg">
              <CardHeader>
                <CardTitle>Card {card.sequence}</CardTitle>
              </CardHeader>
              <CardContent>
                {card.chunks.map((chunk) => (
                  <div key={chunk.id} className="mb-4">
                    {chunk.chunkType === "TITLE" && (
                      <h3 className="text-xl font-bold">{chunk.content}</h3>
                    )}
                    {chunk.chunkType === "TEXT" && (
                      <p className="text-gray-700">{chunk.content}</p>
                    )}
                    {chunk.chunkType === "PARAGRAPH" && (
                      <p className="text-gray-700">{chunk.content}</p>
                    )}
                    {chunk.chunkType === "QUESTION" && (
                      <p className="text-gray-700 font-semibold">
                        {chunk.content}
                      </p>
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
                      <div
                        dangerouslySetInnerHTML={{ __html: chunk.content }}
                      />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
