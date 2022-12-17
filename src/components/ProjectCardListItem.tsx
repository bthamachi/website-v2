import { CheckCircleIcon } from "@heroicons/react/24/solid";

type ProjectCardListProps = {
  itemText: string;
};

const ProjectCardListItem = ({ itemText }: ProjectCardListProps) => {
  return (
    <li className="-ml-2 grid grid-cols-8 ">
      <CheckCircleIcon className="mr-4 mt-1 h-5 w-5" />
      <span className="col-span-7">{itemText}</span>
    </li>
  );
};

export default ProjectCardListItem;
