import React from "react";
import puppyImage from "./cute-puppy.png";

export default function Header() {
  return (
    <header className="header">
      <img src={puppyImage} className="header--image" />
      <h2 className="header--title">Header</h2>
      <h4 className="header--project">CodeSpace - DJS07</h4>
    </header>
  );
}
