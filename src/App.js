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

function App() {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [pokeData, setPokeData] = useState([]);
  const [pokeDex,setPokeDex]=useState();

  const pokeFun = async () => {
    const res = await axios.get(url + '/?limit=200');
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
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

  // useEffect(() => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon')
  //   .then((res) => {
  //     setPokeData(res.data.results);
  //     console.log(res);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // })

  // const [pokemonPerPage, serPokemonPerPage] = useState(100);

  // useEffect(() => {
  //   axios.get(baseUrl)
  //   .then((response) => {
  //     setPokeData(response.data.results);
  //   });
  // });

  return (
    <div>
      <div className="App">
        <div className="first-column">
          <div className="button-shorted">
            <FilterButton />
            <SelectedList />
            <ShortedButton />
          </div>
          <WindowList pokemon={pokeData} infoPokemon={poke=>setPokeDex(poke)} />
          {/* <FilterCard /> */}
        </div>

        <div>
          <PokemonImg data={pokeDex} />
        </div>

        <div>
          <StatusPokemon  data={pokeDex} />
        </div>
      </div>
    </div>
  );
}

export default App;
