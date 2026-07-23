'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              {t('Trusted by 50+ Countries Worldwide', '服务全球50+国家')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('20 Years in Medical Devices.', '医疗器械领域20年经验。')}
            <br />
            <span className="text-[#93C5FD]">
              {t('We Know China.', '我们了解中国。')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('Your Trusted Bridge to China\'s Medical Device Market', '您值得信赖的中国医疗器械采购桥梁')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to inquire about medical device sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span className="font-semibold text-lg">
                {t('WhatsApp Us Now', '立即WhatsApp联系')}
              </span>
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="font-semibold text-lg">
                {t('Request a Quote', '获取报价')}
              </span>
            </a>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">FDA</span>
              </div>
              <span className="text-sm">{t('FDA Registered', 'FDA注册')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">CE</span>
              </div>
              <span className="text-sm">{t('CE Certified', 'CE认证')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">ISO</span>
              </div>
              <span className="text-sm">{t('ISO 13485', 'ISO 13485')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">SGS</span>
              </div>
              <span className="text-sm">{t('SGS Verified', 'SGS验证')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">20+</span>
              </div>
              <span className="text-sm">{t('Years Experience', '年经验')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
