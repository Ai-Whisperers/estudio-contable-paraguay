# Estudio Contable Paraguay

Sitio web profesional para un estudio contable en Paraguay. Construido con Next.js 16 App Router, Tailwind v4 y Docker Swarm.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript 5 + React 19
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Icons:** lucide-react
- **Font:** Inter
- **Deploy:** Docker Swarm + Traefik en VPS

## Páginas (12 rutas)

- `/` — Home con hero, stats, servicios, confianza, planes, proceso, testimonios, FAQ
- `/servicios` — Todos los servicios contables
- `/servicios/[slug]` — Detalle de cada servicio (6: contabilidad, impuestos, laboral, asesoría, societario, auditoría)
- `/planes` — Planes mensuales con precios en Gs
- `/faq` — Preguntas frecuentes categorizadas
- `/contacto` — Formulario de diagnóstico gratuito
- `/privacidad` — Política de privacidad

## Build & Deploy

```bash
npm install
npm run build
docker build -t estudio-contable-paraguay:prod .
docker stack deploy -c docker-compose.yml contable
```
