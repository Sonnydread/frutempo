import {
  CheckCircle,
  TrendingUp,
  Megaphone,
  Package,
  Users,
  Truck,
  BarChart3,
  Store,
  MessageCircle,
  Globe,
} from "lucide-react";

export const roadmap = Array.from({ length: 12 }, (_, i) => {
  const month = Math.floor(i / 4) + 1;
  const week = (i % 4) + 1;

  // 🎯 IMAGEN POR MES
  let image = "/img/fru-verde.png";

  if (month === 2) image = "/img/fru-mango.png";
  if (month === 3) image = "/img/fru-pita.png";

  return {
    id: i + 1,
    title: `Mes ${month} - Semana ${week}`,
    subtitle: "Plan estratégico de crecimiento",
    image,

    // 🔥 Cada card tiene contenido distinto
    tasks: [
      {
        icon: Megaphone,
        text: `Campaña de marketing enfocada en conversión (Semana ${week})`,
      },
      {
        icon: MessageCircle,
        text: "Optimización de atención por WhatsApp",
      },
      {
        icon: Users,
        text: "Gestión y crecimiento de comunidad",
      },
      {
        icon: TrendingUp,
        text: "Análisis de métricas y rendimiento",
      },
      {
        icon: BarChart3,
        text: "Ajustes estratégicos basados en data",
      },
      {
        icon: Package,
        text: "Optimización de empaques y presentación",
      },
      {
        icon: Truck,
        text: "Mejora de logística y tiempos de entrega",
      },
      {
        icon: Store,
        text: "Prospección de nuevos puntos de venta",
      },
      {
        icon: Globe,
        text: "Optimización de presencia digital",
      },
      {
        icon: CheckCircle,
        text: "Ejecución y seguimiento de objetivos semanales",
      },
    ],
  };
});