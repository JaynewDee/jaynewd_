import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io"

const SocialBox = () => {
  
  return (
    <div className="socialBox">
      <a target="_blank" href="https://github.com/JaynewDee" rel="noreferrer">
        <AiFillGithub size={'1.77rem'}/>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jaynewd73/"
        rel="noreferrer"
      >
        <BsLinkedin size={'1.5rem'}/>
      </a>
      <a
        target="_blank"
        href="mailto:jdiehl2236@gmail.com"
        rel="noreferrer"
      >
        <IoIosMail size={'1.77rem'}/>
      </a>
    </div>
  );
};

export default SocialBox;
