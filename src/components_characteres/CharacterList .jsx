import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="justify-content-between align-items-center">
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container">

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                species={character.species}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;