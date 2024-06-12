import React from "react";

import "../public/css/bootstrap.css";

import Introduction from "./Home/Introduction";
import Cards from "./Home/Cards";


export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Introduction />
        <Cards />
      </main>
    </React.Fragment>
  );
}
