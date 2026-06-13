import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import CommunitiesCtaBannerSection from "@/components/communities/CommunitiesCtaBannerSection";
import CommunitiesExpectSection from "@/components/communities/CommunitiesExpectSection";
import CommunitiesHeroSection from "@/components/communities/CommunitiesHeroSection";
import CommunitiesTestimonialsSection from "@/components/communities/CommunitiesTestimonialsSection";
import CommunitiesTypesSection from "@/components/communities/CommunitiesTypesSection";
import CommunitiesWhatIsSection from "@/components/communities/CommunitiesWhatIsSection";

export default function CommunitiesPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <CommunitiesHeroSection />
        <CommunitiesWhatIsSection />
        <CommunitiesExpectSection />
        <CommunitiesTypesSection />
        <CommunitiesTestimonialsSection />
        <CommunitiesCtaBannerSection />
      </main>
      <FooterSection />
    </div>
  );
}
