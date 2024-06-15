import { useThemeContext } from "context/useThemeContext";
import NavItem from "./NavItem";
import useScroll from "hooks/useScroll";

const Navigation = () => {
  const { isDark } = useThemeContext();
  const activeSection = useScroll();

  return (
    <nav className='hidden md:block'>
      <ul>
        <NavItem
          isActive={activeSection === "section1"}
          isDark={isDark}
          count={0}
          name='Works'
          path='#section1'
        />
        <NavItem
          isActive={activeSection === "section2"}
          isDark={isDark}
          count={1}
          name='Experience'
          path='#section2'
        />
       
      </ul>
    </nav>
  );
};

export default Navigation;
