import React from "react";
import "./PersonInfo.css";
import logo from "../../snowlingo.svg"

function PersonInfo () {
  return (
    <div className="personInfoContainer">
      <main> PersonInfo </main>
      <div style={{margin: '10% 10%'}}>
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
    </div>
  );
};

export default PersonInfo;
