import { ChunkProps } from "@/types";
const getYouTubeEmbedUrl = (url: string): string | null => {
  const videoIdMatch = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
export const renderVideo = (chunk: ChunkProps) => (
  <iframe
    width="560"
    height="315"
    src={getYouTubeEmbedUrl(chunk.content) || ""}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full h-48 object-cover rounded-md"
  />
);
