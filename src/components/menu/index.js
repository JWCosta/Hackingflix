import React from "react";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./menu.css";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Devflix" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}
