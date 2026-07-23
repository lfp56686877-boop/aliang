"use client";

import { useState, useMemo } from "react";
import { SearchIcon, ArrowRightIcon } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface ProductField {
  id: string;
  name: string;
  nameCn: string;
  subcategories: string[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const productFields: ProductField[] = [
  {
    id: "general",
    name: "General Supplies",
    nameCn: "通用耗材",
    subcategories: [
      "Clinical Nursing Supplies",
      "Critical Care Supplies",
      "Other Clinical Supplies",
      "Infection Prevention Supplies",
      "Infusion Supplies",
      "IV Cannulas",
      "Anesthesia & Respiratory Supplies",
      "Operating Room Supplies (Packs)",
    ],
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    nameCn: "内分泌",
    subcategories: ["Endocrinology Supplies"],
  },
  {
    id: "medical-it",
    name: "Medical IT",
    nameCn: "医疗信息化",
    subcategories: [
      "Smart Hospital Solutions",
      "Smart Nephrology Solutions",
      "Smart Nursing Solutions",
      "Smart Supply Chain Solutions",
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    nameCn: "骨科",
    subcategories: [
      "Spine",
      "Joint",
      "Trauma",
      "Sports Medicine",
      "Orthopedic Instruments",
      "Bone Repair Materials",
      "Spinal Endoscopy",
    ],
  },
  {
    id: "dental",
    name: "Dental",
    nameCn: "口腔",
    subcategories: ["Dental Instruments", "Dental Implants"],
  },
  {
    id: "tissue-repair",
    name: "Tissue Repair",
    nameCn: "组织修复",
    subcategories: [
      "PRP Therapy Supplies",
      "Negative Pressure Wound Therapy",
    ],
  },
  {
    id: "blood-purification",
    name: "Blood Purification",
    nameCn: "血液净化",
    subcategories: [
      "Hemodialysis Equipment",
      "Hemodialysis Supplies",
      "Peritoneal Dialysis Solutions",
      "Other Hemodialysis Supplies",
      "Other Peritoneal Dialysis Supplies",
      "Dialysis Equipment Cleaning Products",
      "Dialysis Solutions & Supplies",
    ],
  },
  {
    id: "packaging",
    name: "Packaging Materials",
    nameCn: "药包材",
    subcategories: [
      "Pre-filled Drug Delivery Systems",
      "Pharmaceutical Packaging",
      "Automatic Drug Delivery Systems",
    ],
  },
  {
    id: "surgery",
    name: "Surgery",
    nameCn: "外科",
    subcategories: [
      "Surgical Instruments",
      "Suture Materials",
      "Surgical Dressings",
      "Surgical Ostomy Supplies",
      "Other Surgical Supplies",
    ],
  },
  {
    id: "robotics",
    name: "Surgical Robots",
    nameCn: "手术机器人",
    subcategories: [
      "Laparoscopic Surgical Robots",
      "Laparoscopic Surgical Robot Instruments",
    ],
  },
  {
    id: "blood-collection",
    name: "Blood Collection",
    nameCn: "全血采集",
    subcategories: [
      "Blood Collection Supplies",
      "Blood Collection Products",
      "Transfusion Equipment",
    ],
  },
  {
    id: "interventional",
    name: "Interventional",
    nameCn: "介入",
    subcategories: [
      "Coronary Intervention",
      "Neuro Intervention",
      "Non-vascular Intervention",
      "Peripheral Intervention",
      "Tumor Intervention",
      "Vascular Intervention",
      "Nursing Intervention",
    ],
  },
  {
    id: "ivd",
    name: "In Vitro Diagnostics",
    nameCn: "体外诊断",
    subcategories: [],
  },
  {
    id: "assisted-reproduction",
    name: "Assisted Reproduction",
    nameCn: "辅助生殖",
    subcategories: [
      "Biochemical Reagents",
      "Immunoassay Reagents",
      "Diagnostic Supplies",
      "Diagnostic Instruments",
      "Blood Collection Supplies",
      "Mass Spectrometry Reagents",
      "Other Reagents",
    ],
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    nameCn: "医用医疗设备",
    subcategories: [],
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    nameCn: "康复系列",
    subcategories: [],
  },
  {
    id: "endoscopy",
    name: "Endoscopy",
    nameCn: "内窥镜",
    subcategories: ["Assisted Reproduction Supplies"],
  },
];

const products: Product[] = [
  {
    id: "p1",
    name: "Disposable Syringes",
    description: "Sterile disposable syringes in various specifications",
    image: "/images/product-1.jpg",
    category: "General Supplies",
  },
  {
    id: "p2",
    name: "IV Cannulas",
    description: "Safety IV cannulas for healthcare professionals",
    image: "/images/product-2.jpg",
    category: "General Supplies",
  },
  {
    id: "p3",
    name: "Infusion Sets",
    description: "Precision filtration infusion sets",
    image: "/images/product-3.jpg",
    category: "General Supplies",
  },
  {
    id: "p4",
    name: "Surgical Scalpels",
    description: "High-quality disposable surgical scalpels",
    image: "/images/product-4.jpg",
    category: "Surgery",
  },
  {
    id: "p5",
    name: "Orthopedic Implants",
    description: "Premium orthopedic implants and instruments",
    image: "/images/product-5.jpg",
    category: "Orthopedics",
  },
  {
    id: "p6",
    name: "Dental Instruments",
    description: "Professional dental surgical instruments",
    image: "/images/product-6.jpg",
    category: "Dental",
  },
  {
    id: "p7",
    name: "Blood Collection Tubes",
    description: "Vacuum blood collection tubes for diagnostics",
    image: "/images/product-7.jpg",
    category: "Blood Collection",
  },
  {
    id: "p8",
    name: "Surgical sutures",
    description: "Absorbable and non-absorbable sutures",
    image: "/images/product-8.jpg",
    category: "Surgery",
  },
  {
    id: "p9",
    name: "Cardiac Stents",
    description: "Drug-eluting coronary stents",
    image: "/images/product-9.jpg",
    category: "Interventional",
  },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const selectedField = useMemo(() => {
    return productFields.find((f) => f.id === selectedFieldId) || null;
  }, [selectedFieldId]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesField =
        !selectedField || product.category === selectedField.name;
      return matchesSearch && matchesField;
    });
  }, [searchQuery, selectedField]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-r from-dandelion-blue to-dandelion-dark-blue flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Center</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Comprehensive medical device solutions covering the entire lifecycle
            of healthcare
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dandelion-blue focus:border-transparent"
              />
              <SearchIcon
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
            <button className="px-6 py-3 bg-dandelion-blue text-white rounded-lg hover:bg-dandelion-dark-blue transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Product Fields */}
            <aside className="lg:w-80 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-4">
                  Product Fields
                </h3>
                <ul className="space-y-2">
                  {productFields.map((field) => (
                    <li key={field.id}>
                      <button
                        onClick={() => setSelectedFieldId(field.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedFieldId === field.id
                            ? "bg-dandelion-blue text-white"
                            : "text-dandelion-gray hover:bg-dandelion-light-blue hover:text-dandelion-blue"
                        }`}
                      >
                        <div className="font-medium">{field.name}</div>
                        <div className="text-xs opacity-70">{field.nameCn}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Content - Subcategories & Products */}
            <div className="flex-1">
              {selectedField ? (
                <>
                  {/* Selected Field Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-dandelion-dark-gray mb-2">
                      {selectedField.name}
                    </h2>
                    <p className="text-dandelion-gray">{selectedField.nameCn}</p>
                  </div>

                  {/* Subcategories */}
                  {selectedField.subcategories.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-4">
                        Subcategories
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedField.subcategories.map((subcat, index) => (
                          <div
                            key={index}
                            className="bg-dandelion-light-blue rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-dandelion-blue hover:text-white transition-colors group"
                          >
                            <span className="font-medium text-dandelion-dark-gray group-hover:text-white">
                              {subcat}
                            </span>
                            <ArrowRightIcon
                              size={16}
                              className="text-dandelion-blue group-hover:text-white"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Products in this field */}
                  <div>
                    <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-4">
                      Products
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h4 className="text-lg font-semibold text-dandelion-dark-gray mb-2 group-hover:text-dandelion-blue transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm text-dandelion-gray mb-4">
                              {product.description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-dandelion-blue text-sm font-medium group-hover:gap-2 transition-all duration-300">
                              Learn More
                              <ArrowRightIcon size={16} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {filteredProducts.length === 0 && (
                      <div className="text-center py-16 bg-white rounded-lg">
                        <p className="text-dandelion-gray text-lg">
                          Products coming soon. Contact us for more information.
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* All Fields Overview */
                <div>
                  <h2 className="text-2xl font-bold text-dandelion-dark-gray mb-8">
                    All Product Fields
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productFields.map((field) => (
                      <div
                        key={field.id}
                        onClick={() => setSelectedFieldId(field.id)}
                        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      >
                        <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-2 group-hover:text-dandelion-blue transition-colors">
                          {field.name}
                        </h3>
                        <p className="text-sm text-dandelion-gray mb-3">
                          {field.nameCn}
                        </p>
                        <p className="text-sm text-dandelion-blue">
                          {field.subcategories.length} subcategories
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
