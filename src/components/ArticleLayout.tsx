import { AUTHOR } from "@/constants/seo";
import { formatDate } from "@/lib/post";

import { Metadata as MetaType } from "@/types/Post";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import Layout from "./Layout";
import Metadata from "./Metadata";
import SmartLink from "./SmartLink";

type ArticleLayoutProps = {
  meta: MetaType;
  children: ReactNode;
};

const ArticleLayout = ({ meta, children }: ArticleLayoutProps) => {
  return (
    <>
      <Metadata
        title={meta.title}
        description={meta.description}
        author={AUTHOR}
      />
      <Layout>
        <SmartLink href="/articles" name="Articles">
          <div className="mb-10  flex cursor-pointer items-center hover:underline">
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            <p className="prose ml-2 ">All Articles</p>
          </div>
        </SmartLink>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {meta.title}
        </h1>
        <time
          dateTime={new Date(meta.date).toDateString()}
          className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(meta)}</span>
        </time>
        {children}
      </Layout>
    </>
  );
};

export default ArticleLayout;
