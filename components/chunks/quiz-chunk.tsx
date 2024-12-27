/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
interface QuizProps {
  content: string; // JSON string containing quiz data
  sequence: number;
}

export function Quiz({ content, sequence }: QuizProps) {
  const quizData = JSON.parse(content);

  return (
    <div className="bg-neutral-100 p-4 rounded-lg my-4">
      <h3 className="font-semibold mb-4">Quiz</h3>
      {/* Add quiz rendering logic here */}
      <div className="space-y-4"></div>
      {quizData.questions.map((question: any, index: number) => (
        <div key={index} className="space-y-2">
          <div className="font-medium">{question.question}</div>
          <RadioGroup defaultValue="">
            {question.options.map((option: string, optIndex: number) => (
              <div key={optIndex} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`q${index}-${optIndex}`} />
                <Label htmlFor={`q${index}-${optIndex}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
      <Button className="mt-4">Submit</Button>
    </div>
  );
}
