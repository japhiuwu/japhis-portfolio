import React from "react";
import "./styles/bg.css";

export default function Bg({ children }) {
  return (
    <section className="wrapper">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="title">
        {children}
      </div>
    </section>
  );
}
