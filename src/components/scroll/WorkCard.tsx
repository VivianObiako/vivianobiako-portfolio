import { ReactNode } from "react";

import Briefcase from "assets/icons/Briefcase";
import { colors } from "utils/constants/colors";
import Seperator from "./Seperator";

const WorkCard = ({
  isDark = true,
  icon = <Briefcase svgFill={isDark ? colors.light : colors.night} />,
}: {
  isDark?: boolean;
  icon?: ReactNode;
}) => {
  return (
    <div className="custom-transition md:group-hover:opacity-50 md:hover:!opacity-100">
      <article className='my-0 flex items-center gap-5 custom-transition  [&>*:first-child]:md:hover:!scale-[1.1]'>
        <div
          className={`flex items-center justify-center flex-none transition rounded-full w-20 h-20 lg:w-24 lg:h-24 ${
            isDark ? "bg-gray" : "bg-grey"
          }`}
        >
          {icon}
        </div>
        <div className='flex flex-col'>
          <h3
            className={`text-lg font-semibold tracking-wide leading-snug md:leading-tight text-zenith ${
              isDark ? "text-white-200" : "text-black-200"
            }`}
          >
            First City Monument Bank
          </h3>
          <p className='mt-2 mb-2 text-neutral text-sm tracking-wide'>Software Engineer</p>
          <time
            className={`inline-block mt-2 text-xs font-medium tracking-widest uppercase opacity-85 ${
              isDark ? "text-white-200" : "text-black-200"
            }`}
          >
            June 29, 2021 - June 29, 2021
          </time>
        </div>
      </article>
      <Seperator />
    </div>
  );
};

export default WorkCard;
