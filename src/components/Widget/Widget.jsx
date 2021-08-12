import { FiberManualRecordRounded, Info } from "@material-ui/icons";
import React from "react";
import "./Widget.css";
import { motion } from "framer-motion";
const variant = {
  initial: {
    x: 300,
  },
  final: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.7,
      delay: 0.2,
    },
  },
};

const Widget = () => {
  const newArticle = (header, subtitle) => (
    <div className="news__article">
      <div className="news__articleLeft">
        <FiberManualRecordRounded />
      </div>
      <div className="news__articleRight">
        <h4>{header}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="final"
      className="widget"
    >
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle(
        "JavaScript most famous programming language",
        "Ecma-Script - 567 readers"
      )}
      {newArticle("React new update is awsome", "Raect - 987 readers")}
      {newArticle("Redux is getting popular", "Code - 116 readers")}
      {newArticle("Tesla hits new high", "Cars & Auto - 1576 readers")}
      {newArticle("Bitcoin breaks its own record", "Crypto - 89871 readers")}
      {newArticle("Corona shit is gone Away", "W.H.O - 89871 readers")}
    </motion.div>
  );
};

export default Widget;
