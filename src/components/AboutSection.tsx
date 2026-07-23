'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface Advantage {
  icon: string;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  stat: string;
  statLabel: string;
  statLabelCn: string;
}

const advantages: Advantage[] = [
  {
    icon: '🏆',
    title: '20 Years Experience',
    titleCn: '20年行业经验',
    description: 'Deep expertise in medical device industry, navigating China\'s complex manufacturing landscape with confidence.',
    descriptionCn: '深耕医疗器械行业，自信驾驭中国复杂的制造环境。',
    stat: '20+',
    statLabel: 'Years in Industry',
    statLabelCn: '年行业经验',
  },
  {
    icon: '📹',
    title: 'Video Factory Verification',
    titleCn: '视频验厂服务',
    description: 'Transparent sourcing with live video factory tours, real-time quality checks, and on-demand inspections.',
    descriptionCn: '透明采购：实时视频工厂参观、质量检查和按需验厂。',
    stat: '100%',
    statLabel: 'Verified Factories',
    statLabelCn: '已验证工厂',
  },
  {
    icon: '🌍',
    title: 'Global Client Network',
    titleCn: '全球客户网络',
    description: 'Trusted by healthcare providers across Middle East, Africa, Europe, and Americas.',
    descriptionCn: '深受中东、非洲、欧洲和美洲医疗机构信赖。',
    stat: '50+',
    statLabel: 'Countries Served',
    statLabelCn: '服务国家',
  },
];

function useCountUp(target: number, isVisible: boolean, duration: number = 1500) {
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

function AdvantageCard({ advantage, isVisible, index }: { advantage: Advantage; isVisible: boolean; index: number }) {
  const { language } = useLanguage();
  const numericStat = parseInt(advantage.stat.replace(/[^0-9]/g, ''));
  const count = useCountUp(numericStat, isVisible);
  const suffix = advantage.stat.replace(/[0-9]/g, '');

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="text-5xl mb-6">{advantage.icon}</div>
      <h3 className="text-xl font-bold text-[#1E293B] mb-3">
        {language === 'en' ? advantage.title : advantage.titleCn}
      </h3>
      <p className="text-[#64748B] leading-relaxed mb-6">
        {language === 'en' ? advantage.description : advantage.descriptionCn}
      </p>
      <div className="border-t border-[#E2E8F0] pt-4">
        <div className="text-3xl font-bold text-[#2563EB]">
          {count}{suffix}
        </div>
        <div className="text-sm text-[#64748B]">
          {language === 'en' ? advantage.statLabel : advantage.statLabelCn}
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">
            {t('Why Choose Us', '为什么选择我们')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            {t('Your Bridge to China\'s Medical Device Market', '您值得信赖的中国医疗器械采购桥梁')}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            {t('Two decades of expertise, transparent verification, and global trust — all working for为您服务。', '二十年专业经验、透明验证、全球信赖——一切为您服务。')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              advantage={advantage}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all duration-300"
          >
            {t('Learn More About Us', '了解更多关于我们')}
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
