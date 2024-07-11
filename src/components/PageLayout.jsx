import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useScrollToHighlightMenu } from "../hooks/useScrollToHighlightMenu";
function PageLayout() {
  const { currentPos, setSectionItems } = useScrollToHighlightMenu();
  return (
    <main>
      <Header currentPos={currentPos} />
      <Outlet context={setSectionItems} />
      <Footer />
    </main>
  );
}

export default PageLayout;
