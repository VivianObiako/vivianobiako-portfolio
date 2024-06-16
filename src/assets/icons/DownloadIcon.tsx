import { CustomIconProps } from "utils/types/models";

export default function DownloadIcon({
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
            <path stroke={svgFill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
        </svg>
    );
}
