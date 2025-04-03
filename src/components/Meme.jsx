import React from "react";
import { useState, useEffect } from "react";

/**
 * Meme component to geterate a meme image from an API and add top and bottom text.
 * @returns {JSX.Element} - Main section which is the actual meme component
 */
export default function Meme() {
  /**
   * State for the meme object
   * @type {object}
   * @property {string} topText
   * @property {string} bottomText
   * @property {string} randomImage
   */
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randommImage: "http://i.imgflip.com/1bij.jpg",
  });

  /**
   * State for storing all meme data fetch from the API
   * @type {Array<object>}
   */
  const [allMemes, setAllMemes] = useState([]);

  /**
   * UseEffect hook to fetch API data when tyhe component mounts.
   */
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();

    return () => {};
  }, []);

  //console.log(allMemes);

  /**
   * function to generate a random meme image URL and update the meme state.
   */
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  /**
   * handles input changes
   * @param {event} event
   */
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  /**
   * renders meme component.
   * @returns {JSX.Element} The render Meme component.
   */
  return (
    <main>
      <div className="form">
        <label id="top-label" htmlFor="top-input">
          Top text
        </label>
        <input
          type="text"
          className="form--input"
          id="top-input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>

        <label id="bottom-label" htmlFor="bottom-input">
          Bottom text
        </label>

        <input
          type="text"
          className="form--input"
          id="bottom-input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
