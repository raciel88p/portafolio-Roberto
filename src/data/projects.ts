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
    description: "Ingenia CR: De Estar al Borde del Cierre a Generar Clientes de Forma Constante con SEO y SEM",
    tag: "SEM & Analytics",
    url: "https://ingeniacr.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fingeniacr.com%2F?w=600&h=400",
    fullContent: {
      company: "Cuando Ingenia CR llegó a nosotros, la empresa enfrentaba una situación crítica.",
      companyTitle: "La Situación",
      companySub: "Al borde del cierre por falta de adquisición",
      challenge: "No contaban con una estrategia digital para atraer clientes de manera constante. Dependían únicamente de referencias y oportunidades ocasionales, lo que hacía que las ventas fueran impredecibles. Incluso habían estado al borde del cierre por la falta de un sistema que generara nuevas oportunidades de negocio.\n\nNo necesitaban simplemente una página web.\n\nNecesitaban un sistema capaz de atraer clientes de forma continua.",
      challengeTitle: "El Problema",
      challengeSub: "Ventas impredecibles y dependencia de recomendaciones",
      strategy: "Diseñamos e implementamos un sistema completo de adquisición de clientes desde cero.\n\nEn lugar de crear únicamente un sitio web, construimos un activo digital diseñado para generar oportunidades de negocio.",
      strategyTitle: "La Estrategia",
      experienceTitle: "Nuestro enfoque incluyó:",
      experience: [
        "Desarrollo de una landing page de alta conversión utilizando Astro CMS.",
        "Integración de SEO desde la etapa de desarrollo para acelerar el posicionamiento orgánico.",
        "Redacción de una carta de ventas enfocada en conversión para campañas de Google Ads (SEM).",
        "Configuración de píxeles y eventos de conversión para medir cada interacción importante del usuario.",
        "Implementación de analítica para optimizar las campañas basándonos en datos reales y no en suposiciones."
      ],
      metrics: [
        { label: "Tasa Conversión", value: "4.4%" },
        { label: "Nuevos Usuarios", value: "800+" },
        { label: "Chat WhatsApp", value: "64" },
        { label: "Impacto Ventas", value: "$1600" }
      ],
      results: [
        "Los resultados comenzaron a verse durante el primer mes.",
        "Posicionamiento inicial en Google para las primeras búsquedas relevantes.",
        "Más de 800 usuarios llegaron a la landing page.",
        "192 visitantes interactuaron activamente con el sitio web.",
        "64 prospectos iniciaron una conversación por WhatsApp.",
        "Se generaron los primeros SQL (Sales Qualified Leads) y MQL (Marketing Qualified Leads) con una inversión mínima.",
        "La estrategia alcanzó una tasa de conversión del 4.4%, validando el modelo de adquisición desde las primeras semanas.",
        "Impacto potencial de ventas $1600"
      ],
      story: "El mayor resultado no fue únicamente el tráfico o la cantidad de prospectos.\n\nFue transformar un negocio que no tenía un sistema de generación de clientes en una empresa con un proceso medible, escalable y optimizable.\n\nCada campaña, cada visita y cada conversión comenzó a generar información que permitió mejorar continuamente el rendimiento y reducir el costo de adquisición de nuevos clientes.\n\nPorque una página web no hace crecer un negocio.\n\nUn sistema de adquisición de clientes sí.",
      storyTitle: "El Verdadero Impacto",
      storySub: "Un sistema de adquisición de clientes sí hace crecer el negocio"
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
    description: "Consultoría SEO Estratégica para Empresas de Tecnología",
    tag: "Consultoría SEO",
    url: "https://sapiensdev.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fsapiensdev.com%2F?w=600&h=400",
    fullContent: {
      company: "Convierte Google en un canal de crecimiento para tu empresa.\n\nLa mayoría de las empresas invierten miles de dólares en desarrollo, marketing y ventas. Pero pocas aprovechan uno de los activos con mayor retorno a largo plazo: la demanda que ya existe en Google.\n\nCada día, potenciales clientes buscan soluciones como las que ofrece tu empresa.\n\nLa pregunta es:\n¿Están encontrando a Sapiens Development... o a la competencia?\n\nMientras muchas organizaciones siguen dependiendo exclusivamente de campañas pagadas para generar oportunidades comerciales, las empresas con mayor crecimiento construyen un activo mucho más rentable: un sistema de adquisición orgánico que genera clientes de forma constante.\n\nEl SEO ya no consiste únicamente en aparecer primero en Google.\nSe trata de construir una ventaja competitiva difícil de replicar.",
      companyTitle: "El Activo del Negocio",
      companySub: "Convierte Google en un canal de crecimiento",
      challenge: "Identificar las oportunidades de mayor impacto para aumentar la visibilidad de Sapiens Development, atraer clientes con alta intención de compra y convertir el tráfico orgánico en una fuente sostenible de ingresos.\n\nNo entregamos únicamente una auditoría.\n\nEntregamos una estrategia de crecimiento basada en datos.",
      challengeTitle: "Nuestro Objetivo",
      challengeSub: "Aumentar visibilidad y convertir tráfico en ingresos",
      solution: "Realizamos un diagnóstico completo de la presencia digital de la empresa para descubrir dónde se están perdiendo oportunidades y cuáles pueden generar el mayor retorno.\n\n• Análisis del mercado: tamaño de la demanda, tendencias de búsqueda, oportunidades de crecimiento, nuevos nichos de mercado.\n\n• Inteligencia competitiva: analizamos cómo están captando clientes los principales competidores, identificando palabras clave estratégicas, contenido de mayor rendimiento, fortalezas y debilidades, y oportunidades que aún no están siendo aprovechadas.\n\n• Auditoría SEO Integral: evaluamos factores que afectan el rendimiento orgánico (SEO técnico, arquitectura, indexación, velocidad, Core Web Vitals, enlazado interno, contenido, experiencia de usuario, autoridad del dominio).\n\n• Estrategia SEO de negocio: no todas las oportunidades generan el mismo impacto. Priorizamos las iniciativas según potencial de generación de leads, impacto en ingresos, esfuerzo de implementación, retorno esperado y rapidez de ejecución.\n\nEl resultado es una estrategia enfocada en las acciones que pueden producir mayor crecimiento.",
      solutionTitle: "¿Qué Analizamos?",
      solutionSub: "Diagnóstico completo de la presencia digital",
      strategy: "Definimos un plan de implementación claro para los próximos 90 a 180 días.\n\nCada iniciativa incluye prioridad, responsables, esfuerzo estimado, impacto esperado e indicadores de éxito (KPIs).\n\nDe esta forma, el equipo sabe exactamente qué ejecutar primero y por qué.",
      strategyTitle: "Roadmap Ejecutivo",
      experienceTitle: "Entregables claves que obtiene Sapiens Development:",
      experience: [
        "Auditoría SEO Ejecutiva.",
        "Benchmark competitivo.",
        "Análisis de oportunidades de mercado.",
        "Investigación de demanda y palabras clave.",
        "Estrategia SEO personalizada.",
        "Roadmap de implementación (90–180 días).",
        "Dashboard de KPIs.",
        "Presentación ejecutiva para stakeholders.",
        "Recomendaciones priorizadas por impacto y retorno esperado."
      ],
      metrics: [
        { label: "Crecimiento", value: "Orgánico" },
        { label: "Roadmap", value: "90-180 d" },
        { label: "Valor CAC", value: "Reducido" },
        { label: "Leads", value: "Continuos" }
      ],
      results: [
        "Una visión completa del potencial de crecimiento orgánico.",
        "Un mapa claro de oportunidades para incrementar la adquisición de clientes.",
        "Una estrategia alineada con los objetivos comerciales de la empresa.",
        "Un plan de implementación priorizado para maximizar el retorno de la inversión.",
        "Un sistema de crecimiento sostenible que reduce la dependencia de la publicidad pagada.",
        "Presentación de resultados en una sesión ejecutiva dirigida a los líderes de la organización.",
        "Definición clara de prioridades, responsables, esfuerzo e impacto esperado por cada iniciativa."
      ],
      story: "Una buena estrategia SEO no solo incrementa el tráfico.\n\nIncrementa la visibilidad ante clientes con intención real de compra.\n\nReduce el coste de adquisición de clientes (CAC).\n\nGenera oportunidades comerciales de forma continua.\n\nAl finalizar la consultoría presentamos los resultados en una sesión ejecutiva dirigida a los líderes de la organización para facilitar la toma de decisiones con información clara, priorizada y respaldada por datos.",
      storyTitle: "El Verdadero Valor",
      storySub: "El valor de la consultoría estratégica"
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
    description: "Cómo Transformé un Proyecto Web Estancado en un Canal de Generación de Clientes en Menos de 4 Meses",
    tag: "Consultor SEO and Team lead",
    url: "https://www.intersourcesinc.com/",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.intersourcesinc.com%2F?w=600&h=400",
    fullContent: {
      company: "Cuando fui contratado por Intersources, la empresa ya había invertido en otro proveedor para desarrollar su nueva página web y liderar la estrategia SEO.",
      companyTitle: "El Inicio",
      companySub: "Inversiones previas sin una base técnica sólida",
      challenge: "El problema era que, después de esa inversión, prácticamente no existía una base sobre la cual trabajar.\n\nLo único disponible era una investigación inicial de palabras clave con poco análisis estratégico y un estudio superficial de enlaces. No existía una arquitectura web definida, no había una nueva página desarrollada en Webflow, no existía una estrategia de contenidos y tampoco un plan de posicionamiento que apoyara los objetivos comerciales del negocio.\n\nEn otras palabras, el proyecto debía comenzar desde cero.",
      challengeTitle: "El Problema",
      challengeSub: "Comenzar desde cero",
      solution: "Además del estado del proyecto, existían importantes desafíos operativos.\n\nDebía coordinar equipos distribuidos entre Estados Unidos, India y Costa Rica, trabajando con una diferencia horaria de aproximadamente 12 horas.\n\nTambién era necesario definir qué línea de negocio debía priorizarse, ya que Intersources ofrece múltiples soluciones y servicios de ciberseguridad. Antes de construir el sitio web, era indispensable entender:\n\n• Qué servicios tenían mayor potencial comercial.\n• Qué palabras clave representaban oportunidades reales de negocio.\n• Cómo estructurar el sitio para captar demanda cualificada.\n• Cómo convertir el tráfico orgánico en oportunidades comerciales.",
      solutionTitle: "El Reto",
      solutionSub: "Desafíos operativos y prioridades comerciales",
      strategy: "El proyecto inició con una auditoría completa que permitió construir una estrategia digital desde sus cimientos.\n\nSe desarrolló una arquitectura SEO alineada con los objetivos del negocio.\n\nPara coordinar un equipo internacional compuesto por desarrolladores, diseñador, UX/UI y responsables del negocio, implementé una metodología Scrum, permitiendo mantener entregas continuas y una comunicación eficiente entre todos los participantes.",
      strategyTitle: "La Estrategia",
      experienceTitle: "Se desarrolló una arquitectura SEO alineada con los objetivos del negocio, incluyendo:",
      experience: [
        "Auditoría SEO técnica completa.",
        "Investigación estratégica de palabras clave.",
        "Arquitectura de información y estructura del sitio.",
        "Estrategia de contenidos.",
        "Plan de enlazado interno.",
        "Implementación de analítica y medición.",
        "Definición de prioridades comerciales para cada línea de servicios."
      ],
      metrics: [
        { label: "Conversiones", value: "+263%" },
        { label: "Clics Orgánicos", value: "+396%" },
        { label: "Impresiones", value: "+401%" },
        { label: "Tiempo Desarrollo", value: "<4 meses" }
      ],
      results: [
        "En menos de cuatro meses logramos lanzar la primera versión funcional del nuevo sitio web.",
        "Además del desarrollo principal, se implementaron activos digitales para apoyar las estrategias comerciales de la empresa, incluyendo landing pages para campañas de LinkedIn, páginas para eventos y generación de demanda, y calendario de contenidos para marketing digital.",
        "Configuración completa de Google Tag Manager, instalación de píxeles de seguimiento, implementación de medición de conversiones y dashboards ejecutivos en Looker Studio para seguimiento de KPIs.",
        "Coordinación continua entre equipos de desarrollo, diseño, UX/UI y stakeholders internacionales.",
        "Todo el ecosistema fue construido pensando no únicamente en posicionar el sitio en Google, sino en convertir visitantes en oportunidades reales de negocio.",
        "Incremento del 263% en conversiones.",
        "Incremento del 396% en clics orgánicos.",
        "Incremento del 401% en impresiones.",
        "Construcción y lanzamiento de una plataforma web completamente nueva en menos de cuatro meses.",
        "Creación de una base SEO escalable que integra SEO técnico, estrategia de contenidos, analítica y optimización para crecimiento a largo plazo.",
        "Implementación de una infraestructura de medición que permitió tomar decisiones basadas en datos y optimizar continuamente el rendimiento del sitio."
      ],
      story: "Este proyecto demuestra que el éxito de una estrategia SEO no comienza con palabras clave ni con contenido.\n\nComienza con una estrategia de negocio clara.\n\nCuando la arquitectura del sitio, el contenido, la tecnología, la analítica y los objetivos comerciales trabajan como un solo sistema, el resultado deja de ser simplemente más tráfico y se convierte en un motor predecible de generación de clientes y crecimiento sostenible.",
      storyTitle: "La Mayor Lección",
      storySub: "El SEO como parte del sistema de negocio"
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
