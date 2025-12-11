import Link from "next/link";

export default function BrandPackagePage() {
  const tiers = [
    {
      name: "Brand Shield",
      price: "$2,497",
      description: "Ideal for new brands who want basic clearance, filing and short-term watch",
      popular: false,
      features: [
        "Comprehensive Trademark Clearance Search",
        "USPTO Trademark Application Preparation & Filing",
        "U.S. Attorney of Record",
        "All Non-Substantive Office Action Responses",
        "Domain & Social-Media Availability Check",
        "Legal Brand Usage Guidelines",
        "60-Day Brand Monitoring Post Registration",
        "30 Minute Attorney Client Phone Call",
        "Client Portal Access",
      ],
      buttonText: "Get Shield Package",
    },
    {
      name: "Brand Fortress",
      price: "$3,997",
      description: "Perfect for businesses ready to expand across additional classes and nail down their enforcement",
      popular: true,
      features: [
        "Everything in Brand Shield",
        "Trademark Filing in Two Additional Classes",
        "Priority Turnaround (3-5 Business Days)",
        "90-Day Brand Monitoring Post Registration",
        "45 Minute Attorney Client Zoom Call",
        "Custom IP Infringement Cease and Desist Letter",
        "Priority Text Support",
      ],
      buttonText: "Get Fortress Package",
    },
    {
      name: "Brand Empire",
      price: "$7,997",
      description: "For established or scaling brands that want ongoing, high-touch protection (domestic + international)",
      popular: false,
      features: [
        "Everything in Brand Fortress",
        "Trademark Filings in 5 U.S. Classes",
        "Madrid Protocol Application",
        "Patent Strategy Assessment",
        "Trade Secret Policy",
        "Monthly Attorney Client Strategy Session",
        "12-Month Active Infringement Monitoring",
        "Unlimited Cease-and-Desists for our Registered Marks",
      ],
      buttonText: "Get Empire Package",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/packages"
          className="inline-flex items-center text-[#0B5B7F] hover:text-[#4BA5C8] mb-8 font-semibold"
        >
          ← Back to All Packages
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-3xl mb-6">
            <span className="text-5xl">🛡️</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Brand Protection Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IP protection packages designed for entrepreneurs who refuse to leave their brand vulnerable
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                tier.popular ? "border-4 border-[#4BA5C8] md:scale-105" : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#4BA5C8] text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{tier.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0B5B7F]">{tier.price}</span>
                <span className="text-gray-600">/package</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#C83E3E] text-white hover:bg-[#B03535]"
                    : "bg-[#C83E3E] text-white hover:bg-[#B03535]"
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
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
