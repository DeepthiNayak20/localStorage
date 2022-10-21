import "./dasboard.css";
import { useState } from "react";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);

  const displayData = JSON.parse(localStorage.getItem("users") || "[]");
  console.log(displayData);
  const onDelete = (i: any) => {
    displayData.splice(i, 1);
    console.log(displayData);
    localStorage.setItem("users", JSON.stringify(displayData));
    window.location.reload();
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
              <button onClick={() => setModal(true)}>Edit</button>
            </div>
          </div>
        );
      })}
      {modal ? (
        <div className="modal">
          hi modal
          <button onClick={() => setModal(false)}>close</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
