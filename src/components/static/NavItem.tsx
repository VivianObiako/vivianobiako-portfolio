interface Props {
    isDark?: boolean;
    isActive: boolean;
    path?: string;
    count: number;
    name: string;
}
    
const NavItem = ({ isDark, isActive = false, path = "#", count, name }: Props) => (
    <li
    className={`w-fit my-5 opacity-50 hover:opacity-100 ${isDark ? "text-grey" : "text-gray"} ${
        isActive ? "active_menu" : ""
    }`}
    >
    <small>
        <a aria-current='page' className='flex items-center' href={path}>
        <span>{count < 10 ? "0" + String(count) : String(count)}</span>
        <span className={`menu_bullet h-[2px] inline-block ${isDark ? "bg-grey" : "bg-gray"}`} />
        <span className='uppercase'>{name}</span>
        </a>
    </small>
    </li>
);

export default NavItem;