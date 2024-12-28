import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const Lessons = async ({
  params,
}: {
  params: Promise<{ chapterId: string }>;
}) => {
  const { chapterId } = await params;
  if (!chapterId) {
    return <div>No chapter found</div>;
  }
  const chapter = await prisma.chapters.findUnique({
    where: {
      id: chapterId,
    },
    include: {
      lessons: true,
    },
  });
  if (!chapter) {
    return <div>No chapter found</div>;
  }
  return (
    <div className="flex justify-center items-center">
      {chapter.lessons.map((lesson) => (
        <Link href={`/cards/${lesson.id}`} key={lesson.id}>
          <div key={lesson.id}>
            <h2>{lesson.name}</h2>
            <p>{lesson.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Lessons;
