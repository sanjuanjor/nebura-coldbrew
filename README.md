# Nebura Coffee Website

Web corporativa de Nebura Coffee en Astro, con contenido centralizado y soporte multiidioma (ES/EN).

## Gestión de contenido (sin tocar HTML)

Para cambiar textos de la web, edita únicamente archivos Markdown:

- `src/content/site/es.md`
- `src/content/site/en.md`
- `src/content/pages/es/*.md`
- `src/content/pages/en/*.md`

Esos archivos contienen todos los textos en español e inglés:

- Menú de navegación
- Hero de la home
- Páginas About, Technology, People & Culture y Contact
- Metadatos SEO (title y description)

## Multiidioma

- Español (principal): `/`, `/about`, `/technology`, `/people-culture`, `/contact`
- Inglés: `/en`, `/en/about`, `/en/technology`, `/en/people-culture`, `/en/contact`

El selector ES/EN está en la cabecera y te lleva a la misma sección en el otro idioma.

## Ejecutar en local

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deploy

El repositorio ya incluye workflow para publicar automáticamente en GitHub Pages al hacer push a `main`.
