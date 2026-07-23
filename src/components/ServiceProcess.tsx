'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProcessStep {
  step: number;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  icon: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Tell Us What You Need',
    titleCn: '告诉我们您的需求',
    description: 'Share your requirements via WhatsApp or LinkedIn. We listen, understand, and start sourcing.',
    descriptionCn: '通过WhatsApp或LinkedIn分享您的需求。我们倾听、理解并开始采购。',
    icon: '💬',
  },
  {
    step: 2,
    title: 'We Find the Best Sources',
    titleCn: '我们为您寻找最佳供应商',
    description: 'Our 100+ factory network, pre-audit verification, and video factory tours ensure quality.',
    descriptionCn: '我们拥有100+工厂网络，提供预审验证和视频工厂参观，确保质量。',
    icon: '🔍',
  },
  {
    step: 3,
    title: 'Test & Approve',
    titleCn: '测试与确认',
    description: 'Sample arrangement, quality testing, and your approval before any bulk order commitment.',
    descriptionCn: '样品安排、质量测试，您的批准后才进行批量订单。',
    icon: '✅',
  },
  {
    step: 4,
    title: 'Quality Control',
    titleCn: '质量控制',
    description: 'Pre-shipment inspection, third-party verification (SGS/BV), complete documentation.',
    descriptionCn: '出货前检验、第三方验证（SGS/BV）、完整文件记录。',
    icon: '🛡️',
  },
  {
    step: 5,
    title: 'Delivered to Your Door',
    titleCn: '送达您的手中',
    description: 'Export handling, logistics arrangement, and seamless door-to-door delivery worldwide.',
    descriptionCn: '出口处理、物流安排、全球无缝门到门配送。',
    icon: '📦',
  },
];

function StepCard({ step, isVisible, index }: { step: ProcessStep; isVisible: boolean; index: number }) {
  const { language } = useLanguage();

  return (
    <div
      className={`relative flex items-start gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {step.step}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{step.icon}</span>
          <h3 className="text-xl font-bold text-[#1E293B]">
            {language === 'en' ? step.title : step.titleCn}
          </h3>
        </div>
        <p className="text-[#64748B] mb-1">
          {language === 'en' ? step.description : step.descriptionCn}
        </p>
        <p className="text-sm text-[#94A3B8]">
          {language === 'en' ? step.titleCn : step.title}
        </p>
      </div>
    </div>
  );
}

export function ServiceProcess() {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className={`lg:sticky lg:top-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">
              {t('How We Work', '服务流程')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-6">
              {t('From Inquiry to Delivery', '从询价到交付')}
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              {t('Our streamlined 5-step process ensures transparent, efficient, and reliable sourcing of medical devices from China.', '我们简化的5步流程确保从中国采购医疗器械的透明、高效和可靠。')}
            </p>
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to start sourcing medical devices."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-semibold"
            >
              {t('Start Your Sourcing Journey', '开始您的采购之旅')}
              <ArrowRightIcon size={18} />
            </a>
          </div>

          {/* Right: Steps */}
          <div ref={sectionRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

            <div className="space-y-2">
              {steps.map((step, index) => (
                <StepCard
                  key={step.step}
                  step={step}
                  isVisible={isVisible}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
