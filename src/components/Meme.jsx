import React from "react";

export default function Meme() {
  function getMemeImage() {
    console.log("clicked");
  }

  return (
    <main>
      <div className="form">
        <label id="top-label" htmlFor="top-input">
          Top text
        </label>
        <input type="text" className="form--input" id="top-input" placeholder="Shut up"></input>
        <label id="bottom-label" htmlFor="bottom-input">
          Bottom text
        </label>

        <input
          type="text"
          className="form--input"
          id="bottom-input"
          placeholder="and show me the money"
        ></input>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
