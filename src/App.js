import React, { createRef } from "react";
import "./App.css";

function App() {
  const h2Element = createRef(); //가상의 빈 ref객체 만들어서 변수에넣음, 접근할 dom에 ref={이름}

  function changeColor(e) {
    console.log(h2Element);
    h2Element.current.style.color = "red";
    //e.target.textContent.style.color = "red";
    // e.target.style.color = "red";
    //let a = document.querySelector("h1");
    //a.style.fontSize = "200px";
  }

  function h1Click(e) {
    console.log("h1 클릭", e.target.value);
    e.target.style.color = "red";
    e.target.style.fontSize = "100px";
  }

  return (
    <div>
      <h1 onClick={h1Click}>1</h1>
      <hr />
      <h2 ref={h2Element}>2</h2>
      <hr />
      <button onClick={changeColor}>클릭</button>
    </div>
  );
}

export default App;
