import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";

const Course = async ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = await params;
  const course = await prisma.courses.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: {
        orderBy: {
          sequence: "asc",
        },
      },
    },
  });

  if (!course) {
    return <div>No course found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
        <p className="text-gray-700 mb-4">{course.description}</p>
        {course.image && (
          <Image
            src={course.image}
            alt={course.name}
            width={800}
            height={400}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.chapters.map((chapter) => (
            <Card key={chapter.id} className="shadow-lg">
              <CardHeader>
                <CardTitle>
                  {chapter.sequence}. {chapter.name}
                </CardTitle>
                <CardDescription>{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {chapter.image && (
                  <Image
                    src={chapter.image}
                    alt={chapter.name}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <Link href={`/lessons/${chapter.id}`}>
                  <Button>View Lessons</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
