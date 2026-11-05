import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { recentEvents } from "@/data/news";

const Events = () => {
  const event = recentEvents[0];

  if (!event) return null;

  const galleryPreview = event.photos.slice(1, 4);

  return (
    <section className="bg-gray-50 py-20" aria-labelledby="events-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Recent highlights
            </p>
            <h2
              id="events-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              AMSA in action
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600">
              Stories of collaboration and progress in medical education and health.
            </p>
          </div>
          <Link
            href={`/news-events/${event.slug}`}
            className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Read the latest story <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden sm:min-h-96">
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                Event recap
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={17} className="text-primary" aria-hidden="true" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-primary" aria-hidden="true" />
                  {event.location}
                </span>
              </div>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                {event.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                {event.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {event.sessions.map((session) => (
                  <span
                    key={session}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
                  >
                    {session}
                  </span>
                ))}
              </div>
              <Link
                href={`/news-events/${event.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Explore the story <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 border-t border-white bg-white sm:gap-2">
            {galleryPreview.map((photo) => (
              <Link
                key={photo.src}
                href={`/news-events/${event.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary"
                aria-label={`View ${photo.alt} in the event recap`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Events;
