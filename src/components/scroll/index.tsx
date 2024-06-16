import SectionHeading from "./SectionHeading";
import useScroll from "hooks/useScroll";
import { useThemeContext } from "context/useThemeContext";
import MainCard from "./MainCard";
import SecondaryCard from "./SecondaryCard";
import WorkCard from "./WorkCard";
import { ThemeChange } from "./ThemeChange";
import { CVDownload } from "./CVDownload";

const Scroll = () => {
    const activeSection = useScroll();
    const { isDark } = useThemeContext();

    const mobileActiveStyle = {
        background: isDark
        ? "linear-gradient(0deg,hsla(0,0%,8%,0),#151515)"
        : "linear-gradient(0deg,hsla(0,0%,8%,0),#eee)",
    };

    return (
        <>
        <div className='md:hidden'>
            <div
            className={`fixed top-0 left-0 z-20 w-full h-[64px]  shift-0 transition ${
                isDark ? "bg-gray" : "bg-grey"
            } ${activeSection ? "shift-0" : "-shift-y-96"}`}
            >
                <div className="flex relative z-[60] r-0 justify-end top-[20px] pr-5 gap-3">
                    <CVDownload isHeader />
                    <ThemeChange isHeader />
                </div>
            </div>
            <div
            style={mobileActiveStyle}
            className={`fixed top-0 left-0 z-50 w-full h-[32px] mt-[64px] shift-0 transition ${
                activeSection ? "shift-0" : "-shift-y-96"
            }`}
            />
        </div>
        <div className='scrolling-section hide-scroll focus-visible:outline-none flex flex-col gap-0 justify-between px-5 sm:px-10 pb-20 lg:pb-[90px] lg:pt-0 xl:pr-[90px] xl:pl-10 md:w-1/2 md:justify-self-end'>
            <SectionHeading isDark={isDark} id='section1' className='section1' title='Highlights'>
                <div className='group pb-20 md:pb-0'>
                    <MainCard isDark={isDark} />
                    <MainCard isDark={isDark} />
                </div>
            </SectionHeading>
            <SectionHeading isDark={isDark} id='section2' className='section2' title='Experience'>
                <div className='group pb-20 md:pb-0 py-8 '>
                    <WorkCard isDark={isDark} />
                    <WorkCard isDark={isDark} isLast={true} />
                </div>
            </SectionHeading>
            <SectionHeading isDark={isDark} id='section3' className='section3' title='Projects'>
                <div className='group grid lg:mt-[35px] lg:grid-cols-2 gap-x-[9px] pb-20 md:pb-0'>
                    <SecondaryCard isDark={isDark} />
                    <SecondaryCard isDark={isDark} />
                    <SecondaryCard isDark={isDark} />
                    <SecondaryCard isDark={isDark} />
                    <SecondaryCard isDark={isDark} />
                    <SecondaryCard isDark={isDark} />
                </div>
            </SectionHeading>
        </div>
        </>
    );
};

export default Scroll;
