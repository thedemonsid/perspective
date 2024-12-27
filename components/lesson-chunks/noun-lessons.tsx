/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { ChunkRenderer } from "@/components/chunkreneder";
import { BaseChunk, ChunkType } from "@/temptypes/chunks";

const LESSON_CONTENT: BaseChunk[] = [
  {
    id: 1,
    type: ChunkType.TEXT,
    sequence: 1,
    title: "What is a Noun?",
    content: JSON.stringify({
      text: "A noun is a word that refers to a person, place, thing, or idea.",
      imageUrl: "/images/nouns-example.png",
      caption: "Examples of nouns in everyday life",
    }),
  },
  {
    id: 2,
    type: ChunkType.VIDEO,
    sequence: 2,
    title: "Types of Nouns",
    content: JSON.stringify({
      description: "Let's explore different types of nouns:",
      videoUrl: "https://www.youtube.com/embed/_uFsWCY7HcE",
    }),
  },
  {
    id: 3,
    type: ChunkType.QUIZ,
    sequence: 3,
    title: "Quick Check",
    content: JSON.stringify({
      question: "Which of these is a proper noun?",
      options: ["cat", "Paris", "building", "happiness"],
      correct: 1,
    }),
  },
];

// Update video chunk styling
const videoChunkStyles = {
  wrapper: "aspect-w-16 aspect-h-9 w-full",
  iframe: "w-full h-[400px] rounded-xl shadow-lg",
};

export default function NounsLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const progress = ((currentStep + 1) / LESSON_CONTENT.length) * 100;

  const handleNext = () => {
    if (currentStep < LESSON_CONTENT.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
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
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader className="border-b">
                  <h2 className="text-xl font-semibold">{chunk.title}</h2>
                </CardHeader>
                <CardContent className="p-6">
                  <ChunkRenderer chunk={chunk} onComplete={handleNext} />
                  {!completed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center mt-8"
                    >
                      <Button
                        onClick={handleNext}
                        className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        size="lg"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
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
                  <p className="mb-4">
                    You&apos;ve completed the lesson on nouns.
                  </p>
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
