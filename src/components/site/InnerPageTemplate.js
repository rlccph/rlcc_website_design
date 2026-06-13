import FooterSection from "@/components/home/FooterSection";
import NavigationSection from "@/components/home/NavigationSection";

export default function InnerPageTemplate({ title, description, sections }) {
  return (
    <div className="bg-white">
      <div className="relative bg-rlcc-green-dark pb-24">
        <NavigationSection />
        <div className="mx-auto w-full max-w-6xl px-4 pt-36 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Real Life Christian Communities
          </p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">{description}</p>
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-black/10 bg-rlcc-surface p-6">
            <h2 className="text-2xl font-bold text-rlcc-green-dark">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-rlcc-text-muted">{section.description}</p>
          </section>
        ))}
      </main>
      <FooterSection />
    </div>
  );
}
