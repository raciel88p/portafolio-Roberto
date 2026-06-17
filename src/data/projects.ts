export interface Project {
  slug: string;
  title: string;
  description: string;
  tag: string;
  url: string;
  image: string;
  fullContent: {
    challenge: string;
    strategy: string;
    results: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "golabstech",
    title: "GolabsTech",
    description: "Caso de Estudio SEO y GEO Consultant. Estrategia de posicionamiento global y optimización de visibilidad local.",
    tag: "SEO & GEO",
    url: "https://golabstech.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgolabstech.com%2F?w=600&h=400",
    fullContent: {
      challenge: "GolabsTech necesitaba una presencia global unificada mientras mantenía relevancia en mercados locales específicos.",
      strategy: "Implementamos una arquitectura multisitio con hreflang correctamente configurado y una estrategia de SEO local basada en entidades para cada sede.",
      results: ["Aumento del 150% en tráfico orgánico global", "Posicionamiento en top 3 para términos clave de industria", "Mejora del 80% en la conversión de leads locales"]
    }
  },
  {
    slug: "mj-estetica",
    title: "Mj estética Wellness Center",
    description: "Caso de Ai growth Engineer. Implementación de sistemas de IA para automatizar la adquisición de pacientes y escalar el centro.",
    tag: "AI Growth",
    url: "https://www.mjfisioesteticayspa.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.mjfisioesteticayspa.com%2F?w=600&h=400",
    fullContent: {
      challenge: "El centro dependía de procesos manuales para la gestión de citas y seguimiento de pacientes, limitando su capacidad de crecimiento.",
      strategy: "Desarrollamos agentes de IA para la pre-calificación de leads y automatizamos el embudo de ventas integrando CRM y WhatsApp.",
      results: ["Reducción del 40% en tiempo administrativo", "Incremento del 30% en la tasa de asistencia a citas", "Retorno de inversión (ROI) del 200% en el primer trimestre"]
    }
  },
  {
    slug: "ingeniacr",
    title: "IngeniaCr",
    description: "Caso de Estudio de SEM y Web Analytics. Optimización de campañas pagas y modelado de datos para toma de decisiones estratégicas.",
    tag: "SEM & Analytics",
    url: "https://ingeniacr.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fingeniacr.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Campañas de Google Ads con alto costo por adquisición y falta de visibilidad sobre el retorno real de la inversión.",
      strategy: "Auditamos el tracking de conversiones, implementamos GA4 con eventos personalizados y optimizamos las estructuras de campaña basadas en valor.",
      results: ["Reducción del 50% en el CPA", "Mejora del 120% en el ROAS", "Dashboard de datos en tiempo real para toma de decisiones"]
    }
  },
  {
    slug: "ferreteria-epa",
    title: "Ferretería EPA",
    description: "Consultoría estratégica para el gigante del retail en construcción. Optimización de arquitectura web y SEO técnico.",
    tag: "Consultoría SEO",
    url: "https://cr.epaenlinea.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcr.epaenlinea.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Arquitectura web compleja con miles de productos dificultando el rastreo e indexación eficiente por parte de Google.",
      strategy: "Optimización de la estructura de categorías, implementación de datos estructurados para e-commerce y mejora del Core Web Vitals.",
      results: ["Indexación del 100% del catálogo crítico", "Crecimiento del 45% en visibilidad orgánica para categorías principales", "Aumento significativo en las transacciones orgánicas"]
    }
  },
  {
    slug: "ins-seguros",
    title: "Instituto Nacional de Seguros",
    description: "Estrategia integral de visibilidad orgánica para la principal aseguradora de la región.",
    tag: "Consultor SEO",
    url: "https://www.segurosdelins.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.segurosdelins.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Necesidad de dominar las búsquedas relacionadas con seguros en un mercado altamente competitivo.",
      strategy: "Estrategia de contenidos basada en el Customer Journey y optimización de la autoridad de dominio mediante PR digital.",
      results: ["Liderazgo en búsquedas informativas de seguros", "Dominio del Share of Voice frente a competidores directos", "Reducción de la dependencia de canales de pago"]
    }
  },
  {
    slug: "sapiens-development",
    title: "Sapiens Development",
    description: "Consultoría SEO estratégica para Sapiens Development, impulsando su crecimiento tecnológico y visibilidad en el sector de desarrollo.",
    tag: "Consultoría SEO",
    url: "https://sapiensdev.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsapiensdev.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Baja visibilidad para servicios especializados de desarrollo de software en mercados internacionales.",
      strategy: "Investigación de palabras clave de intención comercial y creación de pilares de contenido técnico.",
      results: ["Posicionamiento en primera página para servicios clave", "Generación de leads calificados de nivel enterprise", "Aumento de la autoridad de marca en el sector dev"]
    }
  },
  {
    slug: "bluewater-properties",
    title: "BluewaterProperties of Costa Rica",
    description: "Estrategia de SEO para el sector inmobiliario de lujo, optimizando la visibilidad de propiedades exclusivas en el mercado internacional.",
    tag: "SEO Specialist",
    url: "https://bluewaterpropertiesofcostarica.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbluewaterpropertiesofcostarica.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Captar la atención de inversores internacionales en un nicho de ultra-lujo saturado.",
      strategy: "SEO basado en locaciones específicas de alto valor y optimización de contenido visual para velocidad y SEO.",
      results: ["Top 3 para búsquedas de Real Estate de lujo en Guanacaste", "Incremento del 200% en consultas de clientes internacionales", "Mejora drástica en el tiempo de carga del sitio"]
    }
  },
  {
    slug: "intersources",
    title: "InterSources",
    description: "Consultoría de visibilidad digital y SEO para servicios de Ciberseguridad y MSSP, impulsando su autoridad en el sector tech.",
    tag: "Consultor SEO",
    url: "https://www.intersourcesinc.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.intersourcesinc.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Comunicar servicios técnicos complejos de ciberseguridad a tomadores de decisiones C-level.",
      strategy: "Desarrollo de Whitepapers optimizados para SEO y estrategia de Thought Leadership en LinkedIn integrada con SEO.",
      results: ["Posicionamiento como autoridad en Managed Security Services", "Aumento en la descarga de recursos técnicos por leads calificados", "Crecimiento constante del tráfico orgánico B2B"]
    }
  },
  {
    slug: "basha-bracelets",
    title: "Basha Bracelets",
    description: "Optimización de E-commerce y posicionamiento orgánico para marca de joyería artesanal con enfoque en bienestar y espiritualidad.",
    tag: "SEO & E-commerce",
    url: "https://bashabracelet.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbashabracelet.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Escalar las ventas online de un producto artesanal altamente emocional y visual.",
      strategy: "Optimización de fichas de producto para SEO semántico y estrategia de SEO en YouTube para mostrar el valor del cristal.",
      results: ["Aumento del 300% en ventas orgánicas", "Comunidad activa referenciada desde búsquedas orgánicas", "Mejora del CTR en los resultados de búsqueda de shopping"]
    }
  }
];
