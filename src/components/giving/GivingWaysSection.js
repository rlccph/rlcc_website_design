import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { givingPageContent } from "@/data/siteContent";

export default function GivingWaysSection() {
  const { waysToGive } = givingPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          {waysToGive.title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {waysToGive.methods.map((method) => {
            const hasAction = method.linkHref || method.visitHref || method.smsHref;

            return (
              <article
                key={method.id}
                className="flex h-full flex-col rounded-lg border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-rlcc-text-main">{method.title}</h3>
                {method.notice && (
                  <p className="mt-4 rounded-lg border border-rlcc-green/20 bg-rlcc-cream p-4 text-sm leading-6 text-rlcc-text-main">
                    {method.notice}
                  </p>
                )}
                <dl className="mt-4 flex-1 space-y-3">
                  {method.details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-rlcc-green">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-sm text-rlcc-text-main">
                        {method.linkHref && detail.label === "PayPal Link" ? (
                          <Link
                            href={method.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all font-medium text-rlcc-green hover:text-rlcc-green-dark"
                          >
                            {detail.value}
                          </Link>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                {hasAction && (
                  <div className="mt-auto space-y-5 pt-6">
                    {method.smsHref && (
                      <PrimaryButton href={method.smsHref} variant="outline" className="w-full">
                        {method.smsLabel}
                      </PrimaryButton>
                    )}
                    {method.linkHref && method.linkLabel && (
                      <PrimaryButton
                        href={method.linkHref}
                        variant="outline"
                        className="w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.linkLabel}
                      </PrimaryButton>
                    )}
                    {method.visitHref && (
                      <PrimaryButton href={method.visitHref} variant="outline" className="w-full">
                        {method.visitLabel}
                      </PrimaryButton>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
