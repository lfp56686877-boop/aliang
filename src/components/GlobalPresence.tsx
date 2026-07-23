'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Region {
  name: string;
  nameCn: string;
  countries: string[];
  color: string;
  icon: string;
}

const regions: Region[] = [
  {
    name: 'Middle East',
    nameCn: '中东',
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'],
    color: '#F97316',
    icon: '🇸🇦',
  },
  {
    name: 'Africa',
    nameCn: '非洲',
    countries: ['Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Ghana'],
    color: '#10B981',
    icon: '🌍',
  },
  {
    name: 'Central Asia',
    nameCn: '中亚',
    countries: ['Kazakhstan', 'Uzbekistan', 'Turkmenistan'],
    color: '#8B5CF6',
    icon: '🏜️',
  },
  {
    name: 'Europe & Americas',
    nameCn: '欧美',
    countries: ['USA', 'UK', 'Germany', 'France', 'Brazil'],
    color: '#2563EB',
    icon: '🌎',
  },
];

function RegionCard({ region, isVisible, index }: { region: Region; isVisible: boolean; index: number }) {
  const { language } = useLanguage();

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${region.color}15` }}
        >
          {region.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1E293B]">
            {language === 'en' ? region.name : region.nameCn}
          </h3>
          <p className="text-sm text-[#94A3B8]">
            {language === 'en' ? region.nameCn : region.name}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {region.countries.map((country) => (
          <span
            key={country}
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{ backgroundColor: `${region.color}15`, color: region.color }}
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GlobalPresence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="global" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">
            {t('Global Presence', '全球布局')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            {t('Trusted Across Continents', '跨越大陆的信赖')}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            {t('Our clients span across major healthcare markets worldwide.', '我们的客户遍布全球主要医疗市场。')}
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">50+</div>
            <div className="text-[#64748B]">{t('Countries Served', '服务国家')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#10B981] mb-2">100+</div>
            <div className="text-[#64748B]">{t('Partner Factories', '合作工厂')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">1000+</div>
            <div className="text-[#64748B]">{t('Products Available', '可用产品')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#8B5CF6] mb-2">20+</div>
            <div className="text-[#64748B]">{t('Years Experience', '年经验')}</div>
          </div>
        </div>

        {/* Regions Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <RegionCard
              key={region.name}
              region={region}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
