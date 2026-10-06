import {niches,stats} from '../data/content';
export default function Hero(){return(<section id="top" className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-48">
<div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-royal/30 blur-[140px]"/>
<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"/>
<div className="relative mx-auto max-w-5xl text-center">
<p className="reveal mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs text-electric"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric"/>Growth para Home Services nos EUA</p>
<h1 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Transforme buscas no Google em <span className="bg-gradient-to-r from-royal to-electric bg-clip-text text-transparent">clientes reais</span></h1>
<p className="reveal mx-auto mt-7 max-w-2xl text-lg text-white/65">A Emety é a parceira de crescimento de empresas de Home Services nos Estados Unidos: presença local, leads qualificados e conversão em um único sistema mensurável.</p>
<div className="reveal mt-10 flex flex-col justify-center gap-4 sm:flex-row"><a href="#contato" className="btn-p">Solicitar diagnóstico gratuito</a><a href="#servicos" className="btn-s">Ver serviços</a></div>
<div className="reveal mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">{stats.map(([a,b])=><div key={a} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="font-display text-2xl text-electric">{a}</div><div className="mt-1 text-xs text-white/55">{b}</div></div>)}</div>
<div className="reveal mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">{niches.map(n=><span key={n}>{n}</span>)}</div></div></section>)}
