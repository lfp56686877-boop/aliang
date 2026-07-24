'use client';

import { useState, ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SearchIcon, ArrowRightIcon, ConsumablesIcon, ScalpelIcon, OrthopedicIcon, DiagnosticIcon, MonitoringIcon, IVDIcon, DentalIcon, OphthalmicIcon, RehabilitationIcon, RespiratoryIcon, LaboratoryIcon, InterventionalIcon, BloodIcon, EndoscopyIcon, ImagingIcon, ReproductionIcon, MedicalITIcon, SterilizationIcon } from '@/components/icons';

interface ProductCategory {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  icon: ReactNode;
  subcategories: string[];
}

const productCategories: ProductCategory[] = [
  {
    id: 'general',
    name: 'General Medical Supplies',
    nameCn: '医疗耗材',
    description: 'Consumables, disposables, PPE',
    icon: <ConsumablesIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Syringes & Needles',
      'Infusion Sets',
      'Blood Collection Sets',
      'Urinary Catheters',
      'Drainage Tubes',
      'Suture Materials',
      'Surgical Staples',
      'Dressings & Bandages',
      'Medical Tapes',
      'Gloves & Masks',
      'PPE & Protective Equipment',
      'Wound Repair Materials',
      'Hemostatic Materials',
      'Absorbent Pads',
      'Medical Swabs',
      'Tourniquets',
      'Thermometer Covers',
      'Sharps Disposal Containers',
    ],
  },
  {
    id: 'surgical',
    name: 'Surgical Instruments',
    nameCn: '手术器械',
    description: 'Operating room equipment',
    icon: <ScalpelIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：吻（缝）合器及附件 (C11) ===
      // 腔镜吻合器
      'Circular Stapler',
      'Circular Stapler Cartridge',
      'Laparoscopic Cutting Stapler',
      'Laparoscopic Stapler Cartridge',
      'Laparoscopic Clip Applier',
      'Surgical Clips',
      'Endoscopic Snare',
      'Laparoscopic Suture Device',
      'Laparoscopic Purse-String Stapler',
      'Laparoscopic Purse-String Cartridge',
      // 开放吻合器
      'Open Cutting Stapler',
      'Open Stapler Cartridge',
      'Open Stapler',
      'Open Stapler Cartridge',
      'Hemorrhoidal Stapler',
      'Hemorrhoidal Stapler Cartridge',
      'Purse-String Stapler',
      'Purse-String Cartridge',
      'Open Clip Applier',
      'Skin Stapler',
      'Circumcision Stapler',
      'Other Staplers & Accessories',
      // 原有分类
      'Scalpels & Blades',
      'Surgical Scissors',
      'Forceps & Clamps',
      'Retractors',
      'Electrosurgical Units',
      'Surgical Lights',
      'Operating Tables',
      'Suction & Irrigation',
      'Surgical Microscopes',
      'Laparoscopic Instruments',
      'Robotic Surgery Systems',
      'Surgical Navigation',
      'Ultrasonic Scalpels',
      'Laser Surgical Systems',
      'Cryosurgery Equipment',
      'Surgical Mesh',
      'Skin Grafting Tools',
      'Surgical Drills & Saws',
    ],
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Devices',
    nameCn: '骨科器械',
    description: 'Implants, trauma, joint replacement',
    icon: <OrthopedicIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：骨及软骨组织材料 (C03) ===
      'Bone Fixation Implants (Plates, Screws)',
      'Sports Medicine Repair Implants',
      'Suture Anchors',
      'Artificial Ligaments',
      'Soft Tissue Fixation Nails',
      // === 官方分类：骨科植入物 (C07) ===
      'Orthopedic Internal Fixation (Titanium)',
      'Orthopedic Internal Fixation (Alloy)',
      'Orthopedic Accessories',
      'Spinal Implants',
      'Joint Replacement Implants',
      // === 官方分类：骨科其他材料 (C08) ===
      'Orthopedic Cement',
      'Orthopedic Filler',
      'Orthopedic Wedge',
      'Orthopedic Positioner',
      'Orthopedic Navigation Guide',
      'Orthopedic Drill Guide',
      // 原有分类
      'Joint Prostheses (Hip, Knee, Shoulder)',
      'Trauma Plates & Screws',
      'Intramedullary Nails',
      'Spine Implants (Pedicle Screws, Cages)',
      'Bone Cement',
      'External Fixators',
      'Bone Graft Substitutes',
      'Spinal Cord Stimulators',
      'Orthopedic Navigation Systems',
      'Arthroscopy Instruments',
      'Minimally Invasive Spine Tools',
      'Orthopedic Power Tools',
      'Fracture Braces',
    ],
  },
  {
    id: 'diagnostic',
    name: 'Diagnostic Equipment',
    nameCn: '诊断设备',
    description: 'X-ray, ultrasound, ECG',
    icon: <DiagnosticIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'X-Ray Machines (DR, CR)',
      'Ultrasound Systems',
      'ECG/EKG Devices',
      'Pulse Oximeters',
      'Blood Pressure Monitors',
      'Stethoscopes',
      'Spirometers',
      'Fundus Cameras',
      'OCT Systems',
      'Dermatoscopes',
      'Audiometers',
      'Tonometers',
      'Autorefractors',
      'Lensmeters',
      'Pachymeters',
      'Retinal Cameras',
      'TCD Transcranial Doppler',
      'Ankle-Brachial Index (ABI) Devices',
    ],
  },
  {
    id: 'monitoring',
    name: 'Patient Monitoring',
    nameCn: '监护设备',
    description: 'ICU, vital signs monitors',
    icon: <MonitoringIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：心血管植入物 (C02) - 起搏器/除颤器 ===
      'Temporary Pacemaker Electrode',
      'Single-Chamber Pacemaker',
      'Dual-Chamber Pacemaker',
      'Triple-Chamber Pacemaker (CRT)',
      'Leadless Pacemaker',
      'Single-Chamber ICD',
      'Dual-Chamber ICD',
      'Triple-Chamber ICD (CRT-D)',
      'Subcutaneous ICD (S-ICD)',
      'Implantable Cardiac Monitor',
      'Pacemaker Lead Wire',
      'ICD Lead Wire',
      // 原有分类
      'Multi-Parameter Monitors',
      'ICU Monitoring Systems',
      'Fetal Monitors',
      'Telemetry Systems',
      'Central Monitoring Stations',
      'Bedside Monitors',
      'Anesthesia Monitors',
      'EEG Monitors',
      'EMG Monitors',
      'Hemodynamic Monitors',
      'Neonatal Monitors',
      'Capnography Monitors',
      'BIS Monitors (Anesthesia Depth)',
      'Cardiac Output Monitors',
      'Near-Infrared Spectroscopy (NIRS)',
      'Continuous Glucose Monitors',
      'Sleep Study Equipment',
      'Holter Monitors',
    ],
  },
  {
    id: 'ivd',
    name: 'In Vitro Diagnostics (IVD)',
    nameCn: '体外诊断',
    description: 'Reagents, analyzers',
    icon: <IVDIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Clinical Chemistry Analyzers',
      'Hematology Analyzers',
      'Immunoassay Analyzers',
      'Molecular Diagnostics (PCR)',
      'Point-of-Care Testing (POCT)',
      'Urine Analyzers',
      'Coagulation Analyzers',
      'Microbiology Systems',
      'Blood Gas Analyzers',
      'Electrolyte Analyzers',
      'HbA1c Analyzers',
      'Tumor Markers',
      'Thyroid Function Tests',
      'Cardiac Markers (Troponin, BNP)',
      'Infectious Disease Tests',
      'Blood Typing Systems',
      'Crossmatch Equipment',
      'Histology & Pathology',
    ],
  },
  {
    id: 'dental',
    name: 'Dental Equipment',
    nameCn: '口腔设备',
    description: 'Chairs, instruments, materials',
    icon: <DentalIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：口腔材料 ===
      'Oral Implant System',
      'Oral Restoration Materials',
      'Orthodontic Materials',
      'Dental Filling Materials',
      'Dental Impression Materials',
      // 原有分类
      'Dental Chairs',
      'Dental Handpieces (High/Low Speed)',
      'Dental X-Ray Systems',
      'Dental CBCT (Cone Beam)',
      'Intraoral Cameras',
      'Curing Lights',
      'Ultrasonic Scalers',
      'Dental Lasers',
      'Dental Implants',
      'Endodontic Instruments',
      'Orthodontic Brackets & Wires',
      'Dental Sterilization (Autoclaves)',
      'Dental Compressors & Suction',
      'CAD/CAM Systems',
      '3D Printers (Dental)',
      'Teeth Whitening Systems',
    ],
  },
  {
    id: 'ophthalmic',
    name: 'Ophthalmic Devices',
    nameCn: '眼科器械',
    description: 'Eye care equipment',
    icon: <OphthalmicIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：眼科材料 ===
      'Intraocular Lenses (IOL)',
      'Contact Lenses',
      'Ocular Implants',
      'Glaucoma Drainage Devices',
      'Ophthalmic Viscoelastic Devices',
      // 原有分类
      'Slit Lamps',
      'Tonometers (IOP Measurement)',
      'Autorefractors & Keratometers',
      'Fundus Cameras',
      'OCT (Optical Coherence Tomography)',
      'Visual Field Analyzers (Perimeters)',
      'Ophthalmic Ultrasound (A/B Scan)',
      'Phacoemulsification Systems',
      'Femtosecond Lasers',
      'Excimer Lasers (LASIK)',
      'Vitrectomy Systems',
      'Corneal Topographers',
      'Wavefront Aberrometers',
      'Ophthalmic Microscopes',
      'Tear Film Analyzers',
      'Retinal Laser Systems',
      'OCT-A (Angiography)',
    ],
  },
  {
    id: 'rehabilitation',
    name: 'Rehabilitation Equipment',
    nameCn: '康复设备',
    description: 'Physical therapy, mobility',
    icon: <RehabilitationIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Manual Wheelchairs',
      'Electric Wheelchairs',
      'Mobility Scooters',
      'Walkers & Rollators',
      'Crutches & Canes',
      'Patient Lifts & Hoists',
      'Hospital Beds',
      'Prosthetics (Upper/Lower Limb)',
      'Orthoses (Braces & Supports)',
      'TENS Units (Electrical Stimulation)',
      'Laser Therapy Systems',
      'Ultrasound Therapy',
      'Magnetic Therapy',
      'Hydrotherapy Equipment',
      'CPM Machines (Continuous Passive Motion)',
      'Balance Training Systems',
      'Rehabilitation Robots',
      'Hyperbaric Oxygen Chambers',
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory Devices',
    nameCn: '呼吸设备',
    description: 'Ventilators, CPAP, oxygen',
    icon: <RespiratoryIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Invasive Mechanical Ventilators',
      'Non-Invasive Ventilators (NIPPV)',
      'CPAP/BiPAP Machines',
      'Oxygen Concentrators',
      'Portable Oxygen Systems',
      'Nebulizers',
      'High-Flow Nasal Cannula (HFNC)',
      'Pulse Oximeters',
      'Spirometers',
      'Peak Flow Meters',
      'Breathing Circuits & Tubing',
      'Humidifiers',
      'Suction Machines',
      'Tracheostomy Supplies',
      'Sleep Apnea Testing (PSG)',
      'Capnography Monitors',
      'Pulmonary Function Test Systems',
      'Respiratory Therapy Accessories',
    ],
  },
  {
    id: 'laboratory',
    name: 'Laboratory Equipment',
    nameCn: '实验室设备',
    description: 'Lab instruments, centrifuges',
    icon: <LaboratoryIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Centrifuges',
      'Microscopes (Optical/Fluorescence)',
      'Incubators (CO2/Normal)',
      'Spectrophotometers',
      'Microplate Readers',
      'Microplate Washers',
      'Biological Safety Cabinets (BSC)',
      'Laminar Flow Hoods',
      'Lab Refrigerators & Freezers',
      'Ultra-Low Temperature Freezers',
      'Water Purification Systems',
      'Autoclaves (Lab Grade)',
      'Shakers & Mixers',
      'Pipettes & Pipette Tips',
      'Balances & Scales',
      'pH Meters',
      'Conductivity Meters',
      'Lab Automation Systems',
    ],
  },
  {
    id: 'interventional',
    name: 'Interventional Devices',
    nameCn: '介入器械',
    description: 'Catheters, stents, guidewires',
    icon: <InterventionalIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：血管介入治疗类材料 (C02) ===
      // 冠状动脉介入
      'Coronary Stent (Drug-Eluting)',
      'Coronary Stent (Bare Metal)',
      'Coronary Bioresorbable Stent',
      'Coronary Balloon Catheter',
      'Coronary Cutting Balloon',
      'Coronary Scoring Balloon',
      'Coronary Anchoring Balloon',
      'Coronary Shockwave Balloon',
      // 神经介入
      'Intracranial Stent (Aneurysm)',
      'Intracranial Stent (Stenosis)',
      'Intracranial Thrombectomy Stent',
      'Flow Diverter Stent',
      'Intracranial Balloon Catheter',
      // 外周血管介入
      'Carotid Artery Stent',
      'Vertebral Artery Stent',
      'Renal Artery Stent',
      'Thoracic Aortic Stent',
      'Abdominal Aortic Stent',
      'Iliofemoral Artery Stent',
      'Femoropopliteal Artery Stent',
      'Below-Knee Artery Stent',
      'Peripheral Vascular Stent',
      'Vena Cava Stent',
      'Iliofemoral Vein Stent',
      'Portal Vein Shunt Stent',
      'Peripheral Balloon Catheter',
      'Peripheral Cutting Balloon',
      'Peripheral Scoring Balloon',
      'Peripheral Shockwave Balloon',
      // 栓塞材料
      'Embolization Coils',
      'Liquid Embolic Agent',
      'Aneurysm Occlusion Device',
      // 结构心脏病
      'Cardiac Measurement Balloon',
      'Mitral Valve Balloon Catheter',
      'Pulmonary Artery Balloon Catheter',
      'Pulmonary Valve Balloon Catheter',
      'Aortic Valve Balloon Catheter',
      'Vascular Occlusion Balloon',
      // 通用介入
      'Vascular Embolization Balloon',
      'Vascular Occlusion Balloon Catheter',
    ],
  },
  {
    id: 'blood',
    name: 'Blood Management',
    nameCn: '血液管理',
    description: 'Blood bags, transfusion',
    icon: <BloodIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：人工器官、组织及配套材料 (C06) - 血液循环系统 ===
      'Artificial Blood Vessels',
      // 原有分类
      'Blood Collection Bags',
      'Blood Transfusion Sets',
      'Blood Filters',
      'Blood Cell Separators',
      'Plasma Exchange Equipment',
      'Apheresis Machines',
      'Hemodialysis Machines',
      'Hemodialyzers (Dialysis Membranes)',
      'CRRT Machines',
      'Peritoneal Dialysis Systems',
      'Blood Storage Refrigerators',
      'Blood Warmers',
      'Blood Irradiators',
      'Blood Typing Systems',
      'Crossmatch Equipment',
      'Plasma Freezers',
      'Thawing Devices',
      'Hemoglobin Analyzers',
    ],
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy Systems',
    nameCn: '内窥镜系统',
    description: 'Endoscopes, accessories',
    icon: <EndoscopyIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：非血管介入治疗类材料 (C01) ===
      // 呼吸介入
      'Tracheobronchial Stent',
      'Airway Balloon Catheter',
      // 消化介入
      'Esophageal Stent',
      'Intestinal Stent',
      'Pancreatic Duct Stent',
      'Biliary Stent',
      'Cholangiopancreatic Stent',
      'Cardia Balloon Catheter',
      'Esophageal Balloon Catheter',
      'Intestinal Balloon Catheter',
      'Cholangiopancreatic Balloon Catheter',
      'Cholangiopancreatic Stone Retrieval Balloon',
      // 泌尿介入
      'Ureteral Stent',
      'Urethral Stent',
      'Urinary System Balloon Catheter',
      // 耳鼻喉介入
      'Sinus Stent',
      'ENT Balloon Catheter',
      // 其他非血管介入
      'Non-Vascular Occlusion Balloon',
      'Compression Balloon Catheter',
      // 内镜器械
      'Gastroscopes (EGD)',
      'Colonoscopes',
      'Bronchoscopes',
      'Laparoscopes',
      'Arthroscopes',
      'Hysteroscopes',
      'Ureteroscopes',
      'Cystoscopes',
      'Sinuscopes (ENT)',
      'Video Processors',
      'Xenon/LED Light Sources',
      'Endoscopic Insufflators',
      'Endoscopic Ultrasonography (EUS)',
      'Capsule Endoscopy',
      'Endoscope Reprocessors (AER)',
      'Biopsy Forceps',
      'Snare Loops',
      'Endoscopic Stents',
    ],
  },
  {
    id: 'imaging',
    name: 'Medical Imaging',
    nameCn: '医学影像',
    description: 'CT, MRI, X-ray systems',
    icon: <ImagingIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      // === 官方分类：人工器官、组织及配套材料 (C06) - 感觉器官 ===
      'Cochlear Implants',
      'Ossicular Prostheses',
      'Implantable Bone Conduction Hearing Devices',
      'Vibrant Soundbridge',
      // === 官方分类：人工血管 ===
      'Artificial Blood Vessels',
      // 原有分类
      'CT Scanners (16/64/128/256 Slice)',
      'MRI Systems (1.5T/3.0T)',
      'Digital Radiography (DR)',
      'Fluoroscopy Systems',
      'Mammography Systems',
      'Tomosynthesis (3D Mammography)',
      'PET/CT Systems',
      'PET/MRI Systems',
      'DSA (Digital Subtraction Angiography)',
      'Bone Densitometry (DEXA)',
      'Nuclear Medicine (Gamma Camera)',
      'SPECT Systems',
      'C-Arm (Mobile Fluoroscopy)',
      'Ultrasound (General/Purpose)',
      'Point-of-Care Ultrasound (POCUS)',
      'Contrast Agents',
      'PACS (Picture Archiving)',
      'AI-Assisted Diagnostic Imaging',
    ],
  },
  {
    id: 'reproduction',
    name: 'Assisted Reproduction',
    nameCn: '辅助生殖',
    description: 'IVF equipment',
    icon: <ReproductionIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'IVF Workstations',
      'CO2 Incubators (IVF)',
      'Micromanipulators (ICSI)',
      'Cryopreservation Systems',
      'Vitrification Devices',
      'Sperm Analyzers (CASA)',
      'Sperm Preparation Systems',
      'Embryo Culture Media',
      'Oocyte Retrieval Needles',
      'Embryo Transfer Catheters',
      'Laser Assisted Hatching',
      'Time-Lapse Imaging Systems',
      'Benchtop Incubators',
      'Phase Contrast Microscopes',
      'Incubator Monitoring Systems',
      'Lab Consumables (Dishes, Pipettes)',
      'Cryotanks & LN2 Storage',
      'Temperature Loggers',
    ],
  },
  {
    id: 'it',
    name: 'Medical IT Systems',
    nameCn: '医疗信息化',
    description: 'HIS, PACS, EMR',
    icon: <MedicalITIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Hospital Information Systems (HIS)',
      'PACS (Picture Archiving & Communication)',
      'RIS (Radiology Information Systems)',
      'EMR/EHR (Electronic Medical Records)',
      'LIS (Laboratory Information Systems)',
      'OR Information Systems',
      'Nursing Information Systems',
      'Pharmacy Information Systems',
      'Revenue Cycle Management',
      'Telemedicine Platforms',
      'Remote Patient Monitoring',
      'Clinical Decision Support Systems',
      'Medical AI Software',
      'DICOM Viewers',
      'Health Information Exchange (HIE)',
      'Patient Portal Systems',
      'Medical Device Integration',
      'Clinical Research Platforms',
    ],
  },
  {
    id: 'packaging',
    name: 'Packaging & Sterilization',
    nameCn: '包装灭菌',
    description: 'Sterilization equipment',
    icon: <SterilizationIcon className="w-10 h-10 text-[#2563EB]" />,
    subcategories: [
      'Autoclaves (Steam Sterilization)',
      'Ethylene Oxide (EtO) Sterilization',
      'Hydrogen Peroxide Plasma Sterilization',
      'Dry Heat Sterilization',
      'Sterilization Indicators (Chemical/Biological)',
      'Medical Packaging Materials',
      'Pouches & Wraps',
      'Sealing Machines (Heat Sealer)',
      'Clean Room Equipment',
      'HEPA Filtration Systems',
      'Laminar Flow Units',
      'Sterilization Monitoring Systems',
      'Sterility Testing Equipment',
      'Water Treatment Systems (WFI)',
      'Pure Steam Generators',
      'Air Handling Units (AHU)',
      'Pass-Through Chambers',
      'Environmental Monitoring',
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = productCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.nameCn.includes(searchQuery) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What We Source
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              18 Categories, 5000+ Products — We help you find the right medical devices from China.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedCategory?.id === category.id
                    ? 'border-[#2563EB]'
                    : 'border-transparent hover:border-[#2563EB]/30'
                }`}
                onClick={() => setSelectedCategory(selectedCategory?.id === category.id ? null : category)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-1">{category.name}</h3>
                    <p className="text-xs text-[#94A3B8] mb-2">{category.nameCn}</p>
                    <p className="text-sm text-[#64748B]">{category.description}</p>
                  </div>
                </div>

                {/* Subcategories */}
                {selectedCategory?.id === category.id && (
                  <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                    <h4 className="text-sm font-semibold text-[#1E293B] mb-3">Subcategories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="px-3 py-1 text-xs font-medium bg-[#EFF6FF] text-[#2563EB] rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/8618669317333?text=${encodeURIComponent(`Hello, I'm interested in ${category.name}. Can you help?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-[#2563EB] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Inquire Now
                      <ArrowRightIcon size={16} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[#64748B] mb-4">Can&apos;t find what you need?</p>
            <a
              href="https://wa.me/8618669317333?text=Hello, I have a specific medical device sourcing requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 font-semibold"
            >
              Contact Us for Custom Sourcing
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
