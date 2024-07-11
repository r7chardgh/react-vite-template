import React, { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { sections } from "../section.json";
import Section from "../components/Section";
function Home() {
  const ref = React.useRef();
  const setSectionItems = useOutletContext();

  React.useEffect(() => {
    setSectionItems(ref.current?.children);
  }, [ref.current]);

  return (
    <div className="pages" ref={ref}>
      {sections.map((sec) => (
        <Section key={sec.index} index={sec.index} id={sec.name} />
      ))}
    </div>
  );
}

export default Home;
