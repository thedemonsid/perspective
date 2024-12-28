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

const Courses = async () => {
  const courses = await prisma.courses.findMany();
  if (!courses) {
    return <div>No courses found</div>;
  }
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="shadow-lg">
          <CardHeader>
            <CardTitle>{course.name}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {course.image && (
              <Image
                src={course.image}
                alt={course.name}
                width={800}
                height={400}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{course.courseType}</span>
              <Link href={`/chapters/${course.id}`}>
                <Button>View Chapters</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
