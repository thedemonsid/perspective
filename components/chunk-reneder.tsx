import React from "react";
import { Card, CardContent } from "./ui/card";
import { Title } from "./chunks/title-chunk";
import { Text } from "./chunks/text-chunk";
import { Paragraph } from "./chunks/paragraph-chunk";
import { Question } from "./chunks/question-chunk";
import { ImageComponent } from "./chunks/image-chunk";
import { Video } from "./chunks/video-chunk";
import { Audio } from "./chunks/audio-chunk";
import { Code } from "./chunks/code-chunk";
import { Simulation } from "./chunks/simul-chunk";
import { Quiz } from "./chunks/quiz-chunk";
import { CardProps, ChunkProps } from "@/types";

const renderChunk = (chunk: ChunkProps) => {
  switch (chunk.chunkType) {
    case "TITLE":
      return <Title chunk={chunk}></Title>;
    case "TEXT":
      return <Text chunk={chunk}></Text>;
    case "PARAGRAPH":
      return <Paragraph chunk={chunk}></Paragraph>;
    case "QUESTION":
      return <Question chunk={chunk}></Question>;
    case "IMAGE":
      return <ImageComponent chunk={chunk}></ImageComponent>;
    case "VIDEO":
      return <Video chunk={chunk}></Video>;
    case "AUDIO":
      return <Audio chunk={chunk}></Audio>;
    case "CODE":
      return <Code chunk={chunk}></Code>;
    case "SIMULATION":
      return <Simulation chunk={chunk}></Simulation>;
    case "QUIZ":
      return <Quiz chunk={chunk}></Quiz>;
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
