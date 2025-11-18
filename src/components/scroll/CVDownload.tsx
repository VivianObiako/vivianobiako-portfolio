import DownloadIcon from "assets/icons/DownloadIcon"
import { useThemeContext } from "context/useThemeContext"

interface Props {
    isHeader?: boolean;
}

export const CVDownload = ({isHeader=false}:Props) => {
    const {isDark} = useThemeContext()
  return (
    <a download="VivianObiakoResume.pdf" href={"/Vivian Obiako-CV-2025.pdf"} className={`flex items-center  w-fit cursor-pointer hover:opacity-85 ${!isHeader ? "py-[.6rem] px-[1rem] mt-2" :""} ${isDark ? "bg-gray" : "bg-grey"}`}>
        <p className="text-neutral text-sm">
            {!isHeader && <span>Download</span>}
            {" "}CV
        </p>
        <DownloadIcon className="w-[16px]" />
    </a>
  )
}
