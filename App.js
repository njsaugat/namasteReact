import React from 'react'
import ReactDOM  from 'react-dom/client';

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
  console.log(container);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
