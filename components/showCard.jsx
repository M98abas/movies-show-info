const ShowCard = ({ title, overview, imgPath, releaseDate }) => {
  console.log("callinf");
  const imgepath = `https://image.tmdb.org/t/p/w500/${imgPath}`;
  return (
    <div className="show-card">
      <img src={imgepath} alt="img" />
      <div className="contianer">
        <p>{title}</p>
        {/* <p>classMovie</p> */}
        <p>{releaseDate}</p>
        <p>Play Icon</p>
      </div>
    </div>
  );
};
export default ShowCard;
