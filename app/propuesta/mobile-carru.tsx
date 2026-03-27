"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

import setting from "@/lottie/setting.json";
import megaphoneAnim from "@/lottie/Megaphone.json";
import logistic from "@/lottie/logistic.json";
import market from "@/lottie/market.json";
import web from "@/lottie/web.json";

type LottieColor = [number, number, number];

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

const ORANGE: LottieColor = [0.95, 0.55, 0.25];

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
    animation: megaphoneAnim,
  },
  {
    title: "Logística y Distribución",
    description: "Cerrar ventas y coordinar entregas",
    items: [
      "Convertir interesados en clientes",
      "Atención por WhatsApp",
      "Gestión de pedidos",
      "Servicio de entrega / delivery"
    ],
    roles: ["Ejecutivo de Ventas"],
    animation: logistic,
  },
  {
     title: "Operaciones",
    description: "Colocar el producto en tiendas y/o establecimientos",
    items: ["Posicionar Frutempo en minimarkets", "Negociar consignaciones", "Conseguir Alianzas y puntos de venta"],
    roles: ["Business Development"],
    animation: setting,
  },
  {
    title: "Activaciones y Eventos",
    description: "Encargado de presencia en eventos",
    items: [
      "Posicionar Frutempo en ferias",
      "Activaciones de marca",
      "Degustaciones en eventos estratégicos",
      "Expansión comercial",
    ],
    roles: ["Brand Promoter", "Activador de Marca"],
    animation: market,
  },
  {
    title: "Desarrollo Web",
    description: "Encargado de presencia digital profesional",
    items: ["Creación de Landing Page", "Optimización de Presencia Digital", "Actualizaciones" ],
    roles: ["Web Developer"],
    animation: web,
  },
];

export default function MobileLottieCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const preColoredCards = useMemo(() => {
    return cards.map((card) => ({
      ...card,
      coloredAnim: recolorLottie(card.animation, ORANGE),
    }));
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + cards.length) % cards.length);
  };

  return (
    <div className="md:hidden w-full py-10 bg-[#e0d36d] overflow-hidden">
      
<motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl mb-4 font-medium mt-10 mx-6 leading-tight"
          >
          Growth Manager
          </motion.h1>
  <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-xl md:text-2xl mb-10 mx-6 text-black"
          >
           “Mi enfoque no es solo ejecutar tareas, sino encargarme del crecimiento integral de Frutempo, desde la generación de contenido hasta la venta y expansión de la marca. Gestionando de manera estratégica las áreas de marketing, ventas, distribución y presencia digital, con el fin de generar tracción comercial, posicionamiento y escalabilidad desde el primer mes.”
          </motion.p>
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: direction > 0 ? 120 : -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -120 : 120, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 60) paginate(-1);
              if (info.offset.x < -60) paginate(1);
            }}
            className="w-[90%] max-w-[380px]"
          >
            <div className="bg-white rounded-3xl p-6 min-h-[500px] border-2 border-orange-400 flex flex-col">
              
              {/* Lottie */}
              <div className="flex justify-center mb-8">
                <div className="w-[140px] h-[140px]">
                  <Lottie
                    animationData={preColoredCards[index].coloredAnim}
                    loop
                    autoplay
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-center text-[#F28C52] mb-2">
                {preColoredCards[index].title}
              </h3>

              {/* Desc */}
              <p className="text-center text-black mb-5 text-lg">
                {preColoredCards[index].description}
              </p>

              {/* Items */}
              <div className="flex-1">
                {preColoredCards[index].items.map((item, i) => (
                  <p key={i} className="text-black text-base mb-2">
                    • {item}
                  </p>
                ))}
              </div>

              {/* Roles */}
              <div className="flex flex-wrap justify-center gap-2 pt-5">
                {preColoredCards[index].roles.map((role, i) => (
                  <span
                    key={i}
                    className="text-llg px-4 py-1.5 bg-orange-300 rounded-xl"
                  >
                    {role}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2 h-2 rounded-full ${
              index === i ? "bg-orange-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
       <div className="w-full max-w-[1400px] mx-auto mt-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-xl md:text-2xl mb-20 text-black ml-4"
          >
          Asumo un rol activo en el desarrollo del negocio, actuando como responsable del crecimiento.
          </motion.p>
        </div>
    </div>
  );
}