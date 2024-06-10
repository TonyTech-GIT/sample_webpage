// import React from 'react'

import { Logo } from "../../assets/images";
import footerStyles from "./footer.module.scss";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// type Props = {}

const Footer = () => {
  const footerContainerRef = useRef(null);

  const isInView = useInView(footerContainerRef, { threshold: 0.1 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.footer
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.3 }}
      ref={footerContainerRef}
      className={`max-container flex flex_ai-c ${footerStyles.footerContainer}`}
    >
      <motion.div
        // initial="hidden"
        // animate={mainControls}
        // variants={{
        //   hidden: { opacity: 0, y: 75 },
        //   visible: {
        //     opacity: 1,
        //     y: 0,
        //   },
        // }}
        // transition={{ delay: 0.3 }}
        className={footerStyles.imageContainer}
      >
        <img src={Logo} alt="logo" />
      </motion.div>

      <motion.p>Copyright, &copy; 2024</motion.p>
    </motion.footer>
  );
};

export default Footer;
