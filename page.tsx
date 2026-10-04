'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileText,
  GraduationCap,
  Headphones,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'

const jobs = [
  { title: 'Senior Product Designer', company: 'Bamboo', location: 'Lagos, Nigeria', salary: '₦650k – ₦900k', type: 'Full-time', logo: 'B' },
  { title: 'Frontend Engineer', company: 'Flutterwave', location: 'Lagos, Nigeria', salary: '₦800k – ₦1.2m', type: 'Full-time', logo: 'F' },
  { title: 'People Operations Lead', company: 'Kora', location: 'Lagos, Nigeria', salary: '₦700k – ₦1m', type: 'Full-time', logo: 'K' },
  { title: 'Digital Marketing Manager', company: 'Paystack', location: 'Lagos, Nigeria', salary: '₦550k – ₦800k', type: 'Full-time', logo: 'P' },
  { title: 'Customer Success Executive', company: 'Moniepoint', location: 'Lagos, Nigeria', salary: '₦400k – ₦600k', type: 'Full-time', logo: 'M' },
  { title: 'Financial Analyst', company: 'PiggyVest', location: 'Lagos, Nigeria', salary: '₦500k – ₦750k', type: 'Full-time', logo: 'P' },
]

const services = [
  { icon: UsersRound, title: 'Recruitment', text: 'Find exceptional people who move your business forward.' },
  { icon: FileText, title: 'CV Revamp', text: 'Turn your CV into a compelling career story that gets noticed by recruiters.' },
  { icon: GraduationCap, title: 'Interview Prep', text: 'Walk into every interview ready to make an impact.' },
  { icon: Headphones, title: 'Outsourcing', text: 'Build agile, high-performing teams without the overhead.' },
]

