// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log("1", heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root", root);
// console.log("11", heading);
// root.render(heading);
// console.log(root.render(heading)); //undefined

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "im h1 tag "),
    React.createElement("h2", {}, "im h2 tag "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im h1 tag "),
    React.createElement("h2", {}, "im h2 tag "),
  ]),
]);
console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
