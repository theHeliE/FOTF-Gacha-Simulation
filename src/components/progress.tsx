"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

interface ProgressDemoProps {
  onComplete?: () => void;
}

export function ProgressDemo({ onComplete }: ProgressDemoProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 300); // Small delay for smooth transition
          }
          return 100;
        }
        return prev + 2; // Increment by 2% each time
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-[60%] space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-center text-sm text-muted-foreground">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
