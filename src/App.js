import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-imortant">Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

render(<App />, document.getElementById("root"));
