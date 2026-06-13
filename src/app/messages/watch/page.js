import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import MessagesCategoryHeroSection from "@/components/messages/MessagesCategoryHeroSection";
import MessagesJoinUsSection from "@/components/messages/MessagesJoinUsSection";
import WatchFeaturedSection from "@/components/messages/WatchFeaturedSection";
import WatchSeriesSection from "@/components/messages/WatchSeriesSection";
import { watchPageContent } from "@/data/siteContent";

export default function WatchMessagesPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <MessagesCategoryHeroSection hero={watchPageContent.hero} />
        <WatchFeaturedSection />
        <WatchSeriesSection />
        <MessagesJoinUsSection />
      </main>
      <FooterSection />
    </div>
  );
}
