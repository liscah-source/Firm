import type { Metadata } from "next";
import OnboardingTool from "./OnboardingTool";

export const metadata: Metadata = {
  title: "New Hire Onboarding | Isaboke Law",
  description:
    "Role-aware onboarding checklist, documents, and first-week schedule for new talent at Isaboke Law.",
};

export default function OnboardingPage() {
  return <OnboardingTool />;
}
