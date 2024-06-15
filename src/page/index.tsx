import Scroll from "components/scroll";
import Static from "components/static";
import { useThemeContext } from "context/useThemeContext";

const Main = () => {
  const { isDark } = useThemeContext();

  return (
    <main>
      <div className={`h-screen w-screen fixed top-0 left-0 ${isDark ? "bg-night" : "bg-light"}`}/>
      <div className='min-h-screen hide-scroll w-screen relative grid hide-scroll z-[2]'>
        <Static />
        <Scroll />
      </div>
    </main>
  );
};

export default Main;
