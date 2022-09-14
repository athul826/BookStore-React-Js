import { Button, TextField } from "@mui/material";
import "./Login.css";
import React from "react";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

const userservice = new UserService();
function Login(props) {
  const navigate = useNavigate();
  const [text, setText] = React.useState({
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
  });

  const changeState = (event) => {
    setText((previousValue) => {
      return { ...previousValue, [event.target.name]: event.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    const error = text;
    error.emailError = text.email === "" ? true : false;
    error.passwordError = text.password === "" ? true : false;

    setText({
      ...error,
    });
    
    isError = error.emailError || error.passwordError;
    return isError;
  };

  const next = () => {
    let isValidated = validation();
    let data = {
      email: text.email,
      password: text.password,
    };

    if (!isValidated) {
      console.log(data);
      userservice
        .login(data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          console.log(res);
          navigate("/dashboard");
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="login_Box">
      <div className="email_field">
        <TextField
          label="email"
          name="email"
          size="small"
          error={text.emailError}
          helperText={
            text.emailError == true ? "Should not be empty Field" : ""
          }
          onChange={(e) => changeState(e)}
        />
      </div>

      <div className="password_field">
        <TextField
          label="password"
          name="password"
          size="small"
          error={text.passwordError}
          helperText={
            text.passwordError == true ? "Should not be empty Field" : ""
          }
          onChange={(e) => changeState(e)}
        />

        <div class="Forget_password">
        <a className='forgetlink' href='http://localhost:3000/forgotpassword'>Forgot password?</a>
        </div>
      </div>
      <div className="login_button">
        <Button className="login-btn">
          <div className="login_text" onClick={next}>
            {" "}
            Login{" "}
          </div>
        </Button>
      </div>
      <div className="or"> ---OR--- </div>
      <div className="Below_Button">
        <button variant="contained" className="facebook_button">
          Facebook
        </button>
        <Button variant="outlined" className="google_button">
          Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
