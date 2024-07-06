export default function UserMessages({ username, cat_name, message, id }) {
  return (
    <>
      <div key={id}>
        <h2>Name: {username}</h2>
        <h2>Track: {cat_name}</h2>
        <p>Message: {message}</p>
      </div>
    </>
  );
}
