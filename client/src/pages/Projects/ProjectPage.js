import React from "react";
import LinkBox from "../../components/LinkBox";
import StatBox from "../../components/StatBox";
import dinoImg from "../../assets/imgs/dino-background-public.jpeg";
import caraBellaImg from "../../assets/imgs/cara-bella.png";
import dayspawImg from "../../assets/imgs/day-spaw.png";
import moodRingImg from "../../assets/imgs/mood-ring.png";
import grouperImg from "../../assets/imgs/grouper.png";
const ProjectPage = ({ data }) => {
  const imageSwitch = (name) => {
    switch (name) {
      case "GroupMaker.js":
        return grouperImg;
      case "Cara Bella":
        return caraBellaImg;
      case "Parks & Rex":
        return dinoImg;
      case "Dayspaw":
        return dayspawImg;
      case "Mood Ring":
        return moodRingImg;
      default:
        return "";
    }
  };

  return (
    <>
      {!data ? (
        <div>Loading, please wait ... </div>
      ) : (
        <>
          <h2>{data.name}</h2>
          <img className="project-image" src={imageSwitch(data.name)}></img>
          <LinkBox urls={data?.urls} />
          <StatBox
            lang={data.lang}
            date={data.created}
            license={data.license}
            className="statbox"
          />
          <section className="project-body">{data.body}</section>
        </>
      )}
    </>
  );
};

export default ProjectPage;
