'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SearchIcon, ArrowRightIcon } from '@/components/icons';
import { productCategories } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { language, t } = useLanguage();

  const filteredCategories = productCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.nameCn.includes(searchQuery) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const breadcrumbItems = [
    { label: 'Home', labelCn: '首页', href: '/' },
    { label: 'Products', labelCn: '产品中心' },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('What We Source', '采购品类')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t(
                '19 Categories, 5000+ Products — We help you find the right medical devices from China.',
                '19大品类，5000+产品 — 我们帮助您从中国庞大的制造领域中找到合适的医疗器械。'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb + Search */}
      <section className="py-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="relative max-w-xl mt-4">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder={t('Search categories...', '搜索分类...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-1 group-hover:text-[#2563EB] transition-colors">
                      {language === 'en' ? category.name : category.nameCn}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mb-2">
                      {language === 'en' ? category.nameCn : category.name}
                    </p>
                    <p className="text-sm text-[#64748B]">
                      {language === 'en' ? category.description : category.descriptionCn}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[#2563EB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('View Details', '查看详情')}
                      <ArrowRightIcon size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[#64748B] mb-4">
              {t("Can't find what you need?", '找不到您需要的？')}
            </p>
            <a
              href="https://wa.me/8618669317333?text=Hello, I have a specific medical device sourcing requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors font-semibold"
            >
              {t('Contact Us for Custom Sourcing', '联系我们定制采购')}
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
