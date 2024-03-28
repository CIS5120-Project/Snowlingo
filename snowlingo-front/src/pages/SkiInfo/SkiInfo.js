import React from "react";
import "./SkiInfo.css";

function SkiInfo () {
  return (
    <div>
      <main> ski info </main>
      <div id='outer'>
        <h1>About you</h1>
        <div>
          <input id='age' type='text' placeholder='Age:'></input>
          <input id='height' type='text' placeholder='Height:'></input>
          <input id='weight' type='text' placeholder='Weight:'></input>
          <input id='living' type='text' placeholder='Living Area:'></input>
        </div>
      </div>
      <h1 id='submit'>Submit <br></br> &gt;&gt;&gt;</h1>
      <footer>
        <p>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SkiInfo;
