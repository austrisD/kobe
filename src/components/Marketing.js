import React from "react";
import { ReactComponent as Smart } from "../resources/svg/Vector_Smart_Object.svg";
import { ReactComponent as Tools } from "../resources/svg/Vector_Tools_Object.svg";
import { ReactComponent as Docs } from "../resources/svg/Vector_Doc_Object.svg";
import book from "../resources/svg/book.png";

export const Marketing = () => {
  return (
    <section className="marketing">
      <div className="marketing__header">
        <h3>Kas ietilpst cenā</h3>
        <svg height="3" width="213px" className="marketing__decorLine">
          <line
            x1="0"
            y1="0"
            x2="213"
            y2="0"
            style={{ stroke: "#FB7840", strokeWidth: "3px" }}
          />
        </svg>
        <p className="marketing__paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
      </div>
      <div className="marketing__content">
        {/*****************************************************************************/}
        <div className="marketing__content__element smart__element">
          <Smart />
          <h4>Jaunas zināšanas</h4>
          <p className="marketing__element__description">
            Jūs iegūsiet zināšanas, kas Jums palīdzēs labāk orientēties web
            nozarē, izprast “lielo bildi” un redzēt tās “detaļas” atsevišķi.
          </p>
          <ul>
            <li>
              <span>1.</span>Profesionālas zināšanas par katru mājas lapas
              izstrādes posmu
            </li>
            <li>
              <span>2.</span>Kā nospraust pareizus mājas lapas mērķus
            </li>
            <li>
              <span>3.</span> Zināšanas par kopējo projekta plānošanu (optimālie
              termiņi, budžets)
            </li>
            <li>
              <span>4.</span>Kā izpētīt konkurentus un mērķauditoriju
            </li>
            <li>
              <span>5.</span> Kā plānot mājas lapas struktūru un saturu
            </li>
            <li>
              <span>6.</span>Kā izvēlēties dizainu
            </li>
            <li>
              <span>7.</span>Zināšanas par SEO
            </li>
          </ul>
        </div>

        <div className="marketing__content__element Tools__element">
          <Tools />
          <h4>Praktiska palīdzība</h4>
          <p className="marketing__element__description">
            Piedāvājam praktisku palīdzību, lai Jūs varētu spert pirmos soļus
            jaunas mājas lapas izveidē vai tās uzlabošanā. Kopīgiem spēkiem tas
            būs daudz vienkāršāk!
          </p>
          <ul>
            <li>
              <span>&#8226;</span>Pirmie soļi Jūsu jaunās mājas lapas izveidē
            </li>
            <li>
              <span>&#8226;</span>Mērķauditorijas un konkurentu izpēte
            </li>
            <li>
              <span>&#8226;</span>Mājas lapas mērķu nospraušana
            </li>
            <li>
              <span>&#8226;</span>Mājas lapas struktūras izveide
            </li>
            <li>
              <span>&#8226;</span>Informācijas apkopošana un strukturēšana
            </li>
          </ul>
        </div>

        <div
          className="marketing__content__element docs__element"
          style={{ backgroundColor: "#FB7840" }}
        >
          <div className="docs__element__corner">Dokumentu komplekts</div>
          <Docs />
          <h4>Praktiska palīdzība</h4>
          <p className="marketing__element__description docs__element__description">
            Pēc konsultācijas Jūs saņemsiet dokumentus, kuros ir apkopota visa
            konsultācijā minētā informācija.
          </p>
          <ul>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              Aliquam lorem ante, dapibus in
            </li>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              Viverra quis, feugiat a, tellus
            </li>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              Phasellus viverra nulla ut metus
            </li>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              Rius laoreet uisque rutrum
            </li>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              An imperdiet tiam
            </li>
            <li>
              <img src={book} alt="" width="12px" height="14px" />
              Ultricies nisi vel augue urabitur
            </li>
          </ul>
        </div>
        {/**************************************************************/}
      </div>
    </section>
  );
};

////adjust element widths
