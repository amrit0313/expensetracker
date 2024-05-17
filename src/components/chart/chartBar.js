import React from "react";

import './chartBar.css';

const ChartBar = props => {
      
    let barFillHeight = '0%';
    if (props.Maxvalue > 0){
        barFillHeight = Math.round((props.value)/(props.Maxvalue) *100) +"%";
        console.log(barFillHeight)
     }

    return (
    <div className="chart-bar">
        <div className="chart-bar_inner">
            <div className="chart-bar_fill"
             style={{height: barFillHeight}}></div>

        </div>
        <div className="chart-bar_label">{props.label}</div>
    </div>
)};

   export default ChartBar;