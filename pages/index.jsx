import { useEffect, useState } from "react";
import ShowCard from "../components/showCard";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4a28ece117410f6f3409c96f11c560d5&language=en-US",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="nav-section">
        <div className="container">
          <img className="logo" src="Mask Group 3.png" alt="logo" />
          <div className="right-side">
            <input type="text" placeholder="Find move..." />
            <button>
              <img src="icon.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* data.title,overview,poster_path,release_date */}
      {data?.map((item) => {
        return (
          <ShowCard
            title={item.title}
            overview={item.overview}
            imgPath={item.poster_path}
            releaseDate={item.release_date}
          />
        );
      })}
    </>
  );
}
