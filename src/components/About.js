import React from "react";

export const About = () => {
  let list_nr = 1;
  const ListElement = ({ text }) => {
    return (
      <div className="List__item">
        <div className="list__nr">{list_nr++ / 2}</div>
        <p className="list__text">{text}</p>
      </div>
    );
  };
  return (
    <section className="About">
      <h3 className="About__header">Jūsu ieguvumi</h3>
      <svg height="3" width="213px" className="About__decorLine">
        <line
          x1="0"
          y1="0"
          x2="213"
          y2="0"
          style={{ stroke: "#123754", strokeWidth: "3px" }}
        />
      </svg>
      <div className="About__wrapper">
        <div className="About__list">
          <ListElement
            text={
              "Svaigas zināšanas par mājas lapas izstrādes būtiskiem principie"
            }
          />
          <ListElement
            text={
              "Zināšanas par katru mājas lapas izstrādes posmu – izpēte, dizains,     teksti, programmēšana, SEO utt."
            }
          />
          <ListElement
            text={
              "Zināšanas par to, kā izvēlēties profesionālus mājas lapas              izstrādātājus"
            }
          />
          <ListElement
            text={"Spēja novērtēt izstrādātāju paveiktā darba kvalitāti"}
          />
          <ListElement text={"Praktiska palīdzība projekta plānošanā"} />
        </div>
      </div>
      <svg height="3" className="About__decorLine__long">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          style={{ stroke: "#123754", strokeWidth: "3px" }}
        />
      </svg>
      <div className="sale_advert">
        <div className="sale__wrapper">
          <div className="sale_arc">Garantēta naudas atgriešana</div>
          <div className="sale__offer">
            <div className="sale__price">
              <p className="sale__price__base">€145.00</p>
              €95.
              <sub style={{ verticalAlign: "baseline", fontSize: "50%" }}>
                00*
              </sub>
            </div>
            <p className="sale__price__description">
              Pirmajiem 20 pieteikumiem
            </p>
            <div className="sale__text  text__tab">
              <span className="sale__text__cache">Bez riska</span> Naudas
              atmaksa, ja konsultācija Jūs neapmierinās.
            </div>
          </div>
        </div>
        <div className="sale__text text__mob">
          <span className="sale__text__cache">Bez riska</span> Naudas atmaksa,
          ja konsultācija Jūs neapmierinās.
        </div>
      </div>
    </section>
  );
};
