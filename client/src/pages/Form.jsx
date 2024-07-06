import { useState, useEffect } from "react";

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
  });
  const [category, setCategory] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    //prevent default to stop data going to url
    //something that Fetches the POST endpoint
    fetch("http://localhost:7430/formInputs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    console.log(formValues);

    setFormValues({
      username: "",
      message: "",
      cat_name: "",
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
      const response = await fetch("http://localhost:7430/categoryItems");
      const category = await response.json();
      setCategory(category);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {/* /* need a form here with 2 events: one to submit, one to track changes */}
      {/* be consistent with how you name the attribute!!! the name you put in the database columns where the data is being stored  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          placeholder="Your Name Here"
          onChange={handleChange}
          required
        />
        <label htmlFor="cat_name">Track Name</label>
        <select
          required
          value={formValues.cat_name}
          onChange={handleChange}
          name="cat_name"
        >
          {category.map((item) => (
            <option key={item.id} value={item.cat_name} required>
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
        <label htmlFor="">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message Here"
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
