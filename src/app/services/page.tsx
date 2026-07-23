'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ArrowRightIcon } from '@/components/icons';

interface ProcessStep {
  step: number;
  title: string;
  titleCn: string;
  description: string;
  details: string[];
  icon: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Tell Us What You Need',
    titleCn: '告诉我们您的需求',
    description: 'Share your requirements via WhatsApp or LinkedIn. We listen, understand, and start sourcing.',
    details: [
      'Share product specifications and requirements',
      'Discuss budget and timeline expectations',
      'Initial consultation at no cost',
      'Response within 24 hours',
    ],
    icon: '💬',
  },
  {
    step: 2,
    title: 'We Find the Best Sources',
    titleCn: '我们为您寻找最佳供应商',
    description: 'Our 100+ factory network, pre-audit verification, and video factory tours ensure quality.',
    details: [
      'Access to 100+ verified factories',
      'Pre-audit quality assessment',
      'Live video factory tours',
      'Sample sourcing and comparison',
    ],
    icon: '🔍',
  },
  {
    step: 3,
    title: 'Test & Approve',
    titleCn: '测试与确认',
    description: 'Sample arrangement, quality testing, and your approval before any bulk order commitment.',
    details: [
      'Sample arrangement and shipping',
      'Quality testing and verification',
      'Your approval before bulk order',
      'No commitment until satisfied',
    ],
    icon: '✅',
  },
  {
    step: 4,
    title: 'Quality Control',
    titleCn: '质量控制',
    description: 'Pre-shipment inspection, third-party verification (SGS/BV), complete documentation.',
    details: [
      'Pre-shipment inspection',
      'Third-party verification (SGS/BV)',
      'Complete documentation',
      'Certification verification',
    ],
    icon: '🛡️',
  },
  {
    step: 5,
    title: 'Delivered to Your Door',
    titleCn: '送达您的手中',
    description: 'Export handling, logistics arrangement, and seamless door-to-door delivery worldwide.',
    details: [
      'Export documentation handling',
      'Customs clearance assistance',
      'International logistics arrangement',
      'Door-to-door delivery tracking',
    ],
    icon: '📦',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Work
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From inquiry to delivery — our streamlined 5-step process ensures transparent, efficient, and reliable sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E293B]">{step.title}</h3>
                        <p className="text-sm text-[#94A3B8]">{step.titleCn}</p>
                      </div>
                    </div>
                    <p className="text-[#64748B] mb-6 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                          <div className="w-5 h-5 bg-[#10B981] rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-0.5 h-8 bg-[#E2E8F0]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-[#64748B] mb-8 max-w-xl mx-auto">
            Contact us today and let us help you find the right medical devices from China.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/8618669317333?text=Hello, I'd like to start sourcing medical devices."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-semibold"
            >
              Start Your Sourcing Journey
              <ArrowRightIcon size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full hover:bg-[#1E40AF] transition-all duration-300 font-semibold"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
