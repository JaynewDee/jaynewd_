import React, { useState } from "react";
const axios = require("axios").default;

const Form = ({ setCurrent }) => {
  const [formText, setFormText] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFormText(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: "post",
      url: "converstation/api/completion",
      data: {
        prompt: formText,
      },
    })
      .then((data) => {
        // Strip newlines from relevant prompt/response data
        let choices = data.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, " ");
        // Transform json string into manageable object
        let promptObject = JSON.parse(data.config.data);
        // Extract string value of prompt key in object
        let textOnly = promptObject.prompt;
        // Replace any occurrences of the prompt inside the entire text string,
        // storing only the AI's response
        let replyOnly = choices.replace(textOnly, "");
        // Store final values in component state, to pass to parent portal
        return { prompt: textOnly, response: replyOnly };
      })
      .then((current) => {
        setCurrent(current);
      })
      .catch((err) => console.error(err));
    // clear form values
    setFormText("");
  };

  return (
    <section className="prompt-box">
      <form action="submit" method="post" id="prompt-form">
        <textarea
          value={formText}
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
