'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MenuIcon, CloseIcon, WhatsAppIcon, ChevronDownIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { productCategories } from '@/data/products';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t('About', '关于我们'), href: '/about' },
    { label: t('Services', '服务'), href: '/services' },
    { label: t('Products', '产品'), href: '/products', hasDropdown: true },
    { label: t('Contact', '联系'), href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-dandelion-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight ${
                isScrolled ? 'text-dandelion-dark-gray' : 'text-white'
              }`}>
                CHINA
              </span>
              <span className={`font-heading text-xs tracking-wider ${
                isScrolled ? 'text-dandelion-gray' : 'text-white/80'
              }`}>
                MEDICAL DEVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors hover:text-dandelion-blue flex items-center gap-1 ${
                      isScrolled ? 'text-dandelion-dark-gray' : 'text-white'
                    }`}
                    onClick={(e) => {
                      // Allow navigation to /products, but also toggle dropdown
                      if (isProductsOpen) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isProductsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  {isProductsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 w-[680px] max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-3 gap-3">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products/${cat.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#F1F5F9] transition-colors"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <div className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                {cat.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-[#1E293B] group-hover:text-[#2563EB] transition-colors leading-tight">
                                  {language === 'en' ? cat.name : cat.nameCn}
                                </div>
                                <div className="text-xs text-[#94A3B8] mt-0.5 truncate">
                                  {language === 'en' ? cat.nameCn : cat.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0] text-center">
                          <Link
                            href="/products"
                            className="text-sm font-semibold text-[#2563EB] hover:text-[#1E40AF] transition-colors"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {t('View All Products →', '查看全部产品 →')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-dandelion-blue ${
                    isScrolled ? 'text-dandelion-dark-gray' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isScrolled
                  ? 'bg-dandelion-light-blue text-dandelion-blue hover:bg-dandelion-blue hover:text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to inquire about medical device sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#128C7E] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="font-medium text-sm">
                {t('WhatsApp', 'WhatsApp')}
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled
                  ? 'text-dandelion-dark-gray hover:bg-dandelion-light-blue'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <Link
                      href={item.href}
                      className="text-dandelion-dark-gray font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="p-1 text-[#94A3B8]"
                    >
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileProductsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {isMobileProductsOpen && (
                    <div className="bg-[#F8FAFC] py-2">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/products/${cat.slug}`}
                          className="flex items-center gap-3 px-8 py-2.5 text-sm text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileProductsOpen(false);
                          }}
                        >
                          <span className="flex-shrink-0 scale-75">{cat.icon}</span>
                          <span>{language === 'en' ? cat.name : cat.nameCn}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-dandelion-dark-gray hover:bg-dandelion-light-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to inquire about medical device sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mx-4 mt-4 bg-[#25D366] text-white px-4 py-3 rounded-full hover:bg-[#128C7E] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="font-medium">
                {t('Chat on WhatsApp', 'WhatsApp咨询')}
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
