"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Marketing",
    items: ["Redes sociales", "Contenido (reels/posts)"],
  },
  {
    title: "Ventas",
    items: ["WhatsApp", "Cierre de clientes"],
  },
  {
    title: "Expansión",
    items: ["Minimarkets", "Tiendas"],
  },
  {
    title: "Operaciones",
    items: ["Delivery", "Pedidos"],
  },
  {
    title: "Activaciones",
    items: ["Ferias", "Degustaciones"],
  },
  {
    title: "Digital",
    items: ["Landing page", "Web"],
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white relative overflow-hidden">
      
      {/* 🔥 Glow amarillo mango */}
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#F4C542]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#F4C542]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-14">
        
        {/* 🧠 Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Todo lo que tu marca necesita para crecer
          </h2>
          <p className="text-white/70 mt-4 text-lg">
            Un sistema completo que cubre cada etapa del crecimiento
          </p>
        </motion.div>

        {/* 🧩 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-[#F4C542]/60 hover:bg-white/10 transition-all duration-300"
            >
              {/* 🔥 Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#F4C542] transition">
                {service.title}
              </h3>

              {/* 📋 Items */}
              <ul className="flex flex-col gap-2">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white/80 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C542]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}