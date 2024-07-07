import { useState, useEffect } from "react";
import "./Form.css";

export default function Form() {
  // we need useState to save the formData
  // fromData = {
  // key: value
  // key: value
  //}
  const [formValues, setFormValues] = useState({
    username: "",
    message: "",
    cat_name: "",
    id: 0,
  });
  const [category, setCategory] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    //prevent default to stop data going to url
    //something that Fetches the POST endpoint
    fetch(
      "https://week-7-assignment-client.onrender.com/formInputs" ||
        "http://localhost:7430/formInputs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );
    console.log(formValues);

    setFormValues({
      username: "",
      message: "",
      cat_name: "",
      cat_id: 0,
    });
  }

  //Function to handleChange
  // function handleChange() {
  //we need to add the values from the initial state
  //we need to set the properties for the new object
  //The key is the target name; the value is the target value
  // }

  function handleChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(
        "https://week-7-assignment-client.onrender.com/categoryItems" ||
          "http://localhost:7430/categoryItems"
      );
      const category = await response.json();
      setCategory(category);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <br />
      {/* /* need a form here with 2 events: one to submit, one to track changes */}
      {/* be consistent with how you name the attribute!!! the name you put in the database columns where the data is being stored  */}
      <form onSubmit={handleSubmit} id="user-form">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          placeholder="Your Name Here"
          onChange={handleChange}
          required
          id="name-input"
        />
        <br />
        <label htmlFor="cat_name">Track Name</label>
        <select
          required
          value={formValues.cat_id}
          onChange={handleChange}
          name="cat_id"
          id="category-select"
        >
          {category.map((item) => (
            <option key={item.id} value={item.id} required>
              {item.cat_name}
            </option>
          ))}
          {/* <option value="">Choose Track</option>
          <option value={formValues.cat_id}>Silverstone - UK</option>
          <option value={formValues.cat_id}>Interlagos - Brazil</option>
          <option value={formValues.cat_id}>Suzaka - Japan</option>
          <option value={formValues.cat_id}>Monaco - Monaco</option>
          <option value={formValues.cat_id}>Red Bull Ring - Austria</option> */}
        </select>
        <br />
        <label htmlFor="">Message</label>
        <textarea
          name="message"
          id="message-input"
          placeholder="Your Message Here"
          value={formValues.message}
          onChange={handleChange}
          // rows={2}
        ></textarea>
        <button type="submit" id="submit-button">
          {" "}
          Submit{" "}
        </button>
      </form>
      <br />
      <div className="form-img-box">
        <img
          id="formImg"
          src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1706626658/fom-website/2023/Miscellaneous/GettyImages-1656999898.jpg"
          alt="F1 cars racing on track"
        />
      </div>
    </>
  );
}
