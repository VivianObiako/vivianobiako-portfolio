import { project } from "utils/types/models";

const SecondaryCard = ({ isDark = true, data }: { isDark?: boolean, data: project }) => {
  return (
    <article
      className={`mt-[9px] secondary-card w-full lg:odd:-translate-y-[35px] custom-transition md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:!scale-[1.1] ${
        isDark ? "bg-gray" : "bg-grey"
      }`}
    >
      <a
        className='block p-10'
        href={data.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3
          className={`mt-3 text-xl font-semibold leading-tight ${
            isDark ? "text-white-200" : "text-black-200"
          }`}
        >
          {data.name}
        </h3>
        <small
          className={`mt-1 text-xs text-neutral opacity-70 inline-block ${
            isDark ? "text-white-200" : "text-black-200"
          }`}
        >
          {data.tools}
        </small>
        
        <p className='mt-3 text-neutral text-xs'>
          {data.description}
        </p>
        
      </a>
    </article>
  );
};

export default SecondaryCard;
