import { CVDownload } from "components/scroll/CVDownload";
import { useThemeContext } from "context/useThemeContext";

const PersonalInformation = () => {
  const { isDark } = useThemeContext();

  return (
    <div className='flex flex-col hero'>
      <h1
        className={`name w-full flex flex-col gap-2 text-5xl font-bold lg:text-[64px] leading-none opacity-90 name ${
          isDark ? "text-light" : "text-night"
        } `}
      >
        Vivian Obiako
      </h1>
      <h2
        className={`mt-5 lg:mt-2 text-lg w-fit font-semi-bold leading-tight ${
          isDark ? "text-light" : "text-night"
        }`}
      >
        Software Engineer
      </h2>
      <div className='leading-loose '>
        <p className='mt-8 leading-7 text-sm text-neutral md:max-w-["400px"] description'>
          I'm a <span className={`underline ${isDark ? "text-light flash-light" : "text-night flash-dark"}`}>Software engineer</span> 
          {" "}dedicated to{" "}
          <span className={`underline ${isDark ? "text-light flash-light" : "text-night flash-dark"}`}>
            building solutions
          </span>{" "}
          using{" "}
          <span className={`underline ${isDark ? "text-light flash-light" : "text-night flash-dark"}`}>frontend technology</span>
          . {" "}
          <span> 
            I am focused on great {" "} 
            <span className={`underline ${isDark ? "text-light flash-light" : "text-night flash-dark"}`}>user experience</span>, 
            {" "}design engineering,{" "} 
            <span className={`underline ${isDark ? "text-light flash-light" : "text-night flash-dark"}`}>accessibility</span> 
            {" "}and web animations.
          </span>
        </p>
        <p></p>
      </div>
      <CVDownload />
    </div>
  );
};

export default PersonalInformation;
