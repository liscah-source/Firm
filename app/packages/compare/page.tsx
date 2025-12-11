"use client";

import Link from "next/link";
import { useState } from "react";

interface PackageTier {
  category: string;
  categoryIcon: string;
  tierName: string;
  price: string;
  features: string[];
}

export default function ComparePackagesPage() {
  const allTiers: PackageTier[] = [
    // Start-Up Packages
    {
      category: "Start-Up",
      categoryIcon: "🚀",
      tierName: "Foundation",
      price: "$1,297",
      features: [
        "LLC or Corporation Formation",
        "Basic LLC Operating Agreement/ Corporate Bylaws",
        "EIN Registration",
        "Beneficial Ownership Information (BOI) Report Filing",
        "Legal Document Binder",
        "Basic IP Assessment",
        "Client Portal Access",
      ],
    },
    {
      category: "Start-Up",
      categoryIcon: "🚀",
      tierName: "Growth",
      price: "$3,447",
      features: [
        "Everything in Foundation",
        "Advanced LLC Operating Agreement/ Corporate Bylaws",
        "Current State and Federal Employment Law Guide",
        "IP Protection Strategy",
        "Iron-Clad Non-Disclosure Agreement",
        "Contract Vault Evaluation and Advice",
      ],
    },
    {
      category: "Start-Up",
      categoryIcon: "🚀",
      tierName: "Scale",
      price: "$8,497",
      features: [
        "Everything in Growth",
        "Holding Company & Subsidiary Structuring",
        "Investment-Ready Docs",
        "Advanced IP Portfolio",
        "Full Legal Compliance Audit",
        "Standard Website Terms of Use & Privacy Policy",
        "(3) Monthly Legal Advisory Strategy Sessions",
      ],
    },
    // Brand Packages
    {
      category: "Brand",
      categoryIcon: "🛡️",
      tierName: "Brand Shield",
      price: "$2,497",
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
    },
    {
      category: "Brand",
      categoryIcon: "🛡️",
      tierName: "Brand Fortress",
      price: "$3,997",
      features: [
        "Everything in Brand Shield",
        "Trademark Filing in Two Additional Classes",
        "Priority Turnaround (3-5 Business Days)",
        "90-Day Brand Monitoring Post Registration",
        "45 Minute Attorney Client Zoom Call",
        "Custom IP Infringement Cease and Desist Letter",
        "Priority Text Support",
      ],
    },
    {
      category: "Brand",
      categoryIcon: "🛡️",
      tierName: "Brand Empire",
      price: "$7,997",
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
    },
    // Contract Packages
    {
      category: "Contract",
      categoryIcon: "📋",
      tierName: "Contract Review Essentials",
      price: "$1,250",
      features: [
        "Review of 1 contract",
        "Written legal summary of risks, obligations, and key terms",
        "Redline edits for clarity and enforceability",
        "Recommendations for protective clauses",
        "20-minute intro & follow-up Q&A call",
        "14 days of post-review email support",
        "Client Portal Access",
      ],
    },
    {
      category: "Contract",
      categoryIcon: "📋",
      tierName: "Contract Draft & Protect",
      price: "$2,750",
      features: [
        "Drafting of 1 fully customized contract (up to 15 pages) tailored to your industry and goals",
        "Inclusion of payment terms, scope control, and IP ownership clauses",
        "Up to 2 rounds of revisions within 30 days",
        "30-minute contract strategy call",
        "Negotiation talking points for your drafted contract",
      ],
    },
    {
      category: "Contract",
      categoryIcon: "📋",
      tierName: "Contract Advice & Negotiation",
      price: "$4,950",
      features: [
        "Direct negotiation support: up to 2 negotiation sessions with the other party or their counsel",
        "Customized negotiation strategy & risk management plan",
        "45-minute quarterly contract review session (valid for 6 months)",
        "Priority email support for 60 days",
      ],
    },
    // Scale Packages
    {
      category: "Scale",
      categoryIcon: "📈",
      tierName: "Strategic Advisor",
      price: "$2,500/mo",
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
    },
    {
      category: "Scale",
      categoryIcon: "📈",
      tierName: "Strategic Partner",
      price: "$5,000/mo",
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
    },
    {
      category: "Scale",
      categoryIcon: "📈",
      tierName: "Strategic Counsel",
      price: "$10,000/mo",
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
    },
  ];

  const [selectedTiers, setSelectedTiers] = useState<number[]>([0, 4, 7]);

  const handleTierToggle = (index: number) => {
    if (selectedTiers.includes(index)) {
      if (selectedTiers.length > 1) {
        setSelectedTiers(selectedTiers.filter((i) => i !== index));
      }
    } else {
      if (selectedTiers.length < 3) {
        setSelectedTiers([...selectedTiers, index]);
      }
    }
  };

  const selectedPackages = selectedTiers.map((index) => allTiers[index]);

  // Get all unique features across selected packages
  const allFeatures = Array.from(
    new Set(selectedPackages.flatMap((pkg) => pkg.features))
  );

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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Compare Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select up to 3 packages to compare side-by-side
          </p>
        </div>

        {/* Package Selector */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Packages to Compare ({selectedTiers.length}/3)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allTiers.map((tier, index) => (
              <button
                key={index}
                onClick={() => handleTierToggle(index)}
                disabled={
                  !selectedTiers.includes(index) && selectedTiers.length >= 3
                }
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  selectedTiers.includes(index)
                    ? "border-[#4BA5C8] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                } ${
                  !selectedTiers.includes(index) && selectedTiers.length >= 3
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{tier.categoryIcon}</span>
                  {selectedTiers.includes(index) && (
                    <svg
                      className="w-6 h-6 text-[#4BA5C8]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="font-bold text-sm text-gray-600 mb-1">
                  {tier.category}
                </div>
                <div className="font-bold text-gray-900">{tier.tierName}</div>
                <div className="text-[#0B5B7F] font-semibold text-sm mt-1">
                  {tier.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200 min-w-[200px]">
                    Feature
                  </th>
                  {selectedPackages.map((pkg, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-center border-b-2 border-gray-200 min-w-[250px]"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2">{pkg.categoryIcon}</span>
                        <div className="font-semibold text-sm text-gray-600">
                          {pkg.category}
                        </div>
                        <div className="font-bold text-lg text-gray-900">
                          {pkg.tierName}
                        </div>
                        <div className="text-[#0B5B7F] font-bold text-xl mt-1">
                          {pkg.price}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                      {feature}
                    </td>
                    {selectedPackages.map((pkg, pkgIdx) => (
                      <td
                        key={pkgIdx}
                        className="px-6 py-4 text-center border-b border-gray-200"
                      >
                        {pkg.features.includes(feature) ? (
                          <svg
                            className="w-6 h-6 text-green-500 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-300 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 font-bold text-gray-900">
                    Select Package
                  </td>
                  {selectedPackages.map((pkg, index) => (
                    <td key={index} className="px-6 py-6 text-center">
                      <button className="w-full bg-[#C83E3E] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#B03535] transition-colors">
                        Get {pkg.tierName}
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Still not sure which package is right for you?
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
