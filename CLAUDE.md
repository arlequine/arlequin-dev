# CLAUDE.md

Sitio personal **Arlequin Dev**: SPA en React + Vite + React Router + Bootstrap. Se despliega en **Vercel** en https://arlequin-dev.vercel.app/. El script `deploy` (`gh-pages`) y `netlify.toml` son restos de plantilla: no describen el hosting real.

## Reglas para cualquier cambio (personas o agentes)
- **Sigue los estándares y el contenido que ya existen.** Los textos nuevos (descripciones, títulos) salen del contenido del sitio; no se inventan.
- **Las mejoras se proponen, no se aplican.** Un refactor, un cambio de librería o de formato de un asset va en la sección "Puntos de mejora (no aplicados)" del PR o del informe. Decide el dueño del sitio.
- **No agregues dependencias** a `package.json`. Una herramienta puntual con `npx paquete@versión` sí se permite, si no deja rastro en el repo.
- **Cambios mínimos y acotados** a la tarea: no reformatees ni toques archivos ajenos a ella.
- Idioma del sitio: español (`lang="es"`).

## Verificación
- `npm run lint` y `npm run build` terminan en 0 (línea base al 2026-11-25).
- Accesibilidad y SEO técnico: la skill `auditar-sitio` del repo `condominia` audita el `dist/` construido. Un cambio que resuelve un hallazgo lo hace desaparecer **sin que aparezca ninguno nuevo**. Reporte base: `condominia/docs/calidad/tech-lead/arlequin-dev.json`.

## Git
- Nunca trabajes en `main`: una rama por tarea.
- Commits pequeños, en español, con prefijo: `docs:`, `feat:`, `fix:`, `chore:`, `perf:`.
