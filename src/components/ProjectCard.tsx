import { Project } from "@/types/Project";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";
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
  code,
}: ProjectCardProps) => {
  return (
    <div className="px-2">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="list-none">
        {actionItems.map((actionItem) => {
          return <ProjectCardListItem key={actionItem} itemText={actionItem} />;
        })}
      </ul>
      <div>
        {techStack.map((tech) => {
          return <ProjectCardTagItem key={tech} tagItemName={tech} />;
        })}
      </div>
      <SmartLink name="Staking Contract Link" href={link}>
        <div className="flex items-center">
          <LinkIcon className="h-4 w-4" />
          <p className="ml-2 text-xs">{link}</p>
        </div>
      </SmartLink>
      <SmartLink name="Staking Contract Link" href={code}>
        <div className="-mt-6 flex items-center">
          <CodeBracketIcon className="h-4 w-4" />
          <p className="ml-2 text-xs">{code}</p>
        </div>
      </SmartLink>
    </div>
  );
};

export default ProjectCard;
