import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <h1>
        <span>F1</span> Fan Track Messages
      </h1>
      <div id="navBox">
        <nav className="navBar">
          <Link to="/" id="links">
            {" "}
            Home{" "}
          </Link>
          <Link to="/messages" id="links">
            {" "}
            Messages
          </Link>
          <Link to="/form" id="links">
            {" "}
            Form{" "}
          </Link>
        </nav>
      </div>
    </>
  );
}
