import '../../Styles/selectedList.css';

function SelectedList() {
    return (
        <div className="selected-list-container">
            <select className="select-menu">
                <option value="option1">เรียงตามหมายเลขประจำตัว</option>
                <option value="option2">เรียงตามชื่อจากตัวอักษร</option>
                <option value="option3">เรียงตามธาตุ</option>
            </select>
        </div>
    )
}

export default SelectedList;