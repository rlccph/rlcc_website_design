import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import MessagesDailyDevotionsSection from "@/components/messages/MessagesDailyDevotionsSection";
import MessagesHeroSection from "@/components/messages/MessagesHeroSection";
import MessagesJoinUsSection from "@/components/messages/MessagesJoinUsSection";
import MessagesRealLifeTvSection from "@/components/messages/MessagesRealLifeTvSection";
import MessagesRecentSeriesSection from "@/components/messages/MessagesRecentSeriesSection";

export default function MessagesPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <MessagesHeroSection />
        <MessagesRealLifeTvSection />
        <MessagesRecentSeriesSection />
        <MessagesDailyDevotionsSection />
        <MessagesJoinUsSection className="bg-rlcc-cream" />
      </main>
      <FooterSection />
    </div>
  );
}
