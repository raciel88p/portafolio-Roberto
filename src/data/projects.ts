export interface Project {
  slug: string;
  title: string;
  description: string;
  tag: string;
  url: string;
  image: string;
  fullContent: {
    company?: string;
    challenge: string;
    solution?: string;
    steps?: { title: string; content: string }[];
    strategy: string;
    results: string[];
    experience?: string[];
    metrics?: { label: string; value: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "golabstech",
    title: "GolabsTech",
    description: "Estrategia de posicionamiento global y adquisición orgánica de alto impacto. Cómo disparamos la visibilidad y captación de leads en mercados internacionales.",
    tag: "SEO & GEO",
    url: "https://golabstech.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgolabstech.com%2F?w=600&h=400",
    fullContent: {
      company: "GolabsTech es una empresa líder en soluciones de desarrollo e inteligencia artificial nearshore. Con sede en EE.UU. y centros de talento en Latinoamérica, ayudan a empresas tecnológicas a escalar sus equipos con ingenieros de alto nivel integrados en su misma zona horaria.",
      challenge: "El reto principal era unificar una presencia global digital que reflejara su expertise técnico, mientras competían en un mercado de servicios de software altamente saturado. Necesitaban pasar de ser un proveedor más a una autoridad referente en adquisición orgánica de talento y soluciones de IA.",
      solution: "Diseñamos un sistema de adquisición orgánica que combina SEO técnico avanzado, optimización para motores de respuesta de IA (AEO) y una arquitectura de contenidos diseñada para tomadores de decisiones C-level.",
      steps: [
        {
          title: "Blueprint Estratégico y Auditoría",
          content: "Realizamos un análisis profundo de la cuota de mercado y de búsqueda competitiva. Identificamos brechas críticas de crecimiento y oportunidades de palabras clave de alta intención que los competidores estaban ignorando."
        },
        {
          title: "Optimización de la Arquitectura Global",
          content: "Implementamos una estructura multisitio optimizada con configuraciones hreflang precisas. Esto permitió a GolabsTech mantener una autoridad de dominio global mientras servía contenido relevante y localizado a prospectos en diferentes regiones geográficas."
        },
        {
          title: "Adquisición impulsada por IA (AEO)",
          content: "Fuimos pioneros en la optimización de búsqueda para LLM. Estructuramos los activos digitales de la marca para asegurar recomendaciones positivas en plataformas como ChatGPT, Perplexity AI y Google AI Overviews."
        },
        {
          title: "Optimización de Conversión (CRO)",
          content: "Analizamos el comportamiento del usuario para identificar cuellos de botella. Rediseñamos los flujos de contacto y landing pages, convirtiendo el aumento de tráfico en un pipeline real de leads calificados."
        }
      ],
      strategy: "Posicionamos el SEO como una palanca de crecimiento central alineada directamente con los resultados de negocio, integrando visibilidad técnica con una estrategia de contenido que genera demanda entrante de nivel Enterprise.",
      metrics: [
        { label: "Tráfico Orgánico", value: "+253.9%" },
        { label: "Nuevos Usuarios", value: "+139%" },
        { label: "Usuarios Activos", value: "+136%" },
        { label: "Leads Calificados", value: "Enterprise" }
      ],
      results: [
        "Crecimiento explosivo del 253.9% en tráfico orgánico en solo 6 meses.",
        "Validación del canal orgánico como principal fuente generadora de ingresos y pipeline.",
        "Autoridad consolidada en búsquedas relacionadas con IA y Nearshore Development.",
        "Optimización total para la era de la búsqueda generativa (AEO)."
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
