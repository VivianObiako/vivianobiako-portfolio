import { CustomIconProps } from "utils/types/models";

export default function ExternalIcon({
  svgFill = "#000000",
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}
