//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, homeScore] = useState(0);
  const [away, awayScore] = useState(0);

  //functions
  const homeTouchDown = e => {
    homeScore(home + 7);
  };
  const homeFieldGoal = e => {
    homeScore(home + 3);
  };

  const awayTouchDown = e => {
    awayScore(away + 7);
  };
  const awayFieldGoal = e => {
    awayScore(away + 3);
  };

  const [quarter, quarterValue] = useState(1);
  const quarterChange = e => {
    quarterValue(quarter + 1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {homeTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick ={awayTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
          <button onClick={quarterChange}>QUARTER</button>
        </div>
      </section>
    </div>
  );
}

export default App;
