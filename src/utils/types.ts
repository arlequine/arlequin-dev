export interface BlogPost {
  id: string
  title: string
  content: string
  image?: {
    url: string;
  }
  slug: string
}