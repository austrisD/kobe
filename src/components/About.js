import React from "react";

export const About = () => {
  let list_nr = 1;
  const ListElement = ({ text }) => {
    return (
      <div className="List__item">
        <div className="list__nr">{list_nr++}</div>
        {/***works well deployed  list_nr++  list_nr++ /2 works well  on test server */}
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
        <div className="sale_arc">Garantēta naudas atgriešana</div>
        <div className="sale__wrapper">
          <div className="sale__price">
            <div className="sale__price__base">€145.00</div>
            €95.
            <sup
              style={{
                textAlignVertical: "top",
                fontSize: "40px",
              }}
            >
              00*
            </sup>
          </div>
          <p className="sale__apply20">Pirmajiem 20 pieteikumiem</p>
        </div>
        <div className="sale__text ">
          <span style={{ fontFamily: "Roboto-Black" }}>Bez riska</span> Naudas
          atmaksa, ja konsultācija Jūs neapmierinās.
        </div>
      </div>
    </section>
  );
};
