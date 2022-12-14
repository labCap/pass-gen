import React, { useState } from "react";

function App() {
  const passEl = "1234567890qwertyuiopasdfghjklzxcvbnm~!@#^*_-+=";

  const [pass, setPass] = useState("");
  const [userLength, setUserLength] = useState("8");

  const generatePass = (arr, length) => {
    let arrPassEl = arr.split("");
    let pass = [];

    for (let i = 0; i < length; i++) {
      pass.push(arrPassEl[Math.floor(Math.random() * arrPassEl.length)]);
    }

    return pass.join("");
  };

  const handleSubmit = (e, length) => {
    e.preventDefault();
    if (length >= 6) {
      setPass(generatePass(passEl, length));
    }
  };

  return (
    <main>
      <div className="text">{pass}</div>
      <form className="form" onSubmit={(e) => handleSubmit(e, userLength)}>
        <div className="box-range">
          <p>Choose the number of characters for the password</p>
          <label htmlFor="password-length" className="label-range">
            {userLength}
          </label>
          <input
            type="range"
            className="input-range"
            id="password-length"
            value={userLength}
            step={1}
            min={6}
            max={100}
            onChange={(e) => setUserLength(e.target.value)}
          />
        </div>

        <button>Generate</button>
      </form>
    </main>
  );
}

export default App;
