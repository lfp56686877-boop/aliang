'use client';

import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  LinkedInIcon,
  WhatsAppIcon,
  TikTokIcon,
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon,
} from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

const quickLinks = [
  { labelKey: 'About Us', labelKeyCn: '关于我们', href: '/about' },
  { labelKey: 'Services', labelKeyCn: '服务', href: '/services' },
  { labelKey: 'Products', labelKeyCn: '产品', href: '/products' },
  { labelKey: 'Contact', labelKeyCn: '联系', href: '/contact' },
];

const productLinks = [
  { labelKey: 'Surgical Instruments', labelKeyCn: '手术器械', href: '/products?surgical' },
  { labelKey: 'Diagnostic Equipment', labelKeyCn: '诊断设备', href: '/products?diagnostic' },
  { labelKey: 'Patient Monitoring', labelKeyCn: '监护设备', href: '/products?monitoring' },
  { labelKey: 'All Products', labelKeyCn: '所有产品', href: '/products' },
];

const contactInfo = [
  {
    icon: LocationIcon,
    textKey: 'Linyi, Shandong, China',
    textKeyCn: '山东省临沂市',
  },
  {
    icon: PhoneIcon,
    textKey: '+86-18669317333',
    textKeyCn: '+86-18669317333',
  },
  {
    icon: MailIcon,
    textKey: '56686877@qq.com',
    textKeyCn: '56686877@qq.com',
  },
];

const socialLinks = [
  { icon: WhatsAppIcon, href: 'https://wa.me/8618669317333', labelKey: 'WhatsApp' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/%E5%87%A4%E4%BD%A9-%E6%A2%81-a19510424/', labelKey: 'LinkedIn' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@aliang2778?lang=zh-Hans', labelKey: 'TikTok' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/aliang6852', labelKey: 'Instagram' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UCVkUhsDGI4Et4gbVYZgAJpg', labelKey: 'YouTube' },
  { icon: TwitterIcon, href: 'https://x.com/DandelionMedica', labelKey: 'X (Twitter)' },
];

const legalLinks = [
  { labelKey: 'Privacy Policy', labelKeyCn: '隐私政策', href: '/privacy' },
  { labelKey: 'Terms of Service', labelKeyCn: '服务条款', href: '/terms' },
  { labelKey: 'Sitemap', labelKeyCn: '网站地图', href: '/sitemap' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">DANDELION</span>
                <span className="font-heading text-xs tracking-wider text-white/60">MEDICAL</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              {t('Your trusted bridge to China\'s medical device market. 20 years of industry experience, connecting global healthcare with China\'s manufacturing excellence.', '您值得信赖的中国医疗器械采购桥梁。20年行业经验，连接全球医疗与中国制造。')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.labelKey}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2563EB] transition-all duration-200"
                  aria-label={social.labelKey}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('Quick Links', '快速链接')}</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#2563EB] transition-colors"
                  >
                    {t(link.labelKey, link.labelKeyCn)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('Product Categories', '产品分类')}</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#2563EB] transition-colors"
                  >
                    {t(link.labelKey, link.labelKeyCn)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('Contact Us', '联系我们')}</h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon
                    size={16}
                    className="text-[#2563EB] mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-white/60">
                    {t(info.textKey, info.textKeyCn)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lower Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Dandelion Medical. {t('All Rights Reserved.', '版权所有。')}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-[#2563EB] transition-colors"
              >
                {t(link.labelKey, link.labelKeyCn)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
