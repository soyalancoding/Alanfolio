# Reglas de Arquitectura Frontend para Elegant-Portfolio

Estas son las reglas estrictas de arquitectura y código limpio para el proyecto Elegant-Portfolio, basado en **Astro** y **Atomic Design**. **Siempre** que interactúes con el código (generar, modificar, refactorizar), debes apegarte a esta estructura.

## 1. Arquitectura de Componentes (Atomic Design)

El proyecto no realiza peticiones vía API (fetchings). Todo el enfoque está en la construcción de una interfaz de usuario estática/escalable utilizando la metodología de Atomic Design. La carpeta principal para componentes es `src/components/`, dividida estrictamente en:

- **atoms/** (Átomos): Los bloques de construcción más básicos e indivisibles (ej. `<Button />`, `<Text />`, `<Icon />`, `<Input />`). No tienen dependencias de otros componentes, solo de estilos.
- **molecules/** (Moléculas): Grupos simples de átomos que funcionan juntos como una unidad (ej. `<ProjectCard />` compuesto por una imagen, textos y un botón).
- **organisms/** (Organismos): Componentes complejos que forman secciones completas de la interfaz (ej. `<Header />`, `<HeroSection />`, `<ProjectGrid />`, `<Footer />`). Integran moléculas y átomos.

## 2. Estructura del Proyecto Astro

Además de los componentes, el proyecto se organiza de la siguiente manera:

- **src/pages/**: Aquí residen las páginas o vistas (ej. `index.astro`, `about.astro`). Consumen componentes (principalmente organismos y templates) para construir la estructura final. **Regla de oro:** Deben ser ultra limpias. Solo orquestan componentes.
- **src/layouts/**: Envoltorios y plantillas estructurales equivalentes a los 'Templates' del Atomic Design (ej. `BaseLayout.astro`, `ProjectLayout.astro`).
- **src/styles/**: Variables globales y ajustes base de estilos (CSS, Tailwind, etc.).
- **src/utils/ & src/helpers/**: Funciones puras de uso general (formateadores, utilidades lógicas).
- **src/interfaces / src/types/**: Tipado estricto (TypeScript). Todo el código debe estar fuertemente tipado (Props de los componentes, estructuras de datos).
- **src/content/** (Opcional): Para colecciones de contenido estructurado (Markdown/MDX, esquemas).
- **src/assets/**: Archivos estáticos procesados y optimizados por Astro (imágenes, iconos, fuentes).

## 3. Directrices de Código Limpio y Convenciones

- **Desarrollo Atómico Estricto**: Se debe construir SIEMPRE de abajo hacia arriba. Primero se desarrollan los **átomos** necesarios, luego se agrupan en **moléculas**, posteriormente en **organismos**, y finalmente se integran en **layouts** y **páginas**.
- **Límite de Líneas**: Un archivo no debe superar idealmente las 220 líneas de código. Si tiene más, es una señal clara de que debe refactorizarse dividiéndolo en sub-componentes atómicos adicionales.
- **Tipado Estricto (Prohibido `any`)**: No está permitido el uso del tipo `any` bajo ninguna circunstancia. Se deben utilizar (o crear) interfaces y tipos fuertes, apoyándose en la capa `src/interfaces` o dentro del mismo archivo para las Props.
- **Separación de Responsabilidades**: Las Páginas y Layouts son meramente estructurales/orquestadores. La carga visual reside en los componentes (átomos, moléculas, organismos).
- **Nomenclatura (Naming)**:
  - Archivos de componentes, layouts en `PascalCase` con extensión `.astro` (o `.tsx` si se usara React/Solid) (ej. `CustomButton.astro`, `HeroSection.astro`).
  - Las páginas en `src/pages/` usan nombres en minúscula según las rutas web (ej. `index.astro`, `projects.astro`).
  - Archivos de utilidades en `camelCase` con extensión `.ts` (ej. `formatDate.ts`).
  - Archivos de helpers deben comenzar siempre con el prefijo `handle-` con extensión `.ts` (ej. `handle-scroll.ts`).
  - Las interfaces deben usar la convención estándar de nombres limpios (ej. `ProjectData`, `ButtonProps`).
- **Imports Absolutos**: Usa siempre alias configurados en tu `astro.config.mjs` (ej. `@components/...`, `@layouts/...`, `@utils/...`) en lugar de rutas relativas largas (`../../`).
- **Optimización de Imágenes**: Nunca uses la etiqueta estándar `<img>`. Utiliza SIEMPRE el átomo `<OptimizedImage />` (`src/components/atoms/OptimizedImage.astro`) para cualquier imagen. Esto garantiza el uso nativo de Astro para lazy loading y compresión automática.
- **Uso Estricto de Átomos (No sobrescribir estilos base)**: Al utilizar componentes atómicos como `<Typography />` o `<Button />`, **NUNCA** pases clases utilitarias de Tailwind (vía `className`) que sobrescriban su tamaño, color, peso de fuente o estilos base predefinidos en sus variantes. Únicamente están permitidas clases de maquetación, alineación o espaciado externo (ej. `mb-4`, `max-w-xl`, `text-center`). Esto garantiza mantener una **Única Fuente de Verdad** y respeta el principio DRY.
