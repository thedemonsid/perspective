import prisma from "@/lib/prisma";
import React from "react";

const Cards = async ({ params }: { params: Promise<{ lessonId: string }> }) => {
  const { lessonId } = await params;
  if (!lessonId) {
    return <div>No lesson found</div>;
  }
  const lesson = await prisma.lessons.findUnique({
    where: {
      id: lessonId,
    },
    include: {
      cards: {
        include: {
          chunks: true,
        },
      },
    },
  });
  if (!lesson) {
    return <div>No lesson found</div>;
  }
  console.log(lesson.sequence);
  return (
    <div className="flex justify-center items-center">
      {lesson.cards.map((card) => (
        <div key={card.id}>
          <div>
            {card.chunks.map((chunk) => (
              <div key={chunk.id} className="flex flex-col justify-center items-center">
                <h3 className="max-w-96 text-wrap max-h-[2000px] p-2 m-2">{chunk.content}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
