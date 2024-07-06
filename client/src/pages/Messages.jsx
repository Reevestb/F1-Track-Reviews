//Here i will fetch the posts from the server which is getting the posts from database
import { useState, useEffect } from "react";
import UserMessages from "../components/main/UserMessages";
import { useSearchParams } from "react-router-dom";
import FilterMsg from "../components/main/FilterMsg";

// { username, cat_name, message }
export default function Message() {
  //we need state to save the values of posts
  const [userMsg, setUserMsg] = useState([]);
  const [filter] = useSearchParams();

  // we need useEffect to fetch the data
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        "https://week-7-assignment-client.onrender.com/userMsg"
      );
      const data = await response.json();
      setUserMsg(data);
      // console.log(userMsg);
    }
    fetchMessages();
  }, [filter]);
  //we need a function to get the posts
  //this function is async and using fetch
  //once you fetch the data you will set the state variable to be the posts data
  //you can have a sepeate function to get the posts and call the function in the useEffect hook or you can write the function directely inside useEffect

  //?filter for messages
  const filterMsgs = userMsg.filter((event) => {
    if (!filter.has("filter")) {
      return true;
    }
    return event.cat_name === filter.get("filter");
  });

  return (
    <>
      <div>
        <FilterMsg />
        <h1> Previous Messages</h1>
        {filterMsgs.map((item) => {
          return (
            <UserMessages
              key={item.id}
              username={item.username}
              cat_name={item.cat_name}
              message={item.message}
            />
          );
        })}

        {/* i want to see a list of posts */}
        {/* conditional rendering: you can have a list of titles  */}
      </div>
    </>
  );
}
