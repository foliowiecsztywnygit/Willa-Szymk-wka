export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
};

// Zbieramy wszystkie pliki .md z katalogu blog
const rawPosts = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true });

function parseMatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, content: raw };
  
  const frontmatter = match[1];
  const content = match[2];
  
  const data: Record<string, string> = {};
  frontmatter.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });
  
  return { data, content };
}

// Przetwarzamy każdy plik
export const posts: Post[] = Object.entries(rawPosts).map(([path, fileContent]) => {
  const { data, content } = parseMatter(fileContent as string);
  
  // Obliczanie czasu czytania (zakładając ~200 słów na minutę)
  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / 200)} min`;
  
  return {
    slug: data.slug || path.split('/').pop()?.replace('.md', ''),
    title: data.title || '',
    excerpt: data.description || '',
    date: data.date || '',
    readingTime,
    content,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sortowanie od najnowszego

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

