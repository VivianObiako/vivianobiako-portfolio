import { ReactNode } from "react";

import Briefcase from "assets/icons/Briefcase";
import { colors } from "utils/constants/colors";
import { experience } from "utils/types/models";

const WorkCard = ({
  isDark = true,
  icon = <Briefcase svgFill={isDark ? colors.light : colors.night} />,
  data
}: {
  isDark?: boolean;
  icon?: ReactNode;
  isLast?: boolean;
  data: experience;
}) => {
  return (
      <article className='my-0 flex items-center gap-5 py-4 custom-transition [&>*:first-child]:md:hover:!scale-[1.1] custom-transition md:group-hover:opacity-50 md:hover:!opacity-100 relative'>
        <div
          className={`flex items-center !opacity-100 justify-center flex-none relative z-10 transition rounded-full w-20 h-20 lg:w-24 lg:h-24 ${
            isDark ? "bg-gray" : "bg-grey"
          }`}
        >
          {icon}
        </div>
        <div className='flex flex-col'>
          <h3
            className={`md:text-lg text-sm font-semibold tracking-wide leading-snug md:leading-tight text-zenith ${
              isDark ? "text-white-200" : "text-black-200"
            }`}
          >
            {data.place}
          </h3>
          <p className='mt-2 mb-2 text-neutral text-xs md:text-sm tracking-wide'>{data.title}</p>
          <time
            className={`inline-block mt-2 text-xs font-medium tracking-widest uppercase opacity-85 ${
              isDark ? "text-white-200" : "text-black-200"
            }`}
          >
            {data.timeframe}
          </time>
        </div>
      </article>
  );
};

export default WorkCard;
