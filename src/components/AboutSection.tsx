"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "./icons";

interface Stat {
  label: string;
  value: number;
  unit: string;
}

const stats: Stat[] = [
  { label: "Founded", value: 2019, unit: "" },
  { label: "Products", value: 500, unit: "+" },
  { label: "Countries", value: 50, unit: "+" },
  { label: "Partners", value: 100, unit: "+" },
];

const featureLinks = [
  {
    title: "Our Culture",
    href: "#culture",
    icon: "🏛️",
  },
  {
    title: "Milestones",
    href: "#history",
    icon: "📅",
  },
  {
    title: "Certifications",
    href: "#honors",
    icon: "🏆",
  },
];

function useCountUp(target: number, isVisible: boolean, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const easeOut = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div className="text-center">
      <div className="text-sm text-dandelion-gray mb-2">{stat.label}</div>
      <div className="text-4xl md:text-5xl font-bold text-dandelion-blue mb-1">
        {count}{stat.unit}
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation immediately after mount
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dandelion-dark-gray mb-4">
              About Dandelion Medical
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-dandelion-blue mb-6">
              Your Trusted Partner for Medical Device Exports
            </h3>
            <p className="text-dandelion-gray leading-relaxed mb-10">
              Founded in 2019, Dandelion Medical is a professional Chinese
              medical device export company based in China. We have established
              deep partnerships with over 100 renowned medical device
              manufacturers, offering a comprehensive range of products
              including surgical instruments, diagnostic equipment, and
              rehabilitation devices. Our products are exported to more than 50
              countries worldwide.
            </p>

            {/* Feature Links */}
            <div className="flex flex-col gap-5 mb-12">
              {featureLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-4 text-dandelion-dark-gray hover:text-dandelion-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-dandelion-light-blue rounded-full flex items-center justify-center text-xl">
                    {link.icon}
                  </div>
                  <span className="text-base font-medium">{link.title}</span>
                  <ArrowRightIcon
                    size={16}
                    className="text-dandelion-blue transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-dandelion-blue font-medium hover:gap-3 transition-all duration-300"
            >
              Learn More
              <ArrowRightIcon size={18} />
            </a>
          </div>

          {/* Statistics */}
          <div ref={sectionRef}>
            <div className="grid grid-cols-2 gap-10">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
