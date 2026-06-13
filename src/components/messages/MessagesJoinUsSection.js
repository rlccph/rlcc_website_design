import PrimaryButton from "@/components/ui/PrimaryButton";
import { messagesPageContent } from "@/data/siteContent";

export default function MessagesJoinUsSection({ className = "bg-white" }) {
  const { joinUs } = messagesPageContent;

  return (
    <section className={`pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pb-20 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-rlcc-green-dark p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-bold leading-tight sm:text-3xl">{joinUs.title}</p>
              <p className="mt-3 text-base text-white/90">
                {joinUs.services.map((service, index) => (
                  <span key={service.label}>
                    {index > 0 ? " | " : ""}
                    {service.time} {service.label}
                  </span>
                ))}
              </p>
            </div>
            <PrimaryButton href={joinUs.buttonHref} variant="outlineLight" className="shrink-0">
              {joinUs.buttonLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
