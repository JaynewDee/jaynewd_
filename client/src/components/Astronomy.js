import { useEffect, useState } from "react";
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
    <div>
      {loading ? (
        <div>Fetching photograph, please wait ... </div>
      ) : (
        <div>
          <h3>{photoData.title}</h3>
          <img src={photoData.hdurl}></img>
        </div>
      )}
    </div>
  );
};

export default Astronomy;
