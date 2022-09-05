// import { useState, useEffect } from 'react';


import '../../Styles/selectedList.css';

function SelectedList({sortBy}) {

    return (
        <div className="selected-list-container">
            <select className="select-menu" onChange={sortBy}>

                <option value="byId">
                sort by ID
                </option>

                <option value="byName" >
                sort by name
                </option>

                <option value="byWeight">
                sort by weight
                </option>

                <option value="byHeight">
                sort by height
                </option>

            </select>
        </div>
    )
}

export default SelectedList;