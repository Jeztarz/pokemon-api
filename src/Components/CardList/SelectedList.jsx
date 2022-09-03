import '../../Styles/selectedList.css';

function SelectedList() {
    return (
        <div className="selected-list-container">
            <select className="select-menu">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    )
}

export default SelectedList;