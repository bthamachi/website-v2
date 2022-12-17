import { formatDateToDDMMYYformat } from "@/lib/date";
import { getAllWorkLogs } from "@/lib/worklog";
import fs from "fs";
import type { NextPage } from "next";
import HeroCard from "../components/HeroCard";
import Layout from "../components/Layout";
import Metadata from "../components/Metadata";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Layout>
        <HeroCard />
      </Layout>
    </>
  );
};

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

  return { props: {} };
};

export default Home;
