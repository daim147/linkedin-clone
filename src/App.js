import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
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
  if (user === "pending") {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#0a66c2" height={80} width={80} />
      </div>
    );
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
