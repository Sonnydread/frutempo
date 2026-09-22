"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { Instagram } from "lucide-react"; // o el icono que uses
import { SiInstagram } from "react-icons/si";

export default function FooterFrutempo() {
  return (
    <footer className="relative overflow-hidden bg-[#010101] text-white">
      {/* Gradientes sutiles (mismo lenguaje que el Hero) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(171,205,32,0.07),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(255,174,0,0.04),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          {/* ===== IZQUIERDA: Logo + Lema ===== */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image src="/img/log.jpg" alt="Frutempo" width={200} height={70} className="h-auto w-[160px] rounded-2xl sm:w-[180px]" />

            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed tracking-[-0.02em] text-white/80 sm:text-xl">
              El sabor de la fruta.
              <span className="mt-2 block text-[#c9e63b]">En su mejor versión.</span>
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">Frutas seleccionadas y deshidratadas con cuidado para conservar su esencia natural.</p>
          </motion.div>

          {/* ===== DERECHA: CTA + Instagram ===== */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }} className="flex flex-col items-center gap-6 lg:items-end">
            {/* Botón CTA principal */}
            <a
              href="https://wa.me/51993745410?text=Hola Frutempo!%20te%20escribo%20desde%20la%20web,%20Quisiera%20más%20información%20sobre%20los%20productos."
              target="_blank"
              className="group relative overflow-hidden rounded-full bg-[#c9e63b] px-8 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">Escribe al WhatsApp</span>
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/frutempoperu/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#c9e63b]/50 hover:text-white">
              <SiInstagram size={20} className="cursor-pointer text-pink-500 transition-all duration-300 hover:scale-125 hover:text-pink-600" />
              <span>@frutempo</span>
            </a>
          </motion.div>
        </div>

        {/* ===== Línea divisoria + Copyright ===== */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/30">© {new Date().getFullYear()} Frutempo. Todos los derechos reservados.</p>

            <div className="flex md:flex-row flex-col items-center gap-6 text-[12px] uppercase tracking-[0.18em] text-white/30">
              <p className="text-center text-base md:mx-0 mx-6 font-medium tracking-wide text-white/30 md:text-right md:text-xs">Desarrollado por: </p>
              <a href="https://www.impactodigitalestrategico.com/" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block text-lg transition-all md:font-semibold font-bold duration-300 hover:scale-105 md:text-[#c9e63b] text-red-600 hover:font-bold hover:text-red-600">
                Impacto Digital Estratégico
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
