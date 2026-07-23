'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PhoneIcon, MailIcon, LocationIcon, LinkedInIcon, WhatsAppIcon, ArrowRightIcon } from '@/components/icons';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('Contact Us', '联系我们')}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('Ready to source medical devices from China? Let\'s start a conversation.', '准备从中国采购医疗器械？让我们开始对话。')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to inquire about medical device sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[#25D366]"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">WhatsApp</h3>
              <p className="text-[#64748B] mb-4">{t('Instant messaging, quick response', '即时通讯，快速响应')}</p>
              <p className="text-[#2563EB] font-semibold flex items-center gap-2">
                {t('Chat Now', '立即聊天')}
                <ArrowRightIcon size={16} />
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:56686877@qq.com"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[#2563EB]"
            >
              <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">Email</h3>
              <p className="text-[#64748B] mb-4">{t('Formal inquiries and documentation', '正式咨询和文件')}</p>
              <p className="text-[#2563EB] font-semibold flex items-center gap-2">
                56686877@qq.com
                <ArrowRightIcon size={16} />
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+8618669317333"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[#10B981]"
            >
              <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">{t('Phone', '电话')}</h3>
              <p className="text-[#64748B] mb-4">{t('Direct call', '直接通话')}</p>
              <p className="text-[#2563EB] font-semibold flex items-center gap-2">
                +86-18669317333
                <ArrowRightIcon size={16} />
              </p>
            </a>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-6">
                {t('Send Us a Message', '给我们留言')}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">{t('Name', '姓名')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      placeholder={t('Your name', '您的姓名')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">{t('Company', '公司')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      placeholder={t('Company name', '公司名称')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">{t('Phone (Optional)', '电话（可选）')}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">{t('Message', '留言')}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
                    placeholder={t('Tell us about your sourcing requirements...', '告诉我们您的采购需求...')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors duration-300"
                >
                  {t('Send Message', '发送消息')}
                </button>
              </form>
            </div>

            {/* WhatsApp QR Code & Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp QR Code */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">{t('Scan to Chat on WhatsApp', '扫码WhatsApp聊天')}</h2>
                <p className="text-[#64748B] mb-6">
                  {t('Scan the QR code below with your WhatsApp camera to start chatting with us.', '用WhatsApp相机扫描下方二维码，即可与我们开始聊天。')}
                </p>
                <div className="flex justify-center">
                  <div className="bg-[#25D366] rounded-2xl p-4">
                    <img
                      src="/images/whatsapp-qr.jpg"
                      alt="WhatsApp QR Code - 阿梁"
                      className="w-64 h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center text-[#64748B] mt-4 text-sm">
                  {t('WhatsApp: +86-18669317333', 'WhatsApp: +86-18669317333')}
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">{t('Contact Information', '联系信息')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                      <LocationIcon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] mb-1">{t('Location', '地址')}</h3>
                      <p className="text-[#64748B]">{t('Shandong Province, China', '中国山东省')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] mb-1">{t('Phone', '电话')}</h3>
                      <p className="text-[#64748B]">+86-18669317333</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                      <MailIcon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] mb-1">Email</h3>
                      <p className="text-[#64748B]">56686877@qq.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                      <LocationIcon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1E293B] mb-1">{t('Address', '地址')}</h3>
                      <p className="text-[#64748B]">{t('Linyi, Shandong, China', '山东省临沂市')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#1E293B] mb-4">{t('Business Hours', '工作时间')}</h3>
                  <p className="text-[#64748B] mb-2">{t('Monday - Friday: 9:00 AM - 6:00 PM (CST)', '周一至周五: 上午9:00 - 下午6:00 (北京时间)')}</p>
                  <p className="text-[#64748B]">{t('Saturday: 9:00 AM - 12:00 PM (CST)', '周六: 上午9:00 - 中午12:00 (北京时间)')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
