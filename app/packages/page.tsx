import Link from "next/link";

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      slug: "start-up",
      icon: "🚀",
      title: "The Strategic Start-Up™",
      description: "For founders who want to launch the right way, ",
      highlight: "legally and strategically",
      period: ".",
      popular: false,
      bgColor: "bg-white",
      iconBg: "bg-blue-50",
    },
    {
      id: 2,
      slug: "brand",
      icon: "🛡️",
      title: "The Strategic Brand™",
      description: "For entrepreneurs ready to lock down their brand with IP that works ",
      highlight: "for",
      period: " them.",
      popular: true,
      bgColor: "bg-[#4BA5C8]",
      iconBg: "bg-[#5FB5D8]",
    },
    {
      id: 3,
      slug: "contract",
      icon: "📋",
      title: "The Strategic Contract™",
      description: "For business owners who need to tighten their agreements ",
      highlight: "before",
      period: " things fall apart.",
      popular: false,
      bgColor: "bg-white",
      iconBg: "bg-blue-50",
    },
    {
      id: 4,
      slug: "scale",
      icon: "📈",
      title: "The Strategic Scale™",
      description: "For 6 and 7 figure businesses ready to bulletproof operations and ",
      highlight: "expand",
      period: ".",
      popular: false,
      bgColor: "bg-white",
      iconBg: "bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Strategic Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the legal package that best fits your business stage and goals
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden border-4 ${
                pkg.popular ? "border-blue-400" : "border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-white text-[#4BA5C8] px-6 py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-sm tracking-wide">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`${pkg.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-4xl">{pkg.icon}</span>
              </div>

              {/* Title */}
              <h2
                className={`text-3xl font-bold mb-6 ${
                  pkg.popular ? "text-white" : "text-[#0B5B7F]"
                }`}
              >
                {pkg.title}
              </h2>

              {/* Description */}
              <p
                className={`text-lg leading-relaxed ${
                  pkg.popular ? "text-white" : "text-gray-700"
                }`}
              >
                {pkg.description}
                <span className="font-bold">{pkg.highlight}</span>
                {pkg.period}
              </p>

              {/* CTA Button */}
              <Link
                href={`/packages/${pkg.slug}`}
                className={`mt-8 w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 block text-center ${
                  pkg.popular
                    ? "bg-white text-[#4BA5C8] hover:bg-gray-100"
                    : "bg-[#4BA5C8] text-white hover:bg-[#3A8AA8]"
                }`}
              >
                View Pricing & Details
              </Link>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you?
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
