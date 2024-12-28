import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { renderTitle } from "./chunks/title-chunk";
import { renderText } from "./chunks/text-chunk";
import { renderParagraph } from "./chunks/paragraph-chunk";
import { renderQuestion } from "./chunks/question-chunk";
import { renderImage } from "./chunks/image-chunk";
import { renderVideo } from "./chunks/video-chunk";
import { renderAudio } from "./chunks/audio-chunk";
import { renderCode } from "./chunks/code-chunk";
import { renderSimulation } from "./chunks/simul-chunk";
import { renderQuiz } from "./chunks/quiz-chunk";
import { CardProps, ChunkProps } from "@/types";

const renderChunk = (chunk: ChunkProps) => {
  switch (chunk.chunkType) {
    case "TITLE":
      return renderTitle(chunk);
    case "TEXT":
      return renderText(chunk);
    case "PARAGRAPH":
      return renderParagraph(chunk);
    case "QUESTION":
      return renderQuestion(chunk);
    case "IMAGE":
      return renderImage(chunk);
    case "VIDEO":
      return renderVideo(chunk);
    case "AUDIO":
      return renderAudio(chunk);
    case "CODE":
      return renderCode(chunk);
    case "SIMULATION":
      return renderSimulation(chunk);
    case "QUIZ":
      return renderQuiz(chunk);
    default:
      return null;
  }
};

const CardComponent = ({ card }: CardProps) => {
  return (
    <Card key={card.id}>
      <CardContent className="py-2">
        {card.chunks.map((chunk) => (
          <div key={chunk.id} className="mb-4">
            {renderChunk(chunk)}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
