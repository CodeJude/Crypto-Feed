import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <h2>
          Coded by <span className="purple">JudeVector</span>
        </h2>
      </div>
    </Link>
  );
};

export default Footer;
