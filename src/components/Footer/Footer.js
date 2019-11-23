import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer = () => (
  <header className="Footer">
    <div className="Footer-Logo">
      <Logo />
    </div>
    <h3 style={{margin:0, padding:0}}>All right reserved by NIUniverse @2019</h3>
    <p  style={{margin:0, padding:0}}>>Designed by A.K</p>
  </header>
);
export default Footer;
