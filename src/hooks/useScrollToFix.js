import React from "react";
const useScrollToFix = () => {
  const [isShown, setIsShown] = React.useState(false);
  let lastScrollTop = 0;
  React.useEffect(() => {
    if (window.scrollY === 0) {
      setIsShown(true);
    }
    const handleScroll = () => {
      let st = document.body.scrollTop || document.documentElement.scrollTop;
      if (st < lastScrollTop) {
        //up
        setIsShown(true);
      } else {
        //down
        setIsShown(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    isShown,
  };
};

export default useScrollToFix;
