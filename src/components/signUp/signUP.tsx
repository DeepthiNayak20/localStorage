import { useState, useEffect } from "react";

const SignUP = () => {
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

    // localStorage.setItem("users", JSON.stringify(userData));

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("previousData", previousData);

    // previousData.map((user: any) => {
    //   console.log("user", userData.userName);
    //   if (userData.userName === user.userName) {
    //     setExist(true);
    //     break();
    //   }
    // });

   

    // for (let i = 0; i < previousData.length; i++) {
    //   if (userData.userName === previousData[i].userName) {
    //     arr.push("exist");

    //     break;
    //   }
    // }
    const arr:any[] = [];
    previousData.map((user:any)=>{
      if (userData.userName === user.userName) {
        arr.push("exist");}
    })

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
        } else {
          alert("password mismatch");
        }
      }
    }
  };

  return (
    <div>
      <h1>sign up</h1>
      <form onSubmit={signUpHandler}>
        <input type="text" placeholder="username" name="userName" />
        <div>
          designation
          <select name="designation">
            <option value="student">student</option>
            <option value="student">Employee</option>
          </select>
        </div>
        <input type="text" placeholder="new Password" name="password" />
        <input type="text" placeholder="confirm password" name="cPassword" />
        <input type="submit" value="save" />
        {/* <button>button</button> */}
      </form>
    </div>
  );
};

export default SignUP;
