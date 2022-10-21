import { useState, useEffect } from "react";
import { DashBoard } from "../../views/dashboard/dashboard";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate = useNavigate();
  // console.log("users", convertedUsers);

  const convertedUsers = localStorage.getItem("users") || "[]";
  if (convertedUsers === "[]") {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const signUpHandler = (event: any) => {
    event.preventDefault();

    const userName = event.target.userName.value;
    const designation = event.target.designation.value;
    const password = event.target.password.value;
    const cPassword = event.target.cPassword.value;

    const userData = {
      userName,
      designation,
      password,
      cPassword,
    };

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("previousData", previousData);

    const arr: any[] = [];
    previousData.map((user: any) => {
      if (userData.userName === user.userName) {
        arr.push("exist");
      }
    });

    if (arr.includes("exist")) {
      alert("user already exist");
    } else {
      if (
        userName !== "" &&
        designation !== "" &&
        password !== "" &&
        cPassword !== ""
      ) {
        if (password === cPassword) {
          previousData.push(userData);

          localStorage.setItem("users", JSON.stringify(previousData));
          localStorage.setItem("auth", "true");
          navigate("/dashboard");
          window.location.reload();
        } else {
          alert("password mismatch");
        }
      }
    }
  };

  return (
    <div>
      <div className="signUpContainer">
        <div className="cardContainer">
          <div className="signUpHead">sign up</div>
          <div className="formContainer">
            <form onSubmit={signUpHandler} className="formContain">
              <div className="userName">
                <input
                  type="text"
                  placeholder="username"
                  name="userName"
                  className="inputField"
                />
              </div>
              <div className="designation">
                <select name="designation" className="inputField">
                  <option value="student">student</option>
                  <option value="student">Employee</option>
                </select>
              </div>
              <div className="password">
                <input
                  type="text"
                  placeholder="new Password"
                  name="password"
                  className="inputField"
                />
                <img
                  src={require("../../assets/icons/eye_on.png")}
                  alt=""
                  className="eyeIcon"
                />
              </div>
              <div className="password">
                <input
                  type="text"
                  placeholder="confirm password"
                  name="cPassword"
                  className="inputField"
                />
              </div>
              <div className="btn">
                <input type="submit" value="save" className="btnSubmit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
