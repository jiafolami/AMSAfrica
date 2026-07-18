"use client";
import { Slide } from "@/data/slides";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  slides: Slide[];
  interval?: number;
}

const Carousel = ({ slides, interval = 5000 }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [slides.length]
  );
  const prevSlide = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* RENDER SLIDES */}
      {slide.type === "image" && (
        <Image
          fill
          src={slide.src}
          alt={slide.alt ?? "Slide image"}
          className="object-cover brightness-90"
          style={{ objectPosition: slide.objectPosition ?? "center" }}
        />
      )}

      {slide.type === "image-overlay" && (
        <>
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
            <h2 className="text-4xl font-bold mb-3">{slide.overlayTitle}</h2>
            <p className="text-lg max-w-xl">{slide.overlayText}</p>
          </div>
          <Image
            fill
            src={slide.src}
            alt={slide.alt ?? "Slide image"}
            className="object-cover brightness-60"
          />
        </>
      )}

      {slide.type === "side-by-side" && (
        <div className="bg-primary flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-8 py-8 md:py-16">
          {/* Text */}
          <div className="md:w-3/4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl">{slide.text}</p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src={slide.src}
              alt={slide.alt ?? "Slide image"}
              width={400}
              height={400}
              className="object-contain w-[200px] md:w-[400px] max-w-full h-auto"
            />
          </div>
        </div>
      )}

      {slide.type === "text-only" && (
        <div className="flex flex-col justify-center items-center h-full bg-gray-900 px-6">
          <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
          <p className="text-lg max-w-xl text-center">{slide.text}</p>
        </div>
      )}

      {/* INDICATORS */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
