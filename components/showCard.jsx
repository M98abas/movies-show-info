const ShowCard = ({ title, imgPath, releaseDate }) => {
  const imgepath = `https://image.tmdb.org/t/p/w500/${imgPath}`;
  return (
    <div className="show-card animation">
      <img className="cover-photo" src={imgepath} alt="img" />
      <div className="container">
        <p className="title">{title}</p>
        {/* <p>classMovie</p> */}
        <p className="releaseData">{releaseDate}</p>
        <div className="play-place">
          <img className="play-icon" src="../PLAY.png" alt="" />
          <p>Show trailer</p>
        </div>
      </div>
    </div>
  );
};
export default ShowCard;
