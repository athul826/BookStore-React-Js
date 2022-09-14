import { Button, TextField } from "@mui/material";
import "./SignUp.css";
import React from "react";
import UserService from "../../Services/UserService";

const userservice = new UserService();
function SignUp(props) {
  const [text, setText] = React.useState({
    role: "",
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirm: "",
    MobileNumber: "",
    FirstNameError: false,
    LastNameError: false,
    emailError: false,
    passwordError: false,
    MobileNumberError: false,
  });

  const changeState = (event) => {
    setText((previousValue) => {
      return { ...previousValue, [event.target.name]: event.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    const error = text;
    error.FirstNameError = text.FirstName === "" ? true : false;
    error.LastNameError = text.LastName === "" ? true : false;
    error.emailError = text.email === "" ? true : false;
    error.passwordError = text.password === "" ? true : false;
    error.MobileNumberError = text.MobileNumber === "" ? true : false;

    setText({
      ...error,
    });
    isError =
      error.FirstNameError ||
      error.LastNameError ||
      error.emailError ||
      error.passwordError ||
      error.MobileNumberError;
    return isError;
  }

  const next = () => {
    let isValidated = validation();
    let data = {
      "role": text.role,
      "first_name": text.FirstName,
      "last_name": text.LastName,
      "email": text.email,
      "phone_no": text.MobileNumber,
      "password": text.password,
      "confirm_password": text.confirm,
    };
    
    if (!isValidated) {
      console.log(data );
      userservice.SignUp(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="main_box">
      <div className="box_2">
      <div className='role_part'>
          <TextField
           id="outlined_basic"
          className='role'
          name='role'
          label="Role"
           variant='outlined'
          size="small"
          onChange={(e) => changeState(e)}
          />
          </div>
        <div className="first_name">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name="FirstName"
            label="FirstName"
            variant="outlined"
            size="small"
            error={text.FirstNameError}
            helperText={
              text.FirstNameError == true ? "Should not be empty Field" : ""
            }
            onChange={(e) => changeState(e)}
          />
        </div>

        <div className="last_name">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name="LastName"
            label="LastName"
            variant="outlined"
            size="small"
            error={text.LastNameError}
            helperText={
              text.LastNameError == true ? "Should not be empty Field" : ""
            }
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="email_part">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name="email"
            label="email"
            variant="outlined"
            size="small"
            error={text.emailError}
            helperText={
              text.emailError == true ? "Should not be empty Field" : ""
            }
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="password_part">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name="password"
            label="password"
            variant="outlined"
            size="small"
            error={text.passwordError}
            helperText={
              text.passwordError == true ? "Should not be empty Field" : ""
            }
            onChange={(e) => changeState(e)}
          />
        </div>
        
        <div className="role_part">
          <TextField
            id="outlined_basic"
            className="role"
            name="confirm"
            label="confirmPassword"
            variant="outlined"
            size="small"
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="MobileNumber_part">
          <TextField
            id="outlined-basic"
            className="inputFirstName"
            name="MobileNumber"
            label="MobileNumber"
            variant="outlined"
            size="small"
            error={text.MobileNumberError}
            helperText={
              text.MobileNumberError == true ? "Should not be empty Field" : ""
            }
            onChange={(e) => changeState(e)}
          />
        </div>
        <div className="signUpBtn">
          <Button className="signUp-btn">
            <div style={{ color: "white" }} onClick={next}>
              SignUp
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
