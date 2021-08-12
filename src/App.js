import React, { useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar/Sidebar";
import LoginPage from "./components/Login/LoginPage";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import { auth } from "./Firebase";
import Widget from "./components/Widget/Widget";

function App() {
  const user = useSelector((state) => state.userAuth.user);
  const isFetch = useSelector((state) => state.userAuth.isFetch);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else if (!userAuth) {
        dispatch(logout());
      }
    });

    return () => unSubscribe();
  }, [dispatch, isFetch]);
  if (!user) {
    return <LoginPage />;
  }
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
