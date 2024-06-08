// import React from 'react'

import { Logo } from "../../assets/images";
import footerStyles from "./footer.module.scss";

// type Props = {}

const Footer = () => {
  return (
    <footer
      className={`max-container flex flex_ai-c ${footerStyles.footerContainer}`}
    >
      <div className={footerStyles.imageContainer}>
        <img src={Logo} alt="logo" />
      </div>

      <p>Copyright, &copy; 2024</p>
    </footer>
  );
};

export default Footer;
