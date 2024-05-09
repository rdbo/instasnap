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
      <Skeleton className="w-full h-52" />
      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-10/12 h-4 mt-1 rounded-full" />
      <div className="flex justify-between mt-2">
        <div className="flex items-center text-gray-200">
          <MessageCircle size={iconSize} fill={iconFill} color={iconColor} />
          <p className="ml-1">{randomNumber()}K</p>
        </div>
        <div className="flex items-center text-gray-200">
          <Heart size={iconSize} fill={iconFill} color={iconColor} />
          <p className="ml-1">{randomNumber()}M</p>
        </div>
        <div>
          <Share size={iconSize} color={iconColor} />
        </div>
      </div>
    </div>
  );
}
