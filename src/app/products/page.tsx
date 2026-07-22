"use client";

import { useState, useMemo } from "react";
import { SearchIcon, ArrowRightIcon } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  department: string;
}

const departments = [
  "All Departments",
  "Cardiology",
  "ENT",
  "Surgery",
  "Thoracic Surgery",
  "General Surgery",
  "Operating Room",
  "Plastic Surgery",
  "Neurology",
  "Rehabilitation",
  "Anesthesiology",
  "Emergency",
  "Oncology",
  "Urology",
  "Obstetrics",
  "Respiratory",
  "Gastroenterology",
  "Neurosurgery",
  "ICU",
  "Dental",
  "Internal Medicine",
  "Nephrology",
  "Dialysis",
  "Radiology",
];

const productFields = [
  "General Supplies",
  "Endocrinology",
  "Medical IT",
  "Orthopedics",
  "Dental",
  "Tissue Repair",
  "Blood Purification",
  "Packaging",
  "Surgery",
  "Surgical Robots",
  "Blood Collection",
  "Interventional",
];

const products: Product[] = [
  {
    id: "p1",
    name: "Disposable Syringes",
    description: "Sterile disposable syringes in various specifications",
    image: "/images/product-1.jpg",
    category: "General Supplies",
    department: "All Departments",
  },
  {
    id: "p2",
    name: "IV Cannulas",
    description: "Safety IV cannulas for healthcare professionals",
    image: "/images/product-2.jpg",
    category: "General Supplies",
    department: "Cardiology",
  },
  {
    id: "p3",
    name: "Infusion Sets",
    description: "Precision filtration infusion sets",
    image: "/images/product-3.jpg",
    category: "General Supplies",
    department: "All Departments",
  },
  {
    id: "p4",
    name: "Surgical Scalpels",
    description: "High-quality disposable surgical scalpels",
    image: "/images/product-4.jpg",
    category: "Surgery",
    department: "Surgery",
  },
  {
    id: "p5",
    name: "Orthopedic Implants",
    description: "Premium orthopedic implants and instruments",
    image: "/images/product-5.jpg",
    category: "Orthopedics",
    department: "General Surgery",
  },
  {
    id: "p6",
    name: "Dental Instruments",
    description: "Professional dental surgical instruments",
    image: "/images/product-6.jpg",
    category: "Dental",
    department: "Dental",
  },
  {
    id: "p7",
    name: "Blood Collection Tubes",
    description: "Vacuum blood collection tubes for diagnostics",
    image: "/images/product-7.jpg",
    category: "Blood Collection",
    department: "Radiology",
  },
  {
    id: "p8",
    name: "Surgical sutures",
    description: "Absorbable and non-absorbable sutures",
    image: "/images/product-8.jpg",
    category: "Surgery",
    department: "Surgery",
  },
  {
    id: "p9",
    name: "Cardiac Stents",
    description: "Drug-eluting coronary stents",
    image: "/images/product-9.jpg",
    category: "Interventional",
    department: "Cardiology",
  },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment =
        selectedDepartment === "All Departments" ||
        product.department === selectedDepartment;
      const matchesField =
        !selectedField || product.category === selectedField;
      return matchesSearch && matchesDepartment && matchesField;
    });
  }, [searchQuery, selectedDepartment, selectedField]);

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
            {/* Left Sidebar - Departments */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-4">
                  Departments
                </h3>
                <ul className="space-y-2 max-h-[600px] overflow-y-auto">
                  {departments.map((dept) => (
                    <li key={dept}>
                      <button
                        onClick={() => setSelectedDepartment(dept)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedDepartment === dept
                            ? "bg-dandelion-blue text-white"
                            : "text-dandelion-gray hover:bg-dandelion-light-blue hover:text-dandelion-blue"
                        }`}
                      >
                        {dept}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Content - Products */}
            <div className="flex-1">
              {/* Product Fields */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-dandelion-dark-gray mb-4">
                  Product Fields
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedField(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                      !selectedField
                        ? "bg-dandelion-blue border-dandelion-blue text-white"
                        : "border-gray-200 text-dandelion-gray hover:border-dandelion-blue hover:text-dandelion-blue"
                    }`}
                  >
                    All Fields
                  </button>
                  {productFields.map((field) => (
                    <button
                      key={field}
                      onClick={() => setSelectedField(field)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                        selectedField === field
                          ? "bg-dandelion-blue border-dandelion-blue text-white"
                          : "border-gray-200 text-dandelion-gray hover:border-dandelion-blue hover:text-dandelion-blue"
                      }`}
                    >
                      {field}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
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

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-dandelion-gray text-lg">
                    No products found matching your criteria.
                  </p>
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
