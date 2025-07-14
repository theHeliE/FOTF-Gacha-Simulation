"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { ProgressDemo } from "@/components/progress";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banners from "@/constants/Banners";

export default function Gacha() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleProgressComplete = () => {
    setIsLoading(false);
  };

  const handleGachaClick = (e: any) => {
    e.preventDefault();
    setIsVisible(true);
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
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Sliding Panel - positioned absolutely to slide from top */}
      <div
        className={`absolute top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-lg transform transition-transform duration-700 ease-in-out min-h-[70vh] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex justify-center">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              {Banners.map((banner, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center p-16 min-h-full">
                    <div className="flex flex-col items-center border p-20 rounded-2xl shadow-2xl bg-card min-w-[700px] max-w-[1000px] w-full max-h-[80vh] overflow-y-auto">
                      <h1 className="text-5xl font-bold mb-8">{banner.name}</h1>
                      <p className="text-2xl text-muted-foreground mt-6 mb-12 text-center">
                        {banner.description}
                      </p>
                      {banner.startDate && banner.endDate && (
                        <div className="flex">
                          <p className="text-sm text-muted-foreground mt-6 mb-12 mr-2">
                            From {banner.startDate}
                          </p>
                          <p className="text-sm text-muted-foreground mt-6 mb-12">
                            till {banner.endDate}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-8 items-center flex-col sm:flex-row mb-10">
                        <Button
                          size="lg"
                          className="px-12 py-6 text-xl font-semibold min-w-[200px]"
                        >
                          1x Pull
                        </Button>
                        <Button
                          size="lg"
                          className="px-12 py-6 text-xl font-semibold min-w-[200px]"
                        >
                          10x Pull
                        </Button>
                      </div>

                      <Button size="lg" className="px-10 py-4 text-lg">
                        Pull History
                      </Button>
                      <Button
                        onClick={() => setIsVisible(false)}
                        variant="outline"
                        size="lg"
                        className="mt-5 px-10 py-4 text-lg"
                      >
                        Close Panel
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Fate of the Fallen
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Click here to get started
          </p>
          <Button onClick={handleGachaClick}>Get Started</Button>
        </div>
      </main>
    </div>
  );
}
