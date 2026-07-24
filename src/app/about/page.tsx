'use client';

import { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ArrowRightIcon } from '@/components/icons';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  { year: '2019', title: 'Company Founded', description: 'Dandelion China Medical established in China, starting with a vision to bridge global healthcare with Chinese manufacturing.' },
  { year: '2020', title: 'First International Client', description: 'Secured first major partnership with Middle Eastern healthcare distributor.' },
  { year: '2021', title: 'Network Expansion', description: 'Expanded factory network to 50+ verified partners across China.' },
  { year: '2022', title: 'Global Reach', description: 'Products reaching 30+ countries across Middle East, Africa, and Asia.' },
  { year: '2023', title: 'Digital Transformation', description: 'Launched video factory verification service for remote clients.' },
  { year: '2024', title: '50+ Countries', description: 'Established presence in 50+ countries with 100+ factory partners.' },
];

interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  { icon: '🤝', title: 'Trust', description: 'Building long-term relationships through transparency and reliability.' },
  { icon: '✅', title: 'Quality', description: 'Ensuring every product meets international standards and certifications.' },
  { icon: '🌟', title: 'Service', description: 'Going above and beyond to exceed client expectations.' },
  { icon: '💎', title: 'Integrity', description: 'Honest communication and ethical business practices.' },
];

function useCountUp(target: number, isVisible: boolean, duration: number = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ value, label, suffix, isVisible }: { value: number; label: string; suffix: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">
        {count}{suffix}
      </div>
      <div className="text-[#64748B]">{label}</div>
    </div>
  );
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About Dandelion China Medical
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your Bridge to China&apos;s Medical Device Market
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                20 Years of Medical Device Expertise
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Founded in 2019, Dandelion China Medical leverages over 20 years of deep expertise in the medical device industry. We understand China&apos;s complex manufacturing landscape and help global healthcare providers navigate it with confidence.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Our mission is simple: connect global healthcare with China&apos;s manufacturing excellence through transparent, reliable, and efficient sourcing.
              </p>
              <a
                href="https://wa.me/8618669317333?text=Hello, I'd like to learn more about Dandelion China Medical."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-semibold"
              >
                Get in Touch
                <ArrowRightIcon size={18} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2563EB] mb-2">20+</div>
                  <div className="text-[#64748B] text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">100+</div>
                  <div className="text-[#64748B] text-sm">Partner Factories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F97316] mb-2">50+</div>
                  <div className="text-[#64748B] text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#8B5CF6] mb-2">1000+</div>
                  <div className="text-[#64748B] text-sm">Products Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2">{milestone.title}</h3>
                    <p className="text-[#64748B]">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let us help you source the right medical devices from China.
          </p>
          <a
            href="https://wa.me/8618669317333?text=Hello, I'd like to discuss a partnership with Dandelion China Medical."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-full hover:bg-[#EFF6FF] transition-all duration-300 font-semibold"
          >
            Start a Conversation
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
