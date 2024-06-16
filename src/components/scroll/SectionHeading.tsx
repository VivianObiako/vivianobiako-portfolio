import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  id: string;
  className?: string;
  isDark?: boolean;
}

const SectionHeading = ({ children, title, id, className = "", isDark }: Props) => {
  return (
    <div
      data-section
      id={id}
      className={`w-full flex flex-col md:gap-2 md:pt-[90px] md:-scroll-mt-[5px] ${
        className ? className : ""
      } `}
    >
      <h3
        className={`title md:text-neutral sticky md:relative top-[10px] py-3 z-50 text-sm font-semibold uppercase ${
          isDark ? "text-grey" : "text-gray"
        }`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};

export default SectionHeading;
