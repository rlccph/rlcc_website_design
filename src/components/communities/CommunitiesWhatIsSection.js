import Image from "next/image";
import { HeartFill, HouseHeart, PersonHearts, StarFill } from "react-bootstrap-icons";
import { communitiesPageContent } from "@/data/siteContent";

const iconClassName = "h-6 w-6 text-rlcc-green";

const valueIcons = {
  friendship: () => <PersonHearts className={iconClassName} aria-hidden="true" />,
  faith: () => <StarFill className={iconClassName} aria-hidden="true" />,
  support: () => <HeartFill className={iconClassName} aria-hidden="true" />,
  welcome: () => <HouseHeart className={iconClassName} aria-hidden="true" />,
};

export default function CommunitiesWhatIsSection() {
  const { whatIs } = communitiesPageContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{whatIs.title}</h2>
            <p className="mt-5 text-base leading-7 text-rlcc-text-muted sm:text-lg">{whatIs.body}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {whatIs.values.map((value) => {
                const Icon = valueIcons[value.icon];

                return (
                  <div key={value.label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rlcc-cream">
                      <Icon />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-rlcc-text-main">{value.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <Image
            src={whatIs.image}
            alt={whatIs.imageAlt}
            width={900}
            height={560}
            className="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}
