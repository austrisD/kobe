import React, { useEffect, useState } from "react";
import teamMember from "../resources/jpg/teamMember.jpeg";

export const FeedBack = () => {
  const [Reviews, setReviews] = useState("");
  const Client = ({ name, occupation, description, imgSrc }) => {
    return (
      <div className="client">
        <img className="client__image" src={imgSrc} alt="missing" />
        <div className="client__text__warper">
          <p
            className="client__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <br />
          <p className="client__name">
            {name}
            <span className="client__occupation"> {occupation}</span>
          </p>
        </div>
      </div>
    );
  };
  const getRevives = (set) => {
    fetch("https://ad-konsultants.kebbeit.dev/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((response) => {
        set(
          response.map((value, id) => {
            console.log(value);
            const src = value.content.rendered
              .match(/(src=")(.*?)(?=")/g)[0]
              .slice(5);
            return (
              <div key={id}>
                <Client
                  name={value.title.rendered}
                  occupation={"CEO Sia “ABCDE”"}
                  description={value.excerpt.rendered}
                  imgSrc={src}
                />
              </div>
            );
          })
        );
      });
  };
  useEffect(() => {
    getRevives(setReviews);
  }, []);

  // getRevives(setGetReviews);
  // <div
  //   // contentEditable="true"
  //   dangerouslySetInnerHTML={{ __html: "" }}
  // ></div>;

  return (
    <section className="FeedBack">
      <div className="FeedBack__main__wraper">
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
          {Reviews}
          {/* <Client
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
          /> */}
        </div>
      </div>
    </section>
  );
};
