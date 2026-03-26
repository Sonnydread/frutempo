"use client";

import { motion } from "framer-motion";

const problems = [
  "Tienes un buen producto… pero no se vende",
  "Publicas en redes… pero nadie compra",
  "No logras entrar a tiendas o minimarkets",
  "No tienes una estrategia clara para crecer",
];

export default function Problem() {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white relative overflow-hidden">
      
      {/* 🔥 Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col gap-12">
        
        {/* 🧠 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Lo que normalmente pasa…
        </motion.h2>

        {/* 💔 Subtitle emocional */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Tienes un buen producto, ya invertiste tiempo y dinero…  
          pero las ventas no llegan como esperabas.
        </motion.p>

        {/* ⚡ Problems */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {problems.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-left hover:border-red-400/40 transition-all duration-300"
            >
              <p className="text-white/90 text-lg">
                ❌ {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Golpe final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-xl md:text-2xl font-semibold text-white">
            No es tu producto…  
            <span className="text-red-400"> es la falta de un sistema para venderlo.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}