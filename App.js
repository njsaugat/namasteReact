import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "Heading1",
    key: "heading1",
  },
  `Heading 1`
);
const heading2 = React.createElement(
  "h1",
  {
    id: "Heading2",
    key: "heading2",
  },
  `Heading 2`
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const headingCE = React.createElement("h1", {}, "Hello world");
const headingJSX = <h1>Hello world</h1>;


const Header = () => {
  return React.createElement("h1",{},"Hello WOrld")
}

const HeaderComponent1 = () => {
 return (
    <div>
      <h1>Hello world</h1>
      <h2>Hello world</h2>
    </div>
  )
}


const Title =()=> (
  <p>
    <h1>Hello</h1>
    <li>Nice to see</li>
  </p>
);
const HeaderComponent = () => (
  <div>
    {Title()}
    <h1>Hello world</h1>
    <h2>Hello world</h2>
  </div>
)


console.log(JSON.stringify(headingCE) === JSON.stringify(headingJSX));
console.log(headingJSX);
// console.log(deepEqual(headingJSX,headingCE))

console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
