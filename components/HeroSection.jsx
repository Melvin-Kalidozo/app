"use client";

import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Welcome to the Casino World",
    description: "Enjoy thrilling games and endless rewards.",
    image:
      "https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99920.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    title: "Spin the Wheel",
    description: "Try your luck with the hottest slots in town.",
    image:
      "https://img.freepik.com/premium-photo/cassino-background_927851-710.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    title: "Play and Win Big",
    description: "Experience live games from the comfort of home.",
    image:
      "https://img.freepik.com/free-photo/realistic-casino-background-with-flying-chips-golden-coins-dice-ai_91128-2306.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
];

export default function HeroSection() {
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.5,
      spacing: 20,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1.5,
          spacing: 20,
          origin: "center",
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 1,
          spacing: 0, // Remove spacing for mobile
          origin: "center",
        },
      },
    },
  });

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <section className="relative my-6 w-full h-[70vh] overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide flex items-center justify-center relative rounded-2xl overflow-hidden w-full"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
                zIndex: 5,
              }}
            />

            <div className="flex flex-col items-center justify-center text-center px-6 z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-4">
                {slide.title}
              </h2>
              <p className="text-white mb-6 max-w-lg">{slide.description}</p>
              <Button className="bg-[#FFD700] text-black hover:brightness-110">
                Play Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
