import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

export default {
  turbopack: { root },
  outputFileTracingRoot: root,
  async redirects() {
    return [
      { source: '/services/seo', destination: '/seo-company-in-kerala', permanent: true },
      { source: '/services/seo/', destination: '/seo-company-in-kerala', permanent: true },
      { source: '/seo-services-in-kerala', destination: '/seo-company-in-kerala', permanent: true },
      { source: '/seo-services-in-kerala/', destination: '/seo-company-in-kerala', permanent: true },
    ];
  },
};
