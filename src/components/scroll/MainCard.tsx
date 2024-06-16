

const MainCard = ({ isDark = true }: { isDark?: boolean }) => {
  return (
    <article
      className={`main-card my-[15px] w-full custom-transition md:group-hover:opacity-50 md:hover:!opacity-100 md:hover:scale-[1.1] ${
        isDark ? "bg-gray" : "bg-grey"
      }`}
    >
      <a
        className='block p-10'
        href='https://github.com/dinerojs/dinero.js'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p
          className={`text-xs font-medium tracking-[2px] w-fit uppercase flex items-center gap-2 ${
            isDark ? "text-white-200" : "text-black-200"
          }`}
        >
           TypeScript
        </p>
        <h3
          className={`mt-3 text-2xl font-semibold leading-tight ${
            isDark ? "text-white-200" : "text-black-200"
          }`}
        >
          dinerojs/dinero.js
        </h3>
        <p className='mt-3 text-neutral text-sm'>
          Create, calculate, and format money in JavaScript and TypeScript.
        </p>
        <small
          className={`mt-7 text-xs text-neutral opacity-70 inline-block ${
            isDark ? "text-white-200" : "text-black-200"
          }`}
        >
          NextJS, TS, Tailwind, Viem
        </small>
      </a>
    </article>
  );
};

export default MainCard;
