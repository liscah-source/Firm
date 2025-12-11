import Link from "next/link";

export default function ScalePackagePage() {
  const tiers = [
    {
      name: "Strategic Advisor",
      price: "$2,500",
      period: "/month",
      credits: "$3,000",
      description: "Perfect for businesses establishing ongoing legal support",
      popular: false,
      commitment: "3-month minimum commitment",
      features: [
        "$3,000 in monthly legal service credits",
        "5 hours of strategic legal advisory per month",
        "Quarterly legal compliance review",
        "Priority email response (within 24 hours)",
        "Monthly strategy session (60 minutes)",
        "Access to contract template library",
        "Document review and feedback",
        "Client Portal Access",
      ],
      buttonText: "Get Advisor Package",
    },
    {
      name: "Strategic Partner",
      price: "$5,000",
      period: "/month",
      credits: "$6,500",
      description: "Ideal for businesses with regular legal needs and growth initiatives",
      popular: true,
      commitment: "6-month minimum commitment",
      features: [
        "$6,500 in monthly legal service credits",
        "12 hours of strategic legal advisory per month",
        "Bi-weekly legal compliance reviews",
        "Priority phone & email support (within 12 hours)",
        "Bi-weekly strategy sessions (60 minutes each)",
        "Unlimited contract template access",
        "Proactive risk assessment and mitigation",
        "Employment law guidance and HR support",
        "IP portfolio management",
        "Vendor and client contract negotiations",
      ],
      buttonText: "Get Partner Package",
    },
    {
      name: "Strategic Counsel",
      price: "$10,000",
      period: "/month",
      credits: "$13,000",
      description: "For businesses requiring comprehensive legal partnership and executive-level counsel",
      popular: false,
      commitment: "12-month minimum commitment",
      features: [
        "$13,000 in monthly legal service credits",
        "25 hours of strategic legal advisory per month",
        "Weekly legal compliance audits",
        "24/7 emergency legal support",
        "Weekly strategy sessions (90 minutes each)",
        "Dedicated legal team assigned to your business",
        "Board meeting attendance and preparation",
        "M&A transaction support",
        "Fundraising and investor agreement guidance",
        "Litigation management and outside counsel coordination",
        "Regulatory compliance program development",
        "Executive team legal training",
      ],
      buttonText: "Get Counsel Package",
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
            <span className="text-5xl">📈</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Fractional General Counsel Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retainer-based legal partnership for 6 and 7 figure businesses ready to bulletproof operations and expand
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-2">How Credits Work</h3>
          <p className="text-gray-700">
            Each package includes monthly legal service credits that can be applied toward contract drafting,
            trademark filings, litigation support, compliance audits, and any other legal services your business needs.
            Unused credits roll over for up to 90 days.
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
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#0B5B7F]">{tier.price}</span>
                <span className="text-gray-600">{tier.period}</span>
              </div>

              {/* Credits Badge */}
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {tier.credits} in monthly credits
              </div>

              {/* Commitment */}
              <p className="text-xs text-gray-500 mb-6 italic">{tier.commitment}</p>

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

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Fractional General Counsel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost-Effective Expertise</h4>
                <p className="text-gray-700 text-sm">
                  Get executive-level legal counsel without the $300K+ salary of a full-time General Counsel
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Proactive Protection</h4>
                <p className="text-gray-700 text-sm">
                  Prevent legal issues before they arise with ongoing compliance reviews and risk assessments
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scalable Support</h4>
                <p className="text-gray-700 text-sm">
                  Adjust your retainer as your business grows and your legal needs evolve
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Partner</h4>
                <p className="text-gray-700 text-sm">
                  Work with a legal team that understands your business and growth objectives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Want to discuss a custom retainer package?
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
