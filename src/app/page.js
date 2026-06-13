import FooterSection from "@/components/home/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import MessagesSection from "@/components/home/MessagesSection";
import MinistriesSection from "@/components/home/MinistriesSection";
import MissionSection from "@/components/home/MissionSection";
import NavigationSection from "@/components/home/NavigationSection";
import PlanningVisitSection from "@/components/home/PlanningVisitSection";
import PrayerSection from "@/components/home/PrayerSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import SundaySection from "@/components/home/SundaySection";

export default function Home() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <HeroSection />
        <SundaySection />
        <MissionSection />
        <PlanningVisitSection />
        <MessagesSection />
        <MinistriesSection />
        <PrayerSection />
        <SubscribeSection />
      </main>
      <FooterSection />
    </div>
  );
}
