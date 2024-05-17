import { useState } from "react";
import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/newExpense";

const Initials = [
  { id: "e1", title: "car", amount: 52, date: new Date(2024, 2, 21) },
  { id: "e2", title: "car insurance", amount: 4, date: new Date(2023, 6, 21) },
  {
    id: "e3",
    title: "life insurance",
    amount: 90,
    date: new Date(2024, 1, 21),
  },
  { id: "e4", title: "halle", amount: 23, date: new Date(2024, 2, 21) },
  { id: "e5", title: "halle", amount: 48, date: new Date(2024, 9, 21) },

];

const App = () => {
  const [expenses, setExpenses] = useState(Initials);

  const expenseHandler = (newExpenses) => {
    setExpenses((prevExpense) => {
      return [newExpenses, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onSetNewExpense={expenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
