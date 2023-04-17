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


import { MessengerChat } from "react-messenger-chat-plugin";
function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeDex, setPokeDex] = useState();
  const [pokeData, setPokeData] = useState([]);
  const [getPokemonAll, setPokemonAll] = useState([]);
// console.log(getPokemonAll)
  // get data from url
  const pokeFun = async () => {
    const res = await axios.get(url + "?limit=500");
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonAll((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });

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

  // filter pokemon by elements
  const typeFilter = (e) => {
    const filterElement = getPokemonAll.filter((pokemonElementFilter) => {
      return (pokemonElementFilter.types.find((type) => type.type.name === e.target.value) !== undefined);
    });
    setPokeData(filterElement)

    if (e.target.value === "all") {
      return setPokeData(getPokemonAll), setOpenModal(false);
    }
    
    return setOpenModal(false);
  };

  // dropdown menu for list items
  const optionSelected = (e) => {
    setPokeData((data) => {
      const dataToSort = [...data];
      switch (e.target.value) {
        case "byName":
          dataToSort.sort((a, b) => (a.name > b.name ? 1 : -1));
          return dataToSort;
        case "byId":
          dataToSort.sort((a, b) => (a.id > b.id ? 1 : -1));
          return dataToSort;
        case "byWeight":
          dataToSort.sort((a, b) => (a.weight > b.weight ? 1 : -1));
          return dataToSort;
        case "byHeight":
          dataToSort.sort((a, b) => (a.height > b.height ? 1 : -1));
          return dataToSort;
        default:
          console.log("errors");
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
      <div>
        <MessengerChat
          pageId="105496835796176"
          appId="502170539988549"
          />
       </div>
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
