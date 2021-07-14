import { useEffect, useState } from "react";

const ShowCard = () => {
  const [upComing, setUpComing] = useState([]);
  const [indexVal, setIndexVal] = useState(0);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4a28ece117410f6f3409c96f11c560d5&language=en-US`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setUpComing(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  const imgepath = `https://image.tmdb.org/t/p/w500/${upComing[indexVal]?.poster_path}`;

  return (
    <div className="show-card animation">
      <img className="cover-photo" src={imgepath} alt="img" />
      <div className="container">
        <p className="title">{upComing[indexVal]?.title}</p>
        {/* <p>classMovie</p> */}
        <p className="releaseData">{upComing[indexVal]?.release_date}</p>
        <div className="play-place">
          <img className="play-icon" src="../PLAY.png" alt="" />
          <p>Show trailer</p>
        </div>
        <div className="actions">
          <p
            className="next-arrow"
            onClick={() => {
              if (indexVal >= 1) return setIndexVal(indexVal - 1);
              else return setIndexVal(0);
            }}
          >
            <img src="next-arrow.svg" alt="" />
          </p>
          <p className="show-number">{indexVal + 1}/20</p>
          <p
            onClick={() => {
              if (indexVal <= 18) return setIndexVal(indexVal + 1);
              else return setIndexVal(19);
            }}
          >
            <img src="back-arrow.svg" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default ShowCard;
