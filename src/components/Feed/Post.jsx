import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpSharp,
} from "@material-ui/icons";
import React from "react";
import FeedOptoin from "./FeedOptoin";
import "./Post.css";

const Post = ({ name, description, photoUrl, message }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
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
    </div>
  );
};

export default Post;
