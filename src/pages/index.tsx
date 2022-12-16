import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BowTiedHamachi</title>
        <meta
          name="description"
          content="Website to showcase some of my work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto min-h-screen p-4">
        <Header />
        <div className="mx-auto mt-10 max-w-3xl sm:mt-10 ">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <Image
                src="/ProfilePic.jpeg"
                width={200}
                height={200}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover "
              />
            </div>
            <div className="col-span-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                I&apos;m BowTiedHamachi
              </h1>
              <div className="mt-6 space-y-7 text-base  ">
                <p>
                  I&apos;m an anon dev that does full-stack development. I’m a
                  software engineer in real-life and in my spare time I enjoy
                  working on interesting projects. I’m currently exploring an
                  interest in smart contract auditing.
                </p>
                <p>
                  <b>I&apos;m avaliable for hire</b>. For any inquiries
                  regarding contracting/hiring, please dm on twitter
                  @bowtiedhamachi
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
