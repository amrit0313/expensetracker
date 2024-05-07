import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/newExpense";
const App = () => {
  const expense = [
    { id: "e1", title: "car", price: "$35", date: new Date(2024, 2, 21) },

    {
      id: "e2",
      title: "car insurance",
      price: "$4",
      date: new Date(2024, 2, 21),
    },

    {
      id: "e3",
      title: "life insurance",
      price: "$2432",
      date: new Date(2024, 2, 21),
    },

    { id: "e4", title: "halle", price: "$32", date: new Date(2024, 2, 21) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
};
export default App;
