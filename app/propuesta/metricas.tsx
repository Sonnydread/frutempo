"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Target,
  Brain,
  ShoppingBag,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function Metrics() {
  return (
    <section className="w-full pt-28 pb-10 md:py-32 px-6 md:px-16 bg-linear-to-b from-[#eea735d7] to-[#0475cb]  text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:gap-24 gap-18">

        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-5xl leading-tight tracking-tight">
              <span className="text-[#ff6f00] md:text-8xl text-6xl tracking-wider font-medium">Frutempo <br /></span>
              snacks saludables, naturales y sin culpa
            </h1>

            <p className="text-white text-xl md:text-2xl mt-8 max-w-5xl mx-auto">
              No se trata de vender fruta deshidratada.<br />
              Se trata de vender una <span className="text-orange-700">solución diaria</span> que las personas realmente quieren consumir.
            </p>
          </motion.div>
        </div>

        {/* ESTRATEGIA CLAVE */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Izquierda - Estrategia */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#F4C542]/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-orange-700" />
              </div>
              <h2 className="md:text-4xl text-3xl font-normal">Estrategia Clave</h2>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-3xl p-10">
              <div className="space-y-10">
                {/* No vendas */}
                <div>
                  <p className="text-orange-400 font-medium text-base uppercase tracking-widest mb-3">No vendas</p>
                  <p className="text-3xl font-medium">Fruta deshidratada</p>
                </div>

                {/* Vende */}
                <div>
                <p className="text-orange-400 font-medium text-base uppercase tracking-widest mb-3">Vende esto:</p>
                  <ul className="space-y-4">
                    {[
                      "Snack saludable y delicioso",
                      "Solución rápida para antojos",
                      "Alternativa sin culpa ni remordimientos",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ejemplo práctico */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white text-lg mb-3">Ejemplo de posicionamiento:</p>
                  <div className="bg-black/40 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400">❌</span>
                      <span className="text-white/70">Mango deshidratado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✅</span>
                      <span className="text-white">Snack dulce natural para calmar antojos sin culpa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Derecha - Posicionamiento */}
          <div className="md:col-span-4">
            <div className="bg-gradient-to-br from-[#F28C52] via-[#E76F51] to-[#F4C542] rounded-3xl p-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-semibold text-white">Posicionamiento</h3>
              </div>

              <ul className="space-y-6 mt-auto">
                {[
                  "Snack saludable premium",
                  "Alternativa práctica y deliciosa",
                  "Opción sin culpa para todos los días",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-lg">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* EJECUCIÓN */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <ShoppingBag className="w-8 h-8 text-orange-700" />
            <h2 className="md:text-4xl text-3xl font-normal">Ejecución Inmediata</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Validar el producto con clientes reales",
              "Vender todos los días (sin excusas)",
              "Generar contenido diario consistente",
              "Conseguir puntos de venta físicos",
              "Crear prueba social fuerte",
              "Optimizar canales de venta",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-black/40 hover:bg-white/10 border border-white/10 hover:border-[#F4C542]/30 rounded-2xl p-7 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#F4C542]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#F4C542] font-semibold text-lg">0{i + 1}</span>
                  </div>
                  <p className="text-white text-xl group-hover:text-white transition-colors">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MÉTRICAS Y KPIs */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Métricas Clave */}
          <div className="bg-black/40 border border-white/10 rounded-3xl py-10 px-6">
            <div className="flex items-center gap-4 mb-8">
              <BarChart3 className="w-9 h-9 text-[#F4C542]" />
              <h3 className="text-3xl font-normal">Métricas Clave</h3>
            </div>
            <ul className="space-y-5 mt-14">
              {[
                "Producto más vendido y su margen",
                "Ticket promedio por compra",
                "Tasa de recompra",
                "Canal de venta más rentable",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-xl gap-4 text-white">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* KPIs de Éxito */}
          <div className="bg-black/40 border border-white/10 rounded-3xl py-10 px-6">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="w-9 h-9 text-[#F4C542]" />
              <h3 className="text-3xl font-normal">KPIs de Éxito</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Ventas semanales y mensuales",
                "Pedidos diarios promedio / Porcentaje de recompra",
                "Crecimiento de comunidad",
                "Puntos de venta activos / Tasa de conversión",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-lg gap-4 text-white">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RESULTADOS ESPERADOS */}
        <div className="bg-black/40 rounded-3xl p-12">
          <h3 className="md:text-4xl text-2xl font-normal mb-10 text-center">Resultado Esperado</h3>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Aumento sostenido en ventas mensuales",
              "Posicionamiento claro en snacks saludables",
              "Expansión exitosa a puntos físicos",
              "Comunidad digital activa y leal",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="md:text-2xl text-xl text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISIÓN */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <Brain className="w-10 h-10 text-[#F4C542]" />
              <span className="text-2xl pt-2 font-medium">Visión a Largo Plazo</span>
            </div>
          </div>

          <p className="text-xl text-white leading-relaxed">
            Construir una marca sólida con presencia digital fuerte, distribución física estratégica, 
            una comunidad activa y un sistema listo para escalar rápidamente.
          </p>
        </div>

      </div>
    </section>
  );
}