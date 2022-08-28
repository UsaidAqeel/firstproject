import React, { useState } from "react";
import "../App.css";

let Header = () => {
  //State is Use for the change the classes
  const [color, setcolor] = useState("cus-bar");
  const [first, setfirst] = useState("li");
  const [bar, setbar] = useState("fa-solid fa-bars get-list");

  // This function is use for Change the color of the navbar
  const backColor = () => {
    if (window.scrollY > 40) {
      setcolor("sticky");
      setfirst("link");
      setbar("fa-solid fa-bars set-list");
    } else if (window.scrollY < 40) {
      setcolor("cus-bar");
      setbar("fa-solid fa-bars get-list");
      setfirst("li");
    }
  };

  // This is  For use For the scroll
  window.addEventListener("scroll", backColor);

  // Foo is use for open the Slide bar;
  function foo() {
    document.body.style.overflow = "hidden";
    document.body.style.padding = "-20px";
    let card = document.getElementsByClassName("cus-card");
    for (let i = 0; i < card.length; i++) {
      card[i].style.pointerEvents = "none";
    }
    let slide = document.getElementById("slide");
    slide.style.left = "0px";
    slide.style.transitionDelay = "0.6s";
    slide.style.transition = "1s";
    if (window.scrollY > 40) {
      setcolor("cus-bar");
    }
  }

  // pop is Use for close the slide bar
  function pop() {
    let card = document.getElementsByClassName("cus-card");
    for (let i = 0; i < card.length; i++) {
      card[i].style.pointerEvents = "all";
    }
    document.body.style.overflow = "auto";
    let slide = document.getElementById("slide");
    slide.style.left = "-1000px";
    slide.style.transition = "2s";
    if (window.scrollY > 40) {
      setcolor("sticky");
    }
  }

  return (
    <>
      {/* Nav Bar */}
      <nav className={color} id="nav">
        <ul className="cus-nav">
          <li
            className={first}
            style={{ background: "White", color: "black", borderRadius: "5px" }}
          >
            Communinty
          </li>
          <li className={first}>Portfolios</li>
          <li className={first}>Inspiration</li>
          <li className={first}>News</li>
          <li className={first}>Features</li>
          <li className={first}>Job</li>
        </ul>
        <i className={bar} onClick={foo} />
        <div className="hide">
          <ul className="slidebar" id="slide">
            <i className="fa-solid fa-x set-slide" onClick={pop} />
            <li className="slidebarli">Home</li>
            <li className="slidebarli">Portfolios</li>
            <li className="slidebarli">Inspiration</li>
            <li className="slidebarli">News</li>
            <li className="slidebarli">Features</li>
            <li className="slidebarli">Job</li>
          </ul>
        </div>
      </nav>
      {/* BackGround Image */}
      <div className="image"></div>
    </>
  );
};

export default Header;
