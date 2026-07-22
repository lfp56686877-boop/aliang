"use client";

import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  LinkedInIcon,
  WeChatIcon,
  WeiboIcon,
} from "./icons";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

const productLinks = [
  { label: "Cardiology", href: "#products" },
  { label: "Surgery", href: "#products" },
  { label: "ENT", href: "#products" },
  { label: "All Products", href: "#products" },
];

const contactInfo = [
  {
    icon: LocationIcon,
    text: "Shandong Province, Weihai City, Dandelion Road No.1",
  },
  {
    icon: PhoneIcon,
    text: "+86-631-5628888",
  },
  {
    icon: MailIcon,
    text: "info@dandelionmedical.com",
  },
];

const socialLinks = [
  { icon: WeChatIcon, href: "#", label: "WeChat" },
  { icon: WeiboIcon, href: "#", label: "Weibo" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-10">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Company Info */}
          <div className="max-w-[300px]">
            <div className="mb-5">
              <span className="text-xl font-bold">DANDELION MEDICAL</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Founded in 2019, Dandelion Medical is a professional Chinese
              medical device export company, dedicated to providing high-quality
              medical device products and services to global healthcare
              institutions. We are committed to connecting China's medical
              excellence with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-dandelion-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Product Categories</h4>
            <ul className="flex flex-col gap-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-dandelion-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon
                    size={16}
                    className="text-dandelion-blue mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-dandelion-blue hover:-translate-y-1 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dandelion Medical. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-dandelion-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
