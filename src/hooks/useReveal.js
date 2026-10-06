import {useEffect} from 'react';
export default function useReveal(){useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),o.unobserve(x.target))),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));return()=>o.disconnect()},[])}
