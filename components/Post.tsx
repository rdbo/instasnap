import { Heart, MessageCircle, Share } from "lucide-react";

export interface PostProps {
  media: { source: string; kind: "image" | "video" }[];
  text: string;
  likes: number;
  comments: number;
}

function shortenNumber(n: number): string {
  const convertionTable = ["K", "M", "B", "T"];

  for (var i = -1; i < convertionTable.length - 1; ++i) {
    if (n < 1000) break;

    n /= 1000;
  }

  let converted = n.toFixed(1) + convertionTable[i];

  return converted;
}

export default function Post({ media, text, likes, comments }: PostProps) {
  const iconSize = 22;
  const iconFill = "#F0F0F0";
  const iconColor = "#E0E0E0";

  return (
    <div className="brightness-90 w-80 sm:w-96">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={media[0].source} className="rounded-lg w-full h-80 sm:h-96" />
      </div>

      <p className="h-16">{text}</p>

      <div className="flex justify-between mt-2">
        <div className="flex items-center text-gray-200">
          <MessageCircle size={iconSize} fill={iconFill} color={iconColor} />
          <p className="ml-1">{shortenNumber(comments)}</p>
        </div>
        <div className="flex items-center text-gray-200">
          <Heart size={iconSize} fill={iconFill} color={iconColor} />
          <p className="ml-1">{shortenNumber(likes)}</p>
        </div>
        <div>
          <Share size={iconSize} color={iconColor} />
        </div>
      </div>
    </div>
  );
}
