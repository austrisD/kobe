import React from "react";
import location from "../resources/svg/location.png";
import mail from "../resources/svg/mail.png";
import phone from "../resources/svg/phone.png";

export const Footer = () => {
  return (
    <footer className="Footer">
      <h3>Kontaktinformācija</h3>

      <table>
        <tbody>
          <tr>
            <th>
              <img src={location} alt="" />
              &nbsp;
            </th>
            <th>
              <span style={{ fontWeight: "bold" }}>Adrese:&nbsp;</span>
            </th>
            <th>&nbsp;Purva iela 12A, Valmiera, LV-4201</th>
          </tr>

          <tr>
            <th>
              <img src={mail} alt="" />
              &nbsp;
            </th>
            <th>
              <span style={{ fontWeight: "bold" }}>E-pasts:&nbsp; </span>
            </th>
            <th>&nbsp;edgars@webkonsultants.lv</th>
          </tr>

          <tr>
            <th>
              <img src={phone} alt="" />
              &nbsp;
            </th>
            <th>
              <span style={{ fontWeight: "bold" }}>Tālrunis:&nbsp; </span>
            </th>
            <th>&nbsp;+ (371) 253 79 237</th>
          </tr>
        </tbody>
      </table>
      <p className="Footer__copy">© 2016 Webkonsultants.lv</p>
    </footer>
  );
};
