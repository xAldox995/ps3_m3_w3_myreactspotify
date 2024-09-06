const AlbumCard = ({ singleSong }) => {
  return (
    <div className="col text-center mb-4">
      <img className="img-fluid" src={singleSong.album.cover_medium} alt={`Cover for ${singleSong.title}`} />
      <div className="mt-2">
        <h5>{singleSong.title}</h5>
        <p className="text-muted">{singleSong.artist.name}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
