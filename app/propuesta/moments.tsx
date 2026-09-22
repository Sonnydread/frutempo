"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/img/time1.jpg",
  "/img/time2.jpg",
  "/img/time3.jpg",
  "/img/time4.jpg",
];

export default function Moments() {
  const [active, setActive] = useState(0);

  const thumbnails = images.filter((_, index) => index !== active);

  const selectImage = (image: string) => {
    const nextIndex = images.indexOf(image);
    if (nextIndex !== -1) setActive(nextIndex);
  };

  return (
    <section className="relative overflow-hidden bg-[#010101] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#c9e63b]/[0.035] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#c9e63b]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-12 max-w-xl sm:mb-14">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9e63b]">
            El mundo Frutempo
          </span>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Fruta para cada
            <span className="block text-white/35">momento.</span>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_220px] xl:grid-cols-[1fr_250px]">
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:min-h-[650px] lg:min-h-[700px]">
            <div className="relative flex h-full min-h-[484px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black sm:min-h-[634px] lg:min-h-[684px]">
              <AnimatePresence mode="wait">
                <motion.div key={images[active]} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 flex items-center justify-center">
                  <Image src={images[active]} alt={`Frutempo ${active + 1}`} fill priority className="object-contain" sizes="(max-width: 1024px) 100vw, calc(100vw - 300px)" />
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/[0.05]" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/65 px-4 py-2.5 backdrop-blur-xl">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#c9e63b]">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-[10px] tracking-[0.2em] text-white/40">04</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:grid-rows-3">
            {thumbnails.map((image, index) => {
              const originalIndex = images.indexOf(image);

              return (
                <motion.button key={image} type="button" onClick={() => selectImage(image)} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }} className="group relative min-h-[150px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-1.5 text-left transition-colors duration-300 hover:border-[#c9e63b]/40 sm:min-h-[180px] lg:min-h-0">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
                    <Image src={image} alt={`Ver presentación ${originalIndex + 1}`} fill className="object-contain scale-[1.015] blur-[0.7px] brightness-[0.72] transition-all duration-500 group-hover:scale-[1.025] group-hover:blur-0 group-hover:brightness-90" sizes="(max-width: 1024px) 33vw, 250px" />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />

                    <div className="absolute bottom-2 left-2 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/15 bg-black/60 px-2 text-[9px] font-medium text-white/60 backdrop-blur-md transition-all duration-300 group-hover:border-[#c9e63b]/50 group-hover:text-[#c9e63b]">
                      {String(originalIndex + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/50 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}