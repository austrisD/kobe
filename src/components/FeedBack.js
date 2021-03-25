import React from "react";
import teamMember from "../resources/jpg/teamMember.jpeg";

export const FeedBack = () => {
  const Client = ({ name, occupation, description, imgSrc }) => {
    return (
      <div className="client">
        <img className="client__image" src={imgSrc} alt="missing" />
        <p className="client__description">{description}</p>
        <br />
        <p className="client__name">
          {name}
          <span className="client__occupation">{occupation}</span>
        </p>
      </div>
    );
  };

  return (
    <section className="FeedBack">
      <h3 className="FeedBack__header">Klientu atsauksmes</h3>
      <svg height="3" width="213px" className="FeedBack__decorLine">
        <line
          x1="0"
          y1="0"
          x2="213"
          y2="0"
          style={{ stroke: "#fb7840", strokeWidth: "3px" }}
        />
      </svg>
      <div className="FeedBack__content">
        <Client
          name={"Jānis Kalniņš"}
          occupation={"CEO Sia “ABCDE”"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat."
          }
          imgSrc={teamMember}
        />
        <Client
          name={"Jānis Kalniņš"}
          occupation={"CEO Sia “ABCDE”"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat."
          }
          imgSrc={teamMember}
        />
      </div>
    </section>
  );
};
