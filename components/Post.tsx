"use client";

import {
  ArrowBigLeft,
  ArrowBigRight,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

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
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isOverflown, setIsOverflown] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    const { current } = textRef;
    if (!current) return;

    setIsOverflown(current.scrollHeight > current.clientHeight);
  });

  return (
    <div className="brightness-90 w-80 sm:w-96">
      <div className="w-full relative">
        <img
          src={media[mediaIndex].source}
          className="rounded-lg w-full h-80 sm:h-96"
        />
        {media.length > 1 && (
          <div className="absolute top-0 w-full h-full flex items-center justify-between px-2 opacity-50">
            <Button
              variant="outline"
              className="w-10 h-10 rounded-full px-0 py-0"
              disabled={mediaIndex == 0}
              onClick={() => setMediaIndex(mediaIndex - 1)}
            >
              <ArrowBigLeft size={iconSize} />
            </Button>
            <Button
              variant="outline"
              className="w-10 h-10 rounded-full px-0 py-0"
              disabled={mediaIndex == media.length - 1}
              onClick={() => setMediaIndex(mediaIndex + 1)}
            >
              <ArrowBigRight size={iconSize} />
            </Button>
          </div>
        )}
      </div>

      <div className="flex justify-between my-2">
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

      <p ref={textRef} className="max-h-24 whitespace-pre-line overflow-hidden">
        {text}
      </p>
      {isOverflown && (
        <p>
          ... <span className="text-blue-500">Show More</span>
        </p>
      )}
    </div>
  );
}
