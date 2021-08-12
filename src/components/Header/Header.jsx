import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import { auth } from "../../Firebase";

const Header = () => {
  const onLogout = () => {
    auth.signOut();
  };
  return (
    <div className="header">
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
        <HeaderOption
          avatar="https://avatars.githubusercontent.com/u/69011172?v=4"
          title="Me"
          onClick={onLogout}
        />
      </div>
    </div>
  );
};

export default Header;
