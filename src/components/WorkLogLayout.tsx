import { AUTHOR, WEBSITE_NAME, WEBSITE_URL } from "@/constants/seo";
import { shades } from "@/constants/worklog";
import { joinClassNames } from "@/lib/css";
import { formatDateFromMetadata, formatDateToDDMMYYformat } from "@/lib/date";
import { Metadata as MetadataType } from "@/types/Post";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { add, format } from "date-fns";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import data from "../constants/worklog.json";
import HeaderText from "./HeaderText";
import Layout from "./Layout";
import Metadata from "./Metadata";
import WorklogCell from "./WorklogCell";

type WorkLogLayoutProps = {
  children: ReactNode;
  meta: MetadataType;
};

const supportedYears = ["2022", "2023"];

const WorkLogLayout = ({ children, meta }: WorkLogLayoutProps) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const router = useRouter();

  const shuffleToRandomDate = () => {
    const currDate = router.pathname.split("/").at(2);
    const dates = Object.keys(data).filter((key) => key !== currDate);

    const chosenDate = Math.floor(Math.random() * dates.length);

    router.push(`/work-log/${dates[chosenDate]}`);
  };

  return (
    <>
      <Metadata
        title={`Proof of Work Log for ${meta.date} by ${AUTHOR}`}
        description={`${WEBSITE_NAME} - A Daily log of all things I got up to by ${AUTHOR} for the date ${meta.date} at ${WEBSITE_URL}`}
        author={`${AUTHOR}`}
      />
      <Layout>
        <HeaderText text="Work Log" />
        <h3>Proof Of Work</h3>

        <p className="text-sm text-gray-400">
          Heavily Inspired by DeGods&apos;s own proof-of-work page and modified
          for my own purposes. Thank you random dust lab man for figuring out
          the complex stuff.
        </p>

        <div>
          {supportedYears.map((year) => {
            return (
              <span
                key={year}
                onClick={() => setSelectedYear(year)}
                className={joinClassNames(
                  year === selectedYear ? "rounded-lg bg-gray-200 py-2" : "",
                  "cursor-pointer px-4 text-gray-700"
                )}
              >
                {year}
              </span>
            );
          })}
        </div>

        {/* Dates */}
        <ul className="months -mb-4 list-none px-0 text-xs md:text-sm">
          {Array.from({ length: 12 }, () => 0)
            .map((_, idx) => idx)
            .map((month) => {
              return (
                <li key={month}> {format(new Date(2022, month, 6), "MMM")}</li>
              );
            })}
        </ul>

        {/* Work Logs */}
        <ul className="squares list-none px-0">
          {Array.from({ length: 365 }, () => 0)
            .map((_, idx) => {
              return formatDateToDDMMYYformat(
                add(new Date(parseInt(selectedYear), 0, 1), { days: idx })
              );
            })
            .map((item) => {
              return <WorklogCell key={item} data={data} dateKey={item} />;
            })}
        </ul>
        <div className="">
          <div className="flex items-center justify-center">
            <p className="mx-4">Low Impact</p>
            {shades.map((color) => {
              return (
                <div
                  key={color}
                  style={{
                    backgroundColor: color,
                  }}
                  className="h-5 w-5"
                ></div>
              );
            })}
            <p className="mx-4">High Impact</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => shuffleToRandomDate()}
            className="flex items-center rounded-md bg-blue-700 py-2 px-4 text-white"
          >
            <ArrowPathIcon className="mr-2 h-6 w-6" />
            Shuffle
          </button>
        </div>

        <h2>Worklog for {formatDateFromMetadata(meta)}</h2>
        <p className="text-sm"> ---{meta.description}---</p>
        {children}
      </Layout>
    </>
  );
};

export default WorkLogLayout;
