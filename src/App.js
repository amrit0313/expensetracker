import { useState } from "react";
import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/newExpense";

const Initials = [
  { id: "e1", title: "car", amount: 32, date: new Date(2024, 11, 21) },
  { id: "e2", title: "car insurance", amount: 44, date: new Date(2023, 8, 21) },
  {
    id: "e3",
    title: "life insurance",
    amount: 90,
    date: new Date(2024, 6, 21),
  },
  { id: "e4", title: "halle", amount: 53, date: new Date(2022, 2, 21) },
  { id: "e5", title: "azx", amount: 68, date: new Date(2022, 9, 21) },
  { id: "e6", title: "subtle art", amount: 35, date: new Date(2023, 1,12)},
  { id: "e6", title: "13 reasons why", amount: 30, date: new Date(2024, 4,12)}


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
