import Link from "next/link";

export default function ContractPackagePage() {
  const tiers = [
    {
      name: "Contract Review Essentials",
      price: "$1,250",
      description: "Best for: Entrepreneurs or small businesses needing a professional legal eye on one or two important agreements",
      popular: false,
      features: [
        "Review of 1 contract",
        "Written legal summary of risks, obligations, and key terms",
        "Redline edits for clarity and enforceability",
        "Recommendations for protective clauses",
        "20-minute intro & follow-up Q&A call",
        "14 days of post-review email support",
        "Client Portal Access",
      ],
      buttonText: "Get Review Package",
    },
    {
      name: "Contract Draft & Protect",
      price: "$2,750",
      description: "Best for: Businesses needing custom agreements drafted to fit their operations and protect their interests.",
      popular: true,
      features: [
        "Drafting of 1 fully customized contract (up to 15 pages) tailored to your industry and goals",
        "Inclusion of payment terms, scope control, and IP ownership clauses",
        "Up to 2 rounds of revisions within 30 days",
        "30-minute contract strategy call",
        "Negotiation talking points for your drafted contract",
      ],
      buttonText: "Get Draft Package",
    },
    {
      name: "Contract Advice & Negotiation",
      price: "$4,950",
      description: "Best for: Established or scaling businesses seeking comprehensive drafting, review, and hands-on negotiation support.",
      popular: false,
      features: [
        "Direct negotiation support: up to 2 negotiation sessions with the other party or their counsel",
        "Customized negotiation strategy & risk management plan",
        "45-minute quarterly contract review session (valid for 6 months)",
        "Priority email support for 60 days",
      ],
      buttonText: "Get Negotiation Package",
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
            <span className="text-5xl">📋</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Contract Protection Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional contract solutions designed for entrepreneurs who refuse to leave their deals vulnerable
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
