import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luxa",
      animal: "Dog",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Golden",
    }),
    React.createElement(Pet, {
      name: "Teddy",
      animal: "Cat",
      breed: "Unknown",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
