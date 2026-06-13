import InnerPageTemplate from "@/components/site/InnerPageTemplate";

const sections = [
  {
    title: "Serve Teams",
    description:
      "Ministry opportunities such as worship, media, kids, and hospitality will be highlighted here.",
  },
  {
    title: "Outreach and Mission",
    description:
      "Programs that serve San Pedro and nearby communities will be showcased in this area.",
  },
];

export default function MinistriesPage() {
  return (
    <InnerPageTemplate
      title="Ministries"
      description="Discover where your gifts can help others encounter real life in Christ."
      sections={sections}
    />
  );
}
