import { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  
  const [EnteredTitle, setEnteredTitle] = useState('');
  const [EnteredAmount, setEnteredAmount] = useState('');
  const [EnteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value)
  };

  const DateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  value={EnteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2023-01-01" value={EnteredDate} max="2025-01-01"  onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit" className="button_form">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
