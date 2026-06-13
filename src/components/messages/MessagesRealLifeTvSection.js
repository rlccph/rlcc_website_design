import { messagesPageContent } from "@/data/siteContent";
import MessagesContentBlock from "@/components/messages/MessagesContentBlock";

export default function MessagesRealLifeTvSection() {
  const { realLifeTv } = messagesPageContent;

  return (
    <MessagesContentBlock
      title={realLifeTv.title}
      viewAllHref={realLifeTv.viewAllHref}
      viewAllLabel={realLifeTv.viewAllLabel}
      ctaLabel={realLifeTv.ctaLabel}
      featured={realLifeTv.featured}
      recent={realLifeTv.recent}
    />
  );
}
