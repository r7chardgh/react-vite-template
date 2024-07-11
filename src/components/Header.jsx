import React from "react";

import theme from "../helpers/theme";
import btn from "../helpers/btn";
import { sections } from "../section.json";
function Header({ currentPos }) {
  const navRef = React.useRef(null);
  React.useEffect(() => {
    //console.log("current pos: ", currentPos);
    navRef.current.children[currentPos]?.classList.add("highlighted");
    navRef.current.children[currentPos - 1]?.classList.remove("highlighted");
    navRef.current.children[currentPos + 1]?.classList.remove("highlighted");
  }, [currentPos]);

  return (
    <header
      className={
        "container--flex-header"
        // (isFixed ? " fixed-bar" : "") +
        //+(isShown ? " show" : " no-show")
      }
    >
      <div className="sticky-bar"></div>
      <button className="btn" onClick={() => theme.handleThemeToggle()}>
        <svg
          className="theme-icon"
          width="30"
          height="17"
          viewBox="0 0 30 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 16H30" />
          <path d="M23.4147 16.0976C23.4147 11.2482 19.4836 7.31708 14.6342 7.31708C9.78492 7.31708 5.85376 11.2482 5.85376 16.0976" />
          <path
            className="rotable stars"
            d="M12.4388 1.61803L12.7847 2.6825L12.8969 3.02799H13.2602H14.3794L13.474 3.68586L13.1801 3.89939L13.2923 4.24488L13.6382 5.30934L12.7327 4.65146L12.4388 4.43794L12.1449 4.65146L11.2394 5.30934L11.5853 4.24488L11.6976 3.89939L11.4037 3.68586L10.4982 3.02799H11.6174H11.9807L12.0929 2.6825L12.4388 1.61803Z"
          />
          <path
            className="rotable stars"
            d="M25.6097 6.00817L25.9556 7.07263L26.0678 7.41812H26.4311H27.5503L26.6449 8.076L26.351 8.28952L26.4632 8.63501L26.8091 9.69947L25.9036 9.0416L25.6097 8.82808L25.3158 9.0416L24.4103 9.69947L24.7562 8.63501L24.8685 8.28952L24.5746 8.076L23.6691 7.41812H24.7883H25.1516L25.2638 7.07263L25.6097 6.00817Z"
          />
          <path
            className="rotable stars"
            d="M16.8294 1.61803L16.8467 1.6713L16.959 2.01679H17.3222H17.3782L17.3329 2.04971L17.039 2.26324L17.1513 2.60873L17.1686 2.662L17.1233 2.62908L16.8294 2.41555L16.5355 2.62908L16.4902 2.662L16.5075 2.60873L16.6198 2.26324L16.3259 2.04971L16.2806 2.01679H16.3366H16.6998L16.8121 1.6713L16.8294 1.61803Z"
          />
          <line
            x1="28.1304"
            y1="9.34665"
            x2="25.2965"
            y2="10.9828"
            className="rotable lights"
          />
          <line
            x1="1.22361"
            y1="8.23565"
            x2="4.15044"
            y2="9.69906"
            className="rotable lights"
          />
          <line
            x1="5.79634"
            y1="2.53781"
            x2="10.9428"
            y2="9.70846"
            className="rotable lights"
          />
          <line
            x1="14.0366"
            y1="2.18557e-08"
            x2="14.0366"
            y2="3"
            className="rotable lights"
          />
          <line
            x1="23.5319"
            y1="2.9891"
            x2="17.9108"
            y2="9.33163"
            className="rotable lights"
          />
        </svg>
      </button>
      <button
        className="btn menu menu1-icon"
        onClick={() => {
          btn.toggleHiddenContainer(".navbar");
          btn.toggleHiddenContainer(".menu");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        {/* <svg
          className="menu-icon"
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.9282 2L38.1953 2" strokeWidth="3" strokeLinecap="round">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 20 3"
              to="360 20 3"
              dur="10s"
              repeatCount="indefinite"
              
            />
          </path>
          <path
            d="M2 14.0393L38.1954 14.0393"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20.0586 26L38.1954 26"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg> */}
      </button>
      <nav className="navbar" ref={navRef}>
        {sections.map((sec) => (
          <a key={sec.index} href={`/#${sec.name}`} className="navbar__link">
            {sec.navName}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
