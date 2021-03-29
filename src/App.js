import React, { useState } from "react";
import Background from "./resources/jpg/Background.jpeg";
import { Header } from "./components/header";
import { About } from "./components/About";
import { Apply } from "./components/Apply";
import { Marketing } from "./components/Marketing";
import { ApplyFree } from "./components/ApplyFree";
import { Presentation } from "./components/Presentation";
import { FeedBack } from "./components/FeedBack";
import { FAQ } from "./components/FAQ";
import { Consultant } from "./components/Consultant";
import { Footer } from "./components/Footer";
import "./css/reset.scss";
import "./css/main.scss";
import "./css/header.scss";
import "./css/About.scss";
import "./css/Apply.scss";
import "./css/marketing.scss";
import "./css/ApplyFree.scss";
import "./css/Presentation.scss";
import "./css/FeedBack.scss";
import "./css/FAQ.scss";
import "./css/Consultant.scss";
import "./css/Footer.scss";

function App() {
  return (
    <div className="App">
      <div
        className="header__Background"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <Header />
      <main className="main">
        <div className="outer__wrapper">
          <div className="content__Warper">
            <About />
            <Apply />
          </div>
          <p className="main__content__text">
            * Mūsu pieredze rāda – katrs par konsultāciju samaksātais eiro Jums
            ietaupīs vidēji 32 EUR jau pirmajā web lapas izstrādes un
            uzturēšanas gadā, neskaitot neiegūto peļņu, kas ir neveiksmīgas
            mājas lapas biežākās sekas, kā arī citus neparedzētus izdevumus.
          </p>
        </div>
        <Marketing />
        <ApplyFree />
        <Presentation />
        <FeedBack />
        <FAQ />
        <Consultant />
        <Footer />
      </main>
    </div>
  );
}

export default App;
