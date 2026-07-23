"use client";

interface ProductField {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const productFields: ProductField[] = [
  {
    id: "general",
    name: "General Supplies",
    description: "Disposable medical supplies and consumables",
    icon: "💉",
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    description: "Diabetes care and hormone therapy devices",
    icon: "🔬",
  },
  {
    id: "medical-it",
    name: "Medical IT",
    description: "Healthcare information technology solutions",
    icon: "💻",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Bone implants and surgical instruments",
    icon: "🦴",
  },
  {
    id: "dental",
    name: "Dental",
    description: "Dental equipment and instruments",
    icon: "🦷",
  },
  {
    id: "tissue-repair",
    name: "Tissue Repair",
    description: "Wound healing and tissue regeneration",
    icon: "🩹",
  },
  {
    id: "blood-purification",
    name: "Blood Purification",
    description: "Dialysis and blood purification systems",
    icon: "💧",
  },
  {
    id: "packaging",
    name: "Packaging Materials",
    description: "Medical packaging and sterilization",
    icon: "📦",
  },
  {
    id: "surgery",
    name: "Surgery",
    description: "Surgical instruments and equipment",
    icon: "🔪",
  },
  {
    id: "robotics",
    name: "Surgical Robots",
    description: "Robotic-assisted surgical systems",
    icon: "🤖",
  },
  {
    id: "blood-collection",
    name: "Blood Collection",
    description: "Blood collection and diagnostic devices",
    icon: "🩸",
  },
  {
    id: "interventional",
    name: "Interventional",
    description: "Minimally invasive interventional devices",
    icon: "➕",
  },
  {
    id: "ivd",
    name: "In Vitro Diagnostics",
    description: "In vitro diagnostic reagents and equipment",
    icon: "🧪",
  },
  {
    id: "assisted-reproduction",
    name: "Assisted Reproduction",
    description: "ART devices and consumables",
    icon: "👶",
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    description: "Medical devices and equipment",
    icon: "🏥",
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    description: "Rehabilitation therapy equipment",
    icon: "🦿",
  },
  {
    id: "endoscopy",
    name: "Endoscopy",
    description: "Endoscopic systems and instruments",
    icon: "📷",
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    description: "Pharmaceutical products and drugs",
    icon: "💊",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dandelion-dark-gray mb-4">
            Our Product Fields
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-dandelion-blue">
            Comprehensive Medical Device Solutions
          </h3>
          <p className="text-dandelion-gray mt-4 max-w-3xl mx-auto">
            Covering the entire lifecycle of healthcare with safe, reliable,
            and trustworthy medical system solutions
          </p>
        </div>

        {/* Product Fields Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {productFields.map((field) => (
            <a
              key={field.id}
              href={`/products?field=${field.id}`}
              className="group bg-dandelion-light-blue rounded-lg p-6 text-center hover:bg-dandelion-blue transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{field.icon}</div>
              <h4 className="text-base font-semibold text-dandelion-dark-gray mb-2 group-hover:text-white transition-colors">
                {field.name}
              </h4>
              <p className="text-sm text-dandelion-gray group-hover:text-white/80 transition-colors">
                {field.description}
              </p>
            </a>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-dandelion-blue text-white font-medium rounded hover:bg-dandelion-dark-blue transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
