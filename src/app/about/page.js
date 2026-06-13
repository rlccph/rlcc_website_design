import AboutBeliefsSection from "@/components/about/AboutBeliefsSection";
import AboutCtaBannerSection from "@/components/about/AboutCtaBannerSection";
import AboutExperienceSection from "@/components/about/AboutExperienceSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutLeadershipSection from "@/components/about/AboutLeadershipSection";
import AboutMissionVisionSection from "@/components/about/AboutMissionVisionSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutWhoWeAreSection from "@/components/about/AboutWhoWeAreSection";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <AboutHeroSection />
        <AboutWhoWeAreSection />
        <AboutMissionVisionSection />
        <AboutBeliefsSection />
        <AboutExperienceSection />
        <AboutStorySection />
        <AboutLeadershipSection />
        <AboutCtaBannerSection />
      </main>
      <FooterSection />
    </div>
  );
}
