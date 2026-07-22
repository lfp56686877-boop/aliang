"use client";

import { useState, useMemo } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const categories = [
  "Cardiology",
  "ENT",
  "Surgery",
  "Thoracic Surgery",
  "General Surgery",
  "All Departments",
];

const products: Product[] = [
  // Cardiology
  {
    id: "heart-1",
    name: "Drug-Eluting Stents",
    description: "High-performance drug-eluting coronary stents",
    image: "/images/product-1.jpg",
    category: "Cardiology",
  },
  {
    id: "heart-2",
    name: "Cardiac Pacemakers",
    description: "Permanent cardiac pacemaker systems",
    image: "/images/product-2.jpg",
    category: "Cardiology",
  },
  {
    id: "heart-3",
    name: "Heart Valves",
    description: "Artificial heart valve prostheses",
    image: "/images/product-3.jpg",
    category: "Cardiology",
  },
  {
    id: "heart-4",
    name: "Cardiac Monitors",
    description: "Multi-parameter cardiac monitoring systems",
    image: "/images/product-4.jpg",
    category: "Cardiology",
  },
  // ENT
  {
    id: "ent-1",
    name: "Nasal Endoscopes",
    description: "HD nasal endoscopy systems",
    image: "/images/product-5.jpg",
    category: "ENT",
  },
  {
    id: "ent-2",
    name: "Laryngoscopes",
    description: "Video laryngoscopy equipment",
    image: "/images/product-6.jpg",
    category: "ENT",
  },
  {
    id: "ent-3",
    name: "Audiometers",
    description: "Pure tone audiometry devices",
    image: "/images/product-7.jpg",
    category: "ENT",
  },
  {
    id: "ent-4",
    name: "Sleep Monitors",
    description: "Polysomnography systems",
    image: "/images/product-8.jpg",
    category: "ENT",
  },
  // Surgery
  {
    id: "surgery-1",
    name: "Surgical Scalpels",
    description: "Disposable surgical scalpels",
    image: "/images/product-9.jpg",
    category: "Surgery",
  },
  {
    id: "surgery-2",
    name: "Surgical Scissors",
    description: "Precision surgical scissors",
    image: "/images/product-1.jpg",
    category: "Surgery",
  },
  {
    id: "surgery-3",
    name: "Surgical Forceps",
    description: "Minimally invasive surgical forceps",
    image: "/images/product-2.jpg",
    category: "Surgery",
  },
  {
    id: "surgery-4",
    name: "Surgical Sutures",
    description: "Absorbable surgical sutures",
    image: "/images/product-3.jpg",
    category: "Surgery",
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Cardiology");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dandelion-dark-gray mb-4">
            Our Products
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-dandelion-blue">
            Solutions & Services
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-dandelion-blue border-dandelion-blue text-white"
                  : "border-gray-200 text-dandelion-gray hover:border-dandelion-blue hover:text-dandelion-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h4 className="text-base font-semibold text-dandelion-dark-gray mb-2 group-hover:text-dandelion-blue transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-dandelion-gray">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
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
