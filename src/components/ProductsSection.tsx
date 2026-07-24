'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { productCategories } from '@/data/products';

function CategoryCard({ category, isVisible, index }: { category: typeof productCategories[0]; isVisible: boolean; index: number }) {
  const { language } = useLanguage();

  return (
    <Link
      href={`/products/${category.slug}`}
      className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#2563EB] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {category.icon}
      </div>
      <h3 className="text-base font-bold text-[#1E293B] mb-1 group-hover:text-[#2563EB] transition-colors text-center">
        {language === 'en' ? category.name : category.nameCn}
      </h3>
      <p className="text-xs text-[#94A3B8] mb-2 text-center">
        {language === 'en' ? category.nameCn : category.name}
      </p>
      <p className="text-sm text-[#64748B] text-center">
        {language === 'en' ? category.description : category.descriptionCn}
      </p>
    </Link>
  );
}

export function ProductsSection() {
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
    <section id="products" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">
            {t('What We Source', '采购品类')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            {t('19 Categories, 5000+ Products', '19大品类，5000+产品')}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            {t('We help you find the right medical devices from China\'s vast manufacturing landscape.', '我们帮助您从中国庞大的制造领域中找到合适的医疗器械。')}
          </p>
        </div>

        {/* Categories Grid */}
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {productCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full hover:bg-[#1E40AF] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            {t('View All Products', '查看所有产品')}
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
