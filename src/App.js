import { useState } from "react";
import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/newExpense";


  const Initials = [
    { id: "e1", title: "car", amount: 343, date: new Date(2024, 2, 21) },

    {
      id: "e2",
      title: "car insurance",
      amount: 4,
      date: new Date(2023, 2, 21),
    },

    {
      id: "e3",
      title: "life insurance",
      amount: 6767,
      date: new Date(2024, 2, 21),
    },

    { id: "e4", title: "halle", amount: 6757, date: new Date(2024, 2, 21) },
  ];



const App = () => {
  const [expenses, setExpenses] = useState(Initials);

  const expenseHandler = (newExpenses) => {
    setExpenses((prevExpense) => {
      return([newExpenses, ...prevExpense])
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense  onSetNewExpense = {expenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
