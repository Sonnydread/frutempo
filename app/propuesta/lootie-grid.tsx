"use client";

import { useState, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import Lottie from "lottie-react";
import { Megaphone, Brush, Palette, BarChart, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import setting from "@/lottie/setting.json";
import goal from "@/lottie/Goal.json";
import megaphoneAnim from "@/lottie/Megaphone.json";
import reload from "@/lottie/Reload.json";
import target from "@/lottie/Target.json";

type LottieColor = [number, number, number];

// 🎨 Recolor sin any
function recolorLottie(data: unknown, color: LottieColor) {
  const clone = JSON.parse(JSON.stringify(data)) as Record<string, unknown>;

  const walk = (obj: unknown) => {
    if (typeof obj !== "object" || obj === null) return;

    const record = obj as Record<string, unknown>;

    if ("c" in record && typeof record.c === "object" && record.c !== null) {
      const cObj = record.c as Record<string, unknown>;

      if (Array.isArray(cObj.k)) {
        cObj.k = [...color, 1];
      }
    }

    Object.values(record).forEach(walk);
  };

  walk(clone);
  return clone;
}

const BLUE: LottieColor = [0.23, 0.51, 0.96];

const cards = [
  {
    title: "Marketing Digital",
    description: "Encargado de Visibilidad y Posicionamiento",
    items: [
      "Manejo de Redes Sociales",
      "Creación de posts y contenido",
      "Responder comentarios",
    ],
    roles: ["Social Media Manager", "Content Creator"],
    icon: Megaphone,
    animation: megaphoneAnim,
  },
  {
    title: "Logística y Distribución",
    description: "Cerrar ventas y coordinar entregas",
    items: [
      "Convertir interesados en clientes",
      "Atención por WhatsApp",
      "Gestión de pedidos",
      "Servicio de entrega/delivery"
    ],
    roles: ["Ejecutivo de Ventas"],
    icon: Brush,
    animation: goal,
  },
  {
    title: "Operaciones",
    description: "Colocar el producto en tiendas y/o establecimientos",
    items: ["Posicionar el producto en minimarkets", "Negociar consignaciones", "Conseguir Alianzas y puntos de venta"],
    roles: ["Business Development"],
    icon: Palette,
    animation: setting,
  },
  {
    title: "Activaciones y Eventos",
    description: "Encargado de presencia en eventos",
    items: [
      "Posicionar el producto en ferias",
      "Activaciones de marca",
      "Degustaciones en eventos estratégicos",
      "Expansión comercial",
    ],
    roles: ["Brand Promoter", "Activador de Marca"],
    icon: BarChart,
    animation: reload,
  },
  {
    title: "Desarrollo Web",
    description: "Encargado de presencia digital profesional",
    items: ["Creación de Landing Page", "Optimización de Presencia Digital", "Actualizaciones" ],
    roles: ["Web Developer"],
    icon: Globe,
    animation: target,
  },
];
export default function LottieCardFlow() {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [hovered, setHovered] = useState<number | null>(null);
  // 🎨 Preprocesar color una sola vez
  const preColoredCards = useMemo(() => {
    return cards.map((card) => ({
      ...card,
      blueAnim: recolorLottie(card.animation, BLUE),
    }));
  }, []);

  return (
    <>
      <section className="w-full h-full pb-40 flex flex-col items-center justify-center bg-[#bee0b1] px-6">
        <div className="relative w-full max-w-[1400px]">
     
  <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-medium mt-20 leading-tight"
          >
          Growth Manager
          </motion.h1>
  <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-xl md:text-2xl mb-20 text-black mx-auto"
          >
           “Mi enfoque no es solo ejecutar tareas, sino encargarme del crecimiento integral de la marca, desde la generación de contenido hasta la venta y expansión de la marca. Gestionando de manera estratégica las áreas de marketing, ventas, distribución y presencia digital, con el fin de generar tracción comercial, posicionamiento y escalabilidad desde el primer mes.”
          </motion.p>

          <div className="flex gap-4 h-[800px] relative z-10">
            {preColoredCards.map((card, i) => {
              const isActive = activeIndex === i;
              const Icon = card.icon;

              return (
                <motion.div
                  key={i}
                  layout
                  onClick={() => setActiveIndex(i)}
                  className="relative rounded-2xl bg-white overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-sm hover:shadow-md"
                  animate={{
                    flex: isActive ? 3 : 1,
                    filter:
                      activeIndex !== i
                        ? "blur(1.5px) brightness(0.92)"
                        : "blur(0px) brightness(1)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
          
                  <div className="flex justify-center items-start h-[60%]">
                    <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                          >
                            <Lottie
                              animationData={card.blueAnim}
                              loop
                              autoplay
                              className="w-full h-full"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* 🧠 TEXTO */}
                  {/* 🧠 TEXTO */}
                  <div className="flex flex-col items-center text-center gap-12">
                    {!isActive && <Icon size={34} className="text-gray-400" />}

                    <motion.h3
                      layout
                      animate={{
                        fontSize: isActive ? "1.5rem" : "1.1rem",
                        color: isActive ? "#F28C52" : "#111827",
                      }}
                      transition={{ duration: 0.4 }}
                      className="font-normal text-2xl"
                    >
                      {card.title}
                    </motion.h3>

                    {/* 🔥 DESCRIPTION */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl text-gray-500 max-w-[220px]"
                        >
                          {card.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* ✅ BULLETPOINTS */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.ul
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col gap-2 mt-2 text-left"
                        >
                          {card.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xl text-gray-700"
                            >
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F4C542]" />
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* 💼 ROLES */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-wrap justify-center gap-2 mb-4"
                        >
                          {card.roles.map((role, idx) => (
                            <span
                              key={idx}
                              className="text-xl px-2 py-1 rounded-full bg-[#F28C52]/10 text-[#E76F51] border border-[#E76F51]/30"
                            >
                              {role}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 🎯 DOT */}
                  <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E76F51]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTÓN ALINEADO CORRECTAMENTE */}
        <div className="w-full max-w-[1400px] mx-auto mt-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-xl md:text-2xl mb-20 text-black mx-auto"
          >
          Asumo un rol activo en el desarrollo del negocio, actuando como responsable del crecimiento.
          </motion.p>
        </div>
      </section>
    </>
  );
}
