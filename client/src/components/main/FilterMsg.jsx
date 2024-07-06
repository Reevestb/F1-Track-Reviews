import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FilterMsg.css";

export default function FilterMsg() {
  const [filter, setFilter] = useSearchParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("http://localhost:7430/trackNames");
      const data = await response.json();
      setCategory(data);
    }
    fetchMessages();
  }, [filter]);

  function changeFilter(trackName) {
    setFilter({ filter: trackName.target.value });
  }

  return (
    <>
      <div id="filterbtn">
        <select value={category.cat_name} onChange={changeFilter}>
          {category.map((item) => (
            <option
              value={item.cat_name}
              key={item.id}
              onSelect={() => changeFilter(item.cat_name)}
            >
              {item.cat_name}
            </option>
          ))}
        </select>
        {/* {category.map((item) => (
          <button key={item.id} onClick={() => changeFilter(item.cat_name)}>
            {item.cat_name}
          </button>
        ))} */}
        <button onClick={() => setFilter({})}>Clear Filter</button>
      </div>
    </>
  );
}
