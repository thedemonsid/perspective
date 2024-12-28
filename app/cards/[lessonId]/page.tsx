import prisma from "@/lib/prisma";
import CardComponent from "@/components/chunk-reneder";

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
    <div className="max-w-lg mx-auto py-4">
      <div className="bg-white rounded-lg p-2">
        <div className="flex flex-col justify-center gap-2">
          {lesson.cards.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
