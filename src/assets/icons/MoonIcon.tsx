import { CustomIconProps } from "utils/types/models";

export default function MoonIcon({
    svgFill = "#949495",
    pathFill = "none",
    width = "24",
    height = "24",
    className
    }: CustomIconProps) {
    return (
        <svg
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill={pathFill}
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        strokeWidth={1.5} 
        stroke={svgFill}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    );
}

