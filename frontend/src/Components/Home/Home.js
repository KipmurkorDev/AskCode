import React from "react";
import "./Home.css";
export default function Home() {
  function handlesearch(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      alert("Enter was pressed was presses");
    }
  }
  return (
    <div className="conatiner_home">
      <div className="search_btn">
        <input
          id="search"
          type="text"
          name="search"
          // value="hello"
          // onChange=""
          placeholder="search"
          onKeyDown={handlesearch}
        />
      </div>
    </div>
  );
}
