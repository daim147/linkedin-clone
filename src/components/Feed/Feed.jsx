import {
  CalendarViewDay,
  Create,
  Event,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Feed.css";
import FeedOptoin from "./FeedOptoin";
import Post from "./Post";
import firebase from "firebase";
import { database } from "../../Firebase";

const Feed = () => {
  const [inputVal, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // ! Setting Real Time Connection To database
  useEffect(() => {
    database
      .collection("posts")
      .orderBy("timeStamp", "desc") //! It will order the collection by timeStamp we provided
      .onSnapshot((snapShot) => {
        // ! Snapshot will give the whole information about (posts) collection
        setPosts(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  // ! Send Post To Data Base
  const sendPost = (e) => {
    e.preventDefault();

    // ! This will add new collection (object) in Posts (collection)
    database.collection("posts").add({
      name: "Husnain Syed",
      description: "I AM TESTING",
      message: inputVal,
      photoUrl: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={inputVal}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map(({ id, data: { name, message, description } }) => (
        <Post
          key={id}
          name={name}
          message={message}
          description={description}
        />
      ))}
    </div>
  );
};

export default Feed;
