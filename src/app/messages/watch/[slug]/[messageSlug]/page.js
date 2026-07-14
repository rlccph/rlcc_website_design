import { notFound } from "next/navigation";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import MessageDetailView from "@/components/messages/MessageDetailView";
import {
  getAllWatchMessageParams,
  getWatchMessageBySlug,
} from "@/data/siteContent";

export function generateStaticParams() {
  return getAllWatchMessageParams();
}

export async function generateMetadata({ params }) {
  const { slug, messageSlug } = await params;
  const message = getWatchMessageBySlug(slug, messageSlug);

  if (!message) {
    return { title: "Message Not Found" };
  }

  return {
    title: `${message.title} | ${message.series.title} | RLCC`,
    description: message.description ?? `Watch ${message.title} from RLCC.`,
  };
}

export default async function WatchMessagePage({ params }) {
  const { slug, messageSlug } = await params;
  const message = getWatchMessageBySlug(slug, messageSlug);

  if (!message) {
    notFound();
  }

  return (
    <div className="bg-white">
      <NavigationSection variant="light" />
      <MessageDetailView
        message={message}
        archiveHref="/messages/watch"
        archiveLabel="All sermon series"
        sectionLabel="Real Life TV"
      />
      <FooterSection />
    </div>
  );
}
