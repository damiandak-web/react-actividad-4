import { useEffect, useState } from "react";
import Episode from "./Episode";
function EpisodesList() {
    const [episodes, setEpisode] = useState ([])
    useEffect(()=> {
    async function fetchData(){
    const response_1 = await fetch("https://rickandmortyapi.com/api/episode");
    const data_1 = await response_1.json();
    setEpisode(data_1.results);
}
fetchData()
  }, []);
  return (
    <div className="container">
      <div className="row">
      {episodes.map((episode) => {
        return (
          <div className="col-md-4" key={episode.id}>
            <Episode  episode={episode} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default EpisodesList;
