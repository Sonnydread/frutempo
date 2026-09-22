"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroFrutempo() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 0.96]);
  const contentY = useTransform(scrollY, [0, 700], [0, -35]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#010101] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(171,205,32,0.08),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(255,174,0,0.05),transparent_25%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <motion.div style={{ y: contentY }} initial={{ opacity: 0, x: -45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 max-w-xl text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mb-8 flex justify-center lg:justify-start">
              <Image src="/img/log.jpg" alt="Frutempo" width={230} height={80} priority className="h-auto rounded-2xl w-[180px] sm:w-[210px]" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-6xl">
              El sabor de la fruta.
              <span className="mt-2 block text-[#c9e63b]">En su mejor versión.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="mx-auto mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg lg:mx-0">
              Frutas seleccionadas, deshidratadas cuidadosamente para conservar su sabor, textura y esencia natural. Un snack práctico para disfrutar en cualquier momento.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#productos" className="group relative overflow-hidden rounded-full bg-[#c9e63b] px-7 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105">
                <span className="relative z-10">Descubrir productos</span>
                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a href="#nosotros" className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-[#c9e63b]/50 hover:text-white">
                Conoce Frutempo
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-white/35 lg:justify-start">
              <span>100% Natural</span>
              <span>•</span>
              <span>Sin preservantes</span>
              <span>•</span>
              <span>Snack saludable</span>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: imageY, scale: imageScale }} initial={{ opacity: 0, scale: 0.92, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[560px]">
            <motion.div animate={{ rotate: [0, 1, 0, -1, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-3 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,#6d8116,#d4ec45,#8d9e22,#e6ad28,#6d8116)] opacity-30 blur-xl" />
            <div className="absolute -inset-[2px] rounded-[2.3rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(201,230,59,0.9),rgba(255,184,45,0.35),rgba(201,230,59,0.12),rgba(255,184,45,0.8),rgba(201,230,59,0.9))]" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black p-2 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
              <div className="relative overflow-hidden rounded-[1.85rem]">
                <Image src="/img/port.png" alt="Frutempo - frutos deshidratados" width={1254} height={1254} priority className="h-auto w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 sm:flex">
        <span className="text-[14px] uppercase tracking-[0.3em]">Descubre</span>
        <motion.div animate={{ height: [18, 30, 18] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-px bg-[#c9e63b]/50" />
      </div>
    </section>
  );
}