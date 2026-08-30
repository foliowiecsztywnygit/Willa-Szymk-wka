import matter from 'gray-matter';

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

// Przetwarzamy każdy plik
export const posts: Post[] = Object.entries(rawPosts).map(([path, fileContent]) => {
  const { data, content } = matter(fileContent as string);
  
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
