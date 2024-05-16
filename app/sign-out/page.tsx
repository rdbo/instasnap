"use client";

import Spinner from "@/components/Spinner";
import { useEffect, useRef, useState } from "react";

export default function SignOut() {
  const dotsRef = useRef(0);
  const [dots, setDots] = useState(0);
  const maxDots = 3;

  useEffect(() => {
    dotsRef.current = dots;
  }, [dots]);

  useEffect(() => {
    let interval = setInterval(() => {
      let newValue = dotsRef.current + 1;
      if (newValue > maxDots)
        newValue = 0;

      setDots(newValue);
    }, 1000);

    // Fix for React running twice on development
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h1 className="font-bold text-2xl">Signing Out{".".repeat(dots)}</h1>
      <Spinner className="h-12 w-12 mt-4" />
    </div>
  );
}
