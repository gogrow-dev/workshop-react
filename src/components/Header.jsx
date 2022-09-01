import React from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header onClick={() => navigate("/")} className="header">
      <img className="logo" src={logo} alt="Logo" />
    </header>
  );
};
export default Header;
