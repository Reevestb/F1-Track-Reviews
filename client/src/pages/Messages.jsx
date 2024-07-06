//Here i will fetch the posts from the server which is getting the posts from database
import { useState, useEffect } from "react";
import UserMessages from "../components/main/UserMessages";

// { username, cat_name, message }
export default function Message() {
  //we need state to save the values of posts
  const [userMsg, setUserMsg] = useState([]);
  // we need useEffect to fetch the data
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("http://localhost:7430/userMsg");
      const data = await response.json();
      setUserMsg(data);
      // console.log(userMsg);
    }
    fetchMessages();
  }, []);

  //we need a function to get the posts
  //this function is async and using fetch
  //once you fetch the data you will set the state variable to be the posts data
  //you can have a sepeate function to get the posts and call the function in the useEffect hook or you can write the function directely inside useEffect
  return (
    <>
      <div>
        <h1> Previous Messages</h1>
        {userMsg.map((item) => {
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
