import {
  CalendarViewDay,
  Camera,
  Create,
  Event,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React from "react";
import "./Feed.css";
import FeedOptoin from "./FeedOptoin";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedOptoin title="Photo" Icon={Image} color="#70b5f9" />
          <FeedOptoin title="Video" Icon={Subscriptions} color="#E7a33E" />
          <FeedOptoin title="Event" Icon={Event} color="#C0CBCD" />
          <FeedOptoin
            title="Write Article"
            Icon={CalendarViewDay}
            color="#7fc153"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
