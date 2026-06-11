# Portafolio Profesional - Roberto Pérez Salazar

Este proyecto es un portafolio profesional de alto rendimiento y optimizado para SEO, construido con **Astro v6** y **Tailwind CSS v4**.

## 🚀 Características
- **Astro v6:** Generación de sitio estático para máxima velocidad.
- **Tailwind CSS v4:** Estilizado moderno y eficiente.
- **SEO Avanzado:** Sitemap automático, robots.txt y Schema.org (JSON-LD).
- **Contenido Especializado:** 9 servicios y 13 sectores industriales con páginas dedicadas.
- **Responsive:** Totalmente adaptado a dispositivos móviles.

## 🛠️ Comandos
| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias. |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Construye el sitio para producción en `./dist/`. |
| `npm run astro check` | Ejecuta comprobaciones de tipos y diagnóstico. |

## 🌐 Despliegue en Vercel
Para desplegar este proyecto en Vercel y conectar tu dominio de Hostinger, sigue estos pasos:

### 1. Desplegar en Vercel
1. Sube este código a un repositorio de GitHub, GitLab o Bitbucket.
2. Importa el proyecto en tu panel de Vercel.
3. Vercel detectará automáticamente que es un proyecto de Astro.

### 2. Configurar Dominio de Hostinger en Vercel
1. En tu proyecto de Vercel, ve a **Settings > Domains**.
2. Añade tu dominio (ej. `tu-dominio.com`).

### 3. Configurar DNS en Hostinger (hPanel)
Tienes dos opciones:

#### Opción A: Recomendada (Registros A y CNAME)
Mantienes tus correos y otros servicios en Hostinger.
- **Registro A:**
  - Nombre/Host: `@`
  - Valor: `76.76.21.21`
- **Registro CNAME:**
  - Nombre/Host: `www`
  - Valor: `cname.vercel-dns.com`

#### Opción B: Nameservers de Vercel
Vercel gestionará todos tus registros DNS.
- Cambia los Nameservers en Hostinger por:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

---
*Desarrollado para Roberto Pérez Salazar - Consultor SEO y de Marketing Digital.*
