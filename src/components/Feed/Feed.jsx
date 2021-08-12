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
import { motion } from "framer-motion";
import { database } from "../../Firebase";
import { useSelector } from "react-redux";
import { AnimateSharedLayout } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
    y: -100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.7,
      delay: 0.4,
    },
  },
};

const Feed = () => {
  const [inputVal, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.userAuth.user);

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
    if (inputVal.trim() === "" || inputVal.trim().length < 10) {
      alert("Please input valid post and Min Characters(10)");
      setInput("");
      return;
    }
    // ! This will add new collection (object) in Posts (collection)
    database.collection("posts").add({
      name: user?.displayName || "",
      description: user.email,
      message: inputVal,
      photoURL: user?.photoURL || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <AnimateSharedLayout>
      <div animate={{ transition: { staggerChildren: 0.3 } }} className="feed">
        <motion.div
          initial="initial"
          animate="final"
          variants={variant}
          className="feed__inputContainer"
        >
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
        </motion.div>

        {posts.map(
          ({ id, data: { name, message, description, photoURL } }, i) => (
            <Post
              key={id}
              name={name}
              index={i}
              message={message}
              description={description}
              photoUrl={photoURL}
            />
          )
        )}
      </div>
    </AnimateSharedLayout>
  );
};

export default Feed;
