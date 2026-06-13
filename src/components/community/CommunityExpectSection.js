import { Book, Heart, PeopleFill } from "react-bootstrap-icons";
import { communityExpectItems } from "@/data/communities";

const iconClassName = "h-6 w-6 text-rlcc-green";

const expectIcons = {
  fellowship: () => <Heart className={iconClassName} aria-hidden="true" />,
  teaching: () => <Book className={iconClassName} aria-hidden="true" />,
  friendship: () => <PeopleFill className={iconClassName} aria-hidden="true" />,
};

export default function CommunityExpectSection() {
  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          What to Expect
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {communityExpectItems.map((item) => {
            const Icon = expectIcons[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rlcc-cream">
                  <Icon />
                </div>
                <h3 className="mt-4 text-base font-bold leading-6 text-rlcc-text-main sm:text-lg">
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
