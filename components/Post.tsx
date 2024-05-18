"use client";

import {
  ArrowBigLeft,
  ArrowBigRight,
  Heart,
  MessageCircle,
  Share,
  User,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import SpinnerImage from "./SpinnerImage";

export interface Author {
  handle: string;
  profilePicture: string | null;
}

export interface Media {
  source: string;
  kind: "image" | "video";
}

export interface PostProps {
  id: number;
  author: Author;
  media: Media[];
  text: string;
  likes: number;
  comments: number;
  hasLiked: boolean;
}

function shortenNumber(n: number): string {
  if (n < 1000) return n.toString();

  const convertionTable = ["K", "M", "B", "T"];

  for (var i = -1; i < convertionTable.length - 1; ++i) {
    if (n < 1000) break;

    n /= 1000;
  }

  let converted = n.toFixed(1) + convertionTable[i];

  return converted;
}

export default function Post({
  id,
  author,
  media,
  text,
  likes,
  comments,
  hasLiked,
}: PostProps) {
  const iconSize = 22;

  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [isOverflown, setIsOverflown] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(hasLiked);

  useEffect(() => {
    const { current } = textRef;
    if (!current) return;

    setIsOverflown(current.scrollHeight > current.clientHeight);
  });

  const handleLike = React.cache(() => {
    let newValue = !isLiked;
    setIsLiked(newValue);
    const likeDiff = newValue ? +1 : -1;
    setLikeCount(likeCount + likeDiff);

    console.log(`UPDATE POST ${id} WITH LIKE STATE: ${newValue}`);
  });

  return (
    <div className="brightness-90 w-80 sm:w-96">
      <div className="flex items-center mb-1">
        <div className="bg-gradient-to-r from-rose-600 to-amber-400 px-[2px] py-[2px] rounded-full">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
            {author.profilePicture ? (
              <img
                src={author.profilePicture}
                className="h-full object-cover"
              />
            ) : (
              <User />
            )}
          </div>
        </div>
        <p className="ml-2 font-bold">{author.handle}</p>
      </div>

      {media.length > 0 && (
        <div className="w-full relative">
          {media[mediaIndex].kind === "image" ? (
            <SpinnerImage
              src={media[mediaIndex].source}
              className="rounded-lg w-full h-80 sm:h-96"
            />
          ) : (
            <video
              src={media[mediaIndex].source}
              className="w-full h-80 sm:h-96 bg-zinc-200 rounded-lg"
              controls
            />
          )}
          {media.length > 1 && (
            <div className="opacity-75">
              <Button
                variant="outline"
                className="w-10 h-10 rounded-full px-0 py-0 border-zinc-700 border-2 absolute top-1/2 -translate-y-1/2 left-0 ml-2"
                disabled={mediaIndex == 0}
                onClick={() => setMediaIndex(mediaIndex - 1)}
              >
                <ArrowBigLeft size={iconSize} />
              </Button>
              <Button
                variant="outline"
                className="w-10 h-10 rounded-full px-0 py-0 border-zinc-700 border-2 absolute top-1/2 -translate-y-1/2 right-0 mr-2"
                disabled={mediaIndex == media.length - 1}
                onClick={() => setMediaIndex(mediaIndex + 1)}
              >
                <ArrowBigRight size={iconSize} />
              </Button>
            </div>
          )}
        </div>
      )}

      <div
        className={
          "flex " + (media.length > 0 ? "flex-col" : "flex-col-reverse")
        }
      >
        <div className="flex justify-between my-2 text-zinc-700">
          <div className="flex items-center justify-center w-28 sm:border rounded-full">
            <MessageCircle size={iconSize} />
            <p className="ml-1">{shortenNumber(comments)}</p>
          </div>
          <button onClick={handleLike} className={"flex items-center justify-center w-28 sm:border rounded-full" + (isLiked ? " text-red-500" : "")}>
            <Heart size={iconSize} fill={isLiked ? "currentColor" : "transparent"} />
            <p className="ml-1">{shortenNumber(likeCount)}</p>
          </button>
          <div className="flex items-center justify-center w-28 sm:border rounded-full">
            <Share size={iconSize} />
          </div>
        </div>

        <div
          className={
            media.length > 0 ? "" : "border rounded-lg px-2 py-2 h-80 sm:h-96"
          }
        >
          <p
            ref={textRef}
            className={
              "whitespace-pre-line overflow-y-hidden break-all " +
              (media.length > 0 ? "max-h-24" : "max-h-60 sm:max-h-72")
            }
          >
            {text}
          </p>
          {isOverflown && (
            <p>
              ... <span className="text-blue-500">Show More</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
