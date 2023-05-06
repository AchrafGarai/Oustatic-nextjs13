export type Author = {
  name: string;
  picture: string;
};

export type Document = {
  slug: string;
  title: string;
  publishedAt: string;
  coverImage: string;
  author: Author;
  description: string;
  ogImage: {
    url: string;
  };
  content: string;
};
