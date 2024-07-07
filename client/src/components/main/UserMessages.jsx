import { useState } from "react";
import "./UserMessages.css";

export default function UserMessages({ username, cat_name, message, id }) {
  //? Adding delete function to attempt stretch goal
  const [msgDelete, setMsgDelete] = useState(false);

  async function deleteMsg() {
    const response = await fetch(
      //?gotta use back ticks to allow input of dynamic url (I think...)
      `https://week-7-assignment-client.onrender.com/deleteformdata/${id}` ||
        `http://localhost:7430/deleteformdata/${id}`,
      {
        METHOD: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      setMsgDelete(!msgDelete);
    }
  }

  return (
    <>
      <div className="userMsgBox" key={id}>
        <h2>Name: {username}</h2>
        <h3>Track: {cat_name}</h3>
        <p>Message: {message}</p>
        <button onClick={deleteMsg}>🗑</button>
      </div>
    </>
  );
}
