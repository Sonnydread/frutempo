"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-full py-24 px-6 md:px-16 relative overflow-hidden text-white bg-black">
      
      {/* 🔥 Glow rojo fresa */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#E76F51]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#E76F51]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* 🧠 Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Inversión mensual clara y enfocada en crecimiento
          </h2>
          <p className="text-white/70 mt-4 text-lg">
            Sin comisiones, sin complicaciones. Solo ejecución y resultados.
          </p>
        </motion.div>

        {/* 💼 Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative"
        >
          
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-[#E76F51] text-white text-xs px-3 py-1 rounded-full">
            Plan Growth
          </div>

          {/* Precio */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Gestión integral de crecimiento
            </h3>
            <p className="text-5xl font-bold text-[#F4C542]">
              S/ 2,500
            </p>
            <span className="text-white/60">/ mensual</span>
          </div>

          {/* Incluye */}
          <ul className="flex flex-col gap-3 text-left mb-8">
            <li>✅ Marketing (redes + contenido)</li>
            <li>✅ Ventas (WhatsApp + cierre)</li>
            <li>✅ Expansión (tiendas y minimarkets)</li>
            <li>✅ Operaciones (pedidos + delivery)</li>
            <li>✅ Activaciones (ferias y degustaciones)</li>
            <li>✅ Desarrollo digital (landing/web)</li>
          </ul>

          {/* CTA */}
          <Link
            href="https://wa.me/51999999999" // cambia tu número
            target="_blank"
            className="block w-full text-center bg-[#F4C542] hover:bg-[#ffd95e] text-black font-semibold py-4 rounded-xl transition-all duration-300"
          >
            Empezar ahora
          </Link>
        </motion.div>

        {/* 🔥 Refuerzo de valor */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/80 max-w-2xl"
        >
          Estás reemplazando múltiples roles en una sola persona,  
          con enfoque directo en hacer crecer tu marca desde el primer mes.
        </motion.p>
      </div>
    </section>
  );
}