import React from "react";
import { useState } from "react";
import Footer from "./Footer";
// import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  return (
    <div>
      <h3>{title}</h3>
      <>
        <button onClick={() => setIsVisible()}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <div>{description}</div>}
      </>
    </div>
  );
};

const instamartTopics = [
  {
    id: 1,
    name: "about",
    title: "About",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.",
  },
  {
    id: 2,
    name: "team",
    title: "Team",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.",
  },
  {
    id: 3,
    name: "careers",
    title: "Careers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perspiciatis et assumenda ea eaque minima, eligendi amet consequatur saepe blanditiis officia quo, neque ipsa, incidunt id porro sint a? Aut.",
  },
];
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      {/* <h1>Insta mart</h1>
            {Footer( {children:<h1> Hello World</h1>,link:'hey you'} )}
            <Footer link='hey you' children={<h1>Hello world</h1>} />
            <Footer link='hey you'>
                <h1>Footer hello</h1>
            </Footer> */}

      {instamartTopics.map((topic) => {
        return (
          <Section
            key={topic.id}
            title={topic.title}
            description={topic.description}
            isVisible={visibleSection === topic.name}
            setIsVisible={() =>
              visibleSection === topic.name
                ? setVisibleSection("")
                : setVisibleSection(topic.name)
            }
          />
        );
      })}
    </div>
  );
};

export default Instamart;
