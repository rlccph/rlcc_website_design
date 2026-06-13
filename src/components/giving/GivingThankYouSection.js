import { givingPageContent } from "@/data/siteContent";

export default function GivingThankYouSection() {
  const { thankYou } = givingPageContent;

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-rlcc-green-dark p-8 text-center text-white shadow-xl sm:p-10">
          <p className="mx-auto max-w-3xl text-lg leading-8 sm:text-xl sm:leading-9">
            {thankYou.message}
          </p>
        </div>
      </div>
    </section>
  );
}
