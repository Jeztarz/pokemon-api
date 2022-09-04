import '../../Styles/cardList.css'

function CardList({ pokemon, infoPokemon }) {

    return (
        <>

            
                {pokemon.map((pokemonList) => {
                    return (
                        <>
                            <div className="cardList-container" 
                                key={pokemonList.id} 
                                onClick ={()=> infoPokemon(pokemonList)}
                                >
                                <p>#{pokemonList.id}</p>
                                <img src={pokemonList.sprites.front_default} alt={pokemonList.name} />

                                <div className="cardList-tag-name">
                                    {pokemonList.name}
                                </div>
                            </div>
                        </>
                    )
                })}


            {/* {pokemon.map((poke) => {
            return (
            <div className="cardList-container"
            key={poke.name}
            > 
                <img src={poke.sprites.front_default} alt={pokemon.name} />
                <div className="cardList-tag-name">
                    {poke.name}
                </div>
            </div>
            )
          })} */}
        </>

    )
}


export default CardList;