import React from "react";

import "./expensesfilter.css";

const ExpenseFilter = (props) => {
const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
};

return (
    <div className="expenses-filter">
    <div className="expenses-filter-control">
        <label>Filter by year</label>
        </div>
        <select className="filterSelect" value={props.selected} onChange={dropdownChangeHandler}>
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
        </select>
    
    </div>

);
};

export default ExpenseFilter;