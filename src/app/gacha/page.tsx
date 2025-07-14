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
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 lg:p-20 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Sliding Panel - positioned absolutely to slide from top */}
      <div
        className={`absolute top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-lg transform transition-transform duration-700 ease-in-out min-h-[70vh] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex justify-center px-4">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              {Banners.map((banner, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center p-4 sm:p-8 lg:p-16 min-h-full">
                    <div className="flex flex-col items-center border p-6 sm:p-12 lg:p-20 rounded-xl lg:rounded-2xl shadow-2xl bg-card w-full max-w-[95vw] sm:max-w-[800px] lg:max-w-[1200px] xl:max-w-[1400px] max-h-[80vh] overflow-y-auto">
                      <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
                        {banner.name}
                      </h1>
                      <p className="text-base sm:text-lg lg:text-2xl xl:text-3xl text-muted-foreground mt-2 sm:mt-4 lg:mt-6 mb-6 sm:mb-8 lg:mb-12 text-center px-2">
                        {banner.description}
                      </p>
                      {banner.startDate && banner.endDate && (
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 mb-4 sm:mb-6 lg:mb-8">
                          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mr-0 sm:mr-2 text-center">
                            From {banner.startDate}
                          </p>
                          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground text-center">
                            till {banner.endDate}
                          </p>
                        </div>
                      )}
                      <div className="flex gap-3 sm:gap-6 lg:gap-8 xl:gap-12 items-center justify-center flex-col sm:flex-row mb-6 sm:mb-8 lg:mb-10 w-full max-w-2xl mx-auto">
                        <Button
                          size="lg"
                          className="px-6 sm:px-8 lg:px-16 xl:px-20 py-3 sm:py-4 lg:py-6 xl:py-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[160px] lg:min-w-[240px] xl:min-w-[280px]"
                        >
                          1x Pull
                        </Button>
                        <Button
                          size="lg"
                          className="px-6 sm:px-8 lg:px-16 xl:px-20 py-3 sm:py-4 lg:py-6 xl:py-8 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[160px] lg:min-w-[240px] xl:min-w-[280px]"
                        >
                          10x Pull
                        </Button>
                      </div>

                      <Button
                        size="lg"
                        className="px-6 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6 w-full sm:w-auto min-w-[200px] lg:min-w-[240px]"
                      >
                        Pull History
                      </Button>
                      <Button
                        onClick={() => setIsVisible(false)}
                        variant="outline"
                        size="lg"
                        className="px-6 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto min-w-[200px] lg:min-w-[240px]"
                      >
                        Close Panel
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to Fate of the Fallen
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 px-4">
            Click here to get started
          </p>
          <Button
            onClick={handleGachaClick}
            size="lg"
            className="px-6 py-3 text-base sm:text-lg"
          >
            Get Started
          </Button>
        </div>
      </main>
    </div>
  );
}
