import PrimaryButton from "@/components/ui/PrimaryButton";
import { brandAssets } from "@/data/siteContent";

export default function SubscribeSection() {
  return (
    <section
      className="relative min-h-[360px] bg-cover bg-center pt-20 pb-10 sm:min-h-[440px] sm:pt-28 sm:pb-14 lg:min-h-[500px] lg:pt-32 lg:pb-16"
      style={{ backgroundImage: `url(${brandAssets.mapBackground})` }}
    >
      <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-rlcc-green-dark">Stay Connected</h2>
                <p className="mt-3 text-sm text-rlcc-text-muted">
                  Receive updates and encouragement from RLCC.
                </p>
              </div>
              <form className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                <label className="sr-only" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="h-12 rounded-sm border border-black/10 bg-black/5 px-4 text-sm outline-none ring-rlcc-green focus:ring-2"
                />
                <label className="sr-only" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  className="h-12 rounded-sm border border-black/10 bg-black/5 px-4 text-sm outline-none ring-rlcc-green focus:ring-2"
                />
                <PrimaryButton href="#" className="h-12 px-8">
                  Subscribe
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-white/10" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-full min-h-[260px]" aria-hidden="true" />
      </div>
    </section>
  );
}
