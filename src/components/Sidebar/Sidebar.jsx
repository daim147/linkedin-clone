import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const recentItems = (item) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{item}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Husnain Syed</h2>
        <h4>daimsyed@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__stat__number">5,302</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Posts</p>
          <p className="sidebar__stat__number">2,248</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItems("Html")}
        {recentItems("Css")}
        {recentItems("JavaScript")}
        {recentItems("React")}
      </div>
    </div>
  );
};

export default Sidebar;
