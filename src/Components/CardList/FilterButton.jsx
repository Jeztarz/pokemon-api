import '../../Styles/filterButton.css';

function FilterButton({ modal }) {
    return (
        <button className="select-type-button-container"
            onClick={() => modal(true)}>
            <img src='./filter.png' alt='filter' style={{ width: '25px' }} />
        </button>
    )
}

export default FilterButton;