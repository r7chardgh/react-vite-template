import React from "react";
export const useScrollToHighlightMenu = () => {
  const [sectionItems, setSectionItems] = React.useState(null); //store all sectionItems for getting all y pos
  const [currentPos, setCurrentPos] = React.useState(0); //store the index of current viewing section

  React.useEffect(() => {
    if (!!sectionItems) {
      var secList = [].slice.call(sectionItems); //convert htmlcollections into array
      
      const handleScroll = () => {
        secList.map((sec, i, arr) => {
          if (
            window.innerHeight + Math.round(window.scrollY) >=
            document.body.offsetHeight
          ) {
            setCurrentPos(arr.length - 1);
            return;
          } //if the scrollY reaches the bottom, set current index to the last one of the section

          if (
            window.scrollY > sec.offsetTop - (window.innerHeight*.3)
          ) {
            setCurrentPos(i);
            return;
          } //if it almost (30% of window innerHeight) reach the next section, goes to the next one

          // if (i + 1 === arr.length && window.scrollY > sec.offsetTop - 200) {
          //   console.log("it is the end?");
          //   setCurrentPos(i);
          //   return;
          // } //if
        });
      };

      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [sectionItems]);

  return {
    setSectionItems,
    currentPos,
  };
};
