import React from "react";

export const Presentation = () => {
  return (
    <section className="Presentation">
      <h3 className="Presentation__header">
        Zināt “Kā?” nozīmē – lētāk, labāk, ātrāk un efektīvāk
      </h3>
      <svg height="3" width="213px" className="Presentation__decorLine">
        <line
          x1="0"
          y1="0"
          x2="213"
          y2="0"
          style={{ stroke: "#33667A", strokeWidth: "3px" }}
        />
      </svg>
      <p className="Presentation__paragraph">
        Vai Jums ir bijusi negatīva pieredze mājaslapas izveidē vai uzlabošanā?
        Tam tā vairs nav jābūt! Ja Jūs zināsiet profesionālas mājaslapas
        izveides pamatprincipus, Jūs pratīsiet izvēlēties kompetentus
        speciālistus, uzdot viņiem pareizos jautājumus un kontrolēt to darba
        kvalitāti un termiņus.
        <br />
        <br />
        Tas nenozīmē, ka Jums ir jākļūst par mājas lapas izveides speciālistu.
        Tas nozīmē, ka Jūs pratīsiet atsijāt dzintarus no akmeņiem! Jūs
        zināsiet, kad ir sasniegts nospraustais mērķis, par kuru esat
        samaksājis.
      </p>
      <div>
        <iframe
          title="Presentation__video"
          src="https://www.youtube-nocookie.com/embed/G46m8wrXkTk?fs=0&controls=0&modestbranding=1"
          className="Presentation__video"
        ></iframe>
      </div>
    </section>
  );
};
