'use client';

import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ArrowRightIcon } from '@/components/icons';
import { productCategories, getCategoryBySlug } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

export function CategoryPageClient({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);
  const { language, t } = useLanguage();

  if (!category) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-[#1E293B] mb-4">
            {t('Category Not Found', '分类未找到')}
          </h1>
          <p className="text-[#64748B] mb-8">
            {t('The category you are looking for does not exist.', '您查找的分类不存在。')}
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-full hover:bg-[#1E40AF] transition-colors font-semibold"
          >
            {t('Back to Products', '返回产品中心')}
            <ArrowRightIcon size={16} />
          </Link>
        </section>
        <Footer />
        <WhatsAppButton />
      </main>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', labelCn: '首页', href: '/' },
    { label: 'Products', labelCn: '产品中心', href: '/products' },
    { label: category.name, labelCn: category.nameCn },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 text-white/90">
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {language === 'en' ? category.name : category.nameCn}
              </h1>
              <p className="text-lg text-white/80">
                {language === 'en' ? category.description : category.descriptionCn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb + Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Subcategories */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-2">
              {t('Subcategories', '子分类')}
            </h2>
            <p className="text-[#64748B] mb-8">
              {t(
                `${category.subcategories.length} product types available`,
                `共 ${category.subcategories.length} 种产品类型`
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.subcategories.map((sub) => (
                <div
                  key={sub}
                  className="group bg-white rounded-xl p-5 border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                      {sub}
                    </span>
                    <ArrowRightIcon
                      size={14}
                      className="text-[#94A3B8] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white rounded-2xl p-10 shadow-md border border-[#E2E8F0]">
            <h3 className="text-xl font-bold text-[#1E293B] mb-3">
              {t('Need Help Sourcing?', '需要采购帮助？')}
            </h3>
            <p className="text-[#64748B] mb-6 max-w-lg mx-auto">
              {t(
                'Tell us what you need and we will find the right suppliers from China for you.',
                '告诉我们您的需求，我们为您从中国找到合适的供应商。'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/8618669317333?text=${encodeURIComponent(
                  `Hello, I'm interested in ${category.name}. Can you help?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-colors font-semibold"
              >
                {t('Chat on WhatsApp', 'WhatsApp咨询')}
                <ArrowRightIcon size={16} />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#F1F5F9] text-[#1E293B] px-8 py-4 rounded-full hover:bg-[#E2E8F0] transition-colors font-semibold"
              >
                {t('Browse All Categories', '浏览全部分类')}
              </Link>
            </div>
          </div>

          {/* Related Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
              {t('Other Categories', '其他分类')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productCategories
                .filter((cat) => cat.id !== category.id)
                .slice(0, 8)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products/${cat.slug}`}
                    className="group bg-white rounded-xl p-4 border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform inline-block">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                      {language === 'en' ? cat.name : cat.nameCn}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
