import React, { useState } from "react";
import { ReactComponent as HeaderPC } from "../resources/svg/header_pc.svg";

export const Header = () => {
  const [Position, setPosition] = useState({ X: 0, Y: 0 });
  const [Debounce, setDebounce] = useState(false);

  let CursorFunction = {
    active: false,
    X: 0,
    Y: 0,
    manageAxis(e) {
      e.movementX > 0 ? this.X++ : this.X--;
      e.movementY > 0 ? this.Y++ : this.Y--;
      console.log(this);
    },
  };

  return (
    <header className="header">
      <div className="header__warper">
        <HeaderPC className="header__pc" />
        <h1 className="header__h1">WEB KONSULTANTS</h1>
        <svg height="3" width="213px" className="header__decorLine">
          <line
            x1="0"
            y1="0"
            x2="213"
            y2="0"
            style={{ stroke: "#fff", strokeWidth: "3px" }}
          />
        </svg>
        <p className="header__description">
          Individuāla konsultācija par efektīvu un kvalitatīvu mājas lapa
        </p>
      </div>
      <div
        className="header__CEO"
        onMouseEnter={() => {
          CursorFunction.active = true;
        }}
        onMouseMove={(e) => {
          if (!CursorFunction.active) return;
          if (parseInt(e.timeStamp.toFixed()) > Debounce) {
            setDebounce(parseInt(e.timeStamp.toFixed()) + 100);
            CursorFunction.manageAxis(e);
            setPosition({ X: 10, Y: 10 });
          }
        }}
        onMouseLeave={() => {
          CursorFunction.active = false;
          setPosition({ X: 0, Y: 0 });
        }}
        style={{
          transform: `rotateY(${Position.Y}deg) rotateX(${Position.X}deg)`,
        }}
      >
        <div className="header__CEO_contents">
          <p className="header__CEO__quote">
            <span className="Upper__quotes">“</span>
            Izprotiet un apgūstiet mūsdienīgas, profesionālas un pārdotspējīgas
            mājas lapas izveides pamatprincipus tikai 2,5 stundās, lai varētu
            pasūtīt kvalitatīvu mājas lapu vai izveidot tādu pats.
            <span className="button__quotes">”</span>
          </p>
          <h3 className="header__CEO__name">Edgars Kebbe</h3>
        </div>
      </div>
    </header>
  );
};
