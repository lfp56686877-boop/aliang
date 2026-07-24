'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  labelCn?: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const label = language === 'en' ? item.label : (item.labelCn || item.label);

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-[#94A3B8]">/</span>
              )}
              {isLast || !item.href ? (
                <span className="text-[#64748B] font-medium">{label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#2563EB] hover:text-[#1E40AF] transition-colors hover:underline"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
