import { useEffect, useState } from "react";
import Location from "./Location";
function LocationList() {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const data = await response.json();
      setLocation(data.results);
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {locations.map((location) => {
          return (
            <div className="col-md-4" key={location.id}>
              <Location location={location} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
