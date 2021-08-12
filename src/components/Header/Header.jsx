import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { motion } from "framer-motion";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import { auth } from "../../Firebase";

const variant = {
  initial: {
    y: -100,
  },
  final: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.7,
    },
  },
};

const Header = () => {
  const onLogout = () => {
    auth.signOut();
  };
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="final"
      className="header"
    >
      {/* Header Left */}
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        {/* Header Seacrh */}
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* Header Right */}
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="My Job" />
        <HeaderOption Icon={Chat} title="Messeging" />
        <HeaderOption Icon={Notifications} title="Notification" />
        <HeaderOption avatar={true} title="Me" onClick={onLogout} />
      </div>
    </motion.div>
  );
};

export default Header;
