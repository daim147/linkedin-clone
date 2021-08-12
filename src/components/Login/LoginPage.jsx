import React, { useState } from "react";
import image from "../../assests/linkedin.png";
import { auth } from "../../Firebase";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { nameFetch, userPending } from "../../features/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilPic] = useState("");
  const dispatch = useDispatch();

  //   ! Registering New User
  const register = () => {
    if (!name) {
      alert("Please Enter Your Full Name");
      return;
    }
    dispatch(userPending());

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        (userAuth) =>
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(nameFetch(true)); //! Just doing to update the APP function to run useEffect again
            })

        //   .then(() =>
        //     dispatch(
        //       login({
        //         email: userAuth.user.email,
        //         uid: userAuth.user.uid,
        //         photoURL: profilePic,
        //         displayName: name,
        //       })
        //     )
        //   )
      )
      .catch((error) => alert(error));
  };

  //   ! Signin Current User
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(userPending());

    auth
      .signInWithEmailAndPassword(email, password)

      //   !optional if user will have corrrect email and password (onAUthChangeListener will detect it and call the action creator with current user)
      //   .then((userAuth) => {
      //     console.log(userAuth);
      //     dispatch(
      //         login({
      //           email: userAuth.user.email,
      //           uid: userAuth.user.uid,
      //           photoURL: userAuth.user.photoURL,
      //           displayName: userAuth.user.displayName,
      //         })
      //       );
      //   })
      .catch((error) => alert(error));
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
