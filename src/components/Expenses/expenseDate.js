import "./expenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="box">
      <div className="month_date">{month}</div>
      <div className="year_date">{year}</div>
      <div className="day_date">{day}</div>
    </div>
  );
};

export default ExpenseDate;
