import React from "react";

const FeedOptoin = ({ title, Icon, color }) => {
  return (
    <div className="feed__inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default FeedOptoin;
