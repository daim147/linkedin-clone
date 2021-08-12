import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector((state) => state.userAuth.user);

  return (
    <div onClick={onClick ? onClick : null} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoURL || ""} className="headerOption__icon">
          {user?.displayName?.[0] || ""}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
