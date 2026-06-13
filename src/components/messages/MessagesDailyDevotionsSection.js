import { messagesPageContent } from "@/data/siteContent";
import MessagesContentBlock from "@/components/messages/MessagesContentBlock";

export default function MessagesDailyDevotionsSection() {
  const { dailyDevotions } = messagesPageContent;

  return (
    <MessagesContentBlock
      title={dailyDevotions.title}
      viewAllHref={dailyDevotions.viewAllHref}
      viewAllLabel={dailyDevotions.viewAllLabel}
      ctaLabel={dailyDevotions.ctaLabel}
      featured={dailyDevotions.featured}
      recent={dailyDevotions.recent}
      className="border-t border-black/10 bg-rlcc-cream"
    />
  );
}
