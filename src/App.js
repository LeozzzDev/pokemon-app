import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const pokemonBackendApi = "http://localhost:5000/pokemon";
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState("");

  const getPokemonData = async () => {
    let pokemonApiResponse = await axios.get(`${pokemonBackendApi}/${pokemon}`);
    setData(JSON.stringify(pokemonApiResponse.data));
  };

  const cleanTextArea = () => setData("");

  return (
    <div className="App">
      <div className="box-wrapper">
        <input
          type="text"
          onChange={(e) => {
            setPokemon(e.target.value);
            cleanTextArea();
          }}
        />
        <button onClick={getPokemonData}>Get Translation</button>
      </div>

      <textarea value={data} onChange={getPokemonData}></textarea>
    </div>
  );
}

export default App;
