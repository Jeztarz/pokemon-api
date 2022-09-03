import '../../Styles/cardList.css'

function CardList({ pokemon, loading }) {

    return (
        <>

            {loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="cardList-container" key={item.id}>
                                <img src={item.sprites.front_default} alt="" />

                                <div className="cardList-tag-name">
                                    {item.name}
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