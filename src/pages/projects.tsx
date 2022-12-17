import HeaderText from "@/components/HeaderText";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { ProjectData } from "@/constants/project";

const Projects = () => {
  return (
    <Layout>
      <HeaderText text="Things I've gotten up to" />
      <p>
        I like experimenting with new languages and frameworks all the time.
        Currently I&apos;m working on the secureum bootcamp in order to break
        into the role of a smart auditor and web3 developer
      </p>
      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
        {ProjectData.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
