import React from "react";


function Section({ index, ...props }) {

  const renderSwitch = (id) => {
    switch (id) {
      
      default:
        return (
          <div>
            <h1>No sections</h1>
          </div>
        );
    }
  };
  return <section {...props}>{renderSwitch(index)}</section>;
}

export default Section;