const reasons = [
  { icon: ShieldCheck, title: 'Trusted expertise', text: 'Deep knowledge of the Nigerian talent market and the industries shaping its future.' },
  { icon: Sparkles, title: 'Human-first approach', text: 'We listen closely, move with purpose, and make every match meaningful.' },
  { icon: CircleCheck, title: 'Results that last', text: 'Our success is measured by the long-term value we create for people and businesses.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center gap-2.5" aria-label="R1 JOB home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#0A4DC0] text-sm font-black tracking-tight text-white shadow-lg shadow-blue-900/20">R1</span>
            <span className="text-lg font-black tracking-[-0.05em] text-[#0A4DC0]">JOB<span className="text-slate-900">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {['Home', 'Jobs', 'About', 'Services', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0A4DC0]">{item}</a>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="/auth" aria-label="Log in or sign up" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-sm font-bold text-[#0A4DC0] transition-colors hover:border-[#0A4DC0] hover:bg-blue-50">
              <LockKeyhole className="size-4" /> Log in / Sign up
            </a>
            <a href="#contact" className="inline-flex rounded-full bg-[#0A4DC0] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-transform hover:-translate-y-0.5">Post a Job <ArrowRight className="ml-2 size-4" /></a>
          </div>
          <button type="button" className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mx-4 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:hidden">{['Home', 'Jobs', 'About', 'Services', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-semibold text-slate-700">{item}</a>)}<a href="/auth" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 font-semibold text-[#0A4DC0]"><LockKeyhole className="size-4" /> Log in / Sign up</a><a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#0A4DC0] px-4 py-3 text-center font-bold text-white">Post a Job</a></nav>}
      </header>

      <section id="home" className="relative bg-[#f7faff] px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute -right-24 -top-20 size-96 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute left-1/3 top-24 size-56 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0A4DC0]"><span className="size-2 rounded-full bg-[#0A4DC0]" /> Nigeria&apos;s talent partner</div>
            <h1 className="max-w-2xl text-5xl font-black leading-[1.03] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">Find your <span className="text-[#0A4DC0]">dream job</span> or ideal candidate.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We connect ambitious people with progressive companies, creating opportunities that help everyone move forward.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#jobs" className="inline-flex items-center rounded-full bg-[#0A4DC0] px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1">Find Jobs <ArrowRight className="ml-2 size-4" /></a><a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition-all hover:-translate-y-1 hover:border-[#0A4DC0] hover:text-[#0A4DC0]">Hire Talent</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[490px] animate-in fade-in zoom-in-95 duration-700 lg:ml-auto">
            <div className="absolute -left-7 top-14 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-[#0A4DC0]"><CheckCircle2 className="size-5" /></span><div><p className="text-xs text-slate-500">Successful matches</p><p className="font-bold text-slate-900">98.4%</p></div></div></div>
            <div className="rounded-[2rem] bg-[#0A4DC0] p-3 shadow-2xl shadow-blue-900/25"><div className="relative overflow-hidden rounded-[1.5rem] bg-white px-5 pb-6 pt-5"><div className="absolute -right-10 -top-10 size-40 rounded-full bg-blue-50" /><div className="relative flex items-center justify-between"><div><p className="text-sm font-bold text-slate-900">Make your next move</p><p className="mt-1 text-xs text-slate-500">Thousands of roles, one right fit.</p></div><div className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-[#0A4DC0]"><BriefcaseBusiness className="size-5" /></div></div><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="relative mt-6 flex flex-col gap-3"><label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"><Search className="size-5 text-slate-400" /><span className="sr-only">Job title</span><input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Job title or keyword" /></label><label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"><MapPin className="size-5 text-slate-400" /><span className="sr-only">Location</span><input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Location e.g. Lagos" /></label><button className="mt-1 rounded-xl bg-[#0A4DC0] py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-800">{submitted ? 'Searching roles...' : 'Search opportunities'}</button></form><div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><div className="flex -space-x-2">{['A','K','J','M'].map((letter, i) => <span key={letter} className={`flex size-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${['bg-amber-500','bg-rose-400','bg-emerald-500','bg-violet-500'][i]}`}>{letter}</span>)}</div><p className="text-xs text-slate-500"><strong className="text-slate-800">10k+</strong> professionals trust R1 JOB</p></div></div></div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><UsersRound className="size-5" /></span><div><p className="text-xs text-slate-500">People hired</p><p className="font-bold text-slate-900">2,500+</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white px-6 py-10 lg:px-8"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4"><div><p className="text-3xl font-black tracking-tight text-[#0A4DC0]">500<span className="text-blue-200">+</span></p><p className="mt-1 text-sm font-medium text-slate-500">Jobs posted</p></div><div><p className="text-3xl font-black tracking-tight text-[#0A4DC0]">10k<span className="text-blue-200">+</span></p><p className="mt-1 text-sm font-medium text-slate-500">Active candidates</p></div><div><p className="text-3xl font-black tracking-tight text-[#0A4DC0]">150<span className="text-blue-200">+</span></p><p className="mt-1 text-sm font-medium text-slate-500">Partner companies</p></div><div><p className="text-3xl font-black tracking-tight text-[#0A4DC0]">98<span className="text-blue-200">%</span></p><p className="mt-1 text-sm font-medium text-slate-500">Placement success</p></div></div></section>

      <section id="jobs" className="px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DC0]">Opportunities</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Featured jobs</h2><p className="mt-3 text-slate-500">Your next chapter could start with one application.</p></div><a href="#jobs" className="inline-flex items-center font-bold text-[#0A4DC0]">View all jobs <ChevronRight className="ml-1 size-4" /></a></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{jobs.map((job, index) => <article key={job.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"><div className="flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-xl text-lg font-black ${index % 3 === 0 ? 'bg-blue-50 text-[#0A4DC0]' : index % 3 === 1 ? 'bg-slate-100 text-slate-700' : 'bg-sky-50 text-sky-700'}`}>{job.logo}</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{job.type}</span></div><h3 className="mt-5 text-lg font-bold text-slate-900">{job.title}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{job.company}</p><div className="mt-5 flex items-center gap-1.5 text-sm text-slate-500"><MapPin className="size-4 text-slate-400" />{job.location}</div><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><p className="font-bold text-slate-900">{job.salary}<span className="text-xs font-normal text-slate-400"> / month</span></p><button type="button" className="rounded-full p-2 text-[#0A4DC0] transition-colors group-hover:bg-blue-50" aria-label={`View ${job.title}`}><ArrowRight className="size-5" /></button></div></article>)}</div></div></section>

      <section id="services" className="bg-[#f7faff] px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DC0]">How we help</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">More than a job board.</h2><p className="mt-4 leading-7 text-slate-600">From first conversation to long-term success, we give talent and businesses the support to do their best work.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-blue-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-blue-900/5"><span className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-[#0A4DC0]"><Icon className="size-5" /></span><h3 className="mt-5 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p><a href="#contact" className="mt-5 inline-flex items-center text-sm font-bold text-[#0A4DC0]">Learn more <ArrowRight className="ml-2 size-4" /></a></div>)}</div></div></section>

      <section id="about" className="px-6 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DC0]">Why R1 JOB</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">Talent meets possibility.</h2><p className="mt-5 leading-7 text-slate-600">We believe the right opportunity can transform a career, and the right person can transform a company. That is why we make every connection count.</p></div><div className="grid gap-4 sm:grid-cols-3">{reasons.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl bg-slate-50 p-5"><Icon className="size-6 text-[#0A4DC0]" /><h3 className="mt-5 font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></section>

      <section id="community" className="bg-white px-6 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-blue-100 bg-[#f7faff] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0A4DC0]">Stay connected</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">Never miss your next opportunity.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Join the official R1 JOB community to receive fresh job openings, career tips, and exclusive opportunities directly from us. Follow our WhatsApp platforms and take the next step toward your dream career.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="https://whatsapp.com/channel/0029VbBZmTE1Hspxtly8i90R" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition-all hover:-translate-y-1 hover:bg-[#1ebe5d]"><MessageCircle className="mr-2 size-4" />Join WhatsApp Channel</a><a href="https://chat.whatsapp.com/JHFIqcpThiQLM5bjyDn4JD?mode=gi_t" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#25D366] bg-white px-5 py-3.5 text-sm font-bold text-[#168f45] transition-all hover:-translate-y-1 hover:bg-emerald-50"><UsersRound className="mr-2 size-4" />Join Jobs Group</a></div></div></section>

      <section id="contact" className="mx-6 mb-20 overflow-hidden rounded-[2rem] bg-[#0A4DC0] px-6 py-14 text-center text-white lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-20"><div className="relative"><div className="absolute -left-20 -top-28 size-64 rounded-full bg-white/10 blur-3xl" /><p className="relative text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Your next step starts here</p><h2 className="relative mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">Ready to take the next step?</h2><p className="relative mx-auto mt-4 max-w-xl text-blue-100">Whether you&apos;re growing a team or growing your career, we&apos;re here to help you get there. Need a CV that opens doors? Our experts will revamp it to position you for your next big opportunity.</p><div className="relative mt-8 flex flex-wrap justify-center gap-3"><a href="#jobs" className="rounded-full bg-white px-6 py-3.5 font-bold text-[#0A4DC0] transition-transform hover:-translate-y-1">Explore jobs</a><a href="https://wa.me/2348148359555?text=Hello%20R1%20JOB%2C%20I%27m%20interested%20in%20your%20CV%20revamp%20service." target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-blue-300 px-6 py-3.5 font-bold text-white transition-colors hover:bg-blue-800"><MessageCircle className="mr-2 size-4" />Revamp my CV</a></div></div></section>

      <footer className="border-t border-slate-100 bg-white px-6 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]"><div><a href="#home" className="flex items-center gap-2.5"><span className="flex size-9 items-center justify-center rounded-xl bg-[#0A4DC0] text-sm font-black text-white">R1</span><span className="text-lg font-black tracking-[-0.05em] text-[#0A4DC0]">JOB<span className="text-slate-900">.</span></span></a><p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">Bridging talents and opportunities across Nigeria and beyond.</p></div><div><h3 className="text-sm font-bold text-slate-900">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-500"><a href="#jobs" className="hover:text-[#0A4DC0]">Find a job</a><a href="#contact" className="hover:text-[#0A4DC0]">Hire talent</a><a href="#services" className="hover:text-[#0A4DC0]">Our services</a></div></div><div><h3 className="text-sm font-bold text-slate-900">Company</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-500"><a href="#about" className="hover:text-[#0A4DC0]">About us</a><a href="#contact" className="hover:text-[#0A4DC0]">Contact</a><a href="#contact" className="hover:text-[#0A4DC0]">Partner with us</a></div></div><div><h3 className="text-sm font-bold text-slate-900">Let&apos;s connect</h3><a href="mailto:info@r1job.com" className="mt-4 block text-sm font-semibold text-[#0A4DC0]">info@r1job.com</a><a href="https://wa.me/2348148359555" target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold text-[#0A4DC0]">WhatsApp: 0814 835 9555</a><p className="mt-2 text-sm text-slate-500">Lagos, Nigeria</p><div className="mt-5 flex gap-2"><a href="#contact" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-[#0A4DC0]">in</a><a href="#contact" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-[#0A4DC0]">ig</a><a href="#contact" aria-label="X" className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-[#0A4DC0]">x</a></div></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 pt-6 text-xs text-slate-400">© 2026 R1 JOB. Bridging talents &amp; opportunities.</div></footer>

      <a href="https://wa.me/2348148359555?text=Hello%20R1%20JOB%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services." target="_blank" rel="noreferrer" aria-label="Chat with R1 JOB customer service on WhatsApp" className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-900/30 transition-all hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7"><MessageCircle className="size-5" /><span className="hidden sm:inline">Chat with us on WhatsApp</span></a>
    </main>
  )
}
