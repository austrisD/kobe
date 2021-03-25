import React from "react";

export const Apply = () => {
  return (
    <section className="Apply">
      <h3 className="Apply__heading">Aizpildi pieteikumu</h3>
      <svg height="3" width="213px" className="Apply__decorLine">
        <line
          x1="0"
          y1="0"
          x2="213"
          y2="0"
          style={{ stroke: "#123754", strokeWidth: "3px" }}
        />
      </svg>
      <form className="Apply__form">
        <label className="Apply__form__inputs">
          <input type="text" placeholder="Vārds, uzvārds:" />
        </label>
        <label className="Apply__form__inputs">
          <input type="text" placeholder="Uzņēmums:" />
        </label>
        <label className="Apply__form__inputs">
          <input type="email" placeholder="E-pasts:" />
        </label>
        <label className="Apply__form__inputs">
          <input type="text" placeholder="Tālrunis:" />
        </label>
        <div className="Apply__form__checkbox">
          <label>
            <input type="checkbox" />
            Skype
          </label>
          <label>
            <input type="checkbox" />
            Birojā
          </label>
        </div>
        <button className="Apply__form__submit" type="submit">
          Pieteikties tūlīt
        </button>
      </form>
    </section>
  );
};
