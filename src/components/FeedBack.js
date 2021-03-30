import React, { useEffect, useState } from "react";

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
    fetch("https://ad-konsultants.kebbeit.dev/wp-json/wp/v2/Reviews")
      .then((response) => response.json())
      .then((response) => {
        set(
          response.map((value, id) => {
            const { company, comment, image } = value.acf;
            return (
              <div key={id}>
                <Client
                  name={value.title.rendered}
                  occupation={company}
                  description={comment}
                  imgSrc={image}
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
        <div className="FeedBack__content">{Reviews}</div>
      </div>
    </section>
  );
};

// getRevives(setGetReviews);
// <div
//   // contentEditable="true"
//   dangerouslySetInnerHTML={{ __html: "" }}
// ></div>;
