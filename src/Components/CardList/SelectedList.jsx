// import { useState, useEffect } from 'react';


import '../../Styles/selectedList.css';

function SelectedList({sortBy}) {

    return (
        <div className="selected-list-container">
            <select className="select-menu" onChange={sortBy}>

                <option value="byId">
                    เรียงตามหมายเลขประจำตัว
                </option>

                <option value="byName" >
                    เรียงตามชื่อจากตัวอักษร
                </option>

                <option value="byWeight">
                    เรียงตามน้ำหนัก
                </option>

                <option value="byHeight">
                    เรียงตามส่วนสูง
                </option>

            </select>
        </div>
    )
}

export default SelectedList;