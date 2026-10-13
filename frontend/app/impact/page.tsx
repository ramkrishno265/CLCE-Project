
import Link from "next/link";

const impactAreas = [
  {
    number: "01",
    title: "Education & Learning",
    description:
      "Creating opportunities for people to learn, grow, and build a brighter future.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    tag: "Knowledge for all",
  },
  {
    number: "02",
    title: "Community Development",
    description:
      "Supporting local communities through collaboration, inclusion, and sustainable action.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
    tag: "Stronger together",
  },
  {
    number: "03",
    title: "Health & Wellbeing",
    description:
      "Working toward healthier communities where everyone has the opportunity to thrive.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    tag: "Healthy communities",
  },
];

const impactStats = [
  { value: "—", label: "People Reached" },
  { value: "—", label: "Communities Served" },
  { value: "—", label: "Projects Delivered" },
  { value: "—", label: "Volunteers Engaged" },
];

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#183b32]">
      {/* HERO SECTION */}
      <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#bd9657]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8d7040]">
                Our Impact
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
              Small actions.
              <br />
              <span className="font-serif italic font-normal text-[#62846c]">
                Lasting change.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#66756d] sm:text-lg">
              Real progress begins when people come together. Discover how
              collective action, community partnerships, and a shared vision
              can help build a better future for everyone.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#our-impact"
                className="inline-flex items-center gap-3 rounded-full bg-[#214c3d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#15382c]"
              >
                Explore Our Impact
                <span aria-hidden="true">↘</span>
              </Link>

              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9ded5] px-7 py-4 text-sm font-semibold text-[#214c3d] transition hover:border-[#214c3d] hover:bg-white"
              >
                Read Our Stories <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#e5e7df] pt-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8eee5] text-xl">
                ♧
              </div>
              <div>
                <p className="text-sm font-semibold">
                  People first. Progress together.
                </p>
                <p className="mt-1 text-xs text-[#78837b]">
                  Building change that matters.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-8 pr-3 sm:pr-7">
            <div
              role="img"
              aria-label="Community members working together"
              className="h-[380px] rounded-[28px] bg-cover bg-center sm:h-[480px] lg:h-[540px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=90')",
              }}
            />

            <div className="absolute -bottom-1 right-0 max-w-[260px] rounded-2xl border border-[#e8e8df] bg-white p-5 shadow-xl sm:right-2 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8d7040]">
                The bigger picture
              </span>
              <p className="mt-3 text-xl font-semibold leading-snug">
                Change starts when we work together.
              </p>
              <div className="mt-4 h-1 w-12 rounded-full bg-[#bd9657]" />
            </div>

            <div className="absolute left-0 top-8 rounded-full border border-white/70 bg-white/95 px-4 py-3 text-xs font-semibold shadow-lg sm:-left-5 sm:top-12">
              A shared vision for change
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATISTICS */}
      <section
        id="our-impact"
        className="bg-[#214c3d] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8c398]">
                Our progress
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Impact in numbers
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/70">
              Every number represents an opportunity to make a difference.
              Verified figures can be added here as CLCE impact data becomes
              available.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#214c3d] px-5 py-8 sm:px-8 sm:py-10"
              >
                <p className="text-4xl font-semibold tracking-tight text-[#e1c795] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS OF IMPACT */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#bd9657]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
                  Where we focus
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Creating impact where
                <br className="hidden sm:block" /> it matters most.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#718078]">
              Sustainable progress takes more than good intentions. It takes
              focused action, meaningful partnerships, and a commitment to
              people and communities.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <article
                key={area.number}
                className="group overflow-hidden rounded-2xl border border-[#e8e8df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    role="img"
                    aria-label={area.title}
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${area.image}')` }}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold tracking-wide text-[#214c3d]">
                    {area.tag}
                  </span>
                  <span className="absolute bottom-4 right-5 text-5xl font-semibold text-white/90 drop-shadow">
                    {area.number}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#718078]">
                    {area.description}
                  </p>
                  <Link
                    href="/programs"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#37694f] transition group-hover:gap-3"
                  >
                    Explore our programs <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-[#eee9df] lg:grid-cols-2">
          <div
            role="img"
            aria-label="People coming together for positive community change"
            className="min-h-[320px] bg-cover bg-center sm:min-h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85')",
            }}
          />

          <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
              Stories of change
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Behind every impact, there are people.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#69776d]">
              Progress is not just measured in numbers. It lives in personal
              experiences, stronger relationships, and the possibilities
              created when communities support one another.
            </p>
            <Link
              href="/stories"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#214c3d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#15382c]"
            >
              Discover Their Stories <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="border-y border-[#e8e8df] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
              Accountability matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Impact built on trust and transparency.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#718078]">
              Meaningful progress includes being open about our goals, our
              activities, and the results we achieve. Published reports and
              verified information help everyone understand our work.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d9ded5] px-6 py-4 text-sm font-semibold transition hover:border-[#214c3d] hover:bg-[#fbfaf7]"
          >
            Learn About CLCE <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#214c3d] px-7 py-14 text-center sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-16 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e1c795]">
              Be part of the change
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              The future is better when we build it together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Your time, your ideas, and your support can help create
              opportunities and strengthen communities.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="rounded-full bg-[#e1c795] px-7 py-4 text-sm font-semibold text-[#183b32] transition hover:bg-white"
              >
                Get Involved <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/stories"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Read Our Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

