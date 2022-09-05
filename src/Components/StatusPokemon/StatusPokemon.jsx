import '../../Styles/statusPokemon.css';
import typeColors from '../../Styles/typeColor';

function StatusPokemon({ data }) {
    return (
        <>
            {(!data) ? (
                <div className="textWelcomes">
                    <h1>Hi.. Master</h1>
                    <h4>Choose pokemon for show data</h4>
                </div>

            ) : (

                <div className="status-pokemon-info">
                    <div className="status-pokemon-info_name">
                        <h2>#{data.id}</h2>
                        <h2>{data.name[ 0 ].toUpperCase() + data.name.substring(1)}</h2>
                    </div>

                    {/* weight */}
                    <div className="status-pokemon-info_weight">
                        <h5>weight : {data.weight}&nbsp;&nbsp;height : {data.height}</h5>

                    </div>

                    {/* element */}
                    <div className="status-pokemon-info_element">
                        {
                            data.types.map(poke => {
                                return (

                                    <h3 className='type-color'
                                        style={{ backgroundColor: typeColors[ poke.type.name ] }}>
                                        {poke.type.name}
                                    </h3>


                                )
                            })
                        }
                    </div>


                    {/* ability */}
                    <div className="status-pokemon-info_ability">

                        <h3>ABILITY </h3>
                        {
                            data.abilities.map(poke => {
                                return (
                                    <h4>{poke.ability.name}</h4>
                                )
                            })
                        }

                    </div>

                    {/* status */}
                    <div className='status'>
                        <h3>STATUS</h3>
                        {
                            data.stats.map(poke => {
                                return (
                                    <div className="status-pokemon-info_status">
                                    <h4>{poke.stat.name} </h4>
                                    <h5>{poke.base_stat}</h5>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>


                </div>
            )}
        </>


    )
}

export default StatusPokemon;