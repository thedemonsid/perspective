import prisma from "@/lib/prisma";
import Link from "next/link";

const Courses = async () => {
  const courses = await prisma.courses.findMany();
  if (!courses) {
    return <div>No courses found</div>;
  }
  return (
    <div className="flex justify-center items-center">
      {courses.map((course) => (
        <Link href={`/chapters/${course.id}`} key={course.id}>
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Courses;
