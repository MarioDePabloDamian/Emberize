# Emberize — Landing Page

Landing page de **Emberize**, agencia de automatización con IA especializada en escuelas de artes marciales y deportes de contacto.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, export estático)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (microinteracciones y animaciones scroll-based)
- [Lucide](https://lucide.dev/) (iconos SVG)
- [pnpm](https://pnpm.io/)
- GitHub Actions → GitHub Pages

## Desarrollo

Requiere **Node.js 24+** y **pnpm** (único gestor de paquetes del proyecto).

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
pnpm build
```

Genera el sitio exportado en `out/`.

## Despliegue en emberize.es (GitHub Pages)

El workflow `.github/workflows/deploy.yml` construye y despliega automáticamente en cada push a `main`.

Configuración necesaria (una sola vez):

1. En GitHub, ve a **Settings → Pages** y elige **GitHub Actions** como source.
2. En **Settings → Pages → Custom domain**, escribe `emberize.es` y guarda.
3. En tu registrador de dominio, crea un registro **A** apuntando a las IPs de GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. (Opcional) Añade `www.emberize.es` como **CNAME** hacia `<usuario>.github.io`.

El archivo `public/CNAME` ya incluye `emberize.es` para que el export estático lo preserve.

## Formulario de contacto

Los envíos se capturan en **GoHighLevel** con el script de External Tracking instalado en `app/layout.tsx`.

En GHL puedes ver los leads en **Contacts** y **Form Submissions**, y crear workflows con el trigger **Form Submission** (filtra por nombre de formulario: `emberize-diagnostico`).

Para probar: envía el formulario desde la web publicada y comprueba que el contacto aparece en tu sub-cuenta.
