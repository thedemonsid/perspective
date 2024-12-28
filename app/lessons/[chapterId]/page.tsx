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

const Chapter = async ({ params }: { params: { chapterId: string } }) => {
  const { chapterId } = params;
  const chapter = await prisma.chapters.findUnique({
    where: {
      id: chapterId,
    },
    include: {
      lessons: {
        orderBy: {
          sequence: "asc",
        },
      },
    },
  });

  if (!chapter) {
    return <div>No chapter found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4">{chapter.name}</h1>
        <p className="text-gray-700 mb-4">{chapter.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapter.lessons.map((lesson) => (
            <Card key={lesson.id} className="shadow-lg">
              <CardHeader>
                <CardTitle>
                  {lesson.sequence}. {lesson.name}
                </CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/cards/${lesson.id}`}>
                  <Button>View Cards</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
