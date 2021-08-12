import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpSharp,
} from "@material-ui/icons";
import React from "react";
import { motion } from "framer-motion";
import FeedOptoin from "./FeedOptoin";
import "./Post.css";

const variant = {
  initial: {
    opacity: 0,
    y: -100,
  },
  final: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      type: "spring",
      duration: 1,
      bounce: 0.7,
    },
  }),
};

const Post = ({ name, description, photoUrl, message, index }) => {
  return (
    <motion.div
      layout
      custom={index}
      transition={{ duration: 0.6 }}
      initial="initial"
      animate="final"
      variants={variant}
      className="post"
    >
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <FeedOptoin Icon={ThumbUpSharp} title="Like" color="gray" />
        <FeedOptoin Icon={ChatOutlined} title="Comments" color="gray" />
        <FeedOptoin Icon={ShareOutlined} title="Share" color="gray" />
        <FeedOptoin Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </motion.div>
  );
};

export default Post;
