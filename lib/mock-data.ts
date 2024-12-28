export const mockData = {
  courses: [
    {
      id: "course1",
      name: "Basic English Skills",
      description: "Learn the fundamentals of English language skills.",
      image: "english.jpg",
      courseType: "FREE",
      authors: ["Author1", "Author2"],
      chapters: [
        {
          id: "chapter1",
          sequence: 1,
          name: "Types Of Speech",
          description: "Understand different types of speech in English.",
          image: "speech.jpg",
          lessons: [
            {
              id: "lesson1",
              sequence: 1,
              name: "Active Speech",
              description: "Learn about active speech and its usage.",
              cards: [
                {
                  id: "card1",
                  sequence: 1,
                  chunks: [
                    {
                      id: "chunk1",
                      sequence: 1,
                      chunkType: "TITLE",
                      content: "Introduction to Active Speech",
                    },
                    {
                      id: "chunk2",
                      sequence: 2,
                      chunkType: "TEXT",
                      content: "Active speech is when the subject of the sentence performs the action.",
                    },
                    {
                      id: "chunk3",
                      sequence: 3,
                      chunkType: "PARAGRAPH",
                      content: "For example, in the sentence 'The cat chased the mouse,' the subject 'The cat' is performing the action of chasing.",
                    },
                    {
                      id: "chunk4",
                      sequence: 4,
                      chunkType: "QUESTION",
                      content: "What is the subject in the sentence 'The dog barked loudly'?",
                    },
                    {
                      id: "chunk5",
                      sequence: 5,
                      chunkType: "IMAGE",
                      content: "active_speech_example.jpg",
                    },
                    {
                      id: "chunk6",
                      sequence: 6,
                      chunkType: "VIDEO",
                      content: "https://example.com/active_speech_video.mp4",
                    },
                    {
                      id: "chunk7",
                      sequence: 7,
                      chunkType: "AUDIO",
                      content: "https://example.com/active_speech_audio.mp3",
                    },
                    {
                      id: "chunk8",
                      sequence: 8,
                      chunkType: "CODE",
                      content: "console.log('Active Speech Example');",
                    },
                    {
                      id: "chunk9",
                      sequence: 9,
                      chunkType: "SIMULATION",
                      content: "<iframe src='https://example.com/simulation'></iframe>",
                    },
                    {
                      id: "chunk10",
                      sequence: 10,
                      chunkType: "QUIZ",
                      content: JSON.stringify({
                        question: "Identify the active speech in the following sentences.",
                        options: [
                          "The ball was thrown by John.",
                          "John threw the ball.",
                          "The ball is being thrown.",
                          "The ball will be thrown."
                        ],
                        answer: "John threw the ball."
                      }),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
};