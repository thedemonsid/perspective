"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const LESSON_CONTENT = [
  {
    id: 1,
    type: "text",
    title: "What is a Noun?",
    content: "A noun is a word that refers to a person, place, thing, or idea.",
    media: {
      url: "/images/nouns-example.png",
      caption: "Examples of nouns in everyday life",
    },
  },
  {
    id: 2,
    type: "video",
    title: "Types of Nouns",
    content: "Let's explore different types of nouns:",
    media: {
      url: "https://www.youtube.com/embed/_uFsWCY7HcE",
    },
  },
  {
    id: 3,
    type: "quiz",
    title: "Quick Check",
    content: "Which of these is a proper noun?",
    quiz: {
      options: ["cat", "Paris", "building", "happiness"],
      correct: 1,
    },
  },
];

export default function NounsLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState({});

  const progress = ((currentStep + 1) / LESSON_CONTENT.length) * 100;

  const handleNext = () => {
    if (currentStep < LESSON_CONTENT.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleQuizAnswer = (id: number, answer: number) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
    handleNext();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="sticky top-0 z-10 bg-background pb-4">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground mt-2">
          {Math.round(progress)}% Complete
        </p>
      </div>

      <ScrollArea className="h-[calc(90vh-8rem)]">
        <div className="space-y-8">
          {LESSON_CONTENT.slice(0, currentStep + 1).map((chunk) => (
            <motion.div
              key={chunk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">{chunk.title}</h2>
                </CardHeader>
                <CardContent>
                  {chunk.type === "quiz" ? (
                    <div className="space-y-4">
                      <p className="text-lg">{chunk.content}</p>
                      <div className="grid gap-2">
                        {chunk.quiz.options.map((option, idx) => (
                          <Button
                            key={idx}
                            variant={
                              answers[chunk.id] === idx
                                ? idx === chunk.quiz.correct
                                  ? "default"
                                  : "destructive"
                                : "outline"
                            }
                            onClick={() => handleQuizAnswer(chunk.id, idx)}
                            disabled={answers[chunk.id] !== undefined}
                            className="w-full text-left justify-start"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-lg mb-4">{chunk.content}</p>
                      {chunk.media &&
                        (chunk.type === "video" ? (
                          <iframe
                            src={chunk.media.url}
                            className="w-full aspect-video rounded-lg mb-4"
                            allowFullScreen
                          />
                        ) : (
                          <Image
                            src={chunk.media.url}
                            alt={chunk.media.caption || ""}
                            width={800}
                            height={400}
                            className="w-full rounded-lg mb-4"
                          />
                        ))}
                      <Button onClick={handleNext} className="mt-4">
                        Continue <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Lesson Complete! 🎉
                  </h2>
                  <p className="mb-4">You've completed the lesson on nouns.</p>
                  <Button onClick={() => alert("Next lesson")}>
                    Next Lesson
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
