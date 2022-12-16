export type Metadata = {
  author: string;
  date: Date;
  description: string;
  title: string;
};

export type PostData = {
  slug: string;
  meta: Metadata;
};
