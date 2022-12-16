import { PostData } from "@/types/Post";
import glob from "fast-glob";
import * as path from "path";

export const importArticle = async (articleFileName: string) => {
  const data = await import(`../pages/articles/${articleFileName}`);
  const { meta } = data;

  const returnObject = {
    slug: articleFileName.replace(/(\/index)?\.mdx$/, ""),
    meta,
  } as PostData;
  return returnObject;
};

export const getAllArticles = async () => {
  let articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/articles"),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
};
