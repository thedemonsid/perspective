import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";
import CardComponent from "@/components/chunks/global-chunk";

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
    <div className="container  p-4">
      <div className="bg-white shadow-md rounded-lg p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {lesson.cards.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
