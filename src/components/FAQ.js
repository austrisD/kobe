import React, { useState } from "react";

function PlaceholderText() {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa.
      <br /> <br /> Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
      pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      <br />
      <br /> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
      dictum felis eu pede mollis pretium.
      <br />
      <br /> Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
      Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
      consequat vitae, eleifend ac, enim.
      <br />
      <br /> Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
      nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
      condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
      sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
      lorem.
    </>
  );
}

let FaqElement = ({
  heading,
  description,
  elementNr,
  setActiveElement,
  ActiveElement,
}) => {
  return (
    <div className="FaqElement">
      <div
        className="FaqElement__heading"
        onClick={() => {
          ActiveElement.nr !== elementNr
            ? setActiveElement({ nr: elementNr, value: description })
            : setActiveElement(0);
        }}
      >
        <div
          className="FaqElement__circle"
          style={{
            backgroundColor:
              ActiveElement.nr === elementNr ? "#78cacf" : "#fb7840",
          }}
        >
          ?
        </div>
        {heading}
      </div>
      {ActiveElement.nr === elementNr ? (
        <p className="FaqElement__description">{description}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export const FAQ = () => {
  const [ActiveElement, setActiveElement] = useState(0);

  let nr = 1;
  return (
    <section className="FAQ">
      <div className="FAQ__header__wrapper">
        <h3 className="FAQ__header">
          Bie????k uzdotie jaut??jumi par konsult??ciju
        </h3>
        <svg height="3" width="213px" className="FAQ__decorLine">
          <line
            x1="0"
            y1="0"
            x2="213"
            y2="0"
            style={{ stroke: "#fb7840", strokeWidth: "3px" }}
          />
        </svg>
      </div>

      <div className="FAQ__content">
        <div className="FAQ__content__wrapper">
          <FaqElement
            setActiveElement={setActiveElement}
            ActiveElement={ActiveElement}
            elementNr={nr++}
            heading={"K?? ???? konsult??cija man pal??dz??s?"}
            description={<PlaceholderText />}
          />
          <FaqElement
            setActiveElement={setActiveElement}
            ActiveElement={ActiveElement}
            elementNr={nr++}
            heading={"Kur un k?? ir iesp??jams sa??emt konsult??ciju?"}
            description={<PlaceholderText />}
          />
          <FaqElement
            setActiveElement={setActiveElement}
            ActiveElement={ActiveElement}
            elementNr={nr++}
            heading={"Cik ilga ir web konsult??cija?"}
            description={<PlaceholderText />}
          />
          <FaqElement
            setActiveElement={setActiveElement}
            ActiveElement={ActiveElement}
            elementNr={nr++}
            heading={
              "Vai es var????u sa??emt atpaka?? naudu,ja konsult??cija mani neapmierin??s?"
            }
            description={<PlaceholderText />}
          />
          <FaqElement
            setActiveElement={setActiveElement}
            ActiveElement={ActiveElement}
            elementNr={nr++}
            heading={"K?? notiek samaksa par konsult??ciju?"}
            description={<PlaceholderText />}
          />
        </div>
        <p
          style={{
            opacity: ActiveElement.value !== undefined ? "1" : "0",
          }}
          className="FaqElement__description  descriptionDesktop"
        >
          {ActiveElement.value}
        </p>
      </div>
    </section>
  );
};

//augstums  pieklibo sl??dzot iek???? araaa + sekcijas platums...
