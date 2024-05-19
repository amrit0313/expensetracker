import Expenseitem from "./expenseitem";
import "./expenses.css";
import Card from "../UI/card";
import { useState } from "react";
import ExpenseFilter from "./expensesFilter";
import ExpensesChart from "./expensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredyear]= useState('2024')
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  }

  const filteredExpenses  = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()=== filteredYear;
  });

  
  return (
    <Card className="expenses" title="new">
      <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
      <ExpensesChart expenses={props.items}/>

    {/* { {filteredExpenses.length === 0 ? (<p>No data found</p> ): (filteredExpenses.map(expenses => <Expenseitem key={expenses.id} title = {expenses.title} amount= {expenses.amount} date = {expenses.date} /> ))} }
      */}

      { filteredExpenses.length ===0 && <p style={{color: "white"}}>No data found</p>}

      {filteredExpenses.length > 0 && filteredExpenses.map(expenses => 
      (<Expenseitem 
      key={expenses.id} 
      title = {expenses.title}
       amount= {expenses.amount} 
       date = {expenses.date} 
       />
       ))}
    </Card>
  );
};
export default Expenses;
