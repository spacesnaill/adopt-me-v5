import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "bob",
  //     animal: "turtle",
  //     breed: "snapping"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something-imortant">Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

render(<App />, document.getElementById("root"));
