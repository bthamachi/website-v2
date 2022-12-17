import { shades } from "@/constants/worklog";
import { formatDate } from "@/lib/date";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import SmartLink from "./SmartLink";

type WorklogCellProps = {
  data: { [key: string]: string };
  dateKey: string;
};

const WorklogCell = ({ data, dateKey }: WorklogCellProps) => {
  if (!data[dateKey]) {
    return (
      <>
        <li id={dateKey} className="square cursor-pointer border"></li>
        <Tooltip anchorId={dateKey} content={formatDate(dateKey)} place="top" />
      </>
    );
  }
  const rating = data[dateKey] as string;

  const color = shades[parseInt(rating)];
  return (
    <>
      <SmartLink
        name={`Link to work log for ${dateKey}`}
        href={`/work-log/${dateKey}`}
      >
        <li
          id={dateKey}
          className="square cursor-pointer border"
          style={{
            backgroundColor: color,
          }}
        ></li>
      </SmartLink>
      <Tooltip anchorId={dateKey} content={formatDate(dateKey)} place="top" />
    </>
  );
};

export default WorklogCell;
