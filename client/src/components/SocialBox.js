import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const SocialBox = () => {
  const keygen = () => {
    return Math.floor(Math.random() * 1000);
  };
  return (
    <div key={keygen()} className="socialBox">
      <a
        key={keygen()}
        target="_blank"
        href="https://github.com/JaynewDee"
        rel="noreferrer"
      >
        <AiFillGithub size={"1.77rem"} />
      </a>
      <a
        key={keygen()}
        style={{ padding: ".5rem" }}
        target="_blank"
        href="https://www.linkedin.com/in/jaynewd73/"
        rel="noreferrer"
      >
        <BsLinkedin size={"1.5rem"} />
      </a>
      <a
        key={keygen()}
        target="_blank"
        href="mailto:jdiehl2236@gmail.com"
        rel="noreferrer"
      >
        <IoIosMail size={"1.77rem"} />
      </a>
    </div>
  );
};

export default SocialBox;
