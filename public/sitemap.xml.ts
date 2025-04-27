import { getCollection } from 'astro:content';

export async function GET() {
  const ensinamentos = await getCollection('ensinamentos');
  const pontos = await getCollection('pontos');
  const oracoes = await getCollection('oracoes');

  const allPosts = [...ensinamentos, ...pontos, ...oracoes];

  const urls = allPosts.map((post) => {
    let categoria = '';

    if (post.collection === 'ensinamentos') {
      categoria = 'ensinamentos';
    } else if (post.collection === 'pontos') {
      categoria = 'pontos';
    } else if (post.collection === 'oracoes') {
      categoria = 'oracoes';
    }

    return `<url><loc>https://juremaestradaemar.netlify.app/${categoria}/${post.slug}</loc></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
