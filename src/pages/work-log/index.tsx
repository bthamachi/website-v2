import { formatDateToDDMMYYformat } from "@/lib/date";
import { getAllWorkLogs } from "@/lib/worklog";
import { MDXProvider } from "@mdx-js/react";
import fs from "fs";

const WorkLog = (props) => {
  console.log(props);
  return (
    <MDXProvider>
      <p>Test</p>

      <main {...props} />
    </MDXProvider>
  );
};

export default WorkLog;

export const getStaticProps = async () => {
  const worklog = await getAllWorkLogs();
  const dateToWorklog = worklog.reduce((a, v) => {
    const dateKey = formatDateToDDMMYYformat(new Date(v.meta.date));
    return {
      ...a,
      [dateKey]: v.meta.rating,
    };
  }, {});

  fs.writeFileSync(
    `${process.cwd()}/src/constants/worklog.json`,
    JSON.stringify(dateToWorklog)
  );

  return {
    props: {
      worklog,
    },
  };
};
