import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CommunityJoinSection({ community }) {
  return (
    <section className="bg-rlcc-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          Interested in Joining?
        </h2>
        <p className="mt-4 text-base leading-7 text-rlcc-text-muted sm:text-lg">
          First-time visitors are always welcome. Come as you are.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton href={community.churchCenterUrl} target="_blank" rel="noopener noreferrer">
            Register or Join
          </PrimaryButton>
          <Link
            href="/contact"
            className="text-sm font-semibold text-rlcc-green transition-colors hover:text-rlcc-green-dark"
          >
            Have Questions?
          </Link>
        </div>
      </div>
    </section>
  );
}
