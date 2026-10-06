import {useState,useEffect} from 'react';import {nav} from '../data/content';
export default function Header(){const[o,setO]=useState(false);const[s,setS]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>20);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
return(<header className={`fixed inset-x-0 top-0 z-50 transition ${s||o?'bg-ink/80 backdrop-blur-xl border-b border-white/10':''}`}><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
<a href="#top" className="flex items-center gap-3"><img src="/logo-emety.png" alt="Emety" className="h-10 w-10 rounded-lg"/><span className="font-display text-xl font-semibold tracking-wide">EMETY</span></a>
<nav className="hidden items-center gap-8 md:flex">{nav.map(([l,h])=><a key={h} href={h} className="text-sm text-white/70 transition hover:text-electric">{l}</a>)}<a href="#contato" className="btn-p !py-2.5">Fale conosco</a></nav>
<button aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)} className="md:hidden p-2"><span className="block h-0.5 w-6 bg-white mb-1.5"/><span className="block h-0.5 w-6 bg-white mb-1.5"/><span className="block h-0.5 w-6 bg-white"/></button></div>
{o&&<div className="flex flex-col gap-4 px-6 pb-6 md:hidden">{[...nav,['Contato','#contato']].map(([l,h])=><a key={h} href={h} onClick={()=>setO(false)} className="py-2 text-white/80">{l}</a>)}</div>}</header>)}
