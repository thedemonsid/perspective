"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { ChunkProps } from "@/types";

type QuizProps = {
  question: string;
  options: string[];
  answer: number;
  why: string;
};

const demoQuiz: QuizProps = {
  question: "What is the capital of France?",
  options: ["Paris", "London", "Berlin", "Madrid"],
  answer: 0,
  why: "Paris is the capital of France.",
};

export const Quiz = ({ chunk }: { chunk: ChunkProps }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (index: number) => {
    if (!showAnswer) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setShowAnswer(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {demoQuiz.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {demoQuiz.options.map((option, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={selectedOption === index ? "secondary" : "outline"}
                className={`w-full justify-start text-left ${
                  showAnswer && index === demoQuiz.answer
                    ? "bg-green-100 hover:bg-green-200"
                    : showAnswer &&
                      index === selectedOption &&
                      index !== demoQuiz.answer
                    ? "bg-red-100 hover:bg-red-200"
                    : ""
                }`}
                onClick={() => handleOptionClick(index)}
              >
                {option}
                {showAnswer && index === demoQuiz.answer && (
                  <CheckCircle className="ml-auto h-4 w-4 text-green-500" />
                )}
                {showAnswer &&
                  index === selectedOption &&
                  index !== demoQuiz.answer && (
                    <XCircle className="ml-auto h-4 w-4 text-red-500" />
                  )}
              </Button>
            </motion.li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={selectedOption === null || showAnswer}
        >
          Submit
        </Button>
      </CardFooter>
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent>
              <p className="mt-4 text-gray-600 italic">{demoQuiz.why}</p>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
