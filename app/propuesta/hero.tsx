"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  "Tienes un buen producto… pero no se vende",
  "Publicas en redes… pero nadie compra",
  "No logras entrar a tiendas o minimarkets",
  "No tienes una estrategia clara para crecer",
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col py-40 justify-center px-4 md:px-6 lg:px-10 overflow-hidden text-white relative">
      
      {/* 🌅 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F28C52] via-[#E76F51] to-[#b88b03]" />

      {/* 🔥 HERO */}
      <div className="relative w-full max-w-[1400px] mx-auto grid pt-40 lg:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 TEXT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-medium leading-tight"
          >
            Propuesta de Gestión <br />
            <span className="text-[#F4C542]">y Crecimiento de Marca</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-xl text-lg md:text-xl font-medium text-white/90 w-fit mx-auto lg:mx-0"
          >
            Sistema de Crecimiento sin equipo, sin complicaciones 🚀
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl pt-10 text-white/90 max-w-2xl mx-auto lg:mx-0"
          >
            Me encargo del crecimiento integral de la marca, gestionando de
            manera estratégica las áreas de marketing, ventas, distribución y
            presencia digital, con el fin de generar tracción comercial,
            posicionamiento y escalabilidad desde el primer mes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
          >
            <button className="bg-[#F4C542] hover:bg-[#ffd95e] text-black font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.03]">
              Empezar ahora
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 rounded-xl text-white transition-all duration-300">
              Ver cómo funciona
            </button>
          </motion.div>
        </div>

        {/* 🎯 VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-[#F4C542]/30 blur-[100px] rounded-full" />

          {/* Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative w-[300px] md:w-full h-[350px] md:h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center"
          >
            <Image
              src="/img/logo.png"
              alt="Producto"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 💔 PROBLEMS SECTION */}
      <div className="relative w-full max-w-[1400px] mx-auto mt-80">
        
        <div className="max-w-8xl mx-auto text-center flex flex-col gap-12">
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium leading-tight"
          >
            Lo que normalmente pasa…
          </motion.h2>

         

          {/* Problems */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {problems.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl gap-5 flex  p-6 px-8 text-left hover:border-red-400/40 transition-all duration-300"
              >
                <p className="text-white/90 text-2xl">
                  ❌ 
                </p>
                <p className="text-2xl">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Final punch */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="my-10 mb-40"
          >
            <p className="text-xl md:text-5xl">
              No es tu producto…es la falta de un sistema para venderlo.
            </p>
          </motion.div>

        </div>
      </div>
 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[90px] md:h-[110px] lg:h-[120px]"
          preserveAspectRatio="none"
          fill="#bee0b1"   // ← Color del siguiente fondo (cámbialo si tu siguiente sección es diferente)
        >
          <polygon points="0,120 0,65 360,92 720,48 1080,88 1440,60 1440,120" />
        </svg>
      </div>
    </section>
  );
}