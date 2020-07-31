import React from "react";
import Logo from "../../assets/img/logo.png";
import "./menu.css";
// import ButtonLink from "../ButtonLink";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <img className="Logo" src={Logo} alt="Logo Devflix" />
      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}
