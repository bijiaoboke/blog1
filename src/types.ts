export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface BlogConfig {
  siteName: string;
  siteDescription: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  github: string;
  twitter: string;
  email: string;
}
