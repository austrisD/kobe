import React from "react";
import { ReactComponent as StepArrow } from "../resources/svg/step__arrow.svg";

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
      <div className="apply__process">
        <div className="apply__process__step">
          <div className="apply__circle">
            1
            <div className="apply__content">
              Mūsu pieredze rāda – katrs par konsultāciju samaksātais eiro Jums
              ietaupīs vidēji 32 EUR jau pirmajā web lapas izstrādes un
              uzturēšan.
            </div>
          </div>
          <div className="apply__process__step__name">Piesakies</div>
        </div>
        <StepArrow />

        <div className="apply__process__step">
          <div className="apply__circle">
            2
            <div className="apply__content">
              Mūsu pieredze rāda – katrs par konsultāciju samaksātais eiro Jums
              ietaupīs vidēji 32 EUR jau pirmajā web lapas izstrādes un
              uzturēšan.
            </div>
          </div>
          <div className="apply__process__step__name">Apmaksā rēķinu</div>
        </div>
        <StepArrow />

        <div className="apply__process__step">
          <div className="apply__circle">
            3
            <div className="apply__content">
              Mūsu pieredze rāda – katrs par konsultāciju samaksātais eiro Jums
              ietaupīs vidēji 32 EUR jau pirmajā web lapas izstrādes un
              uzturēšan.
            </div>
          </div>
          <div className="apply__process__step__name">Saņem konsultāciju</div>
        </div>
      </div>
    </section>
  );
};
