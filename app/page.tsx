import { DM_Serif_Display, Manrope } from "next/font/google";

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Home() {
  const teamMembers = [
    {
      name: "Gerald",
      title: "The Vision Architect",
      vibe: "Turns ideas into clear direction and keeps the team focused.",
      accent: "from-orange-300/60 to-rose-300/60",
    },
    {
      name: "Meek",
      title: "The Logic Crafter",
      vibe: "Builds clean flows and solves tough problems with calm precision.",
      accent: "from-emerald-300/60 to-cyan-300/60",
    },
    {
      name: "Shyreen",
      title: "The Experience Stylist",
      vibe: "Shapes delightful details that make every interaction feel smooth.",
      accent: "from-pink-300/60 to-amber-300/60",
    },
    {
      name: "Enoch",
      title: "The Momentum Engineer",
      vibe: "Pushes execution forward and transforms plans into real results.",
      accent: "from-sky-300/60 to-lime-300/60",
    },
  ];

  return (
    <div className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-stone-100 text-stone-900`}>
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-112 w-md rounded-full bg-teal-200/55 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-14">
        <section className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-12">
          <p className="mb-4 inline-flex rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-600">
            Our Team Story
          </p>

          <h1
            className={`${headingFont.className} text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl`}
          >
            This is our first application
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">
            We are four developers building with passion, purpose, and great collaboration.
            Every part of this app carries the personality of the team.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-stone-700">
            <span className="rounded-full bg-stone-900 px-4 py-2 text-stone-100">
              We were 4 developers
            </span>
            <span className="rounded-full border border-stone-300 bg-white px-4 py-2">
              Gerald, Meek, Shyreen and Enoch
            </span>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-6 shadow-[0_16px_50px_-35px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${member.accent}`}
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
                Team Member
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-stone-900">
                {member.name}
              </h2>
              <h3 className="mt-2 text-base font-semibold text-stone-700">
                {member.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{member.vibe}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
