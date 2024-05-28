// type Props = {};
import navStyles from "./nav.module.scss";
import { logo } from "../../assets";

const Nav = () => {
  return (
    <section
      className={` max-container flex flex_ai-c ${navStyles.nav__container}`}
    >
      <img className={`${navStyles.nav__logo}`} src={logo} alt="logo" />
      {/* <div className={navStyles.nav__logo}>
        
      </div> */}
      <div className={`${navStyles.nav__menu}`}>
        <li>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </li>
      </div>
    </section>
  );
};

export default Nav;
