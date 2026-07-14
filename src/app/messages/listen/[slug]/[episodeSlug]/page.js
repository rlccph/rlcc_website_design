import { notFound } from "next/navigation";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import MessageDetailView from "@/components/messages/MessageDetailView";
import {
  getAllListenEpisodeParams,
  getListenEpisodeBySlug,
} from "@/data/siteContent";

export function generateStaticParams() {
  return getAllListenEpisodeParams();
}

export async function generateMetadata({ params }) {
  const { slug, episodeSlug } = await params;
  const episode = getListenEpisodeBySlug(slug, episodeSlug);

  if (!episode) {
    return { title: "Devotion Not Found" };
  }

  return {
    title: `${episode.title} | ${episode.series.title} | RLCC`,
    description: episode.description ?? `Listen to ${episode.title} from RLCC.`,
  };
}

export default async function ListenEpisodePage({ params }) {
  const { slug, episodeSlug } = await params;
  const episode = getListenEpisodeBySlug(slug, episodeSlug);

  if (!episode) {
    notFound();
  }

  return (
    <div className="bg-white">
      <NavigationSection variant="light" />
      <MessageDetailView
        message={episode}
        archiveHref="/messages/listen"
        archiveLabel="All devotion series"
        sectionLabel="RLCC Daily Devotions"
      />
      <FooterSection />
    </div>
  );
}
