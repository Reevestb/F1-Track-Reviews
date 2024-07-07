import { useState } from "react";
import "./AddNew.css";

export default function NewTrack() {
  const [see, setSee] = useState(false);
  const [track, setTrack] = useState({ cat_name: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    //prevent default to stop data going to url
    //something that Fetches the POST endpoint
    const newData = await fetch(
      "https://week-7-assignment-client.onrender.com/newtrack" ||
        "http://localhost:7430/newtrack",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(track),
      }
    );
    const data = await newData.json();
    if (data.success) {
      setTrack({ cat_name: "" });
    }
  }

  function handleChange(event) {
    setTrack({ track, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h2 id="secretBtn" onClick={() => setSee(!see)}>
        Click Here To Add New Category
      </h2>
      {see ? (
        <form id="addForm" onSubmit={handleSubmit}>
          <label htmlFor="cat_name">New Track Name:</label>
          <input
            id="trackInput"
            type="text"
            name="cat_name"
            value={track.cat_name}
            onChange={handleChange}
            placeholder="Add new Track Name and Location"
            required
          />
          <button id="addBtn" type="submit">
            Submit
          </button>
        </form>
      ) : null}
    </>
  );
}
