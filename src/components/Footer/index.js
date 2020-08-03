import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/img/logo-footer.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Hackingflix" />
      </Link>
      <p>
        Criado por <a href="https://github.com/JWCosta">Jonathan Costa</a>{" "}
        durante a Imersão React da Alura.
      </p>
    </FooterBase>
  );
}

export default Footer;
