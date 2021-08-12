import React, { useState } from "react";
import image from "../../assests/linkedin.png";
import { auth } from "../../Firebase";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilPic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      alert("Please Enter Your Full Name");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) =>
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() =>
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: profilePic,
                displayName: name,
              })
            )
          )
      )
      .catch((error) => alert(error));
  };
  const loginUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <img src={image} alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (Required if registering)"
          required
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilPic(e.target.value)}
          type="text"
          placeholder="Profile photo URL (optional) "
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          required
        />

        <button onClick={loginUser} type="submit">
          SignIn
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="lgin__register">
          Register now
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
