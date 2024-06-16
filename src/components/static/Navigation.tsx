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
          name='Highlights'
          path='#section1'
        />
        <NavItem
          isActive={activeSection === "section2"}
          isDark={isDark}
          count={1}
          name='Experience'
          path='#section2'
        />
        <NavItem
          isActive={activeSection === "section3"}
          isDark={isDark}
          count={2}
          name='Work'
          path='#section3'
        />
       
      </ul>
    </nav>
  );
};

export default Navigation;
