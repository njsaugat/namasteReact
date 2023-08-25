import { React } from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body.js";



const App = () => (
  <>
    <Header />
    <Title/>
    <Body/>
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
