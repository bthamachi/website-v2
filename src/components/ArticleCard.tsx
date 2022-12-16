import { formatDate } from "@/lib/post";
import { Metadata } from "@/types/Post";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import SmartLink from "./SmartLink";

type ArticleCardProp = {
  slug: string;
  meta: Metadata;
};

const ArticleCard = ({ slug, meta }: ArticleCardProp) => {
  return (
    <article className="">
      <SmartLink name={meta.title} href={`/articles/${slug}`}>
        <div className="grid grid-cols-5">
          <div>
            <p className="text-md text-zinc-400 dark:text-zinc-500">
              <>{formatDate(meta)}</>
            </p>
          </div>

          <div className="col-span-4">
            <p className="text-md font-bold">{meta.title}</p>
            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
              {meta.description}
            </p>
            <p className="relative z-10 mt-4 flex cursor-pointer items-center text-sm font-medium text-teal-500 hover:underline">
              Read Article{" "}
              <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
            </p>
          </div>
        </div>
      </SmartLink>
    </article>
  );
};

export default ArticleCard;
