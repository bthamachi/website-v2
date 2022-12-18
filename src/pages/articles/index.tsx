import ArticleCard from "@/components/ArticleCard";
import HeaderText from "@/components/HeaderText";
import SearchBar from "@/components/SearchBar";
import { getAllArticles } from "@/lib/article";
import { PostData } from "@/types/Post";
import Fuse from "fuse.js";
import { useState } from "react";
import Layout from "../../components/Layout";

type PostIndexPageProps = {
  articleData: PostData[];
};

export default function PostIndexPage({ articleData }: PostIndexPageProps) {
  const [searchQuery, updateSearchQuery] = useState("");

  const fuse = new Fuse(articleData, {
    keys: ["meta.title", "meta.description"],
    shouldSort: true,
    threshold: 0.6,
    isCaseSensitive: false,
  });

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
      <div className="my-4 max-w-lg ">
        <SearchBar
          searchQuery={searchQuery}
          updateSearchQuery={updateSearchQuery}
        />
      </div>
      {searchQuery.length > 0
        ? fuse.search(searchQuery).map((item) => {
            return (
              <ArticleCard
                key={item.item.meta.title}
                meta={item.item.meta}
                slug={item.item.slug}
              />
            );
          })
        : articleData.map((article) => {
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
