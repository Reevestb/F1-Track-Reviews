import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <h1>F1 Fans Track Messages</h1>
      <div id="navBox">
        <nav className="navBar">
          <Link to="/">Home </Link>
          <Link to="/form"> Form </Link>
          <Link to="/messages"> Messages</Link>
        </nav>
      </div>
    </>
  );
}
