import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import VisitAfterFirstVisitSection from "@/components/visit/VisitAfterFirstVisitSection";
import VisitCtaBannerSection from "@/components/visit/VisitCtaBannerSection";
import VisitExpectSection from "@/components/visit/VisitExpectSection";
import VisitFaqSection from "@/components/visit/VisitFaqSection";
import VisitHeroSection from "@/components/visit/VisitHeroSection";
import VisitLocationSection from "@/components/visit/VisitLocationSection";
import VisitRsvpSection from "@/components/visit/VisitRsvpSection";
import VisitServiceTimesSection from "@/components/visit/VisitServiceTimesSection";

export default function VisitPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <VisitHeroSection />
        <VisitServiceTimesSection />
        <VisitLocationSection />
        <VisitRsvpSection />
        <VisitExpectSection />
        <VisitFaqSection />
        <VisitAfterFirstVisitSection />
        <VisitCtaBannerSection />
      </main>
      <FooterSection />
    </div>
  );
}
