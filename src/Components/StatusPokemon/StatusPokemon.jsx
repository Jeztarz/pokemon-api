import '../../Styles/statusPokemon.css';
import typeColors from '../../Styles/typeColor';

function StatusPokemon({ data }) {
    return (
        <>
            {(!data) ? (
                <>
                    <h1>Hi.. Master</h1>
                    <h4>Choose pokemon for show data</h4>
                </>

            ) : (

                <div className="status-pokemon-info">

                    <h2>#{data.id} {data.name[ 0 ].toUpperCase() + data.name.substring(1)} </h2>
                    <p>-----------------------</p>
                    <h6>weight : {data.weight}</h6>
                    <h6>height : {data.height}</h6>
                    <h3>ELEMENT ...</h3>

                    {
                        data.types.map(poke => {
                            return (

                                <h3 className='type-color'
                                    style={{ backgroundColor: typeColors[ poke.type.name ]}}>
                                    {poke.type.name}
                                </h3>


                            )
                        })
                    }



                    <p>-----------------------</p>


                    {/* ability */}
                    <h3>ABILITY ...</h3>
                    {
                        data.abilities.map(poke => {
                            return (
                                <div className="group">
                                    <h4>({poke.ability.name})</h4>
                                </div>
                            )
                        })
                    }
                    <p>-----------------------</p>
                    {/* status */}
                    <h3>STATUS ...</h3>
                    {
                        data.stats.map(poke => {
                            return (
                                <h4>{poke.stat.name} : {poke.base_stat}</h4>
                            )
                        })
                    }

                </div>
            )}
        </>


    )
}

export default StatusPokemon;