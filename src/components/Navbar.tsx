'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuIcon, CloseIcon, WhatsAppIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('About', '关于我们'), href: '/about' },
    { label: t('Services', '服务'), href: '/services' },
    { label: t('Products', '产品'), href: '/products' },
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-dandelion-blue ${
                  isScrolled ? 'text-dandelion-dark-gray' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
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
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-dandelion-dark-gray hover:bg-dandelion-light-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
