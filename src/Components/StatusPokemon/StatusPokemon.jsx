import '../../Styles/statusPokemon.css';

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
                    <h2>#{data.id} {data.name}</h2>
                    <p>-----------------------</p>
                    {
                    data.types.map(poke =>{
                        return(
                            <div className="group-types">
                            <h3> {poke.type.name}</h3>
                        </div>
                        )
                    })
                }
                    <p>-----------------------</p>


                    {/* ability */}
                    {
                        data.abilities.map(poke => {
                            return (
                                <div className="group">
                                    <h4>{poke.ability.name}</h4>
                                </div>
                            )
                        })
                    }
                    <p>-----------------------</p>
                    {/* status */}
                    {
                    data.stats.map(poke =>{
                        return(
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