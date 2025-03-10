import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "im h1 tag khushi here "),
    React.createElement("h2", {}, "im h2 tag "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im h1 tag "),
    React.createElement("h2", {}, "im h2 tag "),
  ]),
]);
console.log(parent);

//created h1 tag inside jsx
const jsxHeading=<h1 id="heading1">Namaste jsx</h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);
root.render(jsxHeading);



