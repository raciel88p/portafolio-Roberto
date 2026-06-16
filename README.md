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

## 🛠️ Solución de Problemas (DNS)
Si tu dominio no se conecta después de configurar los DNS, verifica lo siguiente:

1. **Borra Registros Antiguos:** Asegúrate de eliminar cualquier otro registro **A** o **CNAME** que existiera previamente en Hostinger para `@` y `www`. No debe haber duplicados.
2. **Propagación:** Los cambios pueden tardar hasta 48 horas. Verifica el estado en [whatsmydns.net](https://www.whatsmydns.net/).
3. **Ambas Versiones:** En Vercel, asegúrate de añadir tanto `tudominio.com` como `www.tudominio.com`.
4. **No Mezcles Métodos:** Si usas los registros A/CNAME (Opción A), mantén los nameservers originales de Hostinger. Si usas los de Vercel (Opción B), no necesitas configurar registros A.

*Desarrollado para Roberto Pérez Salazar - Consultor SEO y de Marketing Digital.*
