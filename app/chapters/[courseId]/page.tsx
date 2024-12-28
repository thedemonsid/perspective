import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const Chapters = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = await params;
  if (!courseId) {
    return <div>No course found</div>;
  }
  const course = await prisma.courses.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: true,
    },
  });
  if (!course) {
    return <div>No course found</div>;
  }
  return (
    <div className="flex justify-center items-center">
      {course.chapters.map((chapter) => (
        <Link href={`/lessons/${chapter.id}`} key={chapter.id}>
          <div key={chapter.id}>
            <h2>{chapter.name}</h2>
            <p>{chapter.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Chapters;
