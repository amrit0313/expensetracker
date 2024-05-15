import Expenseitem from "./expenseitem";
import "./expenses.css";
import Card from "../UI/card";
import { useState } from "react";
import ExpenseFilter from "./expensesFilter";


const Expenses = (props) => {
  const [filteredYear, setFilteredyear]= useState('2023')
  
  const filterChangeHandler = () => {
    setFilteredyear(filteredYear);
  }
  return (
    <Card className="expenses" title="new">
      <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
      {props.items.map(expenses => <Expenseitem title = {expenses.title} amount= {expenses.amount} date = {expenses.date} key={expenses.id}/> ) }
     
    </Card>
  );
};
export default Expenses;
