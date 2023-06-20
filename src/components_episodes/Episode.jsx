function Episodes({ episode }) {
  return (
    <div className="text-center p-5">
      <h3 className="fluid rounded-pill">{episode.name}</h3>
      <h3 className="fluid rounded-pill">{episode.air_date}</h3>
      <h3 className="fluid rounded-pill">{episode.episode}</h3>
      <h3 className="fluid rounded-pill">{episode.characteres}</h3>
    </div>
  );
}

export default Episodes;
