import MoonIcon from "assets/icons/MoonIcon";
import SunIcon from "assets/icons/SunIcon";
import { useThemeContext } from "context/useThemeContext";

interface Props {
    isHeader?: boolean
}

export const ThemeChange = ({isHeader=false}:Props) => {
    const { isDark, setIsDark } = useThemeContext();
  return (
    <div className="flex">
        <label className='switcher inline-flex items-center cursor-pointer gap-1'>
        <input
            type='checkbox'
            value=''
            className='sr-only peer'
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
        />
        {!isHeader && <div
            className="relative w-8 h-4 peer-focus:outline-none  rounded-full 
            peer-checked:bg-gray bg-grey peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black-200 
            border-white-200 after:content-[''] after:absolute after:top-[2.2px] after:start-[3px] 
            after:border after:rounded-full after:h-3 after:w-3  after:transition-all after:border-[#c6c6c6]"
        />}
        {isDark 
            ? <SunIcon />
            : <MoonIcon />
        }
        </label>
    </div>
  )
}
