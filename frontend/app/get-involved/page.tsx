
import Link from "next/link";

const opportunities = [
  {
    number: "01",
    icon: "♡",
    title: "Volunteer With Us",
    description:
      "Give your time, share your skills, and help create meaningful change in the communities we serve.",
    tags: ["Community Service", "Events", "Outreach"],
    href: "#get-started",
    linkText: "Become a Volunteer",
  },
  {
    number: "02",
    icon: "↗",
    title: "Partner With CLCE",
    description:
      "Collaborate with us to develop community initiatives, share resources, and create lasting impact.",
    tags: ["Organizations", "Institutions", "Collaboration"],
    href: "#get-started",
    linkText: "Explore Partnership",
  },
  {
    number: "03",
    icon: "✳",
    title: "Share Your Skills",
    description:
      "Bring your professional knowledge, creativity, and experience to support meaningful initiatives.",
    tags: ["Creative", "Technology", "Professional Skills"],
    href: "#get-started",
    linkText: "Contribute Your Skills",
  },
  {
    number: "04",
    icon: "◎",
    title: "Engage Your Community",
    description:
      "Help spread awareness, connect people, and encourage positive action within your community.",
    tags: ["Awareness", "Community", "Advocacy"],
    href: "#get-started",
    linkText: "Get Connected",
  },
];

const reasons = [
  {
    number: "01",
    title: "Make a Difference",
    description:
      "Contribute to initiatives that aim to create positive social change.",
  },
  {
    number: "02",
    title: "Grow Together",
    description:
      "Learn new skills, exchange ideas, and build meaningful connections.",
  },
  {
    number: "03",
    title: "Create Lasting Change",
    description:
      "Be part of a collective effort focused on sustainable progress.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#183b32]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#bd9657]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8d7040]">
                Get Involved
              </p>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
              Your actions.
              <br />
              <span className="font-serif italic font-normal text-[#62846c]">
                Their tomorrow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#68766e] sm:text-lg">
              Every meaningful change begins with someone who cares. Join
              CLCE in building stronger communities, creating opportunities,
              and working toward a better future for everyone.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#opportunities"
                className="inline-flex items-center gap-3 rounded-full bg-[#214c3d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#15382c]"
              >
                Explore Opportunities
                <span aria-hidden="true">↘</span>
              </Link>

              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9ded5] px-7 py-4 text-sm font-semibold transition hover:border-[#214c3d] hover:bg-white"
              >
                Join Our Mission <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-12 border-t border-[#e6e7df] pt-7">
              <p className="text-sm font-semibold">
                Many ways to contribute. One shared purpose.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#78837b]">
                Your time, knowledge, and ideas can help make a difference.
              </p>
            </div>
          </div>

          <div className="relative pb-7 pl-2 sm:pl-5">
            <div
              role="img"
              aria-label="People working together to support their community"
              className="h-[390px] rounded-[28px] bg-cover bg-center sm:h-[490px] lg:h-[540px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=90')",
              }}
            />

            <div className="absolute -bottom-1 left-0 max-w-[270px] rounded-2xl border border-[#e8e8df] bg-white p-5 shadow-xl sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8d7040]">
                Together, we can
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug">
                Turn shared purpose into positive action.
              </p>
            </div>

            <div className="absolute right-0 top-7 rounded-full border border-white/70 bg-white/95 px-4 py-3 text-xs font-semibold shadow-lg sm:right-2 sm:top-12">
              Be part of the change
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#e7e8df] bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
              One mission, many possibilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              There is a place for you here.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#718078] sm:text-base">
            Whether you want to volunteer, contribute your expertise, or
            explore a partnership, getting involved starts with a simple
            step. Find an opportunity that matches your interests and discover
            how you can contribute to CLCE&apos;s mission.
          </p>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9657]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
                Find your way
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              How would you like
              <br className="hidden sm:block" /> to get involved?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#718078]">
              Explore different ways to connect with our mission and find
              the opportunity that feels right for you.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {opportunities.map((item) => (
              <article
                key={item.number}
                className="group flex h-full flex-col rounded-2xl border border-[#e5e7df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5d2c5] hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf0e8] text-2xl text-[#37694f] transition group-hover:bg-[#214c3d] group-hover:text-white">
                    {item.icon}
                  </div>

                  <span className="text-sm font-medium text-[#a3aa9f]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[#718078]">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f3f4ef] px-3 py-2 text-xs text-[#68766e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[#37694f] transition group-hover:gap-4"
                  >
                    {item.linkText}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GET INVOLVED */}
      <section className="bg-[#f0f0e8] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
              Why get involved?
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Make your contribution count.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#718078]">
              Change becomes possible when people bring their strengths
              together. Your participation can be part of a larger effort
              toward stronger, more connected communities.
            </p>

            <Link
              href="#get-started"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#214c3d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#15382c]"
            >
              Take the First Step <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="divide-y divide-[#dcded4]">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="grid grid-cols-[48px_1fr] gap-4 py-7 first:pt-0 last:pb-0 sm:grid-cols-[60px_1fr] sm:gap-6"
              >
                <span className="pt-1 text-sm font-semibold text-[#9a7b48]">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#718078]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET STARTED FORM */}
      <section
        id="get-started"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8d7040]">
              Take the next step
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s make a difference together.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#718078]">
              Tell us a little about yourself and how you would like to
              contribute. Our team can use your details to understand your
              interests and explore the next steps with you.
            </p>

            <div className="mt-9 rounded-2xl border border-[#e5e7df] bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold">
                Not sure where to start?
              </p>
              <p className="mt-2 text-sm leading-7 text-[#718078]">
                Choose the option that best matches your interests and
                share a message about how you would like to participate.
              </p>

              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#37694f]"
              >
                Learn more about CLCE <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <form
            action="#get-started"
            method="get"
            className="rounded-[24px] border border-[#e5e7df] bg-white p-6 shadow-sm sm:p-9"
          >
            <h3 className="text-2xl font-semibold">
              Express Your Interest
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#718078]">
              Complete the form to tell us how you would like to get involved.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a89f] focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a89f] focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a89f] focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-medium"
                >
                  Area of Interest <span className="text-red-600">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm outline-none transition focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partnership">Partnership</option>
                  <option value="skills">Share My Skills</option>
                  <option value="community">Community Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="skills"
                  className="mb-2 block text-sm font-medium"
                >
                  Skills or Organization
                </label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  placeholder="e.g. Design, teaching, community work"
                  className="w-full rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0a89f] focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Tell Us More <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us why you would like to get involved..."
                  required
                  className="w-full resize-y rounded-xl border border-[#dfe3db] bg-[#fbfaf7] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[#a0a89f] focus:border-[#62846c] focus:ring-2 focus:ring-[#62846c]/15"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#214c3d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#15382c] focus:outline-none focus:ring-2 focus:ring-[#62846c] focus:ring-offset-2"
                >
                  Submit Your Interest
                  <span aria-hidden="true">→</span>
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#879087]">
                  Your information should be handled responsibly and used
                  only for responding to your inquiry.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#214c3d] px-7 py-14 text-center sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e1c795]">
              Every contribution matters
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Change starts with people like you.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Take a step toward a more connected community. We would love
              to hear how you want to contribute.
            </p>

            <Link
              href="#get-started"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#e1c795] px-7 py-4 text-sm font-semibold text-[#183b32] transition hover:bg-white"
            >
              Get Started Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

