import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    // Esta configuración con '**' permite imágenes de cualquier sitio. 
    // Es útil para evitar errores ahora, aunque en el futuro podrías querer restringirlo.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // OPCIÓN A: Si usas rewrites (proxy), debes apuntar a la URL de Render
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // CAMBIO IMPORTANTE AQUÍ:
        destination: 'https://backend-s-4.onrender.com//api/:path*', 
      },
    ];
  },
};

export default withNextIntl(nextConfig);
