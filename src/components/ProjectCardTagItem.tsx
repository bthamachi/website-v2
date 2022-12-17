type ProjectCardTagItemProps = {
  tagItemName: string;
};

const ProjectCardTagItem = ({ tagItemName }: ProjectCardTagItemProps) => {
  return (
    <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs tracking-wide text-gray-600">
      {tagItemName}
    </span>
  );
};

export default ProjectCardTagItem;
