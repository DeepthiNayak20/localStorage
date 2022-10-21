import "./dasboard.css";
import { useState } from "react";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);

  const [index, setindex] = useState(0);

  const displayData = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(displayData);
  const onDelete = (i: any) => {
    displayData.splice(i, 1);
    console.log(displayData);
    localStorage.setItem("users", JSON.stringify(displayData));
    window.location.reload();
  };

  const onEditsubmit = (e: any, i: any) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const designation = e.target.designation.value;
    const password = e.target.password.value;
    const cPassword = e.target.cPassword.value;

    const userData = {
      userName,
      designation,
      password,
      cPassword,
    };

    displayData[i] = userData;
    localStorage.setItem("users", JSON.stringify(displayData));
    console.log(displayData);

    window.location.reload()
  };

  return (
    <div>
      {displayData.map((user: any, i: number) => {
        return (
          <div key={i} style={{ borderBottom: "2px solid #000000" }}>
            <div>User:{i + 1}</div>
            <div>UserName:{user.userName}</div>
            <div>Designation{user.designation}</div>
            <div className="btns">
              <button
                onClick={(i: any) => {
                  onDelete(i);
                }}
              >
                Delete
              </button>
              <button
                onClick={(e: any) => {
                  setModal(true);
                  setindex(i);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
      {modal ? (
        <div className="modal">
          <div className="modalContainer">
            <button onClick={() => setModal(false)}>close</button>
            <div className="cardContainer">
              <div className="signUpHead">sign up</div>
              <div className="formContainer">
                <form
                  className="formContain"
                  onSubmit={(e) => {
                    onEditsubmit(e, index);
                  }}
                >
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
      ) : (
        ""
      )}
    </div>
  );
};
