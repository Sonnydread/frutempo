"use client";

import { motion, PanInfo, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { growthPlan } from "../data/growthPlan";
import { roadmap } from "../data/roadmap";


const services = [
  {
    title: "Primer Mes",
    items: ["Redes sociales", "Contenido (reels/posts)"],
  },
  {
    title: "Segundo Mes",
    items: ["WhatsApp", "Cierre de clientes"],
  },
  {
    title: "Tercer Mes",
    items: ["Minimarkets", "Tiendas"],
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(2);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects = growthPlan;

  useEffect(() => {
    if (isDragging) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isDragging, projects.length]);

  // 🧠 Posición relativa
  const getRelativePosition = (index: number) => {
    let diff = index - current;

    if (diff > projects.length / 2) diff -= projects.length;
    if (diff < -projects.length / 2) diff += projects.length;

    return diff;
  };

  // 🖐️ Drag handler
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false);

    const threshold = 80;

    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-30 bg-[#eea735d7] relative overflow-hidden">
    

      <div className="max-w-[1800px] mx-auto px-6 relative w-full">
        {/* 🧠 Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight">
            Plan de Trabajo - 3 Meses
          </h2>
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-xl md:text-3xl tracking-widest text-white">
            No es solo marketing…es todo el sistema funcionando para vender.
          </p>
        </motion.div>
        </div>

        {/* 🎯 DRAG CONTAINER */}
        <motion.div
          className="relative w-full h-[900px] flex items-center justify-center perspective-[2000px]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const position = getRelativePosition(index);
              if (Math.abs(position) > 2) return null;

              const isCenter = position === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    x: direction > 0 ? 800 : -800,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    x: position * 420,
                    rotateY: position * -32,
                    scale: isCenter ? 1 : 0.82,
                    translateZ: isCenter ? 180 : -60,
                    opacity: 1,
                    zIndex: 30 - Math.abs(position) * 5,
                  }}
                  exit={{
                    x: direction > 0 ? -800 : 800,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute w-[600px] md:w-[560px] h-[740px] rounded-3xl overflow-hidden border border-white/10 bg-white cursor-grab active:cursor-grabbing"
                  style={{
                    transformStyle: "preserve-3d",
                    filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6))",
                  }}
                >
                  {/* 🖼 IMAGE */}
                  <div className="relative w-full h-[46%]">
                    <Image
                      src={
                        project.id <= 4
                          ? "/img/fru-verde.png"
                          : project.id <= 8
                            ? "/img/fru-mango.png"
                            : "/img/fru-pita.png"
                      }
                      alt={project.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* 📊 CONTENT */}
                  <div className="p-6 flex flex-col gap-4 h-[65%] overflow-hidden">
                    {/* 🏷 LABEL */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#F28C52]/10 text-[#F28C52] font-medium">
                        {project.label}
                      </span>
                    </div>

                    {/* ✅ BULLETS */}
                    <div className="flex flex-col gap-2 overflow-y-auto pr-2">
                      {project.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-[#F4C542] mt-1 shrink-0"
                          />
                          <p className="text-sm text-gray-700 leading-snug">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 🔘 DOTS */}
        <div className="flex justify-center gap-3 mt-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-[#f49200] shadow-[0_0_14px_#F4C542]"
                  : "w-3 bg-white/60 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

 
<div className="mt-20 flex flex-col w-full items-center justify-center">
  <p className="text-8xl">Objetivos de cada mes</p>
 <div className="grid md:grid-cols-3 w-full max-w-[1400px] pt-10 mx-auto gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white/20 border border-white/80 backdrop-blur-xl rounded-2xl p-6 hover:border-gray-700 hover:bg-white/10 transition-all duration-300"
              >
                {/* 🔥 Title */}
                <h3 className="text-3xl font-normal mb-4 group-hover:text-orange-700 transition">
                  {service.title}
                </h3>
  
                {/* 📋 Items */}
                <ul className="flex flex-col gap-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-white/80 text-2xl flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
</div>

      </div>
    </section>
  );
}
