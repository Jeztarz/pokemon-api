import '../../Styles/statusPokemon.css';

function PokemonImg({ data }) {


    return (

        <>
            {(!data) ? (
                <></>
            ) : (
                <div className="pokemon">
                    <img src={data.sprites.other.home.front_default} alt={data.name} />
                </div>

            )}
        </>

    )
}

export default PokemonImg;