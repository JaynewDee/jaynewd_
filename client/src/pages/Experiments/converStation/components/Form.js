import React, { useState } from "react";
const axios = require("axios").default;

const Form = ({ setCurrent }) => {
  const [formText, setFormText] = useState("");
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setFormText(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await axios({
      method: "post",
      url: "converstation/api/completion",
      data: {
        prompt: formText,
      },
    })
      .then((data) => {
        let choices = data.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, " ");
        let promptObject = JSON.parse(data.config.data);
        let textOnly = promptObject.prompt;
        let replyOnly = choices.replace(textOnly, "");
        return { prompt: textOnly, response: replyOnly };
      })
      .then((current) => {
        setCurrent(current);
      });
    // clear form values
    setFormText("");
  };

  return (
    <section className="prompt-box">
      <form action="submit" method="post" id="prompt-form">
        <textarea
          value={
            error ? "Curie is currently offline for maintenance" : formText
          }
          id="prompt-field"
          form="prompt-form"
          spellCheck="true"
          onChange={handleInputChange}
        ></textarea>
        <input
          type="button"
          value="SEND"
          className="submit-btn"
          onClick={handleFormSubmit}
        ></input>
      </form>
    </section>
  );
};

export default Form;
