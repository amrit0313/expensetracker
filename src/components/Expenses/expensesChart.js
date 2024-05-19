import React from "react";

import Chart from "../chart/chart";

const ExpensesChart = (props) => {
    console.log(props.expenses)
     const chartDatapoint = [
         {label: 'Jan', value :0 },
         {label: 'Feb', value :0 },
         {label: 'Mar', value:0  },
         {label: 'Apr', value :0 },
         {label: 'May', value :0 },
         {label: 'Jun', value :0 },
         {label: 'July', value :0 },
         {label: 'Aug', value :0 },
         {label: 'Sep', value :0 },
         {label: 'Oct', value :0 },
         {label: 'Nov', value :0 },
         {label: 'Dec', value :0 },
        ];

        for(const expense of props.expenses){
          const  monthValue = expense.date.getMonth();
            chartDatapoint[monthValue].value  += expense.amount; 
        }

    return <Chart dataPoints = {chartDatapoint} />
}
export default ExpensesChart;