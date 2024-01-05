import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="bg-container">
      <h1 className="main-heading">Madelyn Torff</h1>
      <div className="nav-container">
        <Link to="/" className="nav-text">Home</Link>
        <Link to="/projects" className="nav-text">Projects</Link>
        <Link to="/addProject" className="nav-text">Add Project</Link>
      </div>
    </div>
  );
};

export default Header;
