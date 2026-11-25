"use client";
import { useEffect } from "react";
export default function SiteEnhancements(){
 useEffect(()=>{
  const root=document;
  const toggle=root.querySelector<HTMLButtonElement>(".menu-toggle");
  const nav=root.querySelector<HTMLElement>(".nav");
  const close=()=>{nav?.classList.remove("open");toggle?.setAttribute("aria-expanded","false");};
  const onToggle=()=>{if(!nav||!toggle)return;const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));};
  toggle?.addEventListener("click",onToggle);nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
  const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"&&nav?.classList.contains("open")){close();toggle?.focus();}};
  const onResize=()=>{if(window.matchMedia("(min-width: 601px)").matches)close();};
  document.addEventListener("keydown",onKey);window.addEventListener("resize",onResize);
  document.querySelectorAll<HTMLElement>("#year").forEach(el=>el.textContent=String(new Date().getFullYear()));
  document.querySelectorAll<HTMLButtonElement>(".diagram-toggle").forEach(button=>button.addEventListener("click",()=>{const art=button.closest(".case-study-art");const expanded=art?.classList.toggle("diagram-expanded")??false;button.setAttribute("aria-expanded",String(expanded));button.innerHTML=expanded?'Collapse diagram <span aria-hidden="true">↙</span>':'Expand diagram <span aria-hidden="true">↗</span>'; }));
  const targets=document.querySelectorAll<HTMLElement>(".value-card,.method-step,.experience-row,.principle-grid > div,.case-study-card");
  if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -4% 0px"});targets.forEach(el=>observer.observe(el));}else targets.forEach(el=>el.classList.add("in-view"));
  return()=>{toggle?.removeEventListener("click",onToggle);document.removeEventListener("keydown",onKey);window.removeEventListener("resize",onResize);};
 },[]);
 return null;
}
