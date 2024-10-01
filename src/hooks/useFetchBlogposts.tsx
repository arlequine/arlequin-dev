import { useEffect, useState } from 'react';

// Definición de tipo para las publicaciones del blog
interface BlogPost {
  id: string;
  title: string;
  body: string;
  image?: string;
}

const useFetchBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // URL de la API
        const response = await fetch(`https://cdn.contentful.com/spaces/${import.meta.env.VITE_SPACE_ID}/environments/${import.meta.env.VITE_ENVIRONMENT_ID}/entries?access_token=${import.meta.env.VITE_TOKEN}`); // URL de la API
        if (!response.ok) {
          throw new Error('Error al obtener los posts');
        }
        const data = await response.json();
        console.log('data',data)
        const posts = data.items.map((item: any) => ({
          id: item.sys.id,
          title: item.fields.title,
          body: item.fields.body,
          // image: item.fields.image.fields.file.url
        }));
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchBlogPosts;