import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { recentEvents } from "@/data/news";

export default function UNGA2026Story() {
  const event = recentEvents.find((item) => item.slug === "unga-2026");

  if (!event) return null;

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-primary pb-12 pt-28 text-white sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft size={17} aria-hidden="true" /> Back to home
          </Link>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/75">
            Event recap
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            {event.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85 sm:text-base">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={18} aria-hidden="true" /> {event.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} aria-hidden="true" /> {event.location}
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:px-8">
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl bg-gray-100 shadow-lg sm:mb-14">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-relaxed text-gray-700">
            {event.summary}
          </p>

          <div className="my-8 rounded-2xl border-l-4 border-primary bg-secondary/60 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              High-Level African-Caribbean Session
            </p>
            <p className="mt-3 text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
              “Redefining Influence, Accelerating Action: Co-Creating Africa and The Caribbean&apos;s Next Chapter for the SDGs.”
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            {event.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 rounded-2xl bg-gray-50 p-5 text-base font-semibold leading-relaxed text-gray-800 sm:p-6">
            {event.closing}
          </p>
        </div>

        <section className="mt-14 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-12" aria-labelledby="gallery-heading">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              In pictures
            </p>
            <h2 id="gallery-heading" className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Moments from New York
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl bg-gray-100">
                <div className={`relative aspect-[4/3] ${photo.fit === "contain" ? "bg-gray-200" : ""}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw"
                    className={photo.fit === "contain" ? "object-contain" : "object-cover transition-transform duration-500 hover:scale-105"}
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
