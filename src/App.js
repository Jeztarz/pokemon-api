import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import FilterButton from "./Components/CardList/FilterButton";
// import FilterCard from './Components/CardList/FilterCard';
import SelectedList from "./Components/CardList/SelectedList";
import ShortedButton from "./Components/CardList/ShortedButton";
import WindowList from "./Components/CardList/WindowList";
import PokemonImg from "./Components/StatusPokemon/PokemonImg";
import StatusPokemon from "./Components/StatusPokemon/StatusPokemon";

// const baseUrl = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    console.log(res)
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
  
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  // const [pokemonPerPage, serPokemonPerPage] = useState(100);
  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   axios.get(`${baseUrl}?limit=${pokemonPerPage}`)
  //   .then((response) => {
  //     setPokemon(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   async function getPoke() {
  //     const response = await axios.get(`${baseUrl}/1`);
  //     setPokemon(response.data);
  //   }
  //   getPoke();
  // })

  return (
    <div>
      <div className="App">
        <div className="first-column">
          <div className="button-shorted">
            <FilterButton />
            <SelectedList />
            <ShortedButton />
          </div>
          <WindowList pokemon={pokeData} loading={loading} />
          {/* <FilterCard /> */}
        </div>

        <div>
          <PokemonImg />
        </div>

        <div>
          <StatusPokemon />
        </div>
      </div>
    </div>
  );
}

export default App;
