'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

type Job = { id: string; title: string; company: string; location: string; job_type: string; salary: string }

export function LiveJobFeed({ fallback }: { fallback: Job[] }) {
  const [jobs, setJobs] = useState(fallback)
  useEffect(() => { createClient().from('jobs').select('id,title,company,location,job_type,salary').eq('published', true).order('created_at', { ascending: false }).limit(6).then(({ data }) => { if (data?.length) setJobs(data as Job[]) }) }, [])
  return <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{jobs.map((job, index) => <article key={job.id ?? job.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"><div className="flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-xl text-lg font-black ${index % 3 === 0 ? 'bg-blue-50 text-[#0A4DC0]' : index % 3 === 1 ? 'bg-slate-100 text-slate-700' : 'bg-sky-50 text-sky-700'}`}>{job.company.charAt(0)}</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{job.job_type}</span></div><h3 className="mt-5 text-lg font-bold text-slate-900">{job.title}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{job.company}</p><div className="mt-5 flex items-center gap-1.5 text-sm text-slate-500"><MapPin className="size-4 text-slate-400" />{job.location}</div><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><p className="font-bold text-slate-900">{job.salary}<span className="text-xs font-normal text-slate-400"> / month</span></p><a href={job.id ? `/jobs/${job.id}` : '#contact'} className="rounded-full p-2 text-[#0A4DC0] transition-colors group-hover:bg-blue-50" aria-label={`View ${job.title}`}><ArrowRight className="size-5" /></a></div></article>)}</div>
}
