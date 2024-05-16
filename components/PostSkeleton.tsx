import { Heart, MessageCircle, Share } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

function randomNumber() {
  return ((Math.random() * 10) + 1).toFixed(1);
}

export default function PostSkeleton() {
  const iconSize = 22;
  const iconFill = "#F0F0F0";
  const iconColor = "#E0E0E0";

  return (
    <div className="brightness-90 w-80 sm:w-96">
      <div className="mb-1 flex items-center">
        <Skeleton className="w-10 h-10 rounded-full mr-1" />
        <Skeleton className="w-32 h-4 rounded-md" />
      </div>

      <Skeleton className="w-full h-80 sm:h-96" />

      <div className="flex justify-between my-2 text-zinc-400">
        <div className="flex items-center justify-center w-28 sm:border rounded-full sm:bg-zinc-100">
          <MessageCircle size={iconSize} />
          <p className="ml-1">{randomNumber()}K</p>
        </div>
        <div className="flex items-center justify-center w-28 sm:border rounded-full sm:bg-zinc-100">
          <Heart size={iconSize} />
          <p className="ml-1">{randomNumber()}M</p>
        </div>
        <div className="flex items-center justify-center w-28 sm:border rounded-full sm:bg-zinc-100">
          <Share size={iconSize} />
        </div>
      </div>

      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-10/12 h-4 mt-1 rounded-full" />
    </div>
  );
}
