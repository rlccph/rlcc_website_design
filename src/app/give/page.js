import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import GivingDesignationsSection from "@/components/giving/GivingDesignationsSection";
import GivingHeroSection from "@/components/giving/GivingHeroSection";
import GivingQuestionsSection from "@/components/giving/GivingQuestionsSection";
import GivingScriptureSection from "@/components/giving/GivingScriptureSection";
import GivingThankYouSection from "@/components/giving/GivingThankYouSection";
import GivingWaysSection from "@/components/giving/GivingWaysSection";
import GivingWhySection from "@/components/giving/GivingWhySection";

export default function GivePage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <GivingHeroSection />
        <GivingScriptureSection />
        <GivingWhySection />
        <GivingWaysSection />
        <GivingDesignationsSection />
        <GivingThankYouSection />
        <GivingQuestionsSection />
      </main>
      <FooterSection />
    </div>
  );
}
