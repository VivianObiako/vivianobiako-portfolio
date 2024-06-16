import { colors } from "utils/constants/colors";
import { useThemeContext } from "context/useThemeContext";
import Github from "assets/icons/Github";
import Profile from "assets/images/memoji.png"
import Email from "assets/icons/Email";
import ExternalIcon from "assets/icons/ExternalIcon";
import LinkedInIcon from "assets/icons/LinkedInIcon";
import SunIcon from "assets/icons/SunIcon";
import MoonIcon from "assets/icons/MoonIcon";

const Footer = () => {
    const { isDark, setIsDark } = useThemeContext();

    return (
        <div className='flex flex-col items-start gap-5 mt-10'>
        <div className='flex items-center gap-4'>
            <div
            className={`image w-12 h-12 rounded-ful`}
            >
            <img src={Profile} alt='' className='w-full rounded-full' />
            </div>
            <div className='flex items-center gap-4'>
            <a
                className='opacity-80 hover:opacity-100 transition flex items-center gap-1'
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/VivianObiako'
            >
                <Github width='20' svgFill={isDark ? colors.light : colors.night} />
                <span className={`text-xs ${isDark ? "text-light" : "text-night"} hidden sm:block`}>Github</span>
                <ExternalIcon width='14' svgFill={isDark ? colors.light : colors.night} className="hidden sm:block" />
            </a>
            <a
                className='opacity-80 hover:opacity-100 transition flex items-center gap-1'
                target='_blank'
                rel='noreferrer noopener'
                href='mailto:vivianobiako1@gmail.com'
            >
                <Email width='20' svgFill={isDark ? colors.light : colors.night} />
                <span className={`text-xs ${isDark ? "text-light" : "text-night"} hidden sm:block`}>Email</span>
                <ExternalIcon width='14' svgFill={isDark ? colors.light : colors.night} className="hidden sm:block" />
            </a>
            <a
                className='opacity-80 hover:opacity-100 transition flex items-center gap-1'
                target='_blank'
                rel='noreferrer noopener'
                href='https://www.linkedin.com/in/vivian-obiako/'
            >
                <LinkedInIcon width='20' svgFill={isDark ? colors.light : colors.night} />
                <span className={`text-xs ${isDark ? "text-light" : "text-night"} hidden sm:block`}>LinkedIn</span>
                <ExternalIcon width='14' svgFill={isDark ? colors.light : colors.night} className="hidden sm:block" />
            </a>
            </div>
        </div>
        <footer className='flex item-center gap-3'>
            <p className='text-neutral text-xs pb-0.5 font-light hidden md:flex items-center gap-2 opacity-60 '>
            Inspired by
            <a
                href='https://sarahdayan.dev/'
                target='_blank'
                rel='noreferrer noopener'
                className={isDark ? "text-light" : "text-night"}
            >
                Sarah Dayan
            </a>
            </p>
            <div className="flex">
                <label className='switcher inline-flex items-center cursor-pointer gap-1'>
                <input
                    type='checkbox'
                    value=''
                    className='sr-only peer'
                    checked={isDark}
                    onChange={() => setIsDark(!isDark)}
                />
                <div
                    className="relative w-8 h-4 peer-focus:outline-none  rounded-full 
                    peer-checked:bg-gray bg-grey peer-checked:after:translate-x-full 
                    rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black-200 
                    border-white-200 after:content-[''] after:absolute after:top-[2.2px] after:start-[3px] 
                    after:border after:rounded-full after:h-3 after:w-3  after:transition-all after:border-[#c6c6c6]"
                />
                {isDark 
                    ? <SunIcon />
                    : <MoonIcon />
                }
                </label>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
