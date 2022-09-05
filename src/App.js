import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import FilterButton from "./Components/CardList/FilterButton";
import FilterCard from "./Components/CardList/FilterCard";
import SelectedList from "./Components/CardList/SelectedList";
import ShortedButton from "./Components/CardList/ShortedButton";
import WindowList from "./Components/CardList/WindowList";
import PokemonImg from "./Components/StatusPokemon/PokemonImg";
import StatusPokemon from "./Components/StatusPokemon/StatusPokemon";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeData, setPokeData] = useState([]);
  const [pokeDex, setPokeDex] = useState();


  // get data from url
  const pokeFun = async () => {
    const res = await axios.get(url + "?limit=100");
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



  // modal
  const [openModal, setOpenModal] = useState(false);
// console.log(openModal);


// console.log(pokeData.filter(pokeData => (pokeData.weight > 1000)))
const typeFilter = (e) => {
  console.log(e.target.value)
  if (e.target.value === 'bug') {
    console.log('this bug')
  } else {
    console.log('not bug')
  }
  







  // setPokeData((pokeFilter) => {
  //   const filterPoke = [...pokeFilter];
  //   if (e.target.value === 'bug') {
  //     filterPoke.filter(filterPoke => filterPoke.types.types.name);
  //     return filterPoke;
  //   }
  //   return setOpenModal(false)
  // });

  return setOpenModal(false)
};

  // dropdown menu for list items
  const optionSelected = (e) => {
    setPokeData((data) => {
      const dataToSort = [...data];
      if (e.target.value === "byName") {
        dataToSort.sort((a, b) => (a.name > b.name ? 1 : -1));
        return dataToSort;
      } else if (e.target.value === "byId") {
        dataToSort.sort((a, b) => (a.id > b.id ? 1 : -1));
        return dataToSort;
      } else if (e.target.value === "byWeight") {
        dataToSort.sort((a, b) => (a.weight > b.weight ? 1 : -1));
        return dataToSort;
      } else if (e.target.value === "byHeight") {
        dataToSort.sort((a, b) => (a.height > b.height ? 1 : -1));
        return dataToSort;
      }
    });
  };

  // sorting items A-Z or Z-A
  const toggleTime = (e) => {
    setPokeData((sort) => {
      const sortToggle = [...sort];
      if (e) {
        sortToggle.reverse();
        return sortToggle;
      }
    });
  };

  

  return (
    <div>
      <div className="App">
        <div className="first-column">
          <div className="button-shorted">
            <FilterButton modal={setOpenModal} />
            <SelectedList sortBy={optionSelected} />
            <ShortedButton toggleTime={toggleTime} />
          </div>

          <WindowList
            pokemon={pokeData}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          {openModal && <FilterCard typeFilter={typeFilter} />}
        </div>

        <div className="second-column">
          <PokemonImg data={pokeDex} />
        </div>

        <div className="third-column">
          <StatusPokemon data={pokeDex} />
        </div>
      </div>
    </div>
  );
}

export default App;
