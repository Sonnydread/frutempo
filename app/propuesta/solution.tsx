"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const features = [
  {
    id: 1,
    title: "Marketing & Marca",
    desc: "Redes sociales, contenido, identidad y copy orientado a conversión.",
    extra: "Reels, posts, historias, comentarios y gestión de comunidad.",
    img: "/img/logo.png",
  },
  {
    id: 2,
    title: "Ventas Directas",
    desc: "WhatsApp, gestión de pedidos, seguimiento y cierre con clientes.",
    extra: "Upselling, seguimiento y conversión diaria.",
    img: "/img/shak.png",
  },
  {
    id: 3,
    title: "Expansión Comercial",
    desc: "Ingreso a minimarkets, negociación y crecimiento de puntos de venta.",
    extra: "Prospección, acuerdos comerciales y Alianzas.",
    img: "/img/sudam.png",
  },
  {
    id: 4,
    title: "Operaciones",
    desc: "Coordinación de pedidos, delivery y control básico de stock.",
    extra: "Optimización de rutas y entregas.",
    img: "/img/moto.png",
  },
  {
    id: 5,
    title: "Activaciones",
    desc: "Ferias, degustaciones y contacto directo con clientes.",
    extra: "Generación de leads y visibilidad de marca.",
    img: "/img/market.png",
  },
  {
    id: 6,
    title: "Presencia Digital",
    desc: "Landing page optimizada y conexión con canales de venta.",
    extra: "Optimización de conversión y sistema digital.",
    img: "/img/present.png",
  },
];

export default function Solution() {
  const [activeId, setActiveId] = useState<number | null>(null);

  // 🔥 SCROLL REVEAL
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end end"],
  });

  const reveal = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(${reveal}% 0% 0% 0%)`;

  return (
    <section
      ref={ref}
      className="w-full py-40 px-6 md:px-16 relative overflow-hidden text-white"
    >
      {/* 🟡 BASE BACKGROUND */}
      <div className="absolute inset-0 bg-[#e99001d7]" />

      {/* 🟠 REVEAL BACKGROUND */}
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 bg-[#F28C52]"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl max-w-[1000px] font-medium leading-tight"
        >
          No se necesita contratar 5 personas, yo me encargo de que el sistema haga crecer Frutempo 🚀
        </motion.h2>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl font-normal text-white max-w-7xl"
        >
          No es solo publicar o vender…  
          se trata de construir un sistema que haga que Frutempo se venda todos los días.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
          {features.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                onHoverStart={() => setActiveId(item.id)}
                onHoverEnd={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className="group relative overflow-hidden rounded-2xl h-[480px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                {/* IMAGE */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: isActive ? 1.15 : 1.1,
                      x: isActive ? 15 : 0,
                      y: isActive ? -15 : 0,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.div
                    className={`rounded-xl p-4 transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 backdrop-blur-md border border-white/20"
                        : ""
                    }`}
                    animate={{ y: isActive ? -10 : 0 }}
                  >
                    <h3 className="text-lg md:text-2xl font-medium mb-1">
                      {item.title}
                    </h3>

                    <p className="text-lg text-white">
                      {item.desc}
                    </p>

                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                      }}
                      className="text-lg text-white mt-2 overflow-hidden"
                    >
                      {item.extra}
                    </motion.p>
                  </motion.div>
                </div>

                {/* LIGHT */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}