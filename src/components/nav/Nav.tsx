// type Props = {};
import navStyles from "./nav.module.scss";
import { Logo } from "../../assets/images";
import { menuBtn } from "../../assets/icons";
import MenuModal from "../menuModal/MenuModal";
import { useState } from "react";

import { motion } from "framer-motion";

const Nav = () => {
  const [menuModal, setMenuModal] = useState<boolean>(false);

  const handleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      {menuModal && <div className={navStyles.overlay}></div>}

      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
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
      </motion.section>
    </>
  );
};

export default Nav;
