import ArticleCard from "@/components/ArticleCard";
import HeaderText from "@/components/HeaderText";
import { getAllArticles } from "@/lib/article";
import { PostData } from "@/types/Post";
import Layout from "../../components/Layout";

type PostIndexPageProps = {
  articleData: PostData[];
};

export default function PostIndexPage({ articleData }: PostIndexPageProps) {
  return (
    <Layout>
      <div>
        <HeaderText text="Articles on Software, Design and Web3 stuff" />
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            All of my long-form thoughts on programming, web3 stuff and more
            collected in chronological form
          </p>
        </div>
      </div>
      {articleData.map((article) => {
        return (
          <ArticleCard
            key={article.meta.title}
            meta={article.meta}
            slug={article.slug}
          />
        );
      })}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articleData = await getAllArticles();

  return {
    props: {
      articleData,
    },
  };
};
