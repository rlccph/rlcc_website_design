"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { communities } from "@/data/communities";
import { communitiesPageContent } from "@/data/siteContent";

const chevronClassName = "h-5 w-5";

function getCardsPerView(width) {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function CommunityCard({ community }) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <Image
        src={community.image}
        alt={community.imageAlt}
        width={640}
        height={360}
        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-rlcc-text-main group-hover:text-rlcc-green">
          {community.name}
        </h3>
        <p className="mt-2 line-clamp-4 text-sm leading-6 text-rlcc-text-muted">
          {community.shortDescription}
        </p>
      </div>
    </Link>
  );
}

export default function CommunitiesTypesSection() {
  const { types } = communitiesPageContent;
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(communities.length / cardsPerView);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(0, totalSlides - 1)));
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
    },
    [totalSlides],
  );

  const goPrev = () => goToSlide(currentSlide - 1);
  const goNext = () => goToSlide(currentSlide + 1);

  const visibleItems = communities.slice(
    currentSlide * cardsPerView,
    currentSlide * cardsPerView + cardsPerView,
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-rlcc-green-dark sm:text-4xl">{types.title}</h2>
          {totalSlides > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentSlide === 0}
                aria-label="Previous communities"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-rlcc-text-main transition-colors hover:border-rlcc-green hover:text-rlcc-green disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className={chevronClassName} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={currentSlide >= totalSlides - 1}
                aria-label="Next communities"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-rlcc-text-main transition-colors hover:border-rlcc-green hover:text-rlcc-green disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className={chevronClassName} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>

        {totalSlides > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-rlcc-green" : "w-2.5 bg-black/20 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
