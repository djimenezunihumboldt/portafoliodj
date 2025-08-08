# Portafolio de Daniel Jiménez

Sitio web personal con proyectos, experiencia y contacto.

- Web pública: https://djimenezunihumboldt.github.io/Portafolio_Daniel_Jimenez/
- Repositorio: https://github.com/djimenezunihumboldt/Portafolio_Daniel_Jimenez

## Tecnologías
- React + Vite (TypeScript)
- Tailwind CSS
- Icons: Lucide React y react-icons
- EmailJS (formulario de contacto)
- i18n simple con Context API (ES/EN)

## Ejecutar en local
```bash
npm install
npm run dev
```

Build de producción:
```bash
npm run build
npm run preview
```

## Variables de entorno (EmailJS)
Crea un archivo `.env` en la raíz del proyecto con:
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Estas se usan en `ContactSection.tsx` para enviar el formulario.

## Deploy (GitHub Pages)
- Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`.
- Vite está configurado con `base: '/Portafolio_Daniel_Jimenez/'` en `vite.config.ts`.
- El sitio se publica en `gh-pages` (Pages) automáticamente.

## Estructura
- `src/` código fuente (secciones, UI, contexts)
- `public/` estáticos (imágenes, PDF del CV)
- `vite.config.ts` configuración Vite
- `.github/workflows/deploy.yml` CI/CD para Pages

## Notas
- CV descargable en `public/cv-daniel-jimenez.pdf`.
- Enlaces sociales incluyen GitHub, LinkedIn y X (https://x.com/diosyvene).
