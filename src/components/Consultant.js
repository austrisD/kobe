import React from "react";
import { ReactComponent as SmartWhite } from "../resources/svg/SmartWhite.svg";
import { ReactComponent as LitheBulb } from "../resources/svg/LitheBulb.svg";
import { ReactComponent as GearHead } from "../resources/svg/GearHead.svg";

export const Consultant = () => {
  const ConsultantElement = ({ img, heading, paragraph }) => {
    return (
      <div className="Consultant__element">
        {img}
        <p className="Consultant__element__heading">{heading}</p>
        <p className="Consultant__element__paragraph">{paragraph}</p>
      </div>
    );
  };
  return (
    <section className="Consultant">
      <h3 className="Consultant__header">Par Web konsultantu</h3>
      <svg height="3" width="213px" className="Consultant__decorLine">
        <line
          x1="0"
          y1="0"
          x2="213"
          y2="0"
          style={{ stroke: "#123754", strokeWidth: "3px" }}
        />
      </svg>
      <div className="Consultant__Content">
        <ConsultantElement
          img={<SmartWhite />}
          heading={"Zināšanas"}
          paragraph={
            "Profesionālas zināšanas, kas ir iegūtas pašmācības ceļā un izmantojot praksē ikdienas darbā vairāk nekā 10 gadus. Specializētas zināšanas esmu apguvis, lasot pasaules vadošo nozares speciālistu grāmatas, klausoties audiogrāmatas un lasot dažādus rakstus un pētījumus par dizainu, lietotāju pieredzi, satura izstrādi, SEO, informācijas organizēšanu, projektu vadību, e-komerciju un citiem saistītiem tematiem."
          }
        />
        <ConsultantElement
          img={<GearHead />}
          heading={"Pieredze"}
          paragraph={
            "Pieredze gan starptautisku, gan Latvijas mājas lapu izstrādē. Regulāri strādāju pie dažādu veidu B2B un B2C mājas lapu projektiem – vizītkartes tipa, tradicionālas mārketinga mājas lapas, kā arī e-komercijas projekti ar elektroniskajiem preču katalogiem."
          }
        />
        <ConsultantElement
          img={<LitheBulb />}
          heading={"Filosofija"}
          paragraph={
            "Laba māja tiek celta uz stabiliem pamatiem. Tāpat arī efektīvas mājas lapas izveide ir balstīta uz zināšanām un pareizas pieejas. Un, pat ja mājas lapas izveidi uzticat profesionāļiem, lēmumi ir jāpieņem Jums. Web konsultants palīdzēs Jums pieņemt uz zināšanām, nevis sajūtām balstītus lēmumus."
          }
        />
      </div>
    </section>
  );
};
