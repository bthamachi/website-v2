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

export default Home;
