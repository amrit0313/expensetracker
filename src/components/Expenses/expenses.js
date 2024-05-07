import Expenseitem from "./expenseitem";
import "./expenses.css";
import Card from "../UI/card";

const Expenses = (props) => {
  return (
    <Card className="expenses" title="new">
      <Expenseitem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      ></Expenseitem>
      <Expenseitem
        title={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      ></Expenseitem>
    </Card>
  );
};
export default Expenses;
