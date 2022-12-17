import { Project } from "@/types/Project";
import { LinkIcon } from "@heroicons/react/24/solid";
import ProjectCardListItem from "./ProjectCardListItem";
import ProjectCardTagItem from "./ProjectCardTagItem";
import SmartLink from "./SmartLink";

type ProjectCardProps = Project;

const ProjectCard = ({
  title,
  description,
  actionItems,
  techStack,
  link,
}: ProjectCardProps) => {
  return (
    <div className="px-2">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="list-none">
        {actionItems.map((actionItem) => {
          return <ProjectCardListItem itemText={actionItem} />;
        })}
      </ul>
      <div>
        {techStack.map((tech) => {
          return <ProjectCardTagItem tagItemName={tech} />;
        })}
      </div>
      <SmartLink
        name="Staking Contract Link"
        href="https://staking-contract-seven.vercel.app/"
      >
        <div className="flex items-center">
          <LinkIcon className="h-4 w-4" />
          <p className="ml-2 text-xs">{link}</p>
        </div>
      </SmartLink>
    </div>
  );
};

export default ProjectCard;
