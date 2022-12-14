import React from "react";

function App() {
  const passEl = "1234567890qwertyuiopasdfghjklzxcvbnm~!@#^*_-+=";

  const generatePass = (arr, length) => {
    let arrPassEl = arr.split("");
    let pass = [];

    for (let i = 0; i < length; i++) {
      const element = arrPassEl[i];
      pass.push(arrPassEl[Math.floor(Math.random() * arrPassEl.length)]);
    }
    return pass.join("");
  };
  console.log(generatePass(passEl, 10));

  return (
    <div className="container">
      <div className="text"></div>
      <form className="form">
        <input type="text" />
        <button>Generate</button>
      </form>
    </div>
  );
}

export default App;
