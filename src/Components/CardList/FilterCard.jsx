import '../../Styles/filterCard.css'
import mogupData from '../mogupData'
import typeColors from '../../Styles/typeColor'

function FilterCard({ typeFilter }) {
    return (
        <div className='type-card-container blur-in'>
            <p>Element</p>

            <div className='type-card-content'>
                {
                    mogupData.map(element => {
                        return (
                            <button className="type-card-select"
                                key={element.id}
                                value={element.value}
                                style={{ backgroundColor: typeColors[ element.element ] }}
                                onClick={typeFilter}
                            >
                                {element.element[ 0 ].toUpperCase() + element.element.substring(1)}
                            </button>
                        )
                    })
                }
            </div>
            <button className='show-all'
                value="all"
                onClick={typeFilter}
                >Show All</button>
        </div>
    )
}

export default FilterCard;