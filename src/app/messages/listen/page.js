import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import ListenDevotionSeriesSection from "@/components/messages/ListenDevotionSeriesSection";
import MessagesCategoryHeroSection from "@/components/messages/MessagesCategoryHeroSection";
import MessagesJoinUsSection from "@/components/messages/MessagesJoinUsSection";
import { listenPageContent } from "@/data/siteContent";

export default function ListenMessagesPage() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <MessagesCategoryHeroSection hero={listenPageContent.hero} />
        <ListenDevotionSeriesSection />
        <MessagesJoinUsSection />
      </main>
      <FooterSection />
    </div>
  );
}
