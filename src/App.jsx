import EpisodesList from "./components_episodes/EpisodesList";
import LocationList from "./components_location/LocationList";
import CharacterList from "./components_characteres/CharacterList ";

function App() {
  return (
    <div className="text-black-50 bg-white">
      <h1 className="text-center display py-4">Characters</h1>
      <CharacterList/>
      <h1 className="text-center display py-4">Location</h1>
      <LocationList />
      <h1 className="text-center display py-4 ">Episodes</h1>
      <EpisodesList />
    </div>
  );
}

export default App;

