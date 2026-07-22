"use client";

import { useState, useEffect, useCallback } from "react";
import { PauseIcon, PlayIcon, ChevronDownIcon } from "./icons";

interface Slide {
  id: number;
  heading1: string;
  heading2: string;
  english: string;
  ctaText: string;
  backgroundImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    heading1: "Connecting China's Medical",
    heading2: "Excellence to the World",
    english: "Your Trusted Partner for Medical Device Exports",
    ctaText: "Explore Now",
    backgroundImage: "/images/hero-1.jpg",
  },
  {
    id: 2,
    heading1: "Committed to Becoming",
    heading2: "China's Strongest, Globally Best-In-Class",
    english: "The Most Respected Innovative Medical Device Company",
    ctaText: "Learn More",
    backgroundImage: "/images/hero-2.jpg",
  },
  {
    id: 3,
    heading1: "Meet and Strive to Exceed",
    heading2: "Our Customers' Greatest Needs",
    english: "Quality You Can Trust, Service You Can Rely On",
    ctaText: "Contact Us",
    backgroundImage: "/images/hero-3.jpg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-3 text-shadow-md">
                  {slide.heading1}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold mb-5 text-shadow-md">
                  {slide.heading2}
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 italic text-shadow-sm">
                  {slide.english}
                </p>
                <a
                  href="#about"
                  className="inline-block px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-dandelion-blue transition-all duration-300"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator - Right Side */}
      <div className="absolute bottom-24 right-10 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`text-sm font-medium transition-all duration-300 ${
              index === currentSlide
                ? "text-white font-semibold"
                : "text-white/50 hover:text-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      {/* Control Buttons - Left Side */}
      <div className="absolute bottom-24 left-10 flex gap-3 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
        </button>
      </div>

      {/* Down Arrow */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce-slow z-20"
        aria-label="Scroll down"
      >
        <ChevronDownIcon size={32} />
      </button>
    </section>
  );
}
