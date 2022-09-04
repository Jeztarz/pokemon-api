import  '../../Styles/windowList.css'
import CardList from './CardList'

function WindowList({ pokemon, infoPokemon }) {
    return (
        <div className='window-list-container'>
            <CardList pokemon={pokemon} infoPokemon={infoPokemon} />
        </div>
    )
}

export default WindowList;