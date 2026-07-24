"use client";

interface ESGStat {
  value: string;
  label: string;
}

const stats: ESGStat[] = [
  { value: "100%", label: "Compliant Suppliers" },
  { value: "30%", label: "Carbon Reduction Target" },
  { value: "50+", label: "Countries Benefited" },
];

export function ESGSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-dandelion-blue to-dandelion-dark-blue">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-full h-full text-white"
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M20 32C20 25.4 25.4 20 32 20C38.6 20 44 25.4 44 32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M24 38L32 30L40 38"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 30V46"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Commitment to Sustainability
        </h2>

        {/* Description */}
        <p className="text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
          As a responsible medical device export company, China Medical Devices
          adheres to sustainable development principles. We strictly select
          environmentally compliant suppliers, promote green medical products,
          and are dedicated to contributing to global healthcare.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
