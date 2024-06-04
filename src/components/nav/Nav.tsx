// type Props = {};
import navStyles from "./nav.module.scss";
import { Logo } from "../../assets/images";
import { menuBtn } from "../../assets/icons";
import MenuModal from "../menuModal/MenuModal";
import { useState } from "react";

const Nav = () => {
  const [menuModal, setMenuModal] = useState<boolean>(false);

  const handleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      {menuModal && <div className={navStyles.overlay}></div>}

      <section
        className={` max-container flex flex_ai-c ${navStyles.nav__container}`}
      >
        <img className={`${navStyles.nav__logo}`} src={Logo} alt="logo" />

        <div className={`${navStyles.nav__menu}`}>
          <li>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </li>
        </div>

        <div onClick={handleMenuModal} className={navStyles.nav__menuBtn}>
          <img src={menuBtn} alt="menu-btn" />
        </div>

        {menuModal && <MenuModal />}
      </section>
    </>
  );
};

export default Nav;
