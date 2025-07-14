"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { ProgressDemo } from "@/components/progress";
import { useRouter } from "next/navigation";

export default function Collections() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleProgressComplete = () => {
    setIsLoading(false);
  };
  if (isLoading) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div></div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-2xl font-bold">Loading FOTF Gacha System...</h1>
          <ProgressDemo onComplete={handleProgressComplete} />
        </div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to FOTF Gacha System
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your adventure begins here!
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Learn more about gacha mechanics
        </a>
      </footer>
    </div>
  );
}
