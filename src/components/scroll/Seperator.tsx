import { useThemeContext } from "context/useThemeContext";

const Seperator = () => {
    const { isDark } = useThemeContext();
  return (
    <div className="flex flex-col justify-center lg:w-24 w-20 ">
        <span className={`inline-block w-[13px] h-[13px] rounded-full ${isDark ? 'bg-light' : 'bg-night'} mx-auto`}> </span>
        <div className="flex justify-center">
            <span className={`block w-[1px] h-[100px] ${isDark ? 'bg-light' : 'bg-night'}`}> </span>
        </div>
    </div>
  )
}

export default Seperator