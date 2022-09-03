import  '../../Styles/windowList.css'
import CardList from './CardList'

function WindowList({ pokemon, loading }) {
    return (
        <div className='window-list-container'>
            <CardList pokemon={pokemon} loading={loading} />
        </div>
    )
}

export default WindowList;