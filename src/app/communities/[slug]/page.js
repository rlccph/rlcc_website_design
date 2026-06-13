import { notFound } from "next/navigation";
import CommunityAboutSection from "@/components/community/CommunityAboutSection";
import CommunityExpectSection from "@/components/community/CommunityExpectSection";
import CommunityHeroSection from "@/components/community/CommunityHeroSection";
import CommunityJoinSection from "@/components/community/CommunityJoinSection";
import CommunityOthersSection from "@/components/community/CommunityOthersSection";
import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";
import {
  communities,
  getCommunityBySlug,
  getOtherCommunities,
} from "@/data/communities";

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    return { title: "Community Not Found" };
  }

  return {
    title: `${community.name} | RLCC Communities`,
    description: community.shortDescription,
  };
}

export default async function CommunityDetailPage({ params }) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  const otherCommunities = getOtherCommunities(slug, 3);

  return (
    <div className="bg-white">
      <NavigationSection />
      <main>
        <CommunityHeroSection community={community} />
        <CommunityAboutSection community={community} />
        <CommunityExpectSection />
        <CommunityJoinSection community={community} />
        <CommunityOthersSection communities={otherCommunities} />
      </main>
      <FooterSection />
    </div>
  );
}
