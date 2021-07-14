const Cards = ({ imgPath, filmTitle, releaseDate, overview }) => {
  const imgepath = `https://image.tmdb.org/t/p/w500/${imgPath}`;

  return (
    <div className="content">
      <div className="sup-cont">
        <img src={imgepath} alt="" />
        <p>{filmTitle}</p>
      </div>
      <div className="another-cont">
        <p>{releaseDate}</p>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};
export default Cards;
