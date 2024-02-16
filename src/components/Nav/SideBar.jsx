import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";
import Links from "./Links";
import Logo from "./Logo";

function SideBar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 30px 30px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      animate={open ? "open" : "closed"}
      className="z-10 flex h-full flex-col items-center bg-dark-200"
    >
      <motion.div
        className={`sidebar  bottom-0 left-0 top-0 bg-dark-200`}
        variants={variants}
      >
        <Logo></Logo>
        <Links></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.nav>
  );
}
export default SideBar;
