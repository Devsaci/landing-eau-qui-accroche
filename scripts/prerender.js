import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  {
    path: '/',
    title: "L'Eau qui accroche",
    description: "À Port-Mystral, le réel a cessé d'être fluide. Une enquête sur l'anomalie de la baie.",
    url: "https://example.com/" // fallback url since it's not specified, or just relative
  },
  {
    path: '/chapitre-1',
    title: "Chapitre 1 : Ouverture sensible",
    description: "Luna Mercier arrive au port. L'eau de la baie présente une résistance anormale, elle semble coller à la rampe.",
    url: "https://example.com/chapitre-1"
  },
  {
    path: '/chapitre-24',
    title: "Chapitre 24 : La discipline du regard",
    description: "Le Pr Chen valide l'Anomalie de Tension Locale. La ville doit apprendre à vivre avec l'eau qui accroche.",
    url: "https://example.com/chapitre-24"
  }
];

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

try {
  const indexTemplate = fs.readFileSync(indexPath, 'utf-8');

  for (const route of routes) {
    let html = indexTemplate;

    // Replace title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
    
    // Check if og:title exists, if not inject it before </head>
    if (html.includes('property="og:title"')) {
      html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${route.title}"`);
    } else {
      html = html.replace('</head>', `  <meta property="og:title" content="${route.title}" />\n</head>`);
    }

    // Check if og:description exists, if not inject it
    if (html.includes('property="og:description"')) {
      html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${route.description}"`);
    } else {
      html = html.replace('</head>', `  <meta property="og:description" content="${route.description}" />\n</head>`);
    }

    // Check if og:url exists, if not inject it
    const routeUrl = route.path; // Or full URL if needed
    if (html.includes('property="og:url"')) {
      html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${routeUrl}"`);
    } else {
      html = html.replace('</head>', `  <meta property="og:url" content="${routeUrl}" />\n</head>`);
    }
    
    // Also update meta name="description" just in case, but they only specified og:description
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${route.description}"`);

    // Create directory and save
    const routeDir = path.join(distDir, route.path === '/' ? '' : route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`Generated: ${route.path === '/' ? '/index.html' : route.path + '/index.html'}`);
  }
} catch (error) {
  console.error('Error during prerendering:', error);
}
