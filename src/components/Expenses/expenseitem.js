import ExpenseDate from "./expenseDate";
import "./expenseitem.css";
import Card from "../UI/card";
import { useState } from "react";

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!!!");
  };

  return (
    <Card className="expense-items">
      <ExpenseDate date={props.date} />
      <div className="expense-items_description">
        <h2>{title}</h2>
      </div>
      <div className="expense-items_price">${props.amount}</div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default Expenseitem;
