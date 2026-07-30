export interface Project {
  slug: string;
  title: string;
  logo?: string;
  description: string;
  tag: string;
  url: string;
  image: string;
  fullContent: {
    company?: string;
    companyTitle?: string;
    companySub?: string;
    challenge: string;
    challengeTitle?: string;
    challengeSub?: string;
    solution?: string;
    solutionTitle?: string;
    solutionSub?: string;
    steps?: { title: string; content: string }[];
    strategy: string;
    strategyTitle?: string;
    results: string[];
    experience?: string[];
    experienceTitle?: string;
    metrics?: { label: string; value: string }[];
    quote?: string;
    story?: string;
    storyTitle?: string;
    storySub?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "golabstech",
    title: "GolabsTech",
    description: "Cómo una Empresa de Inteligencia Artificial Ahorró $2 Millones en Publicidad y Multiplicó su Crecimiento Orgánico con una Estrategia SEO",
    tag: "SEO & GEO",
    url: "https://golabstech.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fgolabstech.com%2F?w=600&h=400",
    fullContent: {
      company: "GolabTech es una empresa especializada en Inteligencia Artificial y desarrollo de software para empresas.",
      companyTitle: "La Empresa",
      companySub: "Especialistas en Inteligencia Artificial",
      challenge: "Como ocurre en muchas organizaciones tecnológicas, ya habían realizado algunos esfuerzos en SEO y GEO (Generative Engine Optimisation). Sin embargo, todas esas acciones se estaban ejecutando sin una estrategia clara, sin prioridades definidas y, sobre todo, sin una base técnica sólida que permitiera generar resultados reales.\n\nInvertir tiempo y recursos, pero el crecimiento era limitado.",
      challengeTitle: "El Problema",
      challengeSub: "Esfuerzos sin dirección ni base técnica sólida",
      solution: "Cuando fui contratado como Consultor SEO, el primer paso no fue crear contenido ni modificar la web.\n\nComencé con una auditoría completa del negocio.\n\nAnalicé el mercado, el comportamiento de búsqueda de sus clientes potenciales, la competencia, el rendimiento técnico del sitio y todo el embudo de conversión.\n\nEn menos de una semana quedó claro cuál era el verdadero problema.\n\nNo era la falta de contenido.\n\nNo era la autoridad del dominio.\n\nEra la ausencia de una estrategia integral que conectara el SEO con los objetivos comerciales de la empresa.",
      solutionTitle: "El Diagnóstico",
      solutionSub: "Auditoría completa de negocio y embudo",
      strategy: "Durante el primer mes implementamos un plan de crecimiento basado en datos.",
      experienceTitle: "Entre las principales acciones se incluyeron:",
      experience: [
        "Investigación profunda de palabras clave con intención comercial.",
        "Identificación de nuevas oportunidades de crecimiento orgánico.",
        "Optimización de la arquitectura del sitio y del enlazado interno.",
        "Mejora de Core Web Vitals para aumentar la velocidad y la experiencia del usuario.",
        "Optimización de la experiencia de navegación para incrementar las conversiones.",
        "Implementación de datos estructurados (Schema Markup) en el blog para mejorar la visibilidad en Google y potenciar el rendimiento del calendario editorial.",
        "Identificación y corrección de los principales obstáculos que afectan la conversión.",
        "Rediseño estratégico de páginas clave incorporando elementos de CRO (Conversion Rate Optimization).",
        "Definición de conversiones SQL y MQL alineadas con buyer personas cuyo valor promedio por cliente era de $10,000."
      ],
      metrics: [
        { label: "Tráfico Orgánico", value: "+269%" },
        { label: "Ahorro Publicidad", value: "$2M" },
        { label: "Nuevos Usuarios", value: "+31.2%" },
        { label: "Leads Orgánicos", value: "23" }
      ],
      results: [
        "Los cambios comenzaron a reflejarse rápidamente.",
        "En apenas un mes, GolabTech empezó a posicionarse para múltiples palabras clave estratégicas relacionadas con sus servicios de Inteligencia Artificial y desarrollo de software.",
        "Durante el primer año, el impacto fue aún mayor.",
        "269% de crecimiento del tráfico orgánico.",
        "27.9% más usuarios activos respecto al año anterior.",
        "31.2% de incremento en nuevos usuarios.",
        "35.4% de crecimiento en el engagement de la marca.",
        "23 nuevos leads cualificados generados desde el canal orgánico.",
        "Ahorro estimado de $2 millones en inversión publicitaria, gracias al volumen de tráfico orgánico conseguido y a la reducción de la dependencia de campañas de pago."
      ],
      story: "El SEO no consiste únicamente en posicionar palabras clave.\n\nCuando se integra con la estrategia de negocio, la experiencia del usuario, la optimización de conversiones y una arquitectura técnica sólida, se convierte en uno de los activos más rentables para cualquier empresa.\n\nEso fue exactamente lo que sucedió con GolabTech.\n\nNo solo conseguimos más tráfico.\n\nConseguimos un sistema capaz de atraer clientes potenciales cualificados, reducir costes de adquisición y generar un crecimiento sostenible para la empresa.",
      storyTitle: "La Lección",
      storySub: "El SEO como activo de negocio"
    }
  },
  {
    slug: "mj-estetica",
    title: "MJ Estética y SPA",
    logo: "/logos/mj-estetica.png",
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
      strategy: "Utilizamos nuestro propio negocio como un laboratorio de innovación, probando cada estrategia de IA y automatización antes de implementarlas en proyectos externos, enfocándose en maximizar utilidades mediante la eficiencia operativa.",
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
        { label: "Paid Search", value: "63%" },
        { label: "Retención Usuarios", value: "+138.3%" }
      ],
      results: [
        "Crecimiento exponencial en la adquisición de 1,300 nuevos usuarios en 28 días.",
        "Incremento masivo del 188.2% en tráfico orgánico mediante estrategias de SEO técnico.",
        "Escalado vertical de campañas pagas logrando que un 63% de la adquisición provenga de Paid Search.",
        "Diversificación exitosa de canales incluyendo YouTube (+124.8%) y tráfico desde asistentes de IA (ChatGPT).",
        "Potencial de ventas de $1,600/mes generado a través de canales digitales calificados."
      ]
    }
  },
  {
    slug: "ferreteria-epa",
    title: "Ferretería EPA",
    description: "Brindé capacitación y consultoría en SEO a EPA Costa Rica, enfocándome en buenas prácticas de optimización para motores de búsqueda, SEO técnico, estrategia de contenido y mejora de la visibilidad orgánica para fortalecer su presencia digital.",
    tag: "Consultoría SEO",
    url: "https://cr.epaenlinea.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcr.epaenlinea.com%2F?w=600&h=400",
    fullContent: {
      challenge: "",
      strategy: "Brindé capacitación y consultoría en SEO a EPA Costa Rica, enfocándome en buenas prácticas de optimización para motores de búsqueda, SEO técnico, estrategia de contenido y mejora de la visibilidad orgánica para fortalecer su presencia digital.",
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
      strategy: "Diseño de una arquitectura de contenidos enfocada en la resolución de problemas técnicos complejos and optimización de páginas de servicios para palabras clave de alta intención.",
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
  },
  {
    slug: "padel-tennis-guide",
    title: "PadelTennisGuide.com",
    description: "Caso de Estudio SEO para Directorios: Cómo Transformamos PadelTennisGuide.com en una Plataforma Preparada para Escalar",
    tag: "SEO para Directorios",
    url: "https://padeltennisguide.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fpadeltennisguide.com%2F?w=600&h=400",
    fullContent: {
      company: "Lo que comenzó como un proyecto de SEO Off-Page terminó convirtiéndose en una transformación completa del negocio.",
      challenge: "Fui contratado inicialmente para ejecutar una estrategia de Off-Page SEO. Sin embargo, tras realizar una auditoría técnica exhaustiva, quedó claro que el mayor obstáculo para el crecimiento no era la autoridad del dominio, sino los cimientos del sitio. Antes de invertir en enlaces, era necesario construir una base sólida. El proyecto evolucionó rápidamente hacia una optimización integral del directorio, abordando aspectos técnicos, estructurales y estratégicos que limitaban su crecimiento orgánico.",
      strategy: "El verdadero objetivo nunca fue mejorar el SEO. El objetivo fue construir una plataforma capaz de crecer de forma sostenible. Cada optimización se realizó pensando en crear una infraestructura que permitiera escalar miles de páginas sin generar problemas de indexación, mejorar la experiencia de los usuarios, aumentar la conversión, facilitar el rastreo por parte de Google, y preparar la arquitectura para el crecimiento mediante Programmatic SEO con ventajas competitivas a largo plazo.",
      experienceTitle: "Principales optimizaciones implementadas",
      experience: [
        "Auditoría SEO técnica completa.",
        "Reestructuración de la arquitectura del directorio.",
        "Optimización de la experiencia del usuario (UX).",
        "Mejora de Core Web Vitals y rendimiento.",
        "Optimización de masiva de imágenes.",
        "Estrategia de enlazado interno basada en intención de búsqueda.",
        "Reorganización de categorías y taxonomías.",
        "Eliminación de problemas de contenido duplicado y canibalización.",
        "Optimización de páginas para satisfacer la intención de búsqueda.",
        "Definición de una estrategia editorial orientada a escalar el contenido.",
        "Identificación de nuevas oportunidades de negocio y crecimiento orgánico.",
        "Implementación de estándares Enterprise SEO para directorios."
      ],
      results: [
        "El proyecto pasó de ser una simple campaña de SEO Off-Page a una consultoría estratégica de crecimiento digital.",
        "Redefinición de la estructura completa del directorio para maximizar su potencial de posicionamiento.",
        "Preparación de la infraestructura técnica para escalar miles de páginas sin problemas de indexación."
      ],
      story: "Este es solo una parte de los resultados obtenidos durante la transformación de PadelTennisGuide.com."
    }
  }
];
