'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { ArrowRightIcon, ScalpelIcon, ConsumablesIcon, OrthopedicIcon, DiagnosticIcon, MonitoringIcon, IVDIcon, DentalIcon, OphthalmicIcon, RehabilitationIcon, RespiratoryIcon, LaboratoryIcon, InterventionalIcon, BloodIcon, EndoscopyIcon, ImagingIcon, ReproductionIcon, MedicalITIcon, SterilizationIcon, SurgicalRobotIcon } from './icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCategory {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  descriptionCn: string;
  icon: ReactNode;
}

const productCategories: ProductCategory[] = [
  {
    id: 'robotics',
    name: 'Surgical Robotics',
    nameCn: '手术机器人',
    description: 'Robotic surgery systems',
    descriptionCn: '机器人手术系统',
    icon: <SurgicalRobotIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'general',
    name: 'General Medical Supplies',
    nameCn: '医疗耗材',
    description: 'Consumables, disposables, PPE',
    descriptionCn: '消耗品、一次性用品、防护装备',
    icon: <ConsumablesIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'surgical',
    name: 'Surgical Instruments',
    nameCn: '手术器械',
    description: 'Operating room equipment',
    descriptionCn: '手术室设备',
    icon: <ScalpelIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Devices',
    nameCn: '骨科器械',
    description: 'Implants, trauma, joint replacement',
    descriptionCn: '植入物、创伤、关节置换',
    icon: <OrthopedicIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'diagnostic',
    name: 'Diagnostic Equipment',
    nameCn: '诊断设备',
    description: 'X-ray, ultrasound, ECG',
    descriptionCn: 'X光、超声、心电图',
    icon: <DiagnosticIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'monitoring',
    name: 'Patient Monitoring',
    nameCn: '监护设备',
    description: 'ICU, vital signs monitors',
    descriptionCn: 'ICU、生命体征监护仪',
    icon: <MonitoringIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'ivd',
    name: 'In Vitro Diagnostics (IVD)',
    nameCn: '体外诊断',
    description: 'Reagents, analyzers',
    descriptionCn: '试剂、分析仪',
    icon: <IVDIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'dental',
    name: 'Dental Equipment',
    nameCn: '口腔设备',
    description: 'Chairs, instruments, materials',
    descriptionCn: '牙椅、器械、材料',
    icon: <DentalIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'ophthalmic',
    name: 'Ophthalmic Devices',
    nameCn: '眼科器械',
    description: 'Eye care equipment',
    descriptionCn: '眼科护理设备',
    icon: <OphthalmicIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'rehabilitation',
    name: 'Rehabilitation Equipment',
    nameCn: '康复设备',
    description: 'Physical therapy, mobility',
    descriptionCn: '物理治疗、移动辅助',
    icon: <RehabilitationIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'respiratory',
    name: 'Respiratory Devices',
    nameCn: '呼吸设备',
    description: 'Ventilators, CPAP, oxygen',
    descriptionCn: '呼吸机、CPAP、制氧机',
    icon: <RespiratoryIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'laboratory',
    name: 'Laboratory Equipment',
    nameCn: '实验室设备',
    description: 'Lab instruments, centrifuges',
    descriptionCn: '实验室仪器、离心机',
    icon: <LaboratoryIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'interventional',
    name: 'Interventional Devices',
    nameCn: '介入器械',
    description: 'Catheters, stents, guidewires',
    descriptionCn: '导管、支架、导丝',
    icon: <InterventionalIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'blood',
    name: 'Blood Management',
    nameCn: '血液管理',
    description: 'Blood bags, transfusion',
    descriptionCn: '血袋、输血',
    icon: <BloodIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy Systems',
    nameCn: '内窥镜系统',
    description: 'Endoscopes, accessories',
    descriptionCn: '内窥镜、附件',
    icon: <EndoscopyIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'imaging',
    name: 'Medical Imaging',
    nameCn: '医学影像',
    description: 'CT, MRI, X-ray systems',
    descriptionCn: 'CT、MRI、X光系统',
    icon: <ImagingIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'reproduction',
    name: 'Assisted Reproduction',
    nameCn: '辅助生殖',
    description: 'IVF equipment',
    descriptionCn: '试管婴儿设备',
    icon: <ReproductionIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'it',
    name: 'Medical IT Systems',
    nameCn: '医疗信息化',
    description: 'HIS, PACS, EMR',
    descriptionCn: 'HIS、PACS、电子病历',
    icon: <MedicalITIcon className="w-10 h-10 text-[#2563EB]" />,
  },
  {
    id: 'packaging',
    name: 'Packaging & Sterilization',
    nameCn: '包装灭菌',
    description: 'Sterilization equipment',
    descriptionCn: '灭菌设备',
    icon: <SterilizationIcon className="w-10 h-10 text-[#2563EB]" />,
  },
];

function CategoryCard({ category, isVisible, index }: { category: ProductCategory; isVisible: boolean; index: number }) {
  const { language } = useLanguage();

  return (
    <a
      href={`/products?field=${category.id}`}
      className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E2E8F0] hover:border-[#2563EB] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {category.icon}
      </div>
      <h3 className="text-base font-bold text-[#1E293B] mb-1 group-hover:text-[#2563EB] transition-colors text-center">
        {language === 'en' ? category.name : category.nameCn}
      </h3>
      <p className="text-xs text-[#94A3B8] mb-2 text-center">
        {language === 'en' ? category.nameCn : category.name}
      </p>
      <p className="text-sm text-[#64748B] text-center">
        {language === 'en' ? category.description : category.descriptionCn}
      </p>
    </a>
  );
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#2563EB] font-semibold text-sm tracking-wider uppercase mb-4">
            {t('What We Source', '采购品类')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            {t('19 Categories, 5000+ Products', '19大品类，5000+产品')}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            {t('We help you find the right medical devices from China\'s vast manufacturing landscape.', '我们帮助您从中国庞大的制造领域中找到合适的医疗器械。')}
          </p>
        </div>

        {/* Categories Grid */}
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {productCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full hover:bg-[#1E40AF] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            {t('View All Products', '查看所有产品')}
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
