"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TerminalText = ({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (i < text.length) {
          const nextChar = text.charAt(i);
          i++;
          return prev + nextChar;
        }
        clearInterval(interval);
        return prev;
      });
    }, 40); // typing speed

    return () => clearInterval(interval);
  }, [text, started, delay]); // Added 'delay' back to dependencies

  return (
    <span className={cn("font-mono", className)}>
      {displayedText}
      <span className="animate-pulse inline-block w-2 h-4 bg-neon-blue ml-1 align-middle" />
    </span>
  );
};
