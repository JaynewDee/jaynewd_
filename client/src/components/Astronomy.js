import { useEffect, useState, useMemo } from "react";
import { getPhoto } from "../utils/nasaAPI/apod";
const Astronomy = () => {
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoadState] = useState(true);
  useEffect(() => {
    const getData = async () => {
      return await getPhoto().then((data) => {
        setPhotoData(data);
      });
    };
    getData().then(() => {
      setLoadState(false);
    });
  }, []);

  return (
    <div id="astronomy-page">
      {loading ? (
        <div>Fetching photograph, please wait ... </div>
      ) : (
        <div style={{ padding: "1rem" }}>
          <h3>{photoData.title}</h3>
          <img src={photoData.hdurl} id="astro-image"></img>
          <p>{photoData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Astronomy;
