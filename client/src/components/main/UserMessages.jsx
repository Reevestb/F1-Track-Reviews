import "./UserMessages.css";

export default function UserMessages({ username, cat_name, message, id }) {
  return (
    <>
      <div className="userMsgBox" key={id}>
        <h2>Name: {username}</h2>
        <h3>Track: {cat_name}</h3>
        <p>Message: {message}</p>
      </div>
    </>
  );
}
