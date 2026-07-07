import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#fff7ed_0%,#fef2f2_42%,#ecfeff_100%)] px-6 py-12 text-slate-950">
      <div className="grid w-full max-w-5xl items-center gap-10 overflow-hidden rounded-4xl border border-white/80 bg-white/75 p-6 shadow-2xl shadow-rose-200/50 backdrop-blur sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:p-10">
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl">
            Welcome to Poke App
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Step into your Pokemon adventure, discover your favorite creatures,
            and get ready to explore a playful world built for trainers.
          </p>

          <Link
            href="/dashboard"
            className="inline-flex rounded-full bg-red-500 px-7 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Arrive
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-1.5 shadow-xl shadow-slate-300/60">
          <Image
            src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f"
            width={900}
            height={620}
            alt="Poke Ball"
            sizes="(max-width: 1024px) 100vw, 440px"
            className="rounded-[1.1rem] object-cover"
            style={{ width: "100%", height: "auto" }}
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
}
