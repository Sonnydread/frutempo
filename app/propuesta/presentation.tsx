"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    image: "/img/blink1.jpg",
    number: "01",
    tag: "Fruta deshidratada",
    title: "La fruta, tal como la conoces. Pero diferente.",
    description: "Seleccionamos frutas de calidad y las transformamos mediante un proceso de deshidratación que concentra su sabor y permite disfrutarlas de una manera práctica, deliciosa y natural.",
    accent: "Piña · Mango · Naranja · Manzana",
  },
  {
    image: "/img/blink2.jpg",
    number: "02",
    tag: "Presentaciones naturales",
    title: "El sabor que empieza en la fruta.",
    description: "Cada presentación nace de una fruta real. Conservamos su esencia para crear snacks que puedas disfrutar en cualquier momento, manteniendo una experiencia auténtica y llena de sabor.",
    accent: "Sabor real · Textura · Calidad",
  },
  {
    image: "/img/blink3.jpg",
    number: "03",
    tag: "Concentrado en polvo",
    title: "Toda la esencia de la fruta, en cada partícula.",
    description: "Nuestra propuesta también lleva la fruta a formatos en polvo y concentrados, pensados para ampliar sus posibilidades y llevar su sabor a nuevas preparaciones.",
    accent: "Fruta · Concentrado · Versatilidad",
  },
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="productos" className="relative overflow-hidden bg-[#010101] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#c9e63b]/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] h-[450px] w-[450px] rounded-full bg-[#c9e63b]/4 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9e63b]">
            Nuestras presentaciones
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            De la fruta <span className="text-white/35">a nuevas formas de disfrutarla.</span>
          </motion.h2>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 xl:grid-cols-[0.70fr_0.55fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#c9e63b]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
              <div className="relative flex min-h-[580px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black sm:min-h-[680px] lg:min-h-[720px]">
                <AnimatePresence mode="wait">
                  <motion.div key={slide.image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.55, ease: "easeOut" }} className="absolute inset-0 flex items-center justify-center">
                    <Image src={slide.image} alt={slide.title} fill priority={current === 0} className="object-contain" sizes="(max-width: 1024px) 100vw, 65vw" />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.03]" />

                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <button onClick={prev} aria-label="Imagen anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#4a5709] text-white backdrop-blur-md transition-all duration-300 hover:border-[#c9e63b]/60 hover:bg-[#c9e63b] hover:text-black">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button onClick={next} aria-label="Siguiente imagen" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 cursor-pointer bg-[#4a5709] text-white backdrop-blur-md transition-all duration-300 hover:border-[#c9e63b]/60 hover:bg-[#c9e63b] hover:text-black">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-6 right-6">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/50">{slide.number} / 03</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-2 px-2">
              {slides.map((item, index) => (
                <button key={item.image} onClick={() => setCurrent(index)} aria-label={`Ver imagen ${index + 1}`} className="group h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.span animate={{ width: current === index ? "100%" : "0%" }} transition={{ duration: 0.35 }} className="block h-full rounded-full bg-[#c9e63b]" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={slide.number} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.45 }} className="max-w-lg">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c9e63b]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9e63b]">{slide.tag}</span>
                </div>

                <h3 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                  {slide.title}
                </h3>

                <p className="mt-7 text-base leading-8 text-white/50">
                  {slide.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9e63b]/30 bg-[#c9e63b]/5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9e63b" strokeWidth="1.5">
                      <path d="M12 3v18M3 12h18" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/65">{slide.accent}</span>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-3">
                    <span className="block text-lg font-semibold text-[#c9e63b]">01</span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-white/35">Origen</span>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-3">
                    <span className="block text-lg font-semibold text-[#c9e63b]">02</span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-white/35">Proceso</span>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-3">
                    <span className="block text-lg font-semibold text-[#c9e63b]">03</span>
                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-white/35">Sabor</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}