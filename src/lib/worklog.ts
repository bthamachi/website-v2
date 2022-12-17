import { WorklogData } from "@/types/Worklog";
import glob from "fast-glob";
import * as path from "path";

export const importWorkLog = async (articleFileName: string) => {
  const { meta } = await import(`../pages/work-log/${articleFileName}`);

  const returnObject = {
    slug: articleFileName.replace(/(\/index)?\.mdx$/, ""),
    meta,
  } as WorklogData;
  return returnObject;
};

export const getAllWorkLogs = async () => {
  const worklogFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "src/pages/work-log"),
  });

  const worklogs = await Promise.all(worklogFilenames.map(importWorkLog));
  return worklogs;
};
