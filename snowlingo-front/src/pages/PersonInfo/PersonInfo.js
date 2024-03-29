import React from "react";
import "./PersonInfo.css";
import logo from "../../snowlingo.svg"

function PersonInfo () {
  return (
    <div id='root'>
      <main> PersonInfo </main>
      <div id='outer'>
        <h1>About you</h1>
        <div>
          <h2>You want to learn ...</h2>
          <button>
            Snowboard
          </button>
          <button>
            Ski
          </button>
        </div>
        <div>
          <h2>I am ...</h2>
          <button>
            Beginner
          </button>
          <button>
            Intermediate
          </button>
          <button>
            Advanced
          </button>
        </div>
      </div>
      <footer>
        <p>© 2024 Snowlingo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonInfo;
