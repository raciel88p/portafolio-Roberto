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
    quote?: string;
    story?: string;
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
    title: "MJ Estética y SPA",
    description: "Cómo convertimos una crisis en un laboratorio de crecimiento impulsado por IA. De una inversión de $1,000 a un equipo de 8 personas.",
    tag: "AI Growth & pSEO",
    url: "https://www.mjfisioesteticayspa.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.mjfisioesteticayspa.com%2F?w=600&h=400",
    fullContent: {
      company: "MJ Estética y SPA nació en 2023 tras un momento de incertidumbre familiar. Fundada con recursos mínimos, se convirtió en nuestra demostración de que una pyme puede competir al más alto nivel utilizando tecnología, datos e inteligencia artificial.",
      challenge: "El reto inicial fue construir un negocio rentable desde cero con una inversión de apenas USD $1,000, compitiendo en un mercado local saturado y dependiendo inicialmente de procesos manuales y presupuestos publicitarios mínimos.",
      solution: "Construimos un sistema de adquisición y gestión automatizado que evolucionó desde un catálogo digital sencillo hasta una plataforma avanzada basada en SEO Programático (pSEO) e Inteligencia Artificial.",
      steps: [
        {
          title: "Medición y Datos desde el Día 1",
          content: "Aunque la tecnología inicial era simple (Google Sites), implementamos una pila de medición completa: Google Tag Manager, Analytics y Microsoft Clarity con IA para analizar el comportamiento del usuario y detectar oportunidades de mejora."
        },
        {
          title: "Escalado mediante SEO Programático (pSEO)",
          content: "Migramos a una arquitectura moderna con Astro para generar automáticamente más de 100 páginas de servicios altamente segmentadas, logrando una cobertura de mercado masiva con un esfuerzo técnico optimizado."
        },
        {
          title: "Automatización de Inbound Marketing",
          content: "Implementamos flujos asistidos por IA y ManyChat para la pre-calificación de leads y atención 24/7, integrando lead magnets generados con IA para nutrir a los prospectos sin intervención manual."
        },
        {
          title: "Optimización para la Era de la IA (GEO)",
          content: "Más allá del SEO tradicional, optimizamos el contenido para que asistentes como ChatGPT y Perplexity recomienden la clínica como la primera referencia en su categoría."
        }
      ],
      strategy: "Utilizamos nuestro propio negocio como un laboratorio de innovación, probando cada estrategia de IA y automatización antes de implementarlas en proyectos externos, enfocándonos en maximizar utilidades mediante la eficiencia operativa.",
      metrics: [
        { label: "Ventas (Año 1)", value: "$75k" },
        { label: "Tráfico Orgánico", value: "+218.5%" },
        { label: "Tráfico Referido", value: "+243%" },
        { label: "Incremento Ventas", value: "+86%" }
      ],
      results: [
        "Transformación de un proyecto de autoempleo en una empresa con un equipo de 8 personas.",
        "Aumento del 86% en las ventas tras la migración a la plataforma optimizada con Astro e IA.",
        "Aparición como referencia recomendada en asistentes de IA (ChatGPT, etc.) mediante técnicas de GEO.",
        "Demostración de que una pyme puede operar con tecnología de nivel empresarial con una inversión mínima."
      ],
      quote: "La inteligencia artificial no reemplaza la visión de un emprendedor; amplifica su capacidad para construir negocios más eficientes, escalables y sostenibles.",
      story: "MJ Estética y SPA nació cuando mi esposa y yo perdimos nuestros empleos en la misma semana. Con 37 años y una familia que mantener, apostamos por nosotros mismos. Lo que comenzó como una decisión en medio de la incertidumbre terminó siendo nuestro laboratorio de innovación más exitoso."
    }
  },
  {
    slug: "ingeniacr",
    title: "IngeniaCR",
    description: "Caso de Estudio de, SEO, SEM, Web Analytics y Astro. Optimización de campañas pagas y modelado de datos para toma de decisiones estratégicas.",
    tag: "SEM & Analytics",
    url: "https://ingeniacr.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fingeniacr.com%2F?w=600&h=400",
    fullContent: {
      company: "IngeniaCR suple de uniformes profesionales a pymes y empresas medianas para brindar más confianza a los clientes y aumentar la presencia de marca",
      challenge: "La empresa se encontraba al borde del cierre técnico, operando sin un sistema de generación de demanda y dependiendo exclusivamente de recomendaciones esporádicas. El reto era construir, desde cero, una infraestructura digital capaz de captar clientes calificados de forma recurrente y rentable.",
      solution: "Implementamos un ecosistema de adquisición híbrido basado en una landing page de alto rendimiento desarrollada con Astro, respaldada por una estrategia SEO y SEM (Google Ads) y medición avanzada para implementación rápida de CRO para aumentar las conversion",
      steps: [
        {
          title: "Análisis de Supervivencia y Perfilado",
          content: "Identificamos los puntos de dolor críticos del negocio y definimos un Buyer Persona de alta urgencia para asegurar retornos rápidos sobre la inversión inicial."
        },
        {
          title: "Desarrollo de Infraestructura de Conversión",
          content: "Diseñamos y desplegamos una plataforma utilizando Astro e IA, enfocada 100% en la conversión de usuarios y optimizada para tiempos de carga mínimos, alojada en Vercel."
        },
        {
          title: "Ecosistema de Medición y SEM",
          content: "Configuramos una pila analítica completa (GTM, GA4, SEO, GEO, Google Search Console) integrada con Google Ads para validar hipótesis de mercado y rastrear la generación de SQLs en tiempo real con Microsoft Clarity."
        },
        {
          title: "Optimización y Escalado",
          content: "Ajustamos continuamente las campañas de búsqueda pagas basándonos en los datos de comportamiento, mientras el SEO técnico de la plataforma empezaba a ganar tracción orgánica."
        }
      ],
      strategy: "Combinamos la agilidad del tráfico pago con la eficiencia del desarrollo web moderno para rescatar un negocio en crisis, transformando su presencia digital en una máquina de generación de leads basada en datos.",
      metrics: [
        { label: "Nuevos Usuarios", value: "1.3K (+124.7%)" },
        { label: "Crecimiento Orgánico", value: "+188.2%" },
        { label: "Paid Search", value: "+1,000%" },
        { label: "Retención Usuarios", value: "+138.3%" }
      ],
      results: [
        "Crecimiento exponencial en la adquisición de 1,300 nuevos usuarios en 28 días.",
        "Incremento masivo del 188.2% en tráfico orgánico mediante estrategias de SEO técnico.",
        "Escalado vertical de campañas pagas con un aumento del 1,000% en Paid Search.",
        "Diversificación exitosa de canales incluyendo YouTube (+124.8%) y tráfico desde asistentes de IA (ChatGPT).",
        "Potencial de ventas de $1,600/mes generado a través de canales digitales calificados."
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
