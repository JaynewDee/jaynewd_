import React from "react";
import Header from "./components/Header";
import Portal from "./components/Portal";
import Footer from "./components/Footer";
import "./index.scss";

const ConverStation = () => {
  return (
    <>
      <div>
        <div className="Converstation-App">
          <Header />
          <Portal />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ConverStation;

// *** SUMMARY OF AI ENGINE *** //

// "id": "curie"
// "engine_id": "text-curie-001"

// Curie

// Curie is extremely powerful, yet very fast. While Davinci is stronger when it comes to analyzing complicated text, Curie is quite capable for many nuanced tasks like sentiment classification and summarization. Curie is also quite good at answering questions and performing Q&A and as a general service chatbot.

// Good at: Language translation, complex classification, text sentiment, summarization
