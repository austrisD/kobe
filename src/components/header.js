import React, { useRef, useState, useEffect } from "react";
import { ReactComponent as HeaderPC } from "../resources/svg/header_pc.svg";

export const Header = () => {
  const CEO = useRef(null);

  const [CursorLocation, setCursorLocation] = useState({
    active: false,
    debounce: true,
    X: 0,
    Y: 0,
  });

  useEffect(() => {
    console.log(CEO);
    let X = 0;
    let Y = 0;
    // let XMove = CEO.current.movementX > 0 ? X++ : X--;
    // let YMove = CEO.current.movementY > 0 ? 1 : 0;
    CEO.current.style.transform = `rotateY(${Y}deg) rotateX(${X}deg)`;
  }, [CursorLocation]);

  return (
    <header
      className="header"
      onReset={() => {
        console.log("asdsad");
      }}
    >
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
        ref={CEO}
        onMouseEnter={() => {
          CursorLocation.active = true;
        }}
        onMouseMove={(e) => {
          if (!CursorLocation.active) return;
          if (parseInt(e.timeStamp.toFixed()) > CursorLocation.debounce) {
            setCursorLocation({
              active: true,
              debounce: parseInt(e.timeStamp.toFixed()) + 100,
              X: e.movementX,
              Y: e.movementY,
            });
          }
        }}
        onMouseLeave={() => {
          CursorLocation.active = false;
          CursorLocation.X = false;
          CursorLocation.Y = false;
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
