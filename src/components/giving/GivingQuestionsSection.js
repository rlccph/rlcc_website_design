import PrimaryButton from "@/components/ui/PrimaryButton";
import { givingPageContent } from "@/data/siteContent";

export default function GivingQuestionsSection() {
  const { questions } = givingPageContent;

  return (
    <section className="bg-rlcc-surface pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{questions.title}</h2>
          <p className="mt-4 text-base text-rlcc-text-muted">
            Email us at{" "}
            <a
              href={`mailto:${questions.email}`}
              className="font-semibold text-rlcc-green hover:text-rlcc-green-dark"
            >
              {questions.email}
            </a>
          </p>
          <PrimaryButton href={questions.buttonHref} className="mt-8">
            {questions.buttonLabel}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
