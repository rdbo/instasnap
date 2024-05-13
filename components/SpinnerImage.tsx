"use client";

import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function SpinnerImage({
  src,
  className = "",
}: {
  src: string;
  className: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    let img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <img src={src} className={isLoaded ? className : "hidden"} />
      ) : (
        <div className={className + " bg-zinc-300 flex items-center justify-center"}>
          <Spinner color="white" size={48} />
        </div>
      )}
    </>
  );
}
