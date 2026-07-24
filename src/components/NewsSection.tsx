"use client";

import { ArrowRightIcon } from "./icons";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Dandelion China Medical Signs Strategic Partnership with Southeast Asia's Largest Healthcare Group",
    excerpt:
      "Recently, Dandelion China Medical officially signed a strategic partnership agreement with a leading healthcare group in Southeast Asia. The two parties will deepen cooperation in medical device trade, technology exchange, and more...",
    date: "Jan 15, 2024",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    title: "Multiple Products Receive CE Certification, Expanding European Market Presence",
    excerpt:
      "Several medical device products under Dandelion China Medical have successfully passed CE certification review, marking official access to the European market...",
    date: "Jan 10, 2024",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    title: "Dandelion China Medical Showcases at 2024 Arab Health Exhibition",
    excerpt:
      "Dandelion China Medical featured its star products at the 2024 Arab Health Exhibition, connecting with healthcare professionals worldwide to explore collaboration opportunities...",
    date: "Jan 5, 2024",
    image: "/images/news-3.jpg",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dandelion-dark-gray mb-2">
              News Center
            </h2>
            <h3 className="text-xl font-semibold text-dandelion-blue">
              Latest Updates
            </h3>
          </div>
          <a
            href="#news"
            className="hidden md:inline-flex items-center gap-2 text-dandelion-blue font-medium hover:gap-3 transition-all duration-300"
          >
            View All
            <ArrowRightIcon size={18} />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <time className="text-xs text-dandelion-gray mb-2 block">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-3 line-clamp-2 group-hover:text-dandelion-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-dandelion-gray line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-dandelion-blue text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  Read More
                  <ArrowRightIcon size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="text-center mt-8 md:hidden">
          <a
            href="#news"
            className="inline-flex items-center gap-2 text-dandelion-blue font-medium"
          >
            View All News
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
