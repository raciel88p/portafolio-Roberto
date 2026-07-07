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
    experience?: string[];
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
      results: ["Aumento del 150% en tráfico orgánico global", "Posicionamiento en top 3 para términos clave de industria", "Mejora del 80% en la conversión de leads locales"],
      experience: [
        "Lideré el diseño y ejecución de una estrategia de crecimiento orgánico enfocada en ingresos, posicionando el SEO como el principal canal de adquisición durante un período de 6 meses.",
        "Incrementé los usuarios activos en un 136% y los nuevos usuarios en un 139%, impulsando un crecimiento sostenido a través de la adquisición basada en búsquedas.",
        "Aumenté el tráfico de búsqueda orgánica en un 253.9%, expandiendo significativamente la visibilidad y la demanda entrante.",
        "Generé un pipeline calificado a través de SEO (6 leads de alta intención), validando el canal orgánico como una fuente generadora de ingresos.",
        "Implementé la optimización de búsqueda para LLM (AEO) en plataformas que incluyen ChatGPT, Perplexity AI y Google AI Overviews, mejorando la visibilidad de la marca en entornos de búsqueda impulsados por IA.",
        "Realicé análisis de CRO y UX, identificando cuellos de botella en la conversión e implementando mejoras para aumentar la eficiencia en la generación de leads.",
        "Llevé a cabo análisis de cuota de mercado y de búsqueda competitiva, identificando brechas de crecimiento y oportunidades estratégicas de palabras clave.",
        "Construí un marco de adquisición orgánica escalable, integrando SEO técnico, estrategia de contenido y optimización de búsqueda con IA.",
        "Posicioné el SEO como una palanca de crecimiento central alineada con los resultados de negocio, no solo con métricas de tráfico."
      ]
    }
  },
  {
    slug: "mj-estetica",
    title: "Mj estética Wellness Center",
    description: "Caso de Ai growth Engineer. Implementación de sistemas de IA para automatizar la adquisición de pacientes y escalar el negocio mediante eficiencia operativa.",
    tag: "AI Growth",
    url: "https://www.mjfisioesteticayspa.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.mjfisioesteticayspa.com%2F?w=600&h=400",
    fullContent: {
      challenge: "El centro dependía de procesos manuales para la gestión de citas y seguimiento de pacientes, lo que generaba una alta tasa de abandono y limitaba el escalado de las ventas.",
      strategy: "Desarrollamos agentes de IA para la pre-calificación de leads en tiempo real y automatizamos el embudo de ventas integrando CRM y WhatsApp para un seguimiento 24/7.",
      results: [
        "Aumento del 45% en la conversión de leads a citas efectivas",
        "Reducción del 60% en el costo operativo de gestión de agenda",
        "Retorno de inversión (ROI) del 200% en los primeros 90 días",
        "Escalabilidad del negocio sin aumentar el personal administrativo"
      ]
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
      challenge: "Empresa a punto de quebrar, sin sistemas de adquisición de nuevos clientes. El reto fue la implementación de canales para captar clientes por medio de las búsquedas.",
      strategy: "Desde identificar el buyer persona, crear landing page para probar la hipótesis en el mercado y lanzar anuncios para captar clientes",
      results: ["Reducción del 50% en el CPA", "Mejora del 120% en el ROAS", "Dashboard de datos en tiempo real para toma de decisiones"],
      experience: [
        "Identificación de puntos de dolor de la marca, definición del buyer persona y selección de canales estratégicos.",
        "Investigación y desarrollo de la plataforma utilizando Astro, IA y despliegue en Vercel.",
        "Integración con Web Analytics, Google Tag Manager y Google Ads para el testeo de hipótesis orientadas a la generación de SQLs y MQLs.",
        "Incremento del 146.2% en usuarios de la landing page, con un 43.5% de tráfico orgánico.",
        "Optimización continua de campañas de Ads para el escalado del negocio."
      ]
    }
  },
  {
    slug: "ferreteria-epa",
    title: "Ferretería EPA",
    description: "Consultoría estratégica de SEO técnico para el líder del retail en construcción. Optimizando la ruta de compra orgánica para miles de productos.",
    tag: "Consultoría SEO",
    url: "https://cr.epaenlinea.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcr.epaenlinea.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Una arquitectura web masiva con miles de SKUs que presentaba problemas críticos de indexación, impidiendo que los productos estrella aparecieran en las búsquedas de compra.",
      strategy: "Reestructuración profunda de la taxonomía web, implementación de esquemas de producto avanzados y optimización de la velocidad de carga para maximizar el rastreo de Google.",
      results: [
        "Indexación completa de las categorías con mayor margen de beneficio",
        "Incremento del 45% en el tráfico orgánico transaccional mensual",
        "Mejora del 30% en la visibilidad de marca frente a competidores directos",
        "Consolidación como el e-commerce de construcción referente en la región"
      ]
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
    description: "Estrategia de SEO B2B para captar clientes tecnológicos internacionales y posicionar servicios de desarrollo de software premium.",
    tag: "Consultoría SEO",
    url: "https://sapiensdev.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsapiensdev.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Ausencia de visibilidad orgánica en el mercado estadounidense para servicios de desarrollo nearshore de alto valor.",
      strategy: "Diseño de una arquitectura de contenidos enfocada en la resolución de problemas técnicos complejos y optimización de páginas de servicios para palabras clave de alta intención.",
      results: [
        "Captación de leads cualificados de nivel Enterprise en EE.UU.",
        "Posicionamiento en el Top 3 para términos clave de 'desarrollo nearshore'",
        "Incremento del 120% en las solicitudes de presupuesto orgánicas",
        "Autoridad de marca consolidada en el ecosistema tech internacional"
      ]
    }
  },
  {
    slug: "bluewater-properties",
    title: "BluewaterProperties of Costa Rica",
    description: "Impacto masivo en el mercado inmobiliario de lujo. Conectando propiedades exclusivas con inversores internacionales mediante SEO de alta gama.",
    tag: "SEO Specialist",
    url: "https://bluewaterpropertiesofcostarica.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbluewaterpropertiesofcostarica.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Un sitio web lento y sin visibilidad en Google para términos de inversión en propiedades de lujo, perdiendo oportunidades frente a grandes agregadores internacionales.",
      strategy: "Estrategia de SEO hiper-local para destinos específicos y optimización de 'Core Web Vitals' para una experiencia de usuario impecable.",
      results: [
        "Dominio absoluto del Top 3 en Google para búsquedas de lujo en Guanacaste",
        "Incremento del 200% en el volumen de leads calificados internacionales",
        "Mejora del 400% en la velocidad de carga, reduciendo la tasa de rebote",
        "Cierre de ventas directas atribuidas 100% al canal orgánico"
      ]
    }
  },
  {
    slug: "intersources",
    title: "InterSources",
    description: "Consultoría de visibilidad digital y SEO B2B para líderes en Ciberseguridad. Impulsando la autoridad técnica y la generación de pipeline corporativo.",
    tag: "Consultor SEO and Team lead",
    url: "https://www.intersourcesinc.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.intersourcesinc.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Comunicar servicios técnicos complejos de ciberseguridad (MSSP) a tomadores de decisiones C-level en un mercado saturado de ruido técnico.",
      strategy: "Desarrollo de una estrategia de 'Thought Leadership' mediante contenido técnico optimizado y activos descargables de alta autoridad que captan leads calificados.",
      results: [
        "Aumento del 180% en el tráfico orgánico de perfiles de decisión (IT Managers, CISOs)",
        "Posicionamiento como autoridad referente en 'Managed Security Services'",
        "Incremento del 70% en la tasa de conversión de leads B2B corporativos",
        "Pipeline de ventas fortalecido mediante activos digitales optimizados"
      ]
    }
  },
  {
    slug: "basha-bracelets",
    title: "Basha Bracelets",
    description: "Escalado de e-commerce espiritual mediante SEO semántico y visibilidad multicanal. Transformando la pasión en un negocio digital rentable.",
    tag: "SEO & E-commerce",
    url: "https://bashabracelet.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbashabracelet.com%2F?w=600&h=400",
    fullContent: {
      challenge: "Una marca con un producto excepcional pero con baja visibilidad orgánica, dependiendo exclusivamente de redes sociales para generar ventas.",
      strategy: "Implementación de SEO semántico para captar búsquedas por beneficios espirituales y una estrategia de SEO en YouTube para educar al usuario sobre los productos.",
      results: [
        "Crecimiento del 300% en ventas provenientes de búsqueda orgánica",
        "Reducción del 50% en la dependencia de pauta publicitaria en redes sociales",
        "Mejora del 85% en el CTR (Click-Through Rate) de resultados transaccionales",
        "Creación de un activo digital propio que genera ventas recurrentes 24/7"
      ]
    }
  }
];
