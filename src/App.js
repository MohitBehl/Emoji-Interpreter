import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😁": "smiling",
  "😞": "sad",
  "💗": "love",
  "🚗": "car"
};
const keys = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userEmoji = event.target.value;
    var meaning = emojiDictionary[userEmoji];
    if (meaning === undefined) {
      meaning = "Use a correct emoji !!!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out !!!</h1>
      <input onChange={inputChangeHandler}></input>
      <div style={{ fontWeight: "bold" }}>{meaning}</div>
      <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Emojis we know.
      </div>
      <div style={{ marginTop: "1rem" }}>
        {keys.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{ fontSize: "2rem", padding: "1rem" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
