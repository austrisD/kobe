import React, { useState } from "react";
import { ReactComponent as StepArrow } from "../resources/svg/step__arrow.svg";

export const Apply = () => {
  const [FormState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    contact: "",
    inActiveBtn: true,
    office: false,
    online: false,
    validate(event) {
      const CorrectPhoneNr = this.phone.toString().length > 7;
      const CorrectEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email);
      console.log(this);
      if (
        (this.name.length >= 2 || this.company.length >= 2) &&
        (CorrectPhoneNr || CorrectEmail)
      ) {
      } else {
        event.preventDefault();
        return false;
      }
    },
  });

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
      <form
        className="Apply__form"
        onSubmit={(event) => {
          FormState.validate(event);
        }}
        method="post"
      >
        <label className="Apply__form__inputs">
          <input
            type="text"
            placeholder="Vārds, uzvārds:"
            name="name"
            onChange={(event) => {
              FormState.name = event.target.value;
            }}
          />
        </label>

        <label className="Apply__form__inputs">
          <input
            type="text"
            placeholder="Uzņēmums:"
            name="company"
            onChange={(event) => {
              FormState.company = event.target.value;
            }}
          />
        </label>

        <label className="Apply__form__inputs">
          <input
            type="email"
            placeholder="E-pasts:"
            name="email"
            onChange={(event) => {
              FormState.email = event.target.value;
            }}
          />
        </label>

        <label className="Apply__form__inputs">
          <input
            type="text"
            placeholder="Tālrunis:"
            name="phone"
            onChange={(event) => {
              FormState.phone = parseInt(event.target.value);
            }}
          />
        </label>

        <div className="Apply__form__checkbox">
          <div className="checkbox__wrapper">
            <label
              onClick={(event) => {
                setFormState((prevState) => ({
                  ...prevState,
                  online: event.target.checked,
                }));
              }}
              style={{ backgroundColor: !FormState.online ? "" : "#fb7840" }}
            >
              <input type="checkbox" name="online" value="Skype" />
            </label>
            Skype
          </div>
          <div className="checkbox__wrapper">
            <label
              onClick={(event) => {
                setFormState((prevState) => ({
                  ...prevState,
                  office: event.target.checked,
                }));
              }}
              style={{ backgroundColor: !FormState.office ? "" : "#fb7840" }}
            >
              <input type="checkbox" name="location" value="Office" />
            </label>
            Birojā
          </div>
        </div>
        <button
          className="Apply__form__submit"
          type="submit"
          onClick={(event) => FormState.validate(event)}
        >
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
            <div
              style={{ transform: "translate(-100%, calc(-100% - 27px))" }}
              className="apply__content"
            >
              Mūsu pieredze rāda – katrs par konsultāciju samaksātais eiro Jums
              ietaupīs vidēji 32 EUR jau pirmajā web lapas izstrādes un
              uzturēšan.
            </div>
          </div>
          <p className="apply__process__step__name">Saņem konsultāciju</p>
        </div>
      </div>
    </section>
  );
};
