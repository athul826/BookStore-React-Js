import React from "react";
import "./HomePage.css";
import trolly from "../../Images/trolly.png";
import { useState } from "react";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

function HomePage(props) {
  const [ToClick, setToClick] = useState(true);
  const goToLogin = () => {
    setToClick(false);
  };

  const listenToSignup = () => {
    setToClick(true);
  };
  return (
    <div className="page1">
      <div className="page2">
        <div className="leftside">
          <div className="leftside_image">
            <img src={trolly} alt="" className="image" />
            <div className="text_part">
              <h3> Online Book Shopping</h3>{" "}
            </div>
          </div>
        </div>
        <div className="rightsidebox">
          <div className="topbutton">
            <div
              className="login"
              onClick={goToLogin}
              style={{ fontWeight: 700 }}
            >
              LOGIN
            </div>
            <div
              className="signUp"
              onClick={listenToSignup}
              style={{ fontWeight: 700 }}
            >
              SIGNUP
            </div>
          </div>
          <div className="fields">
            <div className="comp">{ToClick ? <SignUp /> : <Login />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
