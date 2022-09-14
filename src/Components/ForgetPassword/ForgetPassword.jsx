import { Button, TextField } from "@mui/material";
import React from "react";
import UserService from "../../Services/UserService";
import Header from "../Header/Header";
import "./ForgetPassword.css";

const userservice = new UserService();
function ForgetPassword(props) {
  const [text, setText] = React.useState({
    email: "",
  });

  const changeState = (event) => {
    setText((previousValue) => {
      return { ...previousValue, [event.target.name]: event.target.value };
    });
  };

  const next = () => {
    let data = {
      email: text.email,
    };
    console.log(data);
    userservice
      .forgetPassword(data)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="continer">
      <div className="main_container">
        <div className="toolbarContainer">
          <Header></Header>
        </div>

        <div className="heading">
          <h5>Forgot Your Password?</h5>
        </div>

        <div className="box">
          <div className="textBox">
            <span>
              Enter your email address and we'll send you a link to reset your
              password
            </span>
          </div>

          <div className="emailfields">
            <TextField
              size="small"
              label="email"
              name="email"
              onChange={(e) => changeState(e)}
            ></TextField>
            <div className="reset_part">
              <Button
                className="button_cls"
                style={{ fontSize: 10, color: "white" }}
                onClick={next}
              >
                Reset Password
              </Button>
            </div>

            <div className="create_part">
              <Button
                style={{ marginTop: 25, color: "black", fontWeight: 520 }}
                href="http://localhost:3000/"
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
