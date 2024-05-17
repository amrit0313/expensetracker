import React from "react";
import ChartBar from "./chartBar"
import "./chart.css";

const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoint =>dataPoint.value);
    
    const maxValue  = Math.max(...dataPointsValue);

    return(
        <div className="chart">
        {props.dataPoints.map((dataPoint) => (<ChartBar
         key = {dataPoint.label}
         value ={dataPoint.value} 
        label = {dataPoint.label} 
        Maxvalue = {maxValue} />))}

        </div>
    )
};

export default Chart; 