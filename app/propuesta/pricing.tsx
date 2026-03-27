"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-full py-24 px-6 md:px-16 relative overflow-hidden text-white bg-[#0475cb]">
      

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* 🧠 Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-normal">
            Inversión mensual clara y enfocada en crecimiento
          </h2>
          <p className="text-white mt-4 md:text-2xl text-lg">
            Sin comisiones, sin complicaciones. Solo ejecución y resultados.
          </p>
        </motion.div>

        {/* 💼 Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:max-w-2xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl md:p-16 p-4 shadow-2xl relative"
        >
          
          {/* Badge */}
          <div className="absolute top-4 right-4 bg-[#E76F51] text-white text-lg px-3 py-1 rounded-full">
            Plan Growth
          </div>

          {/* Precio */}
          <div className="mb-6">
            <h3 className="text-4xl md:pt-0 pt-4 font-normal mb-2">
              Gestión integral de crecimiento
            </h3>
            <p className="text-5xl pt-4 font-medium text-[#F4C542]">
              S/ 2,500
            </p>
            <span className="text-white text-xl">/ mensual</span>
          </div>

          {/* Incluye */}
          <ul className="flex flex-col gap-3 text-left md:text-2xl text-xl mb-8">
            <li>✅ Marketing (redes + contenido)</li>
            <li>✅ Ventas (WhatsApp + cierre)</li>
            <li>✅ Expansión (Negocios y Minimarkets)</li>
            <li>✅ Operaciones (pedidos + delivery)</li>
            <li>✅ Activaciones (ferias y degustaciones)</li>
            <li>✅ Desarrollo digital (Landing/Website)</li>
          </ul>

          {/* CTA */}
          <div
            className="block w-full text-2xl text-center bg-[#F4C542] hover:bg-[#ffd95e] text-black font-medium py-4 rounded-xl transition-all duration-300"
          >
            ¡Empezar ahora!
          </div>
        </motion.div>

        {/* 🔥 Refuerzo de valor */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-white md:pb-40 pb-10 max-w-2xl"
        >
          Estás reemplazando múltiples roles en una sola persona,  
          con enfoque directo en hacer crecer tu marca desde el primer mes.
        </motion.p>
      </div>
    </section>
  );
}