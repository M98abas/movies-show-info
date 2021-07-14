import { useEffect, useState } from "react";
import Cards from "../components/Card";
import ShowCard from "../components/showCard";
export default function Home() {
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [valIndex, setValIndex] = useState(0);
  const [mostPopular, setMostPopular] = useState([]);
  const URL = "https://api.themoviedb.org/3/movie/";
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `${URL}upcoming?api_key=4a28ece117410f6f3409c96f11c560d5&language=en-US`,
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => await setUpComing(result.results))
      .catch((error) => console.log("error", error));

    fetch(
      `${URL}top_rated?api_key=4a28ece117410f6f3409c96f11c560d5&language=en-US`,
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => await setTopRated(result.results))
      .catch((error) => console.log("error", error));

    fetch(
      `${URL}popular?api_key=4a28ece117410f6f3409c96f11c560d5&language=en-US`,
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => await setMostPopular(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="nav-section">
        <div className="container">
          <div className="ins-container">
            <img className="logo" src="Mask Group 3.png" alt="logo" />
            <div className="right-side">
              <input type="text" placeholder="Find move..." />
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/PcCyXQq/Icon.png"
                  alt="Icon"
                  border="0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* data.title,overview,poster_path,release_date */}
      <div className="showco">
        <ShowCard key={upComing[valIndex]?.id} />
        {/* <div className="container actions">
          <button onClick={(e) => setValIndex(valIndex + 1)}>next</button>
          <p>{valIndex + 1}</p>
          <button onClick={(e) => setValIndex(valIndex - 1)}>back</button>
        </div> */}
      </div>
      <div className="container-min min-def">
        <p className="top-rated">Top Rated</p>
        <div className="sub-container">
          {topRated?.map((item) => {
            // if (item.id == 19404)
            return (
              <Cards
                key={item.id}
                imgPath={item.poster_path}
                filmTitle={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
              />
            );
          })}
        </div>
      </div>

      <div className="container-min min-def">
        <p className="top-rated">Most Popular</p>
        <div className="sub-container">
          {mostPopular?.map((item) => {
            // if (item.id == 19404)
            return (
              <Cards
                key={item.id}
                imgPath={item.poster_path}
                filmTitle={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
              />
            );
          })}
        </div>
      </div>

      <div className="container-min min-def">
        <p className="top-rated">upComing</p>
        <div className="sub-container">
          {upComing?.map((item) => {
            // if (item.id == 19404)
            return (
              <Cards
                key={item.id}
                imgPath={item.poster_path}
                filmTitle={item.title}
                releaseDate={item.release_date}
                overview={item.overview}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
