import { Heart, MessageCircle, Share } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function PostSkeleton() {
  const iconSize = 28;
  const iconFill = "#F0F0F0";
  const iconColor = "#E0E0E0";

  return (
    <div className="brightness-90 w-96">
      <Skeleton className="w-full h-52" />
      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-full h-4 mt-1 rounded-full" />
      <Skeleton className="w-10/12 h-4 mt-1 rounded-full" />
      <div className="flex justify-between">
        <div className="flex items-center text-gray-200">
          <MessageCircle size={iconSize} fill={iconFill} color={iconColor} />
          <p>5.9K</p>
        </div>
        <div className="flex items-center text-gray-200">
          <Heart size={iconSize} fill={iconFill} color={iconColor} />
          <p>1.2M</p>
        </div>
        <div>
          <Share size={iconSize} fill={iconFill} color={iconColor} />
        </div>
      </div>
    </div>
  );
}
