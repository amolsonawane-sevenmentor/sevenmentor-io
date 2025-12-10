"use client"

import {
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  BadgeCheck,
  Shield,
  Sparkles,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react"
// import logo from "../../.."
import Image from "next/image"
export default function ThankYouPage() {
  // const departments = [
  //   { name: "Data Science", phone: "020-71171500", note: "Course & enrollment queries" },
  //   { name: "Software Development", phone: "020-71173035", note: "Website & account help" },
  //   { name: "Cyber Security", phone: "020-71172515", note: "Placements & internships" },
  //   { name: "Cloud Computing", phone: "020-71173071", note: "Hiring & certifications" },
  //   { name: "Finance", phone: "+1 (555) 123-5050", note: "Fees & billing" },
  //   { name: "IT Help Desk", phone: "+1 (555) 123-6060", note: "Technical assistance" },
  // ]

  const categories = [
    { label: "Full-Stack Development", icon: <BookOpen className="h-4 w-4" aria-hidden /> },
    { label: "Cybersecurity", icon: <Shield className="h-4 w-4" aria-hidden /> },
    { label: "Data Science", icon: <Sparkles className="h-4 w-4" aria-hidden /> },
    { label: "Cloud & DevOps", icon: <BadgeCheck className="h-4 w-4" aria-hidden /> },
    { label: "Design & UI/UX", icon: <Users className="h-4 w-4" aria-hidden /> },
    { label: "Soft Skills (Non-IT)", icon: <GraduationCap className="h-4 w-4" aria-hidden /> },
  ]

  const faqs = [
    {
      q: "When will I hear back?",
      a: "We typically respond within 24–48 business hours. For urgent matters, call Admissions directly.",
    },
    {
      q: "Can I schedule a counseling session?",
      a: "Yes.",
    },
    {
      q: "Do you offer placement assistance?",
      a: "Absolutely. Our dedicated Career Cell supports resume prep, mock interviews, and job referrals.",
    },
    {
      q: "What about non-IT courses?",
      a: "SevenMentor provides both IT and non-IT programs. Explore categories below or speak with Admissions.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-10 sm:pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-700 to-orange-500 p-5 sm:p-8 shadow-[0_10px_40px_-10px_rgba(251,146,60,0.45)]">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* subtle texture/overlay via gradient mask */}
            <div className="h-full w-full bg-[radial-gradient(1000px_400px_at_0%_0%,rgba(255,255,255,0.35),transparent)]" />
          </div>

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Image
              src="/assets/sevenMLogo.webp"
              alt="SevenMentor logo"
              height={50}
              width={50}
              className="h-16 w-16 rounded-lg bg-black/20 ring-1 ring-white/25"
              crossOrigin="anonymous"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
                <span className="text-sm font-medium tracking-wide">Submission received</span>
              </div>
              <h1 className="mt-1 text-pretty text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Thank you for reaching out to SevenMentor
              </h1>
              <p className="mt-2 max-w-2xl text-sm/6 text-white/85">
                We appreciate your interest. We’ll review your request and get back to you shortly. Meanwhile, explore
                courses or contact the right department for faster assistance.
              </p>
              {/* CTAs */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-xl bg-black/15 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 transition-transform duration-300 hover:translate-y-[-2px]"
                >
                  <BookOpen className="h-4 w-4" aria-hidden />
                  Explore Courses
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Strip */}
      <section className="mx-auto mt-8 max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
          <h2 className="text-lg font-semibold">What happens next?</h2>
          <p className="mt-1 text-sm text-neutral-300">
            A counselor will review your submission and reach out. 
          </p>
        </div>
      </section>

      {/* Department Directory */}
      {/* <section aria-labelledby="departments" className="mx-auto mt-8 max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 id="departments" className="text-xl font-semibold">
            Contact the right department
          </h2>
          <span className="text-xs text-neutral-400">Tap to call instantly</span>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, phone, note }) => {
            const tel = phone.replace(/[^+\d]/g, "")
            return (
              <li key={name}>
                <a
                  href={`tel:${tel}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/60 hover:shadow-[0_10px_30px_-12px_rgba(251,146,60,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{name}</h3>
                      <p className="mt-1 text-xs text-neutral-400">{note}</p>
                    </div>
                    <span className="rounded-md bg-orange-500/15 px-2 py-0.5 text-[11px] font-medium text-orange-300 ring-1 ring-inset ring-orange-400/30">
                      Available
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-orange-300">
                    <Phone className="h-4 w-4" aria-hidden />
                    <span className="tabular-nums text-sm">{phone}</span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </section> */}

      {/* Next Steps
      <section className="mx-auto mt-10 max-w-6xl px-4">
        <h2 className="text-xl font-semibold">Next steps for you</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-colors hover:border-orange-400/50">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-orange-300" aria-hidden />
              <h3 className="text-base font-semibold">Schedule Counseling</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Book a 1:1 session to discuss the right IT or non-IT path for your goals.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-orange-300 hover:text-orange-200"
            >
              Request a slot <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-colors hover:border-orange-400/50">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-orange-300" aria-hidden />
              <h3 className="text-base font-semibold">Career Guidance</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Resume review, mock interviews, and placement support from our Career Cell.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-orange-300 hover:text-orange-200"
            >
              Talk to an expert <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-colors hover:border-orange-400/50">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-orange-300" aria-hidden />
              <h3 className="text-base font-semibold">Get Certified</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Prepare for globally recognized certifications across IT & non-IT tracks.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-orange-300 hover:text-orange-200"
            >
              View certification paths <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section> */}

      {/* Popular Categories */}
      {/* <section id="courses" className="mx-auto mt-10 max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular categories</h2>
          <a href="#" className="text-sm font-medium text-orange-300 hover:text-orange-200">
            Browse all
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.label}
              className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/50"
            >
              <div className="flex items-center gap-2 text-orange-300">
                <span className="grid place-items-center rounded-md bg-orange-500/15 p-2 ring-1 ring-inset ring-orange-400/25">
                  {c.icon}
                </span>
                <span className="text-sm font-medium text-neutral-200">{c.label}</span>
              </div>
              <p className="mt-2 text-xs text-neutral-400">
                Learn from industry practitioners. Flexible schedules and hands-on projects.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200"
              >
                Explore <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          ))}
        </div>
      </section> */}

      {/* Quick Info */}
      {/* <section className="mx-auto mt-10 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-orange-300" aria-hidden />
              <h3 className="text-base font-semibold">Locations</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Multiple centers across major cities with modern labs and classrooms.
            </p>
            <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200">
              Find a center <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-orange-300" aria-hidden />
              <h3 className="text-base font-semibold">Timings</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              Weekday & weekend batches available. Custom corporate training on request.
            </p>
            <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200">
              View schedules <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section className="mx-auto mt-10 max-w-6xl px-4 pb-12">
        <h2 className="text-xl font-semibold">FAQs</h2>
        <div className="mt-4 space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition-colors hover:border-orange-400/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="text-sm font-medium">{q}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-neutral-400"
                  aria-hidden
                />
              </summary>
              <p className="mt-2 text-sm text-neutral-300">{a}</p>
            </details>
          ))}
        </div>

        <footer className="mt-8 text-sm text-neutral-400">
          Still need help? Email{" "}
          <a
            href="mailto:support@sevenmentor.com"
            className="text-orange-300 underline-offset-4 hover:text-orange-200 hover:underline"
          >
          support@sevenmentor.com
          </a>{" "}
          or call{" "}
          <a href="tel:020-71173125" className="text-orange-300 hover:text-orange-200">
          020-71173125
          </a>
          .
        </footer>
      </section>
    </main>
  )
}
