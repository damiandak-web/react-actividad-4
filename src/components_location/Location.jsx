import Character from "../components_characteres/Character";
import CharacterList from "../components_characteres/CharacterList ";
function Location({ location, character }) {
  return (
    <div className="text-center p-5">
      <h3 className="fluid rounded-pill">{location.name}</h3>
      <h3 className="fluid rounded-pill">{location.type}</h3>
      <h3 className="fluid rounded-pill">{location.dimension}</h3>
      
    </div>
  );
}

export default Location;
