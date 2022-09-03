import '../../Styles/filterCard.css'

function FilterCard() {
    return (
        <div className='type-card-container'>
            <p>Element</p>
            <div className='type-card-content'>
                <label class="type-card-select">
                    <input type="checkbox" /> Fire
                </label>

                <label class="type-card-select">
                    <input type="checkbox" /> Water
                </label>

                <label class="type-card-select">
                    <input type="checkbox" /> Ground
                </label>
            </div>

            <div className='type-card-footer'>
                <input type="submit" name="submit" className='type-card-submit'/>
            </div>
        </div>
    )
}

export default FilterCard;