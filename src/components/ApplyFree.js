import React from "react";

export const ApplyFree = () => {
  return (
    <section className="ApplyFree">
      <div className="ApplyFree__header">
        <h2 className="ApplyFree__header__h2">
          Mājas lapas izstrādes plāns
          <span style={{ color: "#fb7840" }}> bezmaksas </span>
        </h2>
        <p className="ApplyFree__header__paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque. eu.pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
      <form className="ApplyFree__form">
        <label className="ApplyFree__form__label">
          Vārds, uzvārds:
          <input type="text" className="form__name__input" />
        </label>
        <label className="ApplyFree__form__label">
          E-pasts: <input type="email" className="form__email__input" />
        </label>
        <button className="ApplyFree__form__btn" type="submit">
          Saņemt e-pastā
        </button>
      </form>
    </section>
  );
};
